---
title: Events
sidebar_position: 2
---

# Events

XDEV Appearance includes a modular event system that allows developers to hook into internal workflows without modifying protected files.

The event system was designed for:

- integrations
- logging
- synchronization
- external systems
- custom workflows
- server-side automation

---

# Event Philosophy

Most appearance systems expose inconsistent or hardcoded events.

XDEV instead uses a centralized structure through:

```lua id="m4x8tr"
sendEvent()
````

Purpose:

* cleaner integrations
* easier maintenance
* configurable event behavior
* modular architecture

---

# Event Configuration

Events are configured through:

```lua id="u8m3vr"
Config.Events.ClientSide
Config.Events.ServerSide
```

Example:

```lua id="f2x7mq"
Config.Events.ClientSide.system = {
    OnMenuOpen = false,
    OnMenuClose = false,
    OnAppearanceSaved = false,
    OnAppearanceCanceled = false,
    OnPedChanged = false
}

Config.Events.ServerSide.system = {
    OnSkinLoad = false,
    OnSkinSave = false,
    OnOutfitSave = false,
    OnOutfitDelete = false
}
```

---

# sendEvent Helper

Internal event triggering uses:

```lua id="q9m5tx"
sendEvent('system:OnMenuOpen')
```

The helper automatically:

```text id="x4m7vq"
validates configuration
builds event names
triggers client/server events
handles synchronization
```

---

# Internal Event Format

Generated event format:

```text id="n6m2vr"
resource_name:events:system:OnMenuOpen
```

Example:

```text id="p8x4mq"
xdev_appearance:events:system:OnMenuOpen
```

---

# Client-Side Events

Supported client events:

```text id="r5m9tw"
OnMenuOpen
OnMenuClose
OnAppearanceSaved
OnAppearanceCanceled
OnPedChanged
```

---

# Server-Side Events

Supported server events:

```text id="d3m7vq"
OnSkinLoad
OnSkinSave
OnOutfitSave
OnOutfitDelete
```

---

# Event State Types

Event configuration supports multiple behaviors.

---

# false

```lua id="y8m2tr"
OnMenuOpen = false
```

Behavior:

```text id="v4x7mq"
event disabled completely
```

No event is triggered.

---

# true

```lua id="h5m9vr"
OnMenuOpen = true
```

Behavior:

```text id="w3x8tw"
event triggers only on current side
```

Example:

* client only
* server only

depending on where the event originated.

---

# Custom Value

Example:

```lua id="j7m3vq"
OnMenuOpen = "sync"
```

Behavior:

```text id="p2x8mr"
event triggers both client and server
```

This allows synchronized workflows automatically.

---

# Client Event Example

Example listener:

```lua id="f8m4tx"
RegisterNetEvent('xdev_appearance:events:system:OnMenuOpen', function()
    print('Menu opened')
end)
```

---

# Server Event Example

Example listener:

```lua id="k6m9vq"
RegisterNetEvent('xdev_appearance:events:system:OnSkinSave', function(source)
    print(source .. ' saved appearance')
end)
```

---

# Menu Events

Menu events are useful for:

```text id="u4x7tw"
camera systems
HUD hiding
voice systems
animation systems
UI synchronization
```

---

# Appearance Save Events

Save events are commonly used for:

```text id="r9m2vq"
logging
identity systems
backup systems
Discord integrations
```

---

# Outfit Events

Outfit events are useful for:

```text id="m3x8tr"
wardrobe systems
uniform systems
job integrations
outfit sharing
```

---

# Ped Change Events

Ped change events help with:

```text id="t5m7vq"
custom ped rebuilding
weapon systems
tattoo refreshing
addon ped synchronization
```

---

# Synchronization Workflow

When events are configured for dual-side synchronization:

```text id="n8x4mr"
client event triggers
server relay triggers
matching side receives event
```

automatically through the helper system.

---

# Safety Design

The helper intentionally validates event existence before triggering.

Purpose:

```text id="f2m9tw"
prevent invalid event spam
prevent missing configuration issues
reduce unnecessary network events
```

---

# Recommended Usage

Recommended event usage:

```text id="v6m3vq"
external integrations
logging systems
analytics
custom gameplay systems
```

---

# Developer Notes

The event system was intentionally designed to remain:

```text id="x7m4tr"
modular
lightweight
framework-independent
override-friendly
```

without forcing hardcoded dependencies.