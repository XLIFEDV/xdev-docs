---
title: FAQ
sidebar_position: 4
---

# Frequently Asked Questions

This section covers common issues and operational questions related to Freecam Classic.

---

## Freecam does not activate

Check the following:

1. Is the activation method configured correctly?
   - `Config.System.action.command`
   - `Config.System.action.key`
   - `Config.System.action.hold`

2. Is Freecam already active?
   - Attempting to activate while active will be blocked.

3. Are system checks enabled?
   - `Config.System.checks.dead`
   - `Config.System.checks.vehicle`

4. Is your custom override logic blocking activation?

---

## I receive a dead check error

If `Config.System.checks.dead = true`, the player must pass the life-state validation.

Solutions:

- Disable the dead check.
- Adjust your DeadCheck override logic.

---

## I receive a vehicle restriction error

If `Config.System.checks.vehicle = true`, the system will validate vehicle state before activation.

Solutions:

- Disable the vehicle check.
- Modify your VehicleCheck override logic.

---

## Freecam activates but camera does not move

Possible reasons:

- Movement multipliers are set too low.
- Distance limit is restricting movement.
- Control mapping is not correctly configured.
- Input system is blocked by another resource.

Verify:

- `Config.System.values.distance`
- `Config.System.multipliers.move`

---

## Zoom is not working properly

Check:

- `Config.System.values.zoom.min`
- `Config.System.values.zoom.max`
- `Config.System.multipliers.zoom`

If minimum and maximum values are too close, zoom range will feel restricted.

---

## Camera resets every time

Check:

```lua
Config.System.reset = true
````

If enabled, camera settings reset on every activation.

Set to `false` to preserve previous session data.

---

## Exports are not working

Ensure:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
```

Exports must be explicitly enabled.

---

## Events are not triggering

Verify:

```lua
Config.Events.ClientSide.system = {
    onStart = true,
    onClose = true
}
```

If values are `false`, no events will be triggered.

---

## Why does Classic not include a UI?

Freecam Classic is intentionally lightweight.

It is designed for:

* Stability
* Administrative usage
* Minimal overhead

For UI-driven control and cinematic features, refer to the Advanced edition.