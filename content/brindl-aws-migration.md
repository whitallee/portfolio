---
title: "Brindl Backend: From Railway to Production-Grade AWS"
date: "2026-05-15"
description: "Why I migrated my Go API off Railway and how I built a proper AWS stack with ECS Fargate, RDS, ALB, and GitHub Actions CI/CD."
category: "build"
tags: ["aws", "go", "docker", "devops", "ecs", "github-actions"]
---

## The Starting Point

Brindl started as a personal project — a PWA to help reptile and exotic animal owners manage feeding schedules, enclosure conditions, and care routines. The backend is a Go REST API, and when I first shipped it, I threw it on Railway. Railway is great for getting something live fast, and it did exactly that. But as I thought more seriously about Brindl as a real product, Railway started to feel like a ceiling.

The concerns were practical: limited control over networking, no real database isolation, no path to production-grade security practices. I wanted to build something I could actually stand behind architecturally, not just something that was running.

## Containerizing the API

The first step was making the app portable. I wrote a multi-stage Dockerfile for the Go API — a build stage that compiles the binary and a lean runtime stage that only ships the binary itself. Multi-stage builds matter here because Go compiles to a single static binary, so the final image doesn't need the compiler, the source, or any build tooling. The result is a small, clean image with a minimal attack surface.

## The AWS Stack

Once I had a container, I needed somewhere to run it that gave me real infrastructure control. Here's what I landed on:

**ECS Fargate** handles the container runtime. Fargate is serverless compute for containers — I define the task (CPU, memory, image, env vars) and AWS runs it without me managing EC2 instances. For a backend at this scale, it's the right tradeoff: operational simplicity without giving up the control that comes with containerization.

**RDS (MySQL)** lives in the same VPC as the Fargate task, but in a private subnet. Security groups are configured so the database only accepts connections from the ECS service — nothing else can reach it, not even from within the VPC. This is the kind of isolation that Railway simply can't give you.

**ALB + ACM** sits in front of everything. The Application Load Balancer handles HTTPS termination using a certificate provisioned through AWS Certificate Manager, pointed at a custom subdomain. Traffic comes in on 443, the cert is validated, and the ALB forwards to the Fargate tasks on the internal port. The API itself never has to deal with TLS.

**S3** handles public asset storage — static files that the API serves references to rather than serving directly.

## CI/CD Without Long-Lived Secrets

This was the part I cared most about getting right. The GitHub Actions pipeline builds and pushes the Docker image to ECR and deploys the new task definition to ECS on every push to main. But instead of storing an AWS access key as a GitHub secret (a common and risky pattern), the pipeline authenticates using OIDC.

OIDC lets GitHub Actions assume an IAM role directly, with a trust policy that scopes it to a specific repo and branch. There are no long-lived credentials anywhere — not in GitHub, not in the workflow file, not rotated manually on a schedule. The credentials are short-lived tokens that GitHub and AWS negotiate at runtime. It's the approach AWS recommends, and it's the one I should have been using from day one on other projects.

## What Changed

The migration wasn't just about the infrastructure — it changed how I think about the project. When everything lived on Railway, the backend felt like a prototype. Now there's a real network boundary around the database, a real deployment pipeline with no secrets to manage, and a real HTTPS endpoint on a domain I control.

Brindl is still in active development, but the infrastructure it runs on is no longer something I'd need to apologize for.
