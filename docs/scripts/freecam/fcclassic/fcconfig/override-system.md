---
title: Override System
sidebar_position: 5
---

# Override System

Freecam Classic includes a validation layer that runs before enabling the camera.

The activation flow checks:

1. Dead state (optional)
2. Vehicle state (optional)
3. Custom validation (always runs)

---

## Enabling/Disabling Checks

Checks are enabled via config:

```lua
Config.System.checks.dead    = true/false
Config.System.checks.vehicle = true/false
````

---

## Validation Flow

When enabling Freecam, the script does:

* If dead check is enabled and DeadCheck fails → returns `system.dead_check`
* If vehicle check is enabled and VehicleCheck blocks → returns `system.vehicle_check`
* If custom Check fails → returns `system.check`

If Freecam is already active and you try to enable again → returns `system.freecam_active`

---

## Override Hooks

The following hooks are called via `checkOverride(...)`:

* `Override.DeadCheck(ped)`
* `Override.VehicleCheck(ped)`
* `Override.Check(ped)`
* `Override.SendNotify(message)` (used when debug is enabled and an error message exists)

You can implement your own logic inside the override file.