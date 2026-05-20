---
title: Outfit Configuration
sidebar_position: 10
---

# Outfit Configuration

The outfit system controls:

- job uniforms
- gang uniforms
- default outfits
- grade-based outfits
- fallback clothing states

Configuration is located inside:

```text id="f7m2vp"
shared/data/outfits.lua
````

---

# System Purpose

The outfit system was designed for:

* faction uniforms
* department clothing
* roleplay organizations
* clothing rooms
* fallback clothing systems

The system supports both:

* freemode outfits
* partial clothing states

---

# Structure Overview

Main structure:

```lua id="q9v4tr"
Config.Outfits = {}
```

Example:

```lua id="j5x7mw"
Config.Outfits = {
    ['police'] = {
        ['male'] = {
            [0] = {
                {
                    outfitLabel = 'Uniform',
                    outfitData = {}
                }
            }
        }
    }
}
```

---

# Group Names

The first key defines the outfit group.

Examples:

```lua id="p4n8zk"
['police']
['ambulance']
['ballas']
['vagos']
```

This may represent:

* jobs
* gangs
* factions
* organizations

depending on server logic.

---

# Gender Structure

Supported genders:

```text id="x6r3wm"
male
female
```

Example:

```lua id="t8m5yv"
['male'] = { ... }
['female'] = { ... }
```

---

# Grade System

The outfit system supports grade-based outfits.

Example:

```lua id="w3x7nk"
[0] = { ... }
[1] = { ... }
[2] = { ... }
```

This allows:

* rank uniforms
* progression systems
* department hierarchy clothing

---

# Outfit Labels

Each outfit supports a custom label.

Example:

```lua id="r5v8mp"
outfitLabel = 'Uniform'
```

Used inside:

* clothing rooms
* outfit menus
* UI selections

---

# Outfit Data

Actual clothing data is stored inside:

```lua id="h9m4zr"
outfitData = {}
```

Example:

```lua id="n7w2tx"
['pants'] = {item = 0, texture = 0},
['torso2'] = {item = 15, texture = 0},
['hat'] = {item = -1, texture = 0},
```

---

# Supported Categories

Supported clothing categories:

```text id="b8x5rm"
pants
arms
t-shirt
vest
torso2
shoes
accessory
mask
decals
bag
hat
glass
ear
watch
bracelet
```

---

# Item Values

Example:

```lua id="k2w9vx"
item = 15
```

Represents the drawable/component ID.

---

# Texture Values

Example:

```lua id="v4m8zr"
texture = 0
```

Represents the texture variation of the drawable.

---

# Prop Removal

Props may be removed using:

```lua id="j3x6tp"
item = -1
```

Example:

```lua id="a5m7rw"
['hat'] = {item = -1, texture = 0}
```

Used for:

* hats
* glasses
* earrings
* watches
* bracelets

---

# Fallback Clothing

The outfit system is also used internally by the clothes-off system.

Fallback states are loaded from outfit values.

Example:

```lua id="f9w3mz"
['arms'] = {item = 15, texture = 0}
```

This defines what the player looks like after removing upper clothing.

---

# Clothing Room Integration

Outfits integrate directly with:

```text id="q4n8vz"
shared/data/clothing_rooms.lua
```

The system automatically selects matching:

* job outfits
* gang outfits
* gender outfits
* grade outfits

based on player data.

---

# Freemode Recommendations

Recommended for freemode compatibility:

```text id="p7m2tx"
mp_m_freemode_01
mp_f_freemode_01
```

These provide the most stable clothing support.

---

# Partial Outfit Support

Outfits do not need to contain every category.

Example:

```lua id="x8v5rn"
outfitData = {
    ['torso2'] = {item = 15, texture = 0}
}
```

Only specified categories are changed.

This is useful for:

* tactical vests
* jackets
* accessories
* partial uniform systems

---

# Recommended Workflow

Recommended workflow:

```text id="g5x8wt"
1. Create clothing room
2. Configure outfit groups
3. Configure genders
4. Configure grades
5. Test synchronization
```

---

# Developer Notes

The outfit system intentionally avoids framework-specific job handling internally.

Purpose:

* easier framework integration
* gang support
* standalone compatibility
* simpler override workflows