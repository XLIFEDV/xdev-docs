---
title: Illenium Format Integration
sidebar_position: 3
---

# Illenium Format Integration

XDEV Appearance includes compatibility support for Illenium Appearance structures and workflows.

This integration exists to simplify:

- server migration
- database migration
- tattoo compatibility
- appearance synchronization
- legacy support

without requiring complete rewrites.

---

# Compatibility Philosophy

The system was intentionally designed to:

```text id="m4x8tw"
read
convert
synchronize
rebuild
````

Illenium-compatible appearance structures internally.

Purpose:

* easier migration
* compatibility support
* smoother server transitions

---

# Supported Compatibility Areas

Supported compatibility workflows:

```text id="u7m2vr"
appearance conversion
tattoo conversion
menu event compatibility
reload compatibility
database extension
```

---

# Supported Events

The resource includes compatibility event bridges for Illenium menus.

Examples:

```lua id="p5x9mq"
RegisterNetEvent('illenium-appearance:client:openClothingShopMenu')
RegisterNetEvent('illenium-appearance:client:openBarberShopMenu')
RegisterNetEvent('illenium-appearance:client:openSurgeonShopMenu')
RegisterNetEvent('illenium-appearance:client:openTattooShopMenu')
RegisterNetEvent('illenium-appearance:client:openOutfitMenu')
```

These events redirect older resources into XDEV Appearance automatically.

---

# Appearance Structure Compatibility

XDEV supports Illenium-style appearance structures such as:

```lua id="n8m4tx"
{
    hair = {},
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    tattoos = {},
    components = {},
    props = {}
}
```

The converter system internally rebuilds this data into XDEV-compatible workflows.

---

# Tattoo Compatibility

The tattoo system supports Illenium-style tattoo entries.

Example:

```lua id="f2x7vq"
{
    collection = "mpbeach_overlays",
    name = "TAT_BB_021",
    label = "Pirate Skull",
    zone = "ZONE_HEAD",
    hashMale = "MP_Bea_M_Head_000",
    hashFemale = "",
    opacity = 0.6
}
```

---

# Tattoo Rebuilding

When tattoos are loaded:

```text id="r6m9tw"
1. Tattoo data is parsed
2. Overlay hashes are resolved
3. Tattoo zones are rebuilt
4. Opacity is normalized
5. Tattoos are reapplied
```

This helps preserve compatibility during migration.

---

# Opacity Normalization

Illenium structures typically use:

```text id="y3x8mr"
0.0 -> 1.0
```

opacity ranges.

XDEV internally supports normalization between:

```text id="d8m5vq"
0 -> 100
```

and:

```text id="u4m7tx"
0.0 -> 1.0
```

depending on synchronization stage.

---

# Overlay Compatibility

Head overlays are also converted internally.

Supported overlay fields:

```text id="h9x2mq"
style
opacity
color
secondColor
```

Example:

```lua id="k7m4vr"
makeUp = {
    style = 0,
    opacity = 0,
    color = 1,
    secondColor = 0
}
```

---

# Overlay Notes

Some older Illenium workflows may store disabled overlays using:

```text id="p3x8tw"
style = 0
opacity = 0
```

instead of:

```text id="q5m9vr"
style = -1
```

This is normal behavior depending on implementation.

---

# Database Extension Support

The SQL setup supports extending existing Illenium databases safely.

Example:

```sql id="v2m7tx"
ALTER TABLE playerskins
ADD COLUMN peddata TEXT;
```

This allows migration without deleting existing appearance data.

---

# Ped Data Integration

Unlike Illenium Appearance, XDEV introduces:

```text id="x8m4vq"
peddata
```

to improve:

* custom ped support
* addon ped rebuilding
* synchronization reliability

---

# Reload Compatibility

The resource includes reload workflows specifically to help reduce:

```text id="f4x9mr"
missing tattoos
overlay desync
prop loss
component desync
```

after migration or menu rebuilding.

---

# Cache Differences

Illenium may internally cache appearance states during menu usage.

XDEV instead focuses on:

```text id="u6m2tw"
rebuilding appearance directly from synchronized structures
```

to improve long-term consistency.

---

# Migration Recommendations

Recommended migration workflow:

```text id="m7x5vq"
1. Extend existing SQL tables
2. Enable compatibility events
3. Verify tattoo rebuilding
4. Verify overlay synchronization
5. Verify ped rebuilding
6. Remove old dependencies gradually
```

---

# Common Migration Issues

Typical migration-related issues include:

```text id="r8m3tx"
tattoo overlays not rebuilding
cached appearance states
custom ped incompatibility
old overlay structures
```

Most issues are caused by old cached appearance logic rather than database structures.

---

# Developer Notes

XDEV intentionally avoids fully copying Illenium internals.

Instead, the system focuses on:

```text id="z5x9mq"
compatibility
conversion
rebuilding
migration support
```

while still using its own modular architecture.
