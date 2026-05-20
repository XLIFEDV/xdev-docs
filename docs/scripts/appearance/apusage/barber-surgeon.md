---
title: Barber & Surgeon
sidebar_position: 3
---

# Barber & Surgeon

The barber and surgeon systems handle all facial customization workflows inside XDEV Appearance.

These systems are separated from clothing systems and focus entirely on:

- face customization
- overlays
- facial structure
- hair
- makeup
- eye customization

---

# Barber Menu

The barber menu controls visual overlays and cosmetic appearance.

Supported categories:

```text id="m4x7wr"
hair
beard
eyebrows
makeup
lipstick
blush
moles
blemishes
sunDamage
complexion
ageing
chestHair
bodyBlemishes
````

---

# Surgeon Menu

The surgeon menu controls structural facial data.

Supported categories:

```text id="v2m9tx"
head blend
face features
eye color
```

---

# Hair System

The hair system supports:

```text id="f8x3mq"
hair style
hair texture
primary color
highlight color
```

Saved structure example:

```lua id="u7m4vr"
hair = {
    style = 0,
    texture = 0,
    color = 0,
    highlight = 0
}
```

---

# Overlay System

Head overlays internally use:

```text id="r5x8mt"
style
opacity
color
secondColor
```

Example:

```lua id="p9m2vx"
makeUp = {
    style = 5,
    opacity = 0.8,
    color = 1,
    secondColor = 0
}
```

---

# Overlay Opacity

Supported overlays use opacity values between:

```text id="n6v3wr"
0.0 -> 1.0
```

The UI may internally normalize percentage values.

---

# Overlay Colors

Some overlays support color palettes.

Supported colored overlays:

```text id="y8m4tx"
beard
eyebrows
makeup
lipstick
blush
```

---

# Overlay Palette Notes

Different GTA overlays use different internal palettes.

Example:

```text id="k2x9mv"
Palette 1
Palette 2
```

Some overlays may produce different colors depending on selected palette behavior.

---

# Moles / Freckles

Moles and freckles do NOT use hair color palettes.

Typically supported values:

```text id="w7m3vr"
style
opacity
```

Color handling may vary depending on implementation.

---

# Makeup System

The makeup system supports:

```text id="x5v8mq"
style
opacity
color
```

Opacity support is important for realistic appearance blending.

---

# Lipstick System

The lipstick system supports:

```text id="u4m7tx"
style
opacity
color
```

Lipstick colors use GTA overlay palettes internally.

---

# Blush System

The blush system supports:

```text id="r9x2vw"
style
opacity
color
```

Depending on palette behavior, some colors may visually differ from expected previews.

---

# Beard System

The beard system supports:

```text id="f3m8vr"
style
opacity
color
```

Beard colors use GTA hair palettes internally.

---

# Head Blend System

Head blend controls facial genetics.

Saved structure example:

```lua id="z8m5tx"
headBlend = {
    shapeFirst = 0,
    shapeSecond = 0,
    skinFirst = 0,
    skinSecond = 0,
    shapeMix = 0.0,
    skinMix = 0.0
}
```

---

# Face Features

Face features support detailed facial shaping.

Supported categories include:

```text id="q7x4mv"
nose
jaw
chin
cheeks
eyes
neck
lips
eyebrows
```

Each value is internally normalized.

---

# Eye Color

The surgeon menu supports eye color selection.

Example:

```lua id="j6m9wr"
eyeColor = 0
```

---

# Cache Integration

The barber and surgeon systems integrate directly with:

```text id="p5x8tm"
face cache system
```

This allows players to:

* save face structures
* restore facial appearance
* reuse identity presets

without affecting clothing.

---

# Save Workflow

When saving:

```text id="w2m7vx"
1. Overlay data is collected
2. Face features are collected
3. Head blend is collected
4. Appearance is synchronized
5. Database save is triggered
```

---

# Cancel Workflow

When cancelled:

```text id="d4x9mr"
previous face appearance is restored
```

including:

* overlays
* face features
* hair
* eye color
* head blend

---

# Freemode Requirement

Full barber/surgeon support requires freemode models:

```text id="n8m3vq"
mp_m_freemode_01
mp_f_freemode_01
```

Custom peds may not support:

* overlays
* blend data
* face morphing
* eye color

correctly.

---

# Internal Synchronization

The system internally synchronizes:

```text id="h7v4tx"
head overlays
face features
head blend
eye color
hair
```

to improve consistency after reloads and reconnects.

---

# Recommended Workflow

Recommended workflow:

```text id="b5m8vr"
1. Open barber/surgeon menu
2. Adjust overlays
3. Adjust face structure
4. Preview appearance
5. Save or cancel
```

---

# Developer Notes

Unlike many appearance systems, XDEV separates facial systems from clothing systems internally.

Purpose:

```text id="m3x7tw"
better synchronization
cleaner rebuild workflows
cache support
compatibility support
```