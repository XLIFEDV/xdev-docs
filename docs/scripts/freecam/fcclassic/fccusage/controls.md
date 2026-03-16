---
title: Controls
sidebar_position: 2
---

# Controls

Freecam Classic operates without a graphical user interface.

There are no on-screen panels or visual guides.  
Users are expected to understand the configured control scheme.

---

## Activation

Freecam can be activated depending on your server configuration:

- Chat command
- Key binding
- Hold-to-activate logic

The exact behavior is defined inside:

```lua
Config.System.action
````

---

## Camera Movement

While Freecam is active:

* Standard gameplay input is blocked.
* Movement input is redirected to camera control.
* The camera can move within configured limits.

Movement speed depends on:

* Slow movement multiplier
* Fast movement multiplier (typically used with a modifier key)

Server owners control these values inside the configuration file.

---

## Camera Rotation

Camera rotation is controlled through mouse input.

Rotation speed is determined by:

* Slow rotation multiplier
* Fast rotation multiplier

These values are configurable.

---

## Zoom Control

Zoom is handled by adjusting the camera field of view (FOV).

Zoom behavior respects:

* Minimum zoom limit
* Maximum zoom limit
* Configured zoom speed multipliers

---

## Deactivation

Freecam can be disabled using the configured exit controls.

When disabled:

* The camera returns control to normal gameplay.
* All input restrictions are lifted.

---

## Important Notes

* Freecam Classic does not provide visual feedback.
* Control awareness is the responsibility of the user.
* Server administrators may provide control documentation separately if needed.

For advanced control features and UI-based interaction, refer to the Advanced edition.