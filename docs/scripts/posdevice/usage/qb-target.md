---
title: qb-target Integration
description: Integrating POSDEVICE with qb-target
sidebar_position: 1
---

This document explains how to integrate **POSDEVICE** with `qb-target` so players can interact with each other using the POS Device.

---

## Method A — Static Configuration

Register the POS Device interaction directly in your `qb-target` configuration.

```lua
Config.GlobalPlayerOptions = {
  options = {
    {
      label = "Use POS Device",
      type = "client",
      action = function(entity)
        TriggerEvent(
          'xdev_posdevice:open_device',
          'payment',
          GetPlayerServerId(NetworkGetPlayerIndexFromPed(entity))
        )
      end
    }
  },
  distance = 3.0
}
````

---

## Method B — Runtime Registration

Register the interaction dynamically during runtime.

```lua
exports['qb-target']:AddGlobalPlayer({
  options = {
    {
      label = "Use POS Device",
      type = "client",
      action = function(entity)
        TriggerEvent(
          'xdev_posdevice:open_device',
          'payment',
          GetPlayerServerId(NetworkGetPlayerIndexFromPed(entity))
        )
      end
    }
  },
  distance = 3.0
})
```

---

## Notes

* Both methods behave identically
* Distance should be kept low to avoid accidental triggers
* Validation is handled internally by POSDEVICE
