---
lang: "pt-br"
title: kotlin-ticketing-ledger
slug: kotlin-ticketing-ledger
description: Sistema de escrituração por partidas dobradas para liquidação de vendas de ingressos, construído com coroutines Kotlin. Registra compras, reembolsos, repasses e taxas como lançamentos imutáveis e balanceados.
tags: ['kotlin', 'coroutines', 'double-entry-ledger', 'concurrency']
githubUrl: https://github.com/samueljansem/kotlin-ticketing-ledger
timestamp: 2026-03-07T17:00:00+00:00
featured: false
---

## Sobre

Um projeto de estudo implementando um sistema de escrituração por partidas dobradas para uma plataforma de liquidação de vendas de ingressos. O sistema processa vendas de ingressos em nome de produtores de eventos, registrando todos os movimentos financeiros (compras, reembolsos, repasses, taxas) como lançamentos imutáveis e balanceados, mantendo precisão em operações concorrentes.

## Transações Principais

- **Compra de Ingresso** - Divide o pagamento em custódia, recebível do produtor e taxas da plataforma (lançamento composto de 3 pernas)
- **Reembolso** - Reversão exata da compra original
- **Liquidação** - Transferências em lote do recebível do produtor para o banco
- **Retirada de Taxas** - Plataforma coleta taxas acumuladas

## Stack Tecnológica

- **Kotlin** com **Coroutines** para concorrência assíncrona
- Armazenamento em memória com persistência opcional em **SQLite/PostgreSQL**
- Testes unitários, testes de concorrência e harness de benchmarking

## Concorrência & Benchmarking

Explora múltiplas estratégias de concorrência (mutex por conta, padrão actor, HashMap concorrente, locking otimista) e faz benchmark em 6 níveis de concorrência com 10.000 operações por execução.
