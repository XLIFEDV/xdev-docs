---
title: Outfit System
sidebar_position: 5
---

# Outfit System

The outfit system allows players to:

- save outfits
- load outfits
- delete outfits
- preview outfits
- share outfits
- synchronize appearance states

The system operates independently from full appearance saves.

---

# Outfit Purpose

Outfits are intended to store:

```text id="w3m8tr"
clothing
props
accessories
````

without modifying:

```text id="x7v2mq"
face features
head blend
hair
overlays
tattoos
```

This allows players to change clothing while preserving identity data.

---

# Saved Outfit Data

Outfits internally store:

```text id="f5m9wr"
components
props
model
```

Example database fields:

```text id="u2x7mt"
props
components
```

inside:

```text id="r8m4vq"
player_outfits
```

---

# Outfit Workflow

Typical workflow:

```text id="z4x9mr"
1. Open outfit menu
2. Save outfit
3. Load outfit later
4. Delete outfit if necessary
```

---

# Outfit Saving

When saving an outfit:

```text id="p6m2vx"
1. Current clothing state is collected
2. Components are extracted
3. Props are extracted
4. Outfit data is saved
5. Save event is triggered
```

---

# Outfit Loading

When loading an outfit:

```text id="h7x4tw"
1. Outfit data is retrieved
2. Components are rebuilt
3. Props are rebuilt
4. Appearance synchronization runs
```

The system automatically refreshes the ped appearance.

---

# Outfit Deleting

Players may delete outfits directly through the UI.

Delete workflow:

```text id="q9m5vr"
1. Confirmation dialog opens
2. Outfit entry is removed
3. Delete event is triggered
```

---

# Outfit Confirmation UI

The resource includes built-in confirmation dialogs.

Example:

```lua id="n3x8mq"
delete_confirm = {
    title = "DANGER!",
    description = "Saved outfit will be deleted permanently.",
    confirm = "Delete",
    cancel = "Cancel"
}
```

---

# Outfit IDs

Each outfit includes a unique identifier.

Example field:

```text id="d4m7tx"
outfitId
```

This allows:

* outfit sharing
* external systems
* synchronization
* code systems

---

# Outfit Codes

Optional outfit code support exists through:

```text id="v8x2wr"
player_outfit_codes
```

This may be used for:

* outfit sharing
* community presets
* imports
* external outfit systems

depending on server implementation.

---

# Freemode Support

Full outfit compatibility is recommended on:

```text id="m5x9vq"
mp_m_freemode_01
mp_f_freemode_01
```

These provide complete GTA clothing support.

---

# Custom Ped Support

Custom/addon ped support depends on:

```text id="r2m8tx"
peddata
```

Some addon peds may not fully support:

* components
* props
* clothing rebuilding

depending on ped structure.

---

# Outfit Synchronization

The system internally synchronizes:

```text id="y6x3mr"
components
props
peddata
```

after outfit loading.

Purpose:

* reduce desync
* rebuild appearance
* refresh clothing states

---

# Outfit Events

The resource exposes outfit-related events.

Examples:

```lua id="u7m4vq"
sendEvent('system:OnOutfitSave')
sendEvent('system:OnOutfitDelete')
```

Useful for:

* logging systems
* wardrobe systems
* Discord integrations
* external synchronization

---

# Outfit Limits

Outfit limits may be controlled externally depending on server logic.

Examples:

```text id="k8x5mt"
VIP restrictions
job-based limits
database limits
custom monetization
```

---

# Universal Structure

The outfit system intentionally uses a lightweight structure.

Purpose:

```text id="t4m9vr"
compatibility
easy migration
framework independence
simple synchronization
```

---

# Recommended Workflow

Recommended player workflow:

```text id="g3x7mq"
1. Customize appearance
2. Save outfit
3. Load when needed
4. Delete unused outfits
```

---

# Developer Notes

Unlike full appearance saves, outfits intentionally avoid storing:

```text id="f9m2tx"
head blend
face features
hair
tattoos
```

This prevents identity overwrites during clothing swaps.