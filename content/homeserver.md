---
title: "I Spent a Week Setting Up a Homeserver and Learned More Than I Expected"
date: "2026-05-22"
description: "From zero to a fully self-hosted media server, document manager, home automation hub, and reverse proxy — on a Mac Mini in an apartment with no router access."
category: "build"
tags: ["homeserver", "docker", "tailscale", "caddy", "jellyfin", "self-hosting", "devops"]
---

# I Spent a Week Setting Up a Homeserver and Learned More Than I Expected

I have a Mac Mini that lives in our apartment and is always plugged in. It's fast, it's quiet, and for a while it was mostly being used as a shared desktop. I kept seeing people run full homeserver stacks and figured I had no reason not to try.

The setup took about a week of evenings. Most things worked without much trouble. A few things didn't, and those are mostly what I want to write about.

## The Apartment Problem

The usual obstacle for apartment homeservers is network access. Without controlling your own router, you can't do port forwarding, which is the traditional way to expose services externally.

Tailscale solves this with NAT traversal — it creates an encrypted private network across all your devices without touching the router or ISP. Once I understood that, I had no real reason not to start.

The Mac is also shared with my wife, so I wanted everything running at the system level rather than tied to a specific user session. Tailscale via Homebrew as a system daemon handles that correctly: it stays connected at boot regardless of who's logged in.

## What I Set Up

- **Jellyfin** — open source media server for movies, TV, and music
- **AdGuard Home** — network-wide DNS ad blocking, pushed to all devices via Tailscale
- **Paperless-ngx** — document management with OCR
- **Home Assistant** — home automation alongside existing Alexa devices
- **Radarr, Sonarr, Prowlarr, qBittorrent** — media automation stack
- **Immich** — self-hosted photo backup
- **Kavita, Audiobookshelf** — ebook and audiobook servers
- **Uptime Kuma, Netdata** — monitoring
- **Caddy** — reverse proxy for clean `.home` domain access over HTTPS

## SSH and the Username Thing

SSH was straightforward: flip on Remote Login in System Settings, connect with `ssh username@tailscale-ip`. I did spend a few minutes confused about why my password wasn't working before I realized I was using my display name instead of my Unix account name (not my brightest moment as a software developer). `whoami` on the server cleared that up immediately.

## Jellyfin

`brew install jellyfin` installs the GUI app bundle, not the headless server. There's no Homebrew formula for the server itself, just a cask for the app.

The workaround was creating a launchd launch agent that runs the backend server binary directly (without the frontend) so it starts at login as a background process. Then I launched the full app once to go through the setup wizard, which handles the initial configuration. After that the app isn't needed day-to-day; the binary handles everything and the web UI is accessible at port 8096.

## Docker: OrbStack over Docker Desktop

For everything container-based I used OrbStack instead of Docker Desktop. It's lighter, runs as a menu bar process, handles Docker Compose the same way, and starts automatically at login. All the same commands work. I haven't had a reason to look back.

## AdGuard Home and DNS

AdGuard Home installs via their own script rather than Homebrew (Homebrew only has the GUI desktop app). The Tailscale admin panel has a setting to push a custom DNS server to all devices on your network. Enabling that with the Mac's Tailscale IP pointing at AdGuard Home means every device on the Tailnet gets ad blocking everywhere, including on mobile data.

I'm not particularly privacy-obsessed, but there's something genuinely satisfying about opening the AdGuard dashboard and seeing the volume of requests getting blocked: trackers, ads, telemetry calls I never would have known were there. It's the kind of thing I'd always wanted to do but assumed was more effort than it was. The actual setup was maybe twenty minutes and it covers every device I own. Completely worth it.

## The Media Stack and the VPN Setup

Tailscale is not a privacy VPN. It encrypts traffic between your own devices, but traffic still exits to the internet through your ISP's IP. For a torrent client in a peer swarm, that means your home address is visible.

The solution for this is Gluetun: a Docker container that manages a WireGuard VPN connection, where other containers route through it via `network_mode: service:gluetun`. I set it up with Mullvad using a WireGuard key generated on their site. qBittorrent runs inside Gluetun's network, so if the VPN connection drops, qBittorrent loses internet entirely rather than falling back to the unencrypted connection. The kill switch behavior is built into the container network isolation rather than any OS-level setting for me to worry about.

I also ran into file duplication with the media stack, which in my situation was a real problem. The Mac Mini is already around 90% full (I only have about 30-50 GB of wiggle room) so having every downloaded file exist twice ate through that fast. A DAS enclosure and some SSDs are on my shopping list, but that's a "when it makes financial sense" purchase, not an impulse buy.

The root cause of the duplication was that each container had separate bind mounts. qBittorrent had `/downloads`, Sonarr had `/tv` and `/downloads` as separate mounts, same for Radarr. Because they were different mount points, they appeared as different filesystems inside the containers, so hardlinking between them failed and Radarr and Sonarr fell back to copying files instead.

The fix was giving all three containers a single unified mount: `./:/data`. With everything under one filesystem namespace, hardlinking works and files aren't duplicated.

## HTTPS and the Port 443 Conflict

This was the most involved part of the setup, and it came down to an interaction I didn't anticipate between Tailscale Funnel and OrbStack's networking.

Tailscale Funnel (which exposes Home Assistant publicly for the Alexa integration) claims port 443 on the Tailscale IP address. Caddy was running in Docker via OrbStack. OrbStack doesn't support binding container ports to a specific host IP, it only binds to `0.0.0.0`. So Caddy and Tailscale were both trying to own port 443 and conflicting.

I tried a few approaches:
- Binding Docker ports to the LAN IP explicitly: OrbStack silently doesn't honor this
- Changing AdGuard DNS rewrites to point at the LAN IP instead of the Tailscale IP: Caddy was still unreachable, services went down
- Reverting everything and going back to HTTP

The fix was running Caddy natively via Homebrew instead of in Docker. A native process can bind to a specific IP (in this case the LAN IP `192.168.1.64`) and Tailscale holds port 443 on a different IP entirely. They coexist without conflict.

The other piece I didn't know going in: trusting a custom root CA certificate on macOS requires a GUI session. You can't do it over SSH. I was doing a lot of this remotely, a few times from my phone using an SSH app called Moshi, which is genuinely great for mobile terminal work. Being able to SSH into my Mac from the sales floor at work and run Claude Code remotely is one of those things that felt kind of absurd in the best way. But for the cert trust step, none of that mattered. I ended up reverting back to my old HTTP addresses in Caddy and finishing it when I was physically at the Mac. That part took about five minutes once I had GUI access: double-click the cert, set it to Always Trust in Keychain Access, update the Caddy addresses and then the AdGuard DNS rewrites to point at the LAN IP. Done.

After that, Jellyfin required one more config change. It didn't trust Caddy as a reverse proxy by default, which caused login failures over HTTPS. Adding `127.0.0.1` to `KnownProxies` in Jellyfin's `network.xml` fixed it.

## Home Assistant and Alexa

I wanted Alexa to control Home Assistant devices, and I decided to do the free DIY path instead of something like Nabu Casa.

The setup involves:
1. Exposing Home Assistant publicly via Tailscale Funnel
2. Creating a custom Alexa Smart Home skill in the Amazon Developer Console
3. Writing an AWS Lambda function that proxies requests from Alexa to the HA API using a long-lived access token
4. Configuring account linking in the skill so Alexa can authenticate with HA via OAuth

It works. The Lambda code is simple: it receives the Alexa event, forwards it to `https://your-ha-url/api/alexa/smart_home` with a Bearer token, and returns the response. The trickier parts were the OAuth redirect URI configuration and making sure HA trusted the Tailscale Funnel as a reverse proxy. The HA logs were helpful for debugging both.

I haven't done much with the integration yet beyond confirming it works. I have a few automation ideas I'm still thinking through.

## Was Any of This Practical?

Honestly, some of you might look at a homeserver setup like this and think: 30–50 GB of free space for all that? That's basically useless. And you'd be right, at least for the media side of things.

I jumped the gun. I wanted to do this for a long time and I went ahead and did it before having the storage to really support it. But did I have fun? Yes. Did I learn a lot? Absolutely. And are there things I actually use day-to-day from this setup: Paperless organizing documents, AdGuard blocking trackers across every device, SSH and Claude Code from my phone when I'm not at my desk? Yeah, genuinely.

The storage situation will get sorted eventually. In the meantime, the infrastructure is there, it works, and I know exactly how all of it fits together. That part feels good.
