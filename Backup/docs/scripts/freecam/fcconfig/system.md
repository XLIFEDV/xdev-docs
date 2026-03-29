---
title: System Configuration
sidebar_position: 1
---

# System Configuration

The **System Configuration** section defines the core behavior of Freecam.

These settings control how the camera is activated, how it behaves during use, and how movement, rotation, and zoom systems operate.

All system-related settings are located inside the `Config.System` table.

---

# Activation Settings

These settings define how Freecam can be activated.

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

Example usage:

```
/freecam
```

or by holding the configured key.

---

# Visibility Guard

The Visibility Guard system ensures that the player entity remains visible while using the camera.

```lua
Config.System.VisibilityGuard = true
```

When enabled:

* camera movement is validated
* camera cannot move behind walls or inside geometry
* the player must remain within visible range

This prevents invalid camera positioning and improves visual consistency.

---

# Reset Behavior

Controls whether camera settings reset when Freecam is activated.

```lua
Config.System.reset = false
```

| Value | Behavior                                              |
| ----- | ----------------------------------------------------- |
| true  | Camera settings reset every time Freecam is activated |
| false | Previous camera settings are restored                 |

---

# Initial Camera Position

Defines the initial camera offset relative to the player.

```lua
Config.System.firstposition = vec3(0.0, 1.5, 0.5)
```

| Axis | Description               |
| ---- | ------------------------- |
| X    | Right / Left offset       |
| Y    | Forward / Backward offset |
| Z    | Up / Down offset          |

This determines where the camera is positioned when Freecam starts.

---

# Camera Animation

Controls the transition duration when enabling or disabling Freecam.

```lua
Config.System.cam_animation = 750
```

| Option        | Description                        |
| ------------- | ---------------------------------- |
| cam_animation | Animation duration in milliseconds |

Higher values result in smoother transitions.

---

# Zoom Settings

Defines the field-of-view (FOV) behavior of the camera.

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

Defines the maximum distance the camera can move from its origin.

```lua
Config.System.values.distance = 7.5
```

This prevents the camera from moving too far away from the player.

---

# Movement Speed Multipliers

Controls camera movement speed.

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

Controls how fast zoom changes.

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

The System Configuration defines the fundamental behavior of Freecam, including:

* activation system
* movement and rotation logic
* zoom behavior
* camera limits
* initial positioning
* visibility validation

These settings form the base of the camera system before UI and visual controls are applied.