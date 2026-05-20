---
title: Opposite Mapping
sidebar_position: 12
---

# Opposite Mapping

The opposite mapping system allows developers to define equivalent values between:

- male clothing
- female clothing

and optionally between other appearance categories.

Configuration is located inside:

```text id="m4x8rv"
shared/data/opposites.lua
````

---

# System Purpose

The system was designed to help with:

* gender switching
* UI previews
* opposite outfit suggestions
* clothing synchronization
* compatibility workflows

It does NOT automatically swap clothing unless implemented manually.

---

# Basic Structure

Example:

```lua id="x2n9wt"
Config.Opposites = {
    mask = {
        {30, 20},
        {31, 21},
    }
}
```

---

# Mapping Format

Each entry uses:

```lua id="k7m4vz"
{ maleValue, femaleValue }
```

Example:

```lua id="d5x8tp"
{30, 20}
```

Meaning:

```text id="w9m3rx"
male drawable 30
=
female drawable 20
```

---

# Supported Categories

Supported clothing categories:

```text id="q8v2mk"
mask
hair
arms
t-shirt
torso2
vest
decals
pants
shoes
bag
hat
glass
ear
watch
bracelet
accessory
```

---

# Supported Face Categories

Supported appearance categories:

```text id="y4m7tx"
facemix
face
face2
eyebrows
beard
blush
lipstick
makeup
ageing
eye_color
moles
```

---

# Supported Face Feature Categories

Supported facial feature mappings:

```text id="u2x8rv"
nose_0
nose_1
nose_2
nose_3
nose_4
nose_5

cheek_1
cheek_2
cheek_3

eye_opening
lips_thickness

jaw_bone_width
jaw_bone_back_length

eyebrown_high
eyebrown_forward

chimp_bone_lowering
chimp_bone_length
chimp_bone_width
chimp_hole

neck_thickness
```

---

# Example Clothing Mapping

Example:

```lua id="r5m9vx"
pants = {
    {10, 5},
}
```

Meaning:

```text id="t7x3mr"
male pants drawable 10
=
female pants drawable 5
```

---

# Example Prop Mapping

Example:

```lua id="f8m2wr"
hat = {
    {15, 8},
}
```

Useful when:

* male/female props use different drawable indexes
* addon packs use separate models
* uniforms differ by gender

---

# UI Integration

The opposite mapping system is primarily intended for:

* preview systems
* automatic suggestions
* conversion helpers
* synchronization workflows

The resource may display opposite values inside the UI.

---

# Automatic Conversion

The system intentionally does NOT force automatic conversion internally.

Purpose:

* prevent broken outfits
* avoid incorrect mappings
* preserve developer control
* support custom logic

Developers may implement their own conversion behavior if desired.

---

# Recommended Usage

Recommended use cases:

```text id="h4v8mq"
gender switching
uniform synchronization
addon clothing compatibility
automatic outfit rebuilding
```

---

# Addon Clothing Support

Addon clothing packs frequently use different drawable indexes between genders.

The opposite mapping system helps solve:

```text id="p6x2tr"
male drawable mismatch
female drawable mismatch
```

without hardcoding logic inside protected files.

---

# Framework Independence

The opposite system is completely standalone.

It does not depend on:

* QBCore
* ESX
* Illenium
* external appearance systems

---

# Developer Notes

Most appearance systems completely ignore gender-equivalent clothing relationships.

XDEV provides a dedicated mapping layer to simplify:

* future compatibility systems
* automatic converters
* outfit migration workflows
* custom synchronization systems

---

# Recommended Workflow

Recommended workflow:

```text id="n3v7wx"
1. Identify matching male/female values
2. Create opposite mappings
3. Test gender switching
4. Verify texture compatibility
5. Verify addon clothing behavior
```