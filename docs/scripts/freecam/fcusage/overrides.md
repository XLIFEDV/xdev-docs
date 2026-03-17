---
title: Overrides
sidebar_position: 2
---

# Overrides

Freecam includes a flexible **override system** that allows developers to replace internal logic with custom implementations.

This makes it possible to integrate Freecam with frameworks, UI systems, and server logic **without modifying the core resource**.

All overrides are configured inside the `Config.Override` table.

---

# Override Architecture

The override system is divided into two scopes:

| Scope | Description |
|------|------|
| ClientSide | Overrides client-side logic |
| ServerSide | Overrides server-side logic |

Each override can be enabled or disabled individually.

When enabled, the system will use the custom function instead of the default internal logic.

---

# Client-Side Overrides

Client-side overrides allow developers to modify camera behavior and client-side features.

Common use cases:

- custom notifications  
- screenshot integrations  
- visual system control  
- framework validation  

Example configuration:

```lua
Config.Override.ClientSide.DeadCheck = false
Config.Override.ClientSide.VehicleCheck = false
Config.Override.ClientSide.Check = false
Config.Override.ClientSide.SendNotify = false
Config.Override.ClientSide.TakePhoto = false
````

If a value is set to **true**, the corresponding override function will be used.

---

# Client Override Functions

Client override functions are defined in:

```lua id="t7r3yy"
Config.Override.ClientSide.Functions
```

Example:

```lua id="u9gq1v"
function Config.Override.ClientSide.Functions.SendNotify(message)
    -- custom notification system
end
```

This allows integration with systems such as:

* QBCore
* ox_lib
* mythic_notify
* custom UI systems

---

# Server-Side Overrides

Server-side overrides allow developers to control backend logic.

Typical use cases:

* saving camera settings
* loading stored configurations
* resetting data
* database integration

Example configuration:

```lua id="k8c4ya"
Config.Override.ServerSide.GetSettings = false
Config.Override.ServerSide.SaveSettings = false
Config.Override.ServerSide.ResetSettings = false
```

When enabled, custom server-side functions will be used.

---

# Server Override Functions

Server override functions are defined in:

```lua id="b8n9sv"
Config.Override.ServerSide.Functions
```

Example:

```lua id="d2k8tr"
function Config.Override.ServerSide.Functions.SaveSettings(src, settings)
    -- custom save logic
end
```

Developers can use this system to:

* store data in custom databases
* integrate with player data systems
* create custom persistence logic

---

# Why Use Overrides?

Overrides allow developers to extend or modify functionality without editing the resource files.

Benefits:

* easier updates
* framework compatibility
* modular structure
* safer maintenance

---

# Best Practices

When working with overrides:

* enable only the overrides you need
* keep custom logic separate from the core resource
* avoid editing internal script files directly

This ensures the system remains **update-safe and maintainable**.

---

# Summary

The override system allows developers to fully customize Freecam behavior.

It provides flexibility for integrating the camera system into complex server environments without breaking compatibility.