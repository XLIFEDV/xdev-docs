---
title: Advanced Overrides
sidebar_position: 2
---

# Advanced Overrides

Advanced Freecam includes a flexible **override system** that allows developers to replace internal logic with their own implementations.

This system makes it possible to integrate the camera with custom frameworks, UI systems, or server logic **without modifying the core resource**.

Overrides are configured inside the `Config.Override` table.

---

# Override Architecture

The override system is divided into two scopes:

| Scope | Description |
|------|------|
| ClientSide | Overrides client-side logic |
| ServerSide | Overrides server-side logic |

Each override can be enabled or disabled individually.

When enabled, the system will call the developer's custom function instead of the internal implementation.

---

# Client-Side Overrides

Client-side overrides allow developers to modify camera behavior and client logic.

Examples include:

- custom notifications
- screenshot integration
- visual system integration
- framework validation logic

Example configuration:

```lua
Config.Override.ClientSide.DeadCheck = false
Config.Override.ClientSide.VehicleCheck = false
Config.Override.ClientSide.Check = false
Config.Override.ClientSide.SendNotify = false
Config.Override.ClientSide.TakePhoto = false
````

If a value is set to **true**, the system will use the corresponding override function.

---

# Client Override Functions

Client-side override functions are defined inside:

```lua
Config.Override.ClientSide.Functions
```

Example:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message)
    -- custom notification system
end
```

This can be used to integrate with frameworks such as:

* QBCore
* ox_lib
* mythic_notify
* custom notification systems

---

# Server-Side Overrides

Server-side overrides allow developers to control backend logic such as data handling or persistent settings.

Example configuration:

```lua
Config.Override.ServerSide.GetSettings = false
Config.Override.ServerSide.SaveSettings = false
Config.Override.ServerSide.ResetSettings = false
```

When enabled, the system will use the custom server-side functions instead of the internal ones.

---

# Server Override Functions

Server override functions are defined inside:

```lua
Config.Override.ServerSide.Functions
```

Example:

```lua
function Config.Override.ServerSide.Functions.SaveSettings(src, settings)
    -- custom save logic
end
```

Developers can use this to:

* store settings in a custom database
* integrate with framework player data
* implement custom persistence systems

---

# Why Use Overrides?

Overrides allow developers to extend or modify the system without editing the resource itself.

Benefits include:

* easier updates
* framework compatibility
* custom logic support
* safer resource maintenance

---

# Best Practices

When using overrides:

* only enable overrides you intend to use
* keep custom logic separate from the core resource
* avoid modifying internal script files directly

Using the override system ensures that the resource remains **update-safe and modular**.

---

# Summary

The Advanced Override system allows developers to replace internal camera logic with custom implementations.

This provides maximum flexibility when integrating Advanced Freecam into complex server environments or custom frameworks.