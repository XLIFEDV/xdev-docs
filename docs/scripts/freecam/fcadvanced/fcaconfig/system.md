---
title: System Configuration
sidebar_position: 1
---

# System Configuration

The **System Configuration** section controls the core behavior of Advanced Freecam.

These settings define how the camera system activates, how it behaves when started, and how movement and zoom mechanics function.

All system-related settings are located inside the `Config.System` table.

---

# Activation Settings

These settings define how the Freecam system can be activated.

```lua
Config.System.action = {
    command = "freecam",
    key = "V",
    hold = 2000
}
````

| Option  | Type   | Description                              |
| ------- | ------ | ---------------------------------------- |
| command | string | Chat command used to activate Freecam    |
| key     | string | Keyboard key used to activate the camera |
| hold    | number | Time (milliseconds) the key must be held |

Example:

```
/freecam
```

or by holding the configured key.

---

# Visibility Guard

The Visibility Guard system prevents the camera from moving into positions where the player entity would no longer be rendered.

```lua
Config.System.VisibilityGuard = true
```

When enabled:

* camera movement is validated
* camera cannot move behind walls or inside geometry
* the player entity must remain visible

This helps maintain visual consistency during recordings or screenshots.

---

# Reset Behavior

Defines whether camera settings reset when Freecam is activated.

```lua
Config.System.reset = false
```

| Value | Behavior                                              |
| ----- | ----------------------------------------------------- |
| true  | Camera settings reset every time Freecam is activated |
| false | Previous camera settings are restored                 |

---

# Initial Camera Position

Defines the starting offset of the camera relative to the player.

```lua
Config.System.firstposition = vec3(0.0, 1.5, 0.5)
```

| Axis | Description               |
| ---- | ------------------------- |
| X    | Right / Left offset       |
| Y    | Forward / Backward offset |
| Z    | Up / Down offset          |

This determines where the camera appears when Freecam starts.

---

# Camera Animation

Controls the transition animation duration when enabling or disabling Freecam.

```lua
Config.System.cam_animation = 750
```

| Option        | Description                        |
| ------------- | ---------------------------------- |
| cam_animation | Animation duration in milliseconds |

Higher values create smoother transitions.

---

# Zoom Settings

Defines the camera field-of-view (FOV) limits.

```lua
Config.System.values.zoom.default = 90.0
Config.System.values.zoom.min = 10.0
Config.System.values.zoom.max = 120.0
```

| Option  | Description                    |
| ------- | ------------------------------ |
| default | Default FOV value              |
| min     | Minimum FOV (maximum zoom-in)  |
| max     | Maximum FOV (maximum zoom-out) |

---

# Camera Distance Limit

Defines the maximum distance the camera can move from the starting anchor point.

```lua
Config.System.values.distance = 7.5
```

This prevents the camera from moving too far away from the player.

---

# Movement Speed Multipliers

These settings control camera movement speed.

```lua
Config.System.multipliers.move.slow = 0.005
Config.System.multipliers.move.fast = 0.1
```

| Option | Description            |
| ------ | ---------------------- |
| slow   | Default movement speed |
| fast   | Maximum movement speed |

---

# Rotation Speed

Controls camera rotation sensitivity.

```lua
Config.System.multipliers.rotate.slow = 0.25
Config.System.multipliers.rotate.fast = 1.0
```

| Option | Description            |
| ------ | ---------------------- |
| slow   | Default rotation speed |
| fast   | Maximum rotation speed |

---

# Zoom Speed

Defines how fast the camera zoom changes.

```lua
Config.System.multipliers.zoom.slow = 0.25
Config.System.multipliers.zoom.fast = 1.0
```

| Option | Description        |
| ------ | ------------------ |
| slow   | Default zoom speed |
| fast   | Maximum zoom speed |

---

# Summary

The **System Configuration** controls the fundamental behavior of Advanced Freecam, including:

* camera activation
* camera limits
* movement speed
* zoom behavior
* camera positioning
* visibility protection

These settings define the base behavior before UI and visual control systems are applied.