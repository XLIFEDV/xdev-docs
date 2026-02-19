---
title: FAQ
sidebar_position: 4
---

# FAQ

## Freecam does not open

Check these:

1. `Config.System.action` is set correctly (command/key/hold).
2. Freecam is not already active (`system.freecam_active`).
3. Checks are not blocking activation:
   - `Config.System.checks.dead`
   - `Config.System.checks.vehicle`
4. Your override logic is not returning a blocking value.

---

## I get `system.dead_check`

DeadCheck failed while `Config.System.checks.dead = true`.

Disable the check or implement your own DeadCheck logic.

---

## I get `system.vehicle_check`

VehicleCheck blocked activation while `Config.System.checks.vehicle = true`.

Disable the check or adjust VehicleCheck override behavior.

---

## Camera does not move

The script updates camera movement based on input state stored in `buttonData`.

If your NUI input layer is not sending `button:pressed` / `button:released` events, movement will not apply.

---

## Zoom does not change

Zoom is controlled by FOV. Verify:

- `Config.System.values.zoom.min`
- `Config.System.values.zoom.max`
- input events for zoom are being sent

---

## Why is there no UI?

Classic edition is designed to be minimal and configuration-driven.

For UI and cinematic tools, use Deluxe edition (coming soon).