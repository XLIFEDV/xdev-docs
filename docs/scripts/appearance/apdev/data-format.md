---
title: Data Format
sidebar_position: 4
---

# Data Format

XDEV Appearance internally uses structured appearance data to synchronize:

- clothing
- props
- overlays
- tattoos
- peddata
- facial structure

This document explains the internal format philosophy and supported structures.

---

# System Philosophy

Unlike many appearance systems, XDEV intentionally separates:

```text id="m4x8tr"
appearance
tattoos
peddata
outfits
cache data
````

into modular structures.

Purpose:

* cleaner synchronization
* compatibility support
* rebuild reliability
* easier conversions

---

# Main Appearance Structure

Typical appearance structure:

```lua id="u7m3vq"
{
    model = "",
    hair = {},
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    eyeColor = 0,
    components = {},
    props = {},
    tattoos = {}
}
```

---

# Model

Stores the active ped model.

Example:

```lua id="x2m7tw"
model = "mp_m_freemode_01"
```

Used for:

* ped rebuilding
* compatibility validation
* synchronization workflows

---

# Hair Structure

Example:

```lua id="f8m4vq"
hair = {
    style = 0,
    texture = 0,
    color = 0,
    highlight = 0
}
```

Supported values:

```text id="r5m9tx"
style
texture
color
highlight
```

---

# Head Blend Structure

Example:

```lua id="n6m2vr"
headBlend = {
    shapeFirst = 0,
    shapeSecond = 0,
    skinFirst = 0,
    skinSecond = 0,
    shapeMix = 0.0,
    skinMix = 0.0
}
```

Purpose:

```text id="p8x4mq"
facial genetics
skin blending
parent mixing
```

---

# Face Features Structure

Example:

```lua id="d3m7vq"
faceFeatures = {
    noseWidth = 0,
    jawBoneWidth = 0,
    chinBoneSize = 0
}
```

Supported categories include:

```text id="v4x8mr"
nose
jaw
chin
cheeks
eyes
neck
lips
```

---

# Head Overlays Structure

Example:

```lua id="q9m5tw"
headOverlays = {
    beard = {
        style = 0,
        opacity = 0,
        color = 1,
        secondColor = 0
    }
}
```

Supported overlay values:

```text id="y8m2tr"
style
opacity
color
secondColor
```

---

# Overlay Notes

Some overlays support color palettes while others only support opacity.

Typical colored overlays:

```text id="w3x7mq"
beard
eyebrows
makeup
lipstick
blush
```

---

# Eye Color Structure

Example:

```lua id="h5m9vr"
eyeColor = 0
```

Used during:

* surgeon workflows
* face rebuilding
* cache synchronization

---

# Components Structure

Components represent GTA clothing categories.

Example:

```lua id="k7m3vq"
components = {
    {
        component_id = 11,
        drawable = 5,
        texture = 0
    }
}
```

Supported values:

```text id="u4x8mr"
component_id
drawable
texture
```

---

# Props Structure

Props represent removable GTA accessories.

Example:

```lua id="p2x7tw"
props = {
    {
        prop_id = 0,
        drawable = -1,
        texture = -1
    }
}
```

Using:

```lua id="r8m4vq"
drawable = -1
```

removes the prop completely.

---

# Tattoos Structure

Example:

```lua id="j6m9tx"
tattoos = {
    ZONE_HEAD = {
        {
            name = "TAT_BB_021",
            opacity = 0.4
        }
    }
}
```

Supported values:

```text id="f2m8vq"
name
opacity
zone
collection
hashes
```

depending on synchronization stage.

---

# peddata Structure

The peddata system exists primarily for:

```text id="z5x3mr"
custom peds
addon peds
ped rebuilding
advanced synchronization
```

Unlike many appearance systems, XDEV separates ped-specific appearance data from freemode structures.

---

# Outfit Data Structure

Outfits intentionally use lightweight structures.

Example:

```lua id="u8m4tw"
{
    components = {},
    props = {}
}
```

Purpose:

```text id="n7x2vq"
preserve identity data
avoid face overwrites
simplify synchronization
```

---

# Cache Data Structure

Face cache structures typically contain:

```lua id="m3x9vr"
{
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    eyeColor = 0,
    hair = {}
}
```

without clothing or tattoo data.

---

# Compare Workflows

The system may internally compare values before saving.

Common compare targets:

```text id="q5m8tx"
item
texture
mix
opacity
color
```

Purpose:

* reduce redundant saves
* optimize synchronization
* avoid unnecessary updates

---

# Compatibility Structures

The converter layer supports structures from:

```text id="r4x7mq"
Illenium Appearance
legacy appearance systems
custom frameworks
```

through internal rebuild workflows.

---

# Serialization

Most appearance structures are stored using:

```text id="v9m2wr"
JSON encoding
```

inside SQL tables.

Typical fields:

```text id="p6x8vq"
skin
tattoo
peddata
components
props
```

---

# Synchronization Philosophy

XDEV intentionally rebuilds appearance from multiple synchronized structures instead of relying on a single monolithic blob.

Purpose:

```text id="f3m7tx"
better rebuild reliability
modularity
compatibility support
ped synchronization
```

---

# Developer Notes

The resource intentionally avoids forcing a single rigid appearance structure.

Instead, the architecture focuses on:

```text id="x8m4vr"
conversion
modularity
compatibility
rebuild safety
```

to simplify long-term maintenance and migrations.