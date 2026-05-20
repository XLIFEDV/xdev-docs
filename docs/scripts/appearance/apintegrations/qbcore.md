---
title: QBCore Integration
sidebar_position: 2
---

# QBCore Integration

XDEV Appearance includes built-in QBCore compatibility and was designed to work naturally within QBCore-based servers.

The system supports:

- player data integration
- job systems
- gang systems
- commands
- permissions
- notifications
- appearance synchronization

without requiring heavy rewrites.

---

# Dependency

QBCore is listed as a dependency inside:

```lua id="m5x9tw"
dependencies {
    'qb-core'
}
````

This allows the system to automatically access:

* player data
* jobs
* gangs
* permissions
* callbacks

---

# Framework Toggle

Framework behavior is controlled through:

```lua id="u3m7vq"
Config.Override.ClientSide.Framework = true
```

When enabled:

```text id="x8m2tr"
QBCore validation systems become active
```

When disabled:

```text id="p4x8mq"
developers must implement their own validation logic
```

---

# Player Data Usage

The system uses QBCore player data for:

```text id="f7m4vr"
job checks
gang checks
gender checks
appearance loading
```

Example:

```lua id="r2x9tw"
QBCore.Functions.GetPlayerData()
```

---

# Gender Handling

Character gender is automatically resolved through QBCore player data.

Example workflow:

```lua id="k6m3vq"
if pData.charinfo.gender == 1 then
    skin = "mp_f_freemode_01"
end
```

This is used during:

* first character creation
* appearance rebuilding
* menu initialization

---

# Command Integration

Commands integrate directly with:

```lua id="w8x5mr"
QBCore.Commands.Add()
```

Supported command workflows include:

```text id="n5m9tx"
reload commands
admin menu commands
ped commands
```

---

# Permission Support

Administrative commands support native QBCore permissions.

Example:

```lua id="v4m7tr"
permission = "admin"
```

This allows direct usage of:

```text id="q2x8vq"
admin
god
custom permission groups
```

depending on server configuration.

---

# Clothing Room Integration

Clothing rooms support QBCore job and gang systems.

Supported validation:

```text id="d7m3wr"
PlayerData.job.name
PlayerData.gang.name
```

This allows:

* police lockers
* EMS uniforms
* gang outfit rooms
* faction systems

---

# Notification Overrides

The system intentionally avoids hardcoded notifications.

Default override:

```lua id="t8x4mq"
function Config.Override.ClientSide.Functions.SendNotify(message)
    return false
end
```

Example QBCore integration:

```lua id="p3m8vr"
QBCore.Functions.Notify(message, 'error')
```

---

# Money Handling

Payment systems are handled through overrides.

Default override:

```lua id="j6x2tw"
function Config.Override.ServerSide.Functions.RemoveMoney(src, price)
    return false
end
```

Example QBCore integration:

```lua id="u9m5vq"
local Player = QBCore.Functions.GetPlayer(src)

if Player.PlayerData.money.cash >= price then
    Player.Functions.RemoveMoney('cash', price)
    return true
end

return false
```

---

# First Character Support

The resource includes QBCore-compatible first character support.

Example:

```lua id="x5m8tr"
RegisterNetEvent('qb-clothes:client:CreateFirstCharacter')
```

This automatically:

```text id="f2x7mq"
detects gender
loads freemode ped
opens character menu
```

---

# Outfit Compatibility

The system supports:

```text id="r7m4vx"
qb-clothing outfit events
QBCore appearance workflows
```

through compatibility bridges.

---

# Reload Support

Appearance reload systems integrate naturally with QBCore events.

Example:

```lua id="m8x3tw"
TriggerClientEvent("xdev_appearance:reload_ped", source)
```

Used for:

* desync recovery
* tattoo rebuilding
* appearance refreshing

---

# Database Compatibility

The resource supports extending existing QBCore-compatible databases.

Typical supported tables:

```text id="p9m2vr"
playerskins
player_outfits
player_outfit_codes
```

---

# Universal Integration Philosophy

Although QBCore is supported natively, the system intentionally avoids becoming framework-locked.

Purpose:

```text id="n4x8mq"
easier migration
modularity
custom framework support
standalone compatibility
```

---

# Recommended QBCore Workflow

Recommended integration workflow:

```text id="v6m3tx"
1. Install dependency
2. Configure overrides
3. Configure notifications
4. Configure money handling
5. Verify jobs/gangs
6. Verify synchronization
```

---

# Developer Notes

Unlike many QBCore appearance systems, XDEV intentionally separates:

```text id="b5x9vr"
QBCore logic
appearance logic
database logic
```

This improves:

* maintainability
* migration support
* compatibility
* customization flexibility
