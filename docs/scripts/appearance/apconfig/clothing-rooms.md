---
title: Clothing Rooms
sidebar_position: 9
---

# Clothing Rooms

The clothing room system allows developers to create restricted outfit areas for:

- jobs
- gangs
- organizations
- departments
- factions

Configuration is located inside:

```text id="j7x5rm"
shared/data/clothing_rooms.lua
````

---

# System Purpose

Clothing rooms are primarily used for:

* police lockers
* EMS lockers
* gang outfit rooms
* faction uniforms
* restricted clothing areas

The system supports both:

* public clothing rooms
* restricted clothing rooms

---

# Supported Area Types

The resource supports:

```text id="y3v6nk"
radius
poly
```

---

# Radius Areas

Circular interaction zones.

Example:

```lua id="u5r8xm"
{
    areaType = 'radius',
    coords = vector3(480.7, -1010.5, 30.6),
    radius = 5.0
}
```

Best for:

* locker rooms
* small outfit stations
* interiors
* compact areas

---

# Poly Areas

Polygon-based interaction zones.

Example:

```lua id="t9w4zp"
{
    areaType = 'poly',
    points = {
        vector2(1.0, 1.0),
        vector2(5.0, 1.0),
        vector2(5.0, 5.0),
        vector2(1.0, 5.0)
    }
}
```

Best for:

* large interiors
* custom buildings
* complex interaction zones

---

# Basic Structure

Example configuration:

```lua id="k4m7xy"
{
    gender = 'male',
    requiredJob = 'police',
    isGang = false,

    areaType = 'radius',
    coords = vector3(480.7, -1010.5, 30.6),
    radius = 5.0
}
```

---

# Gender Restrictions

Supported values:

```text id="r6n2vp"
male
female
```

If omitted:

```text id="m8x4jr"
both genders may access
```

---

# Job Restrictions

Example:

```lua id="f5v9zk"
requiredJob = 'police'
```

Only players with the specified job may access the clothing room.

---

# Gang Restrictions

Example:

```lua id="q2w8mt"
requiredJob = 'ballas',
isGang = true
```

When:

```lua id="v7m3xr"
isGang = true
```

the system validates gang data instead of job data.

---

# Public Rooms

If:

```lua id="a9x5qn"
requiredJob = nil
```

the room becomes public.

No restriction checks are applied.

---

# Blip System

Clothing rooms support optional blips.

---

# Simple Blip

Example:

```lua id="n4v7pt"
blip = true
```

Uses default blip settings.

---

# Advanced Blip

Example:

```lua id="u8x2mk"
blip = {
    active = true,
    sprite = 73,
    color = 3,
    scale = 0.7,
    label = 'Police Locker'
}
```

---

# Supported Blip Fields

Supported configuration:

```text id="y7m4cq"
active
coords
sprite
color
scale
label
display
shortRange
```

---

# Blip Coordinates

Custom blip positions may be used.

Example:

```lua id="z3n8wv"
blip = {
    coords = vector3(x, y, z)
}
```

If omitted:

```text id="j5x7lp"
main room coordinates are used
```

---

# Uniform System Integration

Clothing rooms integrate directly with:

```text id="w6p9fr"
shared/data/outfits.lua
```

The system automatically loads matching:

* job outfits
* gang outfits
* grade outfits
* gender outfits

---

# Grade Support

The system supports grade-based outfits.

Example:

```lua id="h2x8tm"
['male'] = {
    [0] = { ... },
    [1] = { ... },
    [2] = { ... }
}
```

Different grades may receive different uniforms.

---

# Framework Independence

The clothing room system intentionally avoids hardcoded framework logic.

Developers may replace:

* permission handling
* interaction logic
* room validation
* blip handling

through overrides or integrations.

---

# Recommended Usage

Recommended for:

```text id="f1m9zc"
police
ambulance
mechanic
gangs
factions
organizations
```

---

# Developer Notes

The clothing room system was designed separately from clothing stores.

Purpose:

* better roleplay control
* restricted outfit handling
* cleaner organization support
* framework-independent permissions