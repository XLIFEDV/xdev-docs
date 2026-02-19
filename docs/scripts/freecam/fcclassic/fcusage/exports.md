---
title: Exports
sidebar_position: 3
---

# Exports

Freecam Classic provides optional exports for integration with other resources.

Exports are disabled by default and must be enabled in `config.lua`.

---

## Enabling Exports

Inside `config.lua`:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
````

Only enable the exports you plan to use.

---

## openFreecam()

Activates Freecam programmatically.

Example:

```lua
exports['xdev-freecam']:openFreecam()
```

### Return Value

The function returns:

* `false` → Activation successful
* `string` → Activation blocked (localized system message)

Possible blocked states include:

* Player validation failure
* Vehicle restriction
* Custom check restriction
* Freecam already active

---

## closeFreecam()

Disables Freecam programmatically.

Example:

```lua
exports['xdev-freecam']:closeFreecam()
```

This safely restores normal gameplay camera control.

---

## getData()

Returns current Freecam state information.

Example:

```lua
local data = exports['xdev-freecam']:getData()
```

### Returned Structure

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

### Field Description

* `freecamActive` → Indicates whether Freecam is currently active.
* `cam` → Contains camera data when active, otherwise `false`.
* `mainCoords` → Player’s current world coordinates.
* `configSystem` → Current system configuration.

---

## Integration Notes

Exports allow:

* Administrative control panels
* Custom moderation tools
* Conditional activation logic
* External system monitoring

It is recommended to keep logic validation inside Freecam and use exports only for controlled interaction.