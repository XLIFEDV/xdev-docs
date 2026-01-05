---
title: History System
sidebar_position: 4
description: How transaction history is recorded, accessed and displayed.
---

The History System defines how transaction history is handled and accessed.

## Typical concerns in a history system

When you expand this documentation, cover:

- **What is stored** (amount, citizenid/customer id, date, status, etc.)
- **Where it’s stored** (server memory / database / external integration)
- **Who can access it** (operator only? staff? customer?)
- **What the UI expects** (data shape + required fields)

## Suggested “history data” shape (example)

Document the exact data structure your UI expects. Example format:

```lua
local historyItem = {
  payment_amount = 100,
  citizenid = "ABC123",
  date = "2026-01-05 12:30:00",
  status = "approved" -- optional
}
````