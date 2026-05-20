---
title: Ped Configuration
sidebar_position: 7
---

# Ped Configuration

XDEV Appearance supports both:

- freemode peds
- addon/custom peds

The system was designed to operate beyond standard freemode-only workflows.

---

# Ped Data File

Ped definitions are located inside:

```text id="v2m7rk"
shared/data/peds.lua
````

This file controls:

* ped labels
* ped models
* ped categories
* ped availability

---

# Supported Ped Types

---

# Freemode Peds

Default GTA freemode models:

```text id="w7p3cl"
mp_m_freemode_01
mp_f_freemode_01
```

These support:

* full clothing editing
* overlays
* tattoos
* barber systems
* face editing
* component swapping

---

# Custom / Addon Peds

Addon peds may also be used.

Examples:

```text id="d4x8qe"
ig_bankman
s_m_y_swat_01
custompedname
```

Custom peds rely heavily on:

```lua id="f5n9xb"
peddata
```

for synchronization.

---

# Ped Data System

Unlike most appearance systems, XDEV stores additional ped information separately.

Database field:

```text id="r8v2jm"
peddata
```

Purpose:

* preserve addon ped appearance
* support custom components
* synchronize non-freemode structures
* rebuild custom ped states

---

# Freemode Detection

The resource internally checks:

```lua id="z3w6np"
IsFreemodeModel(model)
```

Behavior changes depending on result.

---

# Freemode Workflow

If the model is freemode:

```text id="n7c2ky"
- clothing system enabled
- overlays enabled
- tattoos enabled
- barber enabled
- face editing enabled
```

---

# Custom Ped Workflow

If the model is NOT freemode:

```text id="y1f5rw"
- peddata synchronization used
- custom appearance rebuild used
- fallback component logic used
```

Some systems may be limited depending on ped structure.

---

# Appearance Synchronization

When changing peds, the system automatically rebuilds appearance data.

Internal synchronization includes:

* components
* props
* tattoos
* peddata
* overlays
* fallback appearance states

---

# Ped Change Event

The system exposes a ped change event.

Example:

```lua id="t9v4pa"
sendEvent('system:OnPedChanged')
```

Useful for:

* custom integrations
* framework synchronization
* inventory systems
* weapon systems
* animation systems

---

# Compatibility Notes

Freemode peds provide the highest compatibility.

Custom peds may require:

* custom clothing mappings
* peddata adjustments
* manual synchronization
* additional integration logic

depending on server setup.

---

# Recommended Usage

Recommended for full feature support:

```text id="k2m8dz"
mp_m_freemode_01
mp_f_freemode_01
```

Recommended for RP/event/custom usage:

```text id="h6w3fr"
addon/custom peds
```

with peddata support enabled.

---

# Admin Ped Support

The resource includes a built-in ped command system.

Example:

```text id="b8x5tm"
/giveped
```

This allows administrators to:

* assign peds
* test ped compatibility
* apply temporary ped states

---

# Developer Notes

Most appearance systems only support freemode workflows.

XDEV Appearance intentionally separates:

```text id="q5v7yc"
skin
tattoo
peddata
```

to improve custom ped compatibility.

This architecture allows the system to rebuild appearance data more safely during ped transitions.