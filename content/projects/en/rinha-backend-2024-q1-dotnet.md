---
lang: "en"
title: rinha-backend-2024-q1-dotnet
slug: rinha-backend-2024-q1-dotnet
description: My .NET submission for Rinha de Backend 2024 Q1, a Brazilian backend competition where participants build a financial transaction API under strict CPU and memory constraints.
longDescription: A high-performance HTTP API built with C#/.NET and PostgreSQL for the Rinha de Backend 2024 Q1 competition — a Brazilian backend challenge focused on concurrency control, resource-constrained performance, and API design.
cardImage: "https://github.com/samueljansem.png"
tags: ["dotnet", "csharp", "postgresql", "docker", "competition"]
githubUrl: https://github.com/samueljansem/rinha-backend-2024-q1-dotnet
timestamp: 2024-02-01T00:00:00+00:00
featured: false
---

## About

[Rinha de Backend](https://github.com/zanfranceschi/rinha-de-backend-2024-q1) is a Brazilian backend competition where participants build high-performance APIs under strict resource constraints. The 2024 Q1 edition challenged developers to implement a financial transaction API managing customer credits and debits while enforcing balance limits.

## The Challenge

- Build an API handling customer transactions (credits and debits) with concurrency safety
- Architecture must include a load balancer, 2 API instances, and a database
- All services combined limited to **1.5 CPU units** and **550MB RAM**
- Debits cannot reduce a balance below the customer's credit limit

## Tech Stack

- **C# / .NET** for the API
- **PostgreSQL** for data persistence
- **Docker Compose** for container orchestration
