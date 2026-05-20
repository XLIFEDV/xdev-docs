---
title: Face Cache
sidebar_position: 7
---

# Face Cache

The face cache system allows players to save and restore facial identity data separately from clothing.

This system is intended for:

- identity preservation
- quick character rebuilding
- roleplay consistency
- appearance recovery
- face-only synchronization

---

# System Purpose

Unlike outfits, the face cache system stores:

```text id="m7x2vr"
head blend
face features
head overlays
eye color
hair
````

without storing clothing data.

This allows players to:

* change outfits freely
* preserve facial identity
* restore appearance later

---

# Cache Workflow

Typical workflow:

```text id="u5m9vq"
1. Save current face data
2. Change appearance/clothing
3. Restore cached face later
```

---

# Saved Cache Data

The face cache system primarily stores:

```text id="x3m8tw"
headBlend
faceFeatures
headOverlays
eyeColor
hair
```

Example structure:

```lua id="r8x4mq"
{
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    eyeColor = 0,
    hair = {}
}
```

---

# Excluded Data

The cache system intentionally avoids storing:

```text id="f2m7vr"
components
props
tattoos
outfits
```

Purpose:

* prevent clothing overwrites
* preserve outfit flexibility
* separate identity from clothing

---

# Cache Apply Workflow

When applying cache data:

```text id="q9m5tx"
1. Current appearance is read
2. Face cache data is merged
3. Face appearance rebuild runs
4. Appearance synchronization refreshes
```

Only identity-related data is replaced.

---

# Cache Confirmation System

The UI includes a dedicated confirmation system before applying cached data.

Example configuration:

```lua id="p4x8mq"
cache_confirm = {
    title = "Apply Saved Face Data",
    description = "Saved facial data will replace the current face appearance.",
    confirm = "Confirm",
    cancel = "Cancel",
    delete = "Delete Saved Data"
}
```

---

# Cache Warning Behavior

The system intentionally warns players before applying cached data.

Reason:

```text id="t7m3vr"
face data replacement is permanent until changed again
```

This prevents accidental identity overwrites.

---

# Cache Delete Workflow

Players may permanently remove cached face data.

Delete workflow:

```text id="k6x9mt"
1. Confirmation dialog opens
2. Cached data is removed
3. Face cache state resets
```

---

# Cache Synchronization

When cache data is applied:

```text id="v8m2wq"
head blend refreshes
face overlays refresh
face features refresh
hair refreshes
```

This ensures appearance consistency after:

* reconnects
* reloads
* ped rebuilding
* appearance synchronization

---

# Hair Support

Hair data is included inside the cache system.

Supported values:

```text id="m3x7tr"
style
texture
color
highlight
```

Purpose:

* preserve identity
* preserve hairstyle
* restore appearance consistency

---

# Overlay Support

The cache system supports overlays such as:

```text id="d5m8vq"
beard
eyebrows
makeup
lipstick
blush
moles
```

including:

```text id="h2x4mr"
style
opacity
color
```

depending on overlay type.

---

# Freemode Requirement

Full cache support requires freemode models:

```text id="n9m5tx"
mp_m_freemode_01
mp_f_freemode_01
```

Custom/addon peds may not fully support:

* overlays
* blend data
* facial morphs
* eye colors

---

# Internal Compare System

The cache system may internally compare appearance values before saving.

Typical comparison targets:

```text id="y4x8mq"
item
texture
mix
color
opacity
```

Purpose:

* prevent unnecessary saves
* reduce redundant cache updates
* improve synchronization logic

---

# Recommended Usage

Recommended player workflow:

```text id="j8m3vr"
1. Finalize facial appearance
2. Save face cache
3. Change clothing/outfits freely
4. Restore identity when needed
```

---

# Roleplay Usage

Common RP use cases:

```text id="b7x2tw"
undercover characters
identity restoration
barber recovery
character presets
multi-outfit roleplay
```

---

# Developer Notes

Unlike most appearance systems, XDEV intentionally separates:

```text id="u6m9vq"
identity data
clothing data
tattoo data
peddata
```

This architecture improves:

* modularity
* rebuild reliability
* synchronization consistency
* compatibility workflows
