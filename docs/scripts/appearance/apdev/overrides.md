---
title: Overrides
sidebar_position: 1
---

# Overrides

XDEV Appearance includes a modular override system that allows developers to replace internal behavior safely without modifying protected files.

The override system was designed to support:

- framework replacements
- custom integrations
- economy systems
- notifications
- permission systems
- animation systems
- validation systems

---

# Override Philosophy

Most appearance systems hardcode framework logic directly into protected files.

XDEV intentionally separates:

```text id="m7x2tw"
core logic
framework logic
custom logic
````

through override hooks.

Purpose:

* easier maintenance
* safer updates
* compatibility flexibility
* cleaner integrations

---

# Override Locations

Overrides are primarily located inside:

```text id="r4m8vq"
shared/client.lua
shared/server.lua
```

---

# Client-Side Overrides

Client-side overrides:

```lua id="u8m3vr"
Config.Override.ClientSide.Functions
```

---

# Server-Side Overrides

Server-side overrides:

```lua id="f2x7mq"
Config.Override.ServerSide.Functions
```

---

# DeadCheck Override

Purpose:

```text id="q9m5tx"
validate whether the player is alive
```

Example:

```lua id="v4x8mr"
function Config.Override.ClientSide.Functions.DeadCheck(ped)
    return false
end
```

Expected return:

```text id="n6m2vq"
true  -> player valid/alive
false -> block action
```

---

# VehicleCheck Override

Purpose:

```text id="w3x7tr"
validate vehicle state
```

Example:

```lua id="p8m4vq"
function Config.Override.ClientSide.Functions.VehicleCheck(ped)
    return false
end
```

Expected return:

```text id="h5x9mr"
true  -> player inside vehicle
false -> player not inside vehicle
```

---

# Check Override

Purpose:

```text id="j7m3tx"
global custom validation hook
```

Example:

```lua id="k2x8vq"
function Config.Override.ClientSide.Functions.Check(ped)
    return false
end
```

Useful for:

* admin restrictions
* job restrictions
* zone restrictions
* custom permissions
* event locking

---

# Client Notification Override

Purpose:

```text id="x4m7vr"
replace client-side notification systems
```

Example:

```lua id="f9x2mq"
function Config.Override.ClientSide.Functions.SendNotify(message, ...)
    return false
end
```

QBCore example:

```lua id="u6m8tw"
QBCore.Functions.Notify(message, 'error')
```

---

# Walkstyle Override

Purpose:

```text id="t3x9vq"
save and restore movement styles
```

Example:

```lua id="r5m4tx"
function Config.Override.ClientSide.Functions.Walkstyle()

end
```

Supports:

* RPEmotes
* custom movement systems
* animation frameworks

---

# Outfit ID Override

Purpose:

```text id="m8x2vr"
generate unique outfit identifiers
```

Example:

```lua id="n4m7vq"
function Config.Override.ServerSide.Functions.CreateOutfitID()
    return 'OUTFIT_ID'
end
```

Developers may replace this with:

* UUID systems
* timestamps
* random generators
* external APIs

---

# Money Override

Purpose:

```text id="y7m3tw"
handle appearance payments
```

Example:

```lua id="q5x8mr"
function Config.Override.ServerSide.Functions.RemoveMoney(src, price)
    return false
end
```

Expected return:

```text id="f2m9vq"
true  -> payment successful
false -> payment failed
```

---

# Server Notification Override

Purpose:

```text id="w8x4tr"
replace server-side notification systems
```

Example:

```lua id="k3m7vq"
function Config.Override.ServerSide.Functions.SendNotify(src, message, ...)
    return false
end
```

Useful for:

* framework notifications
* Discord logging
* admin systems
* custom UI systems

---

# Framework Toggle

Framework behavior may be toggled using:

```lua id="u9m2tw"
Config.Override.ClientSide.Framework = true
```

When disabled:

```text id="j6x5mr"
developers must implement validation manually
```

---

# Universal Architecture

Overrides intentionally avoid framework-specific assumptions.

This allows easier integration with:

```text id="p4m8vq"
QBCore
ESX
standalone systems
custom frameworks
```

---

# Recommended Override Workflow

Recommended integration process:

```text id="n7x3tw"
1. Configure notifications
2. Configure money handling
3. Configure validation checks
4. Configure walkstyles
5. Configure permissions
```

---

# Safe Update Philosophy

The override system exists to reduce update conflicts.

Developers should avoid editing protected logic directly whenever possible.

Instead:

```text id="d5m9vq"
replace behavior through overrides
```

This improves:

* update safety
* compatibility
* maintainability

---

# Developer Notes

XDEV intentionally exposes core interaction layers through overrides because appearance systems frequently require server-specific behavior.

The override architecture was designed specifically for:

```text id="b8x4mr"
server customization
framework replacement
long-term scalability
```

without rewriting the core resource.
