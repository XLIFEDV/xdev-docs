---
title: Clothing Menu
sidebar_position: 2
---

# Clothing Menu

The clothing menu is the main appearance interface of XDEV Appearance.

This menu handles:

- clothing components
- props
- accessories
- clothing previews
- clothes-off interactions
- outfit saving
- outfit loading

---

# Menu Categories

Supported clothing categories:

```text id="m7x2vq"
mask
arms
t-shirt
torso2
vest
pants
shoes
accessory
bag
decals
````

Supported prop categories:

```text id="f4m8wr"
hat
glass
ear
watch
bracelet
```

---

# Component Workflow

Each clothing category supports:

```text id="t9v3mx"
drawable selection
texture selection
live preview
save synchronization
```

Changes are applied instantly during preview.

---

# Live Preview System

The clothing menu uses a real-time preview workflow.

When the player changes:

```text id="z6x7mt"
item
texture
```

the system immediately updates the ped appearance.

This allows:

* faster customization
* better clothing inspection
* smoother workflow

---

# Texture Handling

Each drawable may contain multiple textures.

Example workflow:

```text id="y8m2vr"
1. Select drawable
2. Select texture
3. Preview changes
4. Save appearance
```

Texture limits are automatically validated internally.

---

# Clothes-Off System

The menu supports temporary clothing removal.

Supported removable categories include:

```text id="u3v9tx"
torso
pants
props
accessories
```

The system swaps clothing using fallback values configured inside:

```text id="d4m7wp"
shared/data/outfits.lua
```

---

# Save Workflow

When the player confirms changes:

```text id="q7x4mv"
1. Appearance state is collected
2. Components are synchronized
3. Props are synchronized
4. Tattoos are refreshed if necessary
5. Database save is triggered
```

---

# Cancel Workflow

If the player cancels changes:

```text id="w5m8tr"
1. Previous appearance is restored
2. Temporary changes are discarded
3. Preview state is removed
```

No database changes are applied.

---

# Outfit Integration

The clothing menu integrates directly with:

* outfit saving
* outfit loading
* outfit deleting
* outfit code systems

depending on server configuration.

---

# Clothing Synchronization

The system internally synchronizes:

```text id="k9v2mq"
components
props
peddata
```

This improves consistency after:

* reconnects
* reloads
* menu closes
* ped switching

---

# Freemode Support

Full clothing support is available on:

```text id="x2m7vt"
mp_m_freemode_01
mp_f_freemode_01
```

These models support complete GTA clothing systems.

---

# Custom Ped Support

Addon/custom peds are partially supported.

Depending on ped structure:

* some components may not exist
* some props may not apply
* peddata synchronization may be required

---

# UI Features

The clothing menu supports:

```text id="n4x8mr"
live previews
category switching
component filtering
texture editing
clothes-off interactions
info panels
```

---

# Information Panel

Optional UI information panels may display:

* controls
* category details
* interaction hints
* preview instructions

Controlled through:

```lua id="p8m5tx"
Config.UI.EnableInfoPanel
```

---

# Hotkey Support

The clothing menu supports configurable hotkeys.

Related configuration:

```lua id="h3v7wr"
Config.UI.HotkeyDelay
```

This helps prevent:

* accidental inputs
* stuck key states
* menu spam issues

---

# Flashlight Support

Optional flashlight integration:

```lua id="u9m2vq"
Config.UI.EnableFlashlight
```

Useful for:

* dark environments
* clothing inspection
* roleplay situations

---

# Hands-Up Support

Optional hands-up integration:

```lua id="r6x4mt"
Config.UI.EnableHandsUp
```

Useful for:

* roleplay interactions
* police searches
* inspection systems

---

# Internal Validation

The clothing menu internally validates:

```text id="f8m3vx"
drawable limits
texture limits
ped compatibility
component existence
```

to reduce broken appearance states.

---

# Recommended Workflow

Recommended player workflow:

```text id="j5x9wr"
1. Open clothing menu
2. Select category
3. Adjust drawable
4. Adjust texture
5. Preview appearance
6. Save or cancel
```

---

# Developer Notes

The clothing menu was designed to remain:

```text id="m2v8tx"
modular
framework-independent
compatibility-friendly
override-safe
```

This improves integration flexibility across different servers.