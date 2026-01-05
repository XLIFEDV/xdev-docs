---
title: Override Settings
sidebar_position: 5
description: Advanced overrides for client-side and server-side checks.
---

Override Settings are **advanced switches** that bypass or adjust normal validation rules.

## Why overrides exist

Overrides are useful when:

- A server has custom framework behavior (unique checks)
- You need to bypass a strict rule for a specific environment
- You are integrating with external scripts that require special conditions

## Best practices

- Keep overrides **off by default**
- Document security implications clearly
- Prefer targeted overrides instead of global bypasses

:::danger
Overrides can reduce security if used incorrectly.
Always document what checks are being bypassed and why.
:::