---
title: Clothes-Off Configuration
sidebar_position: 6
---

# Clothes-Off Configuration

The clothes-off system allows players to temporarily remove clothing pieces directly from the appearance menu.

This system is primarily intended for:

- roleplay interactions
- outfit previews
- immersion systems
- clothing inspection

---

# Main Configuration

Configuration:

```lua id="x3r8wn"
Config.UI.EnableClothesOff = true
````

If disabled:

```lua id="m6k1ty"
Config.UI.EnableClothesOff = false
```

all clothes-off functionality becomes unavailable.

---

# System Purpose

The clothes-off system does not permanently delete clothing.

Instead, it temporarily swaps clothing pieces using predefined fallback values.

This allows players to:

* remove jackets
* remove accessories
* remove hats
* hide props
* preview clothing layers

without affecting saved appearance data until manually saved.

---

# Fallback Clothing Values

Fallback clothing values are configured inside:

```text id="d2w5vp"
shared/data/outfits.lua
```

Example:

```lua id="u9f3ke"
['pants'] = {item = 0, texture = 0},
['arms'] = {item = 15, texture = 0},
['t-shirt'] = {item = 15, texture = 0},
['torso2'] = {item = 15, texture = 0},
['hat'] = {item = -1, texture = 0},
```

---

# Supported Categories

The clothes-off system supports:

```text id="r7m4qz"
pants
arms
t-shirt
torso2
vest
shoes
accessory
bag
mask
decals
hat
glass
ear
watch
bracelet
```

---

# Prop Clearing

Props use:

```lua id="z4x7pa"
item = -1
```

to fully remove the prop.

Examples:

```lua id="y8n6jt"
['hat'] = {item = -1, texture = 0},
['glass'] = {item = -1, texture = 0},
```

This is commonly used for:

* hats
* glasses
* earrings
* watches
* bracelets

---

# Freemode vs Custom Peds

The clothes-off workflow behaves differently depending on ped type.

---

# Freemode Peds

For freemode peds:

```text id="w6q2nr"
mp_m_freemode_01
mp_f_freemode_01
```

the system directly swaps components and props.

---

# Custom Peds

For addon/custom peds, the system may rely on:

```lua id="f4j8rm"
peddata
```

depending on server implementation.

Custom peds may require additional synchronization logic.

---

# Outfit Interaction

The clothes-off system interacts with:

* saved outfits
* temporary appearance states
* menu preview systems

If the player cancels changes:

* previous clothing is restored
* temporary removed clothing is reverted

---

# Save Behavior

Removed clothing is only permanently saved if:

```text id="m1t5xq"
Save
```

is confirmed by the player.

Closing or cancelling the menu restores previous appearance data.

---

# UI Integration

The clothes-off system integrates directly into the UI.

Players may:

* click clothing areas
* remove categories
* preview fallback states
* restore appearance pieces

through menu interactions.

---

# Recommended Fallback Setup

Recommended realistic fallback values:

```lua id="a9y2wk"
['arms'] = {item = 15, texture = 0},
['t-shirt'] = {item = 15, texture = 0},
['torso2'] = {item = 15, texture = 0},
```

Recommended clean prop removal:

```lua id="x5m7vl"
item = -1
```

for all prop categories.

---

# Roleplay Usage

Common RP use cases:

* removing jackets
* removing helmets
* changing uniforms
* tactical equipment handling
* casual clothing transitions

---

# Developer Notes

The system intentionally uses fallback appearance swapping instead of direct deletion.

This improves:

* synchronization stability
* rollback handling
* compatibility workflows
* outfit restoration