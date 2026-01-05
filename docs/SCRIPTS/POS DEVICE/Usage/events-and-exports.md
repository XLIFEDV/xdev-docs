---
title: Events & Exports
description: POSDEVICE event and export reference
sidebar_position: 2
---

# Events & Exports

This document describes all available **events and exports** provided by the POSDEVICE system.

---

## Opening the POS Device

### Payment Mode

Used when requesting a payment from another player.

```lua
TriggerEvent('xdev_posdevice:open_device', 'payment', TARGET_ID)
````

Export usage:

```lua
exports.xdev_posdevice:openDevice('payment', TARGET_ID)
```

Behavior:

* Opens the POS UI for the operator
* Sends a payment request to the target player
* Locks both players into a synchronized session

---

### History Mode

Used to open the transaction history UI.

```lua
TriggerEvent('xdev_posdevice:open_device', 'menu', HISTORY_DATA)
```

Export usage:

```lua
exports.xdev_posdevice:openDevice('menu', HISTORY_DATA)
```

Behavior:

* Opens the history menu
* Does not involve another player
* Does not create a shared session

---

## Closing the POS Device

```lua
TriggerEvent('xdev_posdevice:close_device')
```

Export usage:

```lua
exports.xdev_posdevice:closeDevice()
```

Behavior:

* Closes the device if active
* Safely clears session data

---

## Client-side Device State

Read the current POS Device state locally.

```lua
local info = exports.xdev_posdevice:getInfoDevice()
```

Example response:

```lua
{
  device = "payment_menu",
  operator = true,
  customer = false,
  target = 12,
  payment_amount = 100
}
```

### Notes

* Client-side only
* Must not be used for security decisions
* Server-side validation is authoritative

````

---

## 📄 3️⃣ `usage.md` (veya `usage/overview.md`)

```md
---
title: Usage Overview
description: How POSDEVICE is used in practice
sidebar_position: 1
---

# POSDEVICE Usage

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
````
