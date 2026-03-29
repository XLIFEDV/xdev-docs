---
title: Credit Card UI System
sidebar_position: 4
---

The Credit Card UI System controls which credit card design is displayed on the customer screen.

## Configuration

### Multiple card designs (random selection)

If you provide multiple values in a table, the system will choose one **randomly** each time the POS device opens.

```lua
Config.UI.CreditCards = {
  "credit_card",
  "credit_card2",
  "credit_card3",
  "credit_card4"
}
````

**Behavior**

* Every open → one design is picked randomly
* Adds variety and a more immersive UI

## Disable random selection

If you want a consistent card design, you have two options:

### Option A — Keep a single value in a table

```lua
Config.UI.CreditCards = { "credit_card" }
```

### Option B — Assign a single value directly

```lua
Config.UI.CreditCards = "credit_card"
```

**Notes**

* In both cases, the same card design will always be displayed.
* The system detects whether the value is a table or a single entry automatically.