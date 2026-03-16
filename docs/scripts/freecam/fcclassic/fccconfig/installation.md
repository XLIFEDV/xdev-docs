---
title: Installation
sidebar_position: 2
---

# Installation

This guide explains how to properly install and configure Freecam Classic on your FiveM server.

---

## 1) Resource Placement

Place the Freecam resource inside your server's resources directory.

Example:

```

resources/[xdev]/xdev-freecam

```

The folder name should match the resource name used in `server.cfg`.

---

## 2) server.cfg Configuration

Add the following line to your `server.cfg`:

```

ensure xdev-freecam

```

If you are using a framework (for example QBCore), ensure it is started before Freecam:

```

ensure qb-core
ensure xdev-freecam

````

This guarantees proper dependency order.

---

## 3) Locale Configuration

Open `config.lua` and set your preferred language:

```lua
Config.Locale = 'en'
````

Available options:

* `nil` / `false` → automatic detection (fallback: English)
* `'tr'`
* `'en'`
* `'de'`
* `'fr'`
* `'ru'`
* `'es'`

---

## 4) Configure System Behavior

Before launching your server, review:

* Activation settings (`Config.System.action`)
* Camera limits
* Validation checks
* Speed multipliers
* Reset behavior

All system behavior is controlled through `config.lua`.

---

## 5) Optional: Enable Exports

Exports are disabled by default.

To enable them:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
```

Only enable the exports you intend to use.

---

## 6) Optional: Enable Events

Client-side events are disabled by default.

```lua
Config.Events.ClientSide.system = {
    onStart = false,
    onClose = false
}
```

You may:

* Set values to `true` to use default internal triggers
* Set a string to use a custom event name

---

## 7) Final Step

Restart your server after completing installation.

Freecam Classic will now be ready for use according to your configuration.