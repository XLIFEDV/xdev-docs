---
title: System Settings
sidebar_position: 3
---

# System Settings

This page documents `config.lua` settings used by Freecam Classic.

---

## Locale

```lua
Config.Locale = 'en'
````

* `nil` / `false`: auto-detect language (fallback: English)
* `'tr'`, `'en'`, `'de'`, `'fr'`, `'ru'`, `'es'`

---

## Debug Mode

```lua
Config.System.Debug = false
```

* `false`: only critical logs
* `true`: prints detailed debug logs (validation, locale detection, etc.)

---

## System Checks

These flags decide whether a validation check is required when enabling Freecam.

```lua
Config.System.checks.dead    = false
Config.System.checks.vehicle = false
```

### Dead Check

* `true`: Freecam requires the player to be alive
* `false`: skips dead validation

### Vehicle Check

* `true`: Freecam checks vehicle state using `VehicleCheck()`
* `false`: skips vehicle validation

> Note: What is considered "valid" depends on your override implementation.

---

## Activation (Command / Key / Hold)

```lua
Config.System.action = {
    command = "freecam",
    key = "V",
    hold = 2000
}
```

### Fields

* `command`: Chat command name (`/freecam`)
* `key`: Key mapping identifier (example: `V`)
* `hold`: Hold duration in milliseconds

### Behavior Rules

* If `command` is `nil`: system falls back to default `"freecam"`
* If `key` is `nil`: key activation is disabled
* If `key` is `nil` but `hold` has a value: still disabled (no key)
* If `hold` is `nil`: defaults to `2000ms`

---

## Reset Behavior

```lua
Config.System.reset = false
```

* `true`: camera data resets every activation
* `false`: camera data persists between sessions (stored in runtime `camData`)

When reset is enabled, the script will create a fresh `camData` on each activation:

```lua
camData = {
  coord  = Config.System.firstposition,
  zoom   = Config.System.values.zoom.default,
  rotate = vector3(0.0, 0.0, 0.0)
}
```

---

## Initial Camera Offset

```lua
Config.System.firstposition = vec3(0.0, 1.5, 0.5)
```

This is the offset used when Freecam is first activated (or when reset is enabled).

The camera position is calculated using:

```lua
GetOffsetFromEntityInWorldCoords(PlayerPedId(), coord.x, coord.y, coord.z)
```

---

## Camera Animation Duration

```lua
Config.System.cam_animation = 750 -- ms
```

Used for smooth camera transitions:

```lua
RenderScriptCams(true, true, Config.System.cam_animation, true, true)
```

and when closing:

```lua
RenderScriptCams(false, true, Config.System.cam_animation, true, true)
```

---

## Zoom (FOV)

```lua
Config.System.values.zoom.default = 90.0
Config.System.values.zoom.min     = 10.0
Config.System.values.zoom.max     = 120.0
```

Freecam uses FOV for zooming via:

```lua
SetCamFov(cam, currentFOV)
```

Limits are applied with:

* `math.max(min, value)`
* `math.min(max, value)`

---

## Distance Limit

```lua
Config.System.values.distance = 7.5
```

Movement is restricted so the camera cannot move further than this distance from the player.

In the movement loop:

```lua
if #(GetEntityCoords(PlayerPedId()) - camPos) <= Config.System.values.distance then
  -- allowed movement
end
```

---

## Speed Multipliers

### Movement

```lua
Config.System.multipliers.move.slow = 0.005
Config.System.multipliers.move.fast = 0.1
```

The script chooses slow/fast based on a modifier key state stored in `buttonData['16']`.

### Rotation

```lua
Config.System.multipliers.rotate.slow = 0.25
Config.System.multipliers.rotate.fast = 1.0
```

Used to adjust roll angle.

### Zoom

```lua
Config.System.multipliers.zoom.slow = 0.25
Config.System.multipliers.zoom.fast = 1.0
```

Used when increasing/decreasing FOV.