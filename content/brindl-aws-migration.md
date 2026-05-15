---
title: "Brindl Backend: From a Monolithic Next.js App to AWS Infrastructure"
date: "2026-05-15"
description: "How rebuilding Brindl in Go led me into Docker, AWS infrastructure, CI/CD, and modern cloud architecture."
category: "build"
tags: ["aws", "go", "docker", "devops", "ecs", "postgresql", "github-actions"]
---

# Brindl Backend: From a Monolithic Next.js App to AWS Infrastructure

Brindl started as a very simple necessity project.

At the time, I was working at a pet store, and my wife and I had accumulated a growing collection of reptiles and exotic animals at home. Between feeding schedules, enclosure maintenance, supplements, baths for the furry ones, and recurring care routines, it became difficult to keep everything organized consistently. I wanted something tailored specifically to the way we cared for our animals, so I decided to build it myself.

The first version of Brindl was called Animal Family and was a monolithic Next.js application written entirely in TypeScript. Frontend and backend lived together in the same project, and visually it was very much function over form. I was still early in my programming journey, writing almost everything by hand without AI assistance, and moving relatively slowly while learning concepts as I went. But despite the rough edges, it became one of the most important projects in my growth as a developer because it forced me to learn how to build and maintain a real CRUD application from scratch.

At that stage, Brindl wasn't even a PWA yet. It was simply a proof of concept that solved a real problem for me.

## Why I Rebuilt the Backend in Go

As the project grew, I started becoming interested in Go.

I had been reading *Learning Go* by Jon Bodner and kept hearing developers talk about the language's simplicity, strong standard library, and performance characteristics. Since Brindl was already becoming my long-term passion project, it felt like the perfect opportunity to explore a different backend architecture and push myself into unfamiliar territory.

So instead of continuing to expand the original Next.js backend, I split the project apart and rebuilt the API separately in Go.

This wasn't driven by frustration with Next.js or TypeScript — both were great learning tools for me — but more by curiosity and a desire to understand backend systems at a deeper level. Rebuilding the backend gave me hands-on experience with REST APIs, database design, authentication flows, containerization, and infrastructure decisions that I hadn't fully encountered in smaller projects before.

## Railway Wasn't the Problem

One thing I wanted to make sure was not implied when writing about this migration was the idea that Railway had become limiting or problematic.

Honestly, Railway was excellent.

It was simple, fast, and developer-friendly, and it remains one of my favorite ways to deploy personal projects quickly. I still think it's an incredible platform, especially for small teams or solo developers trying to move fast.

The real reason I moved Brindl to AWS wasn't because Railway failed me — it was because I wanted the experience of building production-style infrastructure myself.

I had taken cloud infrastructure and networking courses where we used AWS in controlled classroom environments, but I had never implemented those concepts deeply in one of my own projects outside of small experiments. Brindl felt like the perfect opportunity because I genuinely care about the project long-term and wanted to understand what exists underneath the abstraction layers that platforms like Railway simplify away.

Once I started the migration, I realized how much modern hosting platforms handle for developers behind the scenes.

Networking, security groups, container orchestration, load balancing, IAM permissions, TLS certificates, deployment pipelines, private networking — there are an enormous number of moving pieces involved in even a relatively small cloud architecture. Building this stack forced me to think much more from a DevOps and infrastructure perspective instead of only from an application-development perspective.

## Containerizing the API

The first step was making the backend portable.

I wrote a multi-stage Dockerfile for the Go API with a dedicated build stage and a minimal runtime image. One of the things I quickly appreciated about Go is how naturally it fits containerized environments. Since Go compiles into a single static binary, the final runtime container can stay extremely lean without needing the compiler or source code included.

The end result was a smaller image, cleaner deployments, and a much better understanding of how containerized applications actually move through deployment pipelines.

## The AWS Stack

After containerizing the API, I started building the AWS infrastructure around it.

### ECS Fargate

The Go API runs on AWS Fargate through ECS.

Fargate handles the container runtime without requiring me to manage EC2 instances directly. I can define CPU and memory requirements, provide the container image, configure environment variables, and let AWS handle the orchestration layer underneath.

For Brindl's current scale, it felt like a good balance between operational simplicity and infrastructure control.

### RDS PostgreSQL

The database layer runs on PostgreSQL through Amazon RDS.

The RDS instance sits inside a private subnet within the VPC, and security groups restrict access so only the ECS service can communicate with it directly. Setting this up manually helped me better understand network isolation, internal traffic flow, and how cloud services securely communicate with one another.

### ALB + ACM

An Application Load Balancer sits in front of the ECS service and handles HTTPS termination using certificates provisioned through AWS Certificate Manager.

This means the API itself doesn't need to manage TLS directly. Traffic enters through HTTPS on the load balancer, certificates are validated there, and requests are forwarded internally to the running containers.

### S3

S3 handles public asset storage and gives me a clean separation between uploaded/static assets and the API itself.

## CI/CD and OIDC Authentication

One of the biggest goals of this migration was practicing modern deployment standards.

The GitHub Actions pipeline builds the Docker image, pushes it to Amazon ECR, and deploys updated task definitions to ECS automatically whenever changes are pushed to the main branch.

Instead of storing long-lived AWS access keys in GitHub secrets, the workflow authenticates using OIDC federation between GitHub Actions and AWS IAM.

At first, I mostly implemented this because it was considered the modern industry-standard approach, but setting it up taught me a lot about trust relationships, temporary credentials, IAM policies, and how CI/CD systems securely authenticate in production environments.

Much of this migration was ultimately about learning the "real" versions of concepts that simpler platforms abstract away.

## What Changed

The biggest thing that changed wasn't just the infrastructure — it was my perspective.

Before this project, I mostly thought about software in terms of application code and features. Building Brindl's AWS stack forced me to think much more holistically about deployment architecture, networking, security, automation, and long-term scalability.

It also made me realize how much work platforms like Railway save developers from needing to think about in the early stages of a project.

Brindl is still actively evolving, and right now I'm effectively the only real user. But because this is a project I genuinely hope to continue growing publicly over time, I wanted infrastructure that gives me flexibility and control as the application scales in the future instead of needing to completely rethink deployment later.

More than anything, this migration became an educational deep dive into how modern cloud infrastructure actually works underneath the abstractions.