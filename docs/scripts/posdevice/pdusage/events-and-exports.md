---
title: Events & Exports
sidebar_position: 2
---

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
