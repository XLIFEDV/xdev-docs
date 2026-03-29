---
title: Integration Notes
sidebar_position: 3
---

# Integration Notes

Freecam is designed to be **modular, flexible, and easy to integrate** into different server environments.

It does not depend on a specific framework and can be adapted to work with existing systems using the override architecture.

---

# Framework Compatibility

Freecam can work with most common FiveM frameworks without requiring direct modifications.

Common integrations include:

- QBCore  
- ESX  
- standalone setups  

Framework-specific behavior can be handled using overrides.

---

# Notification Systems

The default notification system can be replaced using client-side overrides.

This allows integration with:

- framework notifications  
- UI libraries  
- custom notification systems  

Example:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message)
    -- custom notification logic
end
````

---

# Screenshot Integration

Freecam supports integration with external screenshot systems.

You can replace the default capture logic to work with:

* screenshot-basic
* server-side capture tools
* external APIs
* custom image services

Example:

```lua id="ntg2x2"
function Config.Override.ClientSide.Functions.TakePhoto()
    -- custom screenshot logic
end
```

---

# Data Persistence

Camera settings can be stored using custom server-side logic.

This allows integration with:

* player databases
* framework player data
* custom storage systems

Example:

```lua id="g7a9vr"
function Config.Override.ServerSide.Functions.SaveSettings(src, settings)
    -- custom save logic
end
```

---

# Permission Systems

Freecam can be integrated with permission systems to control access.

You can use overrides to:

* restrict usage to specific jobs
* limit access by role or group
* implement admin-only controls

This ensures Freecam fits into controlled server environments.

---

# Best Practices

When integrating Freecam:

* use overrides instead of modifying core files
* keep integration logic modular
* test all systems in your server environment
* ensure compatibility with existing scripts

This approach prevents conflicts and simplifies future updates.

---

# Summary

Freecam is built to integrate seamlessly into different server setups.

With its override system and modular design, it can be adapted to fit a wide range of use cases, from simple standalone setups to complex framework-based servers.