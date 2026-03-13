---
lang: "en"
title: kotlin-ticketing-ledger
slug: kotlin-ticketing-ledger
description: A double-entry bookkeeping system for event ticket sales settlement, built with Kotlin coroutines. Records purchases, refunds, payouts, and fees as immutable, balanced journal entries.
tags: ['kotlin', 'coroutines', 'double-entry-ledger', 'concurrency']
githubUrl: https://github.com/samueljansem/kotlin-ticketing-ledger
timestamp: 2026-03-07T17:00:00+00:00
featured: false
---

## About

A study project implementing a double-entry bookkeeping system for an event ticket sales settlement platform. The system processes ticket sales on behalf of event producers, recording all financial movements (purchases, refunds, payouts, fees) as immutable, balanced journal entries while maintaining accuracy through concurrent operations.

## Core Transactions

- **Ticket Purchase** - Splits payment into escrow, producer receivable, and platform fees (compound 3-leg entry)
- **Refund** - Exact reversal of original purchase
- **Settlement** - Batch transfers from producer receivable to bank
- **Fee Withdrawal** - Platform collects accumulated fees

## Tech Stack

- **Kotlin** with **Coroutines** for async concurrency
- In-memory storage with optional **SQLite/PostgreSQL** persistence
- Unit tests, concurrency tests, and a benchmarking harness

## Concurrency & Benchmarking

Explores multiple concurrency strategies (mutex per account, actor pattern, concurrent HashMap, optimistic locking) and benchmarks them across 6 concurrency levels with 10,000 operations per run.
