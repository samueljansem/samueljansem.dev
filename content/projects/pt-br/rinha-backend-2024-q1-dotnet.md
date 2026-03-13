---
lang: "pt-br"
title: rinha-backend-2024-q1-dotnet
slug: rinha-backend-2024-q1-dotnet
description: Minha submissão em .NET para a Rinha de Backend 2024 Q1, uma competição brasileira de backend onde os participantes constroem uma API de transações financeiras sob restrições rigorosas de CPU e memória.
longDescription: Uma API HTTP de alta performance construída com C#/.NET e PostgreSQL para a competição Rinha de Backend 2024 Q1 — um desafio brasileiro de backend focado em controle de concorrência, performance com recursos limitados e design de API.
cardImage: "https://github.com/samueljansem.png"
tags: ["dotnet", "csharp", "postgresql", "docker", "competição"]
githubUrl: https://github.com/samueljansem/rinha-backend-2024-q1-dotnet
timestamp: 2024-02-01T00:00:00+00:00
featured: false
---

## Sobre

[Rinha de Backend](https://github.com/zanfranceschi/rinha-de-backend-2024-q1) é uma competição brasileira de backend onde os participantes constroem APIs de alta performance sob restrições rigorosas de recursos. A edição 2024 Q1 desafiou os desenvolvedores a implementar uma API de transações financeiras gerenciando créditos e débitos de clientes com aplicação de limites de saldo.

## O Desafio

- Construir uma API que lida com transações de clientes (créditos e débitos) com segurança de concorrência
- A arquitetura deve incluir um load balancer, 2 instâncias de API e um banco de dados
- Todos os serviços combinados limitados a **1,5 unidades de CPU** e **550MB de RAM**
- Débitos não podem reduzir o saldo abaixo do limite de crédito do cliente

## Stack Tecnológica

- **C# / .NET** para a API
- **PostgreSQL** para persistência de dados
- **Docker Compose** para orquestração de containers
