---
title: Usage Overview
description: How POSDEVICE is used in practice
sidebar_position: 1
---

This document explains how the POS Device system behaves during real usage scenarios.

---

## Roles

### Operator

The operator is the player who initiates the payment.

Responsibilities:

- Opens the POS Device
- Enters payment amount
- Confirms or cancels the transaction

Restrictions:

- Cannot open multiple sessions
- Cannot target players already in a session

---

### Customer

The customer is the player receiving the payment request.

Responsibilities:

- Reviews the payment
- Accepts or rejects the request

Restrictions:

- Cannot be targeted by multiple operators
- Cannot initiate another POS session simultaneously

---

## Typical Payment Flow

1. Operator opens the POS Device
2. Operator targets a nearby player
3. System validates availability
4. Customer receives payment request
5. Customer accepts or declines
6. Transaction result is returned
7. Session is closed

If validation fails, the process is aborted silently.

---

## Session Safety Rules

The system enforces strict rules:

- A player cannot be operator and customer at the same time
- Duplicate sessions are blocked
- Sessions close automatically on disconnect
- Invalid UI states are prevented server-side