---
title: Walkstyle Integration
sidebar_position: 4
---

# Walkstyle Integration

XDEV Appearance supports optional walkstyle integration through the override system.

This allows developers to:

- save walkstyles
- restore walkstyles
- synchronize movement styles
- integrate emote systems
- replace external walkstyle handlers

without modifying protected files.

---

# System Philosophy

The walkstyle system is intentionally optional.

Purpose:

```text id="u7m4tx"
framework independence
custom integrations
external emote support
standalone compatibility
````

The resource does not force any specific walkstyle resource internally.

---

# Override Function

Walkstyle handling is controlled through:

```lua id="p5x9mr"
Config.Override.ClientSide.Functions.Walkstyle()
```

Located inside:

```text id="n2m8vq"
shared/client.lua
```

---

# Default Structure

Default override:

```lua id="f8m3tw"
function Config.Override.ClientSide.Functions.Walkstyle()

end
```

Developers are expected to implement their own logic.

---

# Expected Behavior

The override is designed to support two behaviors:

```text id="v4x7mq"
1. Retrieve current walkstyle
2. Apply saved walkstyle
```

---

# Reading Current Walkstyle

When called without parameters, the function should return:

```text id="k9m2vr"
current walkstyle name
```

Example:

```lua id="w6x4tx"
function Config.Override.ClientSide.Functions.Walkstyle()
    return "move_m@casual@a"
end
```

---

# Applying Walkstyle

When a value is provided, the function should restore the walkstyle.

Example:

```lua id="h3m8vq"
function Config.Override.ClientSide.Functions.Walkstyle(style)
    RequestAnimSet(style)

    while not HasAnimSetLoaded(style) do
        Wait(0)
    end

    SetPedMovementClipset(PlayerPedId(), style, 1.0)
end
```

---

# Full Example

Example combined workflow:

```lua id="r7x5mt"
local CurrentWalkstyle = "move_m@casual@a"

function Config.Override.ClientSide.Functions.Walkstyle(style)
    if not style then
        return CurrentWalkstyle
    end

    CurrentWalkstyle = style

    RequestAnimSet(style)

    while not HasAnimSetLoaded(style) do
        Wait(0)
    end

    SetPedMovementClipset(PlayerPedId(), style, 1.0)
end
```

---

# Save Workflow

When integrated, walkstyles may be saved during:

```text id="m8x3vr"
appearance save
outfit save
cache save
ped synchronization
```

depending on implementation.

---

# Restore Workflow

Walkstyles may be restored after:

```text id="u2m7tw"
ped reload
appearance reload
menu closing
resource restart
```

to preserve character identity.

---

# RPEmotes Compatibility

The override system was intentionally designed to work with:

```text id="f5m9vq"
RPEmotes
```

and similar animation resources.

Developers may directly connect existing exports inside the override.

---

# Example RPEmotes Integration

Example:

```lua id="q8x4mr"
function Config.Override.ClientSide.Functions.Walkstyle(style)
    if not style then
        return exports["rpemotes"]:getWalk()
    end

    exports["rpemotes"]:setWalk(style)
end
```

---

# Custom Systems

Developers may also integrate:

```text id="p4m8tx"
custom emote systems
animation frameworks
movement systems
character identity systems
```

through the same override.

---

# Freemode vs Custom Peds

Walkstyles generally work on:

```text id="x7m3vq"
freemode peds
custom peds
```

However, some custom peds may behave differently depending on animation compatibility.

---

# Synchronization Notes

The resource intentionally does NOT hardcode walkstyle saving internally.

Purpose:

```text id="n6x2mr"
avoid conflicts
preserve compatibility
support custom workflows
```

Developers maintain full control over implementation.

---

# Recommended Usage

Recommended usage:

```text id="b5m9tw"
identity systems
RP servers
persistent character behavior
emote integration
```

---

# Developer Notes

Most appearance systems completely ignore movement identity.

XDEV exposes walkstyle integration through overrides to support:

```text id="t3x8vq"
full character identity workflows
```

without forcing external dependencies.