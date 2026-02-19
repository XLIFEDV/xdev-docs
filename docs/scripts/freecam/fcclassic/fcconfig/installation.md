---
title: Installation
sidebar_position: 2
---

# Installation

## 1) Resource placement

Place the resource into your server resources folder, for example:

```

resources/[xdev]/xdev-freecam

```

## 2) server.cfg

Add:

```

ensure xdev-freecam

```

If you use a framework, load it before Freecam:

```

ensure qb-core
ensure xdev-freecam

````

## 3) Locale

Set the language in `config.lua`:

```lua
Config.Locale = 'en'
````

* `nil` / `false`: auto-detect (fallback: English)
* `tr`, `en`, `de`, `fr`, `ru`, `es`

## 4) Optional: Enable exports

Exports are disabled by default:

```lua
Config.Exports.openFreecam  = false
Config.Exports.closeFreecam = false
Config.Exports.getData      = false
```

Enable what you need:

```lua
Config.Exports.openFreecam = true
Config.Exports.getData     = true
```

## 5) Optional: Enable events

Client-side events are disabled by default:

```lua
Config.Events.ClientSide.system = {
  onStart = false,
  onClose = false
}
```

Set them to `true` to use default event triggers, or set a string to use a custom event name.