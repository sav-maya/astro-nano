---
title: "pg-prechecks"
description: "A shell script that summarizes a PostgreSQL instance to help prepare for migration to Neon."
date: "2024-06-01"
repoURL: "https://github.com/neondatabase-labs/pg-prechecks"
---

A heavily modified fork of Percona's pt-pg-summary. Connects to a live Postgres instance and generates a structured report covering version, database sizes, table and index sizes, extensions, replication status, long-running queries, and more — making it easy to assess readiness before migrating to Neon.
