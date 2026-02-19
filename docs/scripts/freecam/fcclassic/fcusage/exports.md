---
title: Exports
sidebar_position: 3
---

# Exports

Exports are optional and disabled by default in `config.lua`.

Enable them:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
````

---

## openFreecam()

```lua
exports("openFreecam", function()
  local result = toggleFreeCam(true)
  -- result is false on success, or a localized error message string on failure
end)
```

### Return behavior

* `false` → activation succeeded
* `string` → activation blocked (localized message)

Possible messages:

* `system.dead_check`
* `system.vehicle_check`
* `system.check`
* `system.freecam_active`

---

## closeFreecam()

```lua
exports("closeFreecam", function()
  toggleFreeCam(false)
end)
```

Closes Freecam safely.

---

## getData()

```lua
local data = exports['xdev-freecam']:getData()
```

### Return structure (matches `functions.lua`)

```lua
{
  freecamActive = boolean,
  cam = false or {
    cam = number,
    camData = table or false,
    mainCoords = vector3
  },
  configSystem = Config.System
}
```

### Notes

* `cam` becomes `false` when Freecam is not active
* `camData` may be `false` until Freecam is opened at least once (if reset is disabled)