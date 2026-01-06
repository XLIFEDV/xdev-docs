---
title: Credit Card UI System
sidebar_position: 4
description: Controls which credit card design is shown on the customer screen.
---

The Credit Card UI System controls which credit card design is displayed on the customer screen.

## Configuration

### Multiple card designs (random selection)

If you provide multiple values in a table, the system will choose one **randomly** each time the POS device opens.

```lua
Config.UI.CreditCards = {
  "blue",
  "purple",
  "dark"
}
````

**Behavior**

* Every open → one design is picked randomly
* Adds variety and a more immersive UI

## Disable random selection

If you want a consistent card design, you have two options:

### Option A — Keep a single value in a table

```lua
Config.UI.CreditCards = { "blue" }
```

### Option B — Assign a single value directly

```lua
Config.UI.CreditCards = "blue"
```

**Notes**

* In both cases, the same card design will always be displayed.
* The system detects whether the value is a table or a single entry automatically.