---
title: Override System
sidebar_position: 6
---

# Override System

Freecam Classic includes a modular validation layer called the Override System.

This system allows server owners and developers to replace or extend specific internal checks without modifying the core script.

---

## Purpose

The Override System exists to provide:

- Framework compatibility
- Custom validation logic
- Controlled activation rules
- Custom notification handling

Instead of editing internal files, you can define your own logic inside the override configuration.

---

## Available Override Hooks

Freecam Classic supports the following client-side overrides:

### DeadCheck
Determines whether the player is allowed to activate Freecam based on life state.

### VehicleCheck
Determines whether the player can activate Freecam while inside a vehicle.

### Check
A fully custom validation hook for advanced conditions.

### SendNotify
Allows custom notification handling when activation is blocked.

---

## Enabling Overrides

Overrides are controlled inside `config.lua`:

```lua
Config.Override.ClientSide.DeadCheck    = false
Config.Override.ClientSide.VehicleCheck = false
Config.Override.ClientSide.Check        = false
Config.Override.ClientSide.SendNotify   = false
````

Set a value to `true` to use your custom implementation.

When disabled (`false`), the script uses its internal validation logic.

---

## Validation Flow

When Freecam activation is requested:

1. DeadCheck runs (if enabled in system checks)
2. VehicleCheck runs (if enabled in system checks)
3. Check always runs
4. If any validation blocks activation, a localized system message is returned

If Freecam is already active, activation will be prevented.

---

## Best Practice

To maintain update safety:

* Do not edit internal script logic
* Implement custom behavior through overrides
* Keep validation lightweight and predictable

This ensures future compatibility and stable operation.