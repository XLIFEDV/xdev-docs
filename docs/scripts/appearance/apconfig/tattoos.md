---
title: Tattoo Configuration
sidebar_position: 11
---

# Tattoo Configuration

The tattoo system controls:

- tattoo definitions
- tattoo labels
- tattoo collections
- tattoo zones
- tattoo compatibility data

Configuration is located inside:

```text id="j7v2mk"
shared/data/tattoos.lua
````

---

# System Purpose

The tattoo system was designed to support:

* freemode tattoos
* opacity control
* tattoo synchronization
* compatibility conversions
* external appearance structures

The system operates independently from clothing data.

---

# Structure Overview

Main structure:

```lua id="p4m8vx"
Config.Tattoos = {}
```

Example:

```lua id="x7n3tr"
Config.Tattoos = {
    ZONE_TORSO = {
        {
            name = "TAT_AR_000",
            label = "Turbulence",
            hashMale = "MP_Airraces_Tattoo_000_M",
            hashFemale = "MP_Airraces_Tattoo_000_F",
            zone = "ZONE_TORSO",
            collection = "mpairraces_overlays"
        }
    }
}
```

---

# Tattoo Zones

Supported zones:

```text id="f2x9mw"
ZONE_HEAD
ZONE_TORSO
ZONE_LEFT_ARM
ZONE_RIGHT_ARM
ZONE_LEFT_LEG
ZONE_RIGHT_LEG
```

These zones are used for:

* UI grouping
* tattoo filtering
* tattoo rebuilding
* compatibility conversion

---

# Tattoo Entry Structure

Each tattoo entry contains:

```lua id="v8m5rt"
{
    name = "",
    label = "",
    hashMale = "",
    hashFemale = "",
    zone = "",
    collection = ""
}
```

---

# name

Internal tattoo identifier.

Example:

```lua id="k4x7np"
name = "TAT_BB_021"
```

Used for:

* saving
* synchronization
* conversions
* rebuilding

---

# label

Display name shown inside the UI.

Example:

```lua id="w9m3tr"
label = "Pirate Skull"
```

---

# hashMale / hashFemale

Actual GTA tattoo overlay hashes.

Example:

```lua id="h5x8vw"
hashMale = "MP_Bea_M_Head_000"
hashFemale = "MP_Bea_F_Head_000"
```

Used internally during tattoo application.

---

# collection

Defines the GTA tattoo collection.

Example:

```lua id="m2v9rx"
collection = "mpbeach_overlays"
```

---

# Opacity Support

The system supports tattoo opacity.

Example saved structure:

```lua id="n8x3tv"
{
    name = "TAT_BB_021",
    opacity = 0.4
}
```

Opacity is internally normalized between:

```text id="p7m4vk"
0.0 -> 1.0
```

---

# Tattoo Save Structure

The XDEV tattoo structure supports:

```lua id="d6x9mr"
{
    ZONE_HEAD = {
        {
            name = "TAT_BB_021",
            opacity = 0.4
        }
    }
}
```

---

# Compatibility Structures

The system supports conversion between:

* XDEV tattoo structures
* Illenium-compatible structures

Example Illenium-compatible structure:

```lua id="u3v7qx"
{
    collection = "mpbeach_overlays",
    name = "TAT_BB_021",
    label = "Pirate Skull",
    zone = "ZONE_HEAD",
    hashFemale = "",
    hashMale = "MP_Bea_M_Head_000",
    opacity = 0.6
}
```

---

# Internal Tattoo Workflow

Internally the system:

```text id="y8m2wr"
1. Reads tattoo data
2. Rebuilds tattoo state
3. Clears existing overlays
4. Applies active tattoos
5. Synchronizes opacity
```

---

# Tattoo Refresh System

The resource includes a full tattoo refresh workflow.

Purpose:

* rebuild overlays
* prevent desync
* restore tattoos after ped changes
* synchronize compatibility data

This is especially important for:

* custom ped switching
* appearance reloads
* outfit rebuilding
* reconnect synchronization

---

# Freemode Requirement

Full tattoo support requires freemode peds:

```text id="t6x4mq"
mp_m_freemode_01
mp_f_freemode_01
```

Custom/addon peds may not support overlays properly.

---

# UI Features

The tattoo UI supports:

* category filtering
* opacity editing
* live previews
* tattoo search
* tattoo removal

---

# Tattoo Search

The UI includes built-in tattoo filtering.

Players may search tattoos by:

```text id="x2m8vr"
label
name
```

This improves navigation for large tattoo collections.

---

# Recommended Usage

Recommended workflow:

```text id="w4n9tx"
1. Configure tattoo definitions
2. Verify collections
3. Verify overlay hashes
4. Test opacity handling
5. Test synchronization
```

---

# Developer Notes

Unlike many appearance systems, XDEV separates:

```text id="z8m3vq"
skin
tattoo
peddata
```

This architecture improves:

* tattoo rebuilding
* compatibility workflows
* ped synchronization
* overlay stability