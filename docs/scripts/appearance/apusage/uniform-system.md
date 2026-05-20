---
title: Uniform System
sidebar_position: 6
---

# Uniform System

The uniform system allows servers to provide:

- job uniforms
- gang uniforms
- faction outfits
- department clothing
- restricted outfit presets

through clothing rooms and configured outfit groups.

---

# System Purpose

The system was designed for roleplay-focused workflows such as:

```text id="m4x8tw"
police departments
EMS
mechanics
gangs
organizations
security factions
````

Uniforms are handled separately from personal saved outfits.

---

# Uniform Workflow

Typical workflow:

```text id="r8m2vq"
1. Enter clothing room
2. Open uniform list
3. Select uniform
4. Outfit is applied
5. Appearance synchronizes
```

---

# Clothing Room Integration

Uniforms are loaded through:

```text id="u3m7tx"
shared/data/clothing_rooms.lua
```

The system validates:

* player gender
* player job
* player gang
* player grade
* room access

before allowing uniform usage.

---

# Outfit Source

Uniforms are defined inside:

```text id="q9x4mr"
shared/data/outfits.lua
```

Example structure:

```lua id="h6m8vq"
Config.Outfits = {
    ['police'] = {
        ['male'] = {
            [0] = {
                {
                    outfitLabel = 'Cadet Uniform',
                    outfitData = {}
                }
            }
        }
    }
}
```

---

# Grade Support

Uniforms support grade-based structures.

Example:

```lua id="y2x7mt"
[0] = { ... }
[1] = { ... }
[2] = { ... }
```

This allows:

* rank uniforms
* progression systems
* department hierarchy clothing

---

# Gender Support

Uniforms support separate configurations for:

```text id="n5m9vr"
male
female
```

Each gender may use completely different clothing values.

---

# Partial Uniforms

Uniforms do not need to contain every clothing category.

Example:

```lua id="v7x3mq"
outfitData = {
    ['vest'] = {item = 10, texture = 0}
}
```

Only specified categories are changed.

Useful for:

* tactical vests
* jackets
* accessories
* roleplay equipment

---

# Prop Handling

Props are handled separately from components.

Example:

```lua id="p4m8tw"
['hat'] = {item = -1, texture = 0}
```

Using:

```lua id="k8x2vr"
item = -1
```

removes the prop completely.

---

# Synchronization Workflow

When uniforms are applied:

```text id="d3m7vq"
1. Current appearance is read
2. Uniform values are merged
3. Components are rebuilt
4. Props are rebuilt
5. Appearance refresh runs
```

This prevents unnecessary appearance resets.

---

# Appearance Preservation

The uniform system intentionally avoids modifying:

```text id="z6x4mr"
head blend
face features
tattoos
hair
```

unless explicitly configured.

This allows players to keep their identity while changing uniforms.

---

# Clothes-Off Compatibility

Uniforms integrate directly with the clothes-off system.

Fallback states may use:

```text id="t9m5vx"
outfit fallback values
```

from configured outfit structures.

---

# Restricted Access

Uniforms may be restricted using:

```lua id="u5x8tr"
requiredJob
isGang
gender
```

Examples:

```lua id="m2v7qw"
requiredJob = 'police'
```

or:

```lua id="j8m4tx"
requiredJob = 'ballas',
isGang = true
```

---

# Public Uniform Rooms

If:

```lua id="x3m9vr"
requiredJob = nil
```

the clothing room becomes public.

No access restrictions are applied.

---

# Recommended Usage

Recommended for:

```text id="r7x2mq"
police
ambulance
mechanics
gangs
security
staff uniforms
```

---

# Internal Events

Uniform application may trigger synchronization events internally.

Useful for:

* logging systems
* inventory systems
* weapon systems
* duty systems

depending on server implementation.

---

# Framework Independence

The uniform system intentionally avoids framework-specific logic internally.

Purpose:

```text id="w4m8tx"
easier integrations
custom permission systems
gang support
standalone compatibility
```

---

# Recommended Workflow

Recommended setup workflow:

```text id="f2x9mr"
1. Create clothing room
2. Configure restrictions
3. Configure outfit groups
4. Configure grades
5. Test synchronization
```

---

# Developer Notes

Unlike many appearance systems, XDEV separates:

```text id="h7m3vq"
uniform logic
outfit logic
appearance logic
```

This architecture improves:

* synchronization reliability
* modularity
* compatibility support
* integration flexibility
