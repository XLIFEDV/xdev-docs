---
title: Tattoo Menu
sidebar_position: 4
---

# Tattoo Menu

The tattoo menu handles all tattoo-related workflows inside XDEV Appearance.

This system supports:

- tattoo previews
- tattoo opacity
- tattoo categories
- tattoo searching
- tattoo synchronization
- tattoo rebuilding

---

# Freemode Requirement

The tattoo system requires freemode models:

```text id="m7x2tw"
mp_m_freemode_01
mp_f_freemode_01
````

Custom/addon peds may not support GTA overlay tattoos correctly.

---

# Tattoo Zones

Supported tattoo zones:

```text id="r5m9vq"
ZONE_HEAD
ZONE_TORSO
ZONE_LEFT_ARM
ZONE_RIGHT_ARM
ZONE_LEFT_LEG
ZONE_RIGHT_LEG
```

These zones are used for:

* filtering
* organization
* rebuilding
* synchronization

---

# Tattoo Categories

The UI automatically groups tattoos by zone.

Example workflow:

```text id="w3x8mt"
1. Select zone
2. Browse tattoos
3. Preview tattoo
4. Adjust opacity
5. Save appearance
```

---

# Live Preview System

Tattoo previews are applied instantly during selection.

The system internally:

```text id="f8m4vr"
1. Clears overlays
2. Rebuilds active tattoos
3. Applies preview tattoo
4. Updates opacity
```

This allows accurate real-time previews.

---

# Tattoo Search

The tattoo menu includes a search/filter system.

Supported search targets:

```text id="u2m7tx"
label
name
```

Example:

```text id="h6x3mq"
Pirate Skull
TAT_BB_021
```

This improves navigation across large tattoo collections.

---

# Opacity Support

The tattoo system supports adjustable opacity.

Internal range:

```text id="j9m5vr"
0.0 -> 1.0
```

UI systems may internally display:

```text id="v4x8tm"
0 -> 100
```

and automatically normalize values.

---

# Tattoo Save Structure

Saved tattoo example:

```lua id="p7m2vx"
tattoos = {
    ZONE_HEAD = {
        {
            name = "TAT_BB_021",
            opacity = 0.4
        }
    }
}
```

---

# Internal Tattoo Workflow

When tattoos are applied:

```text id="n3x7wr"
1. Existing overlays are cleared
2. Saved tattoos are rebuilt
3. Tattoo hashes are resolved
4. Overlays are applied
5. Opacity values are synchronized
```

---

# Tattoo Refresh System

The resource includes a full tattoo refresh workflow.

This is used after:

```text id="d8m4vq"
ped reloads
appearance saves
ped switching
menu closing
reconnects
```

Purpose:

* prevent overlay loss
* prevent desync
* restore tattoo states

---

# Save Workflow

When tattoos are saved:

```text id="y5x9mr"
1. Tattoo state is collected
2. Opacity values are normalized
3. Tattoo structure is synchronized
4. Database save is triggered
```

---

# Cancel Workflow

When changes are cancelled:

```text id="f2m8tw"
previous tattoo state is restored
```

including:

* active tattoos
* opacity values
* zone data

---

# Compatibility Support

The tattoo system supports compatibility workflows for:

* Illenium Appearance
* legacy tattoo structures
* simplified tattoo formats

through internal converters.

---

# Illenium-Compatible Structure

Example compatible structure:

```lua id="q8x4mv"
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

# XDEV Internal Structure

Internally, XDEV may also rebuild tattoos using simplified structures.

Example:

```lua id="z4m7tx"
{
    value = "TAT_BB_021",
    opacity = 35
}
```

depending on synchronization stage.

---

# Synchronization Notes

The system intentionally separates:

```text id="m6x2vq"
skin
tattoo
peddata
```

This architecture improves tattoo rebuilding reliability after:

* model changes
* reconnects
* menu rebuilds
* compatibility conversions

---

# Common Desync Causes

Typical tattoo desync causes include:

```text id="t9m4wr"
non-freemode peds
overlay clearing
incomplete rebuilds
external appearance systems
cached appearance states
```

The refresh workflow exists specifically to reduce these issues.

---

# Recommended Workflow

Recommended player workflow:

```text id="b7x5mt"
1. Open tattoo menu
2. Select zone
3. Search/select tattoo
4. Adjust opacity
5. Preview tattoo
6. Save or cancel
```

---

# Developer Notes

Unlike many tattoo systems, XDEV rebuilds tattoos independently from clothing synchronization.

Purpose:

```text id="u4m8vq"
better overlay stability
cleaner rebuild logic
compatibility support
ped synchronization reliability
```