---
title: Pricing Configuration
sidebar_position: 4
---

# Pricing Configuration

The pricing system controls all payment-related behavior inside XDEV Appearance.

Pricing configuration is located inside:

```text id="h9m2fr"
shared/config.lua
````

---

# Pricing Structure

Main pricing configuration:

```lua id="l6r1kt"
Config.System.Price = {}
```

This section controls:

* clothing prices
* barber prices
* tattoo prices
* outfit save prices
* outfit changer prices

---

# Clothing Pricing

Configuration:

```lua id="r1xj7f"
Config.System.Price.clothing = {
    enabled = true,
    basePrice = 50,
    extraCost = 10,
    maxPrice = false,
}
```

---

# Clothing Price Logic

The clothing system calculates prices dynamically.

Formula:

```text id="q7m9fw"
basePrice + changedItems * extraCost
```

Example:

```text id="g4b6ks"
basePrice = 50
extraCost = 10
3 clothing changes

Result:
50 + (3 * 10) = 80
```

---

# maxPrice

Configuration:

```lua id="w3c8jp"
maxPrice = 500
```

Purpose:

Limits the maximum possible clothing price.

If set to:

```lua id="e2m7yh"
false
```

no maximum limit is applied.

---

# Ignored Clothing Categories

The clothing system supports ignored categories.

Example:

```lua id="m8t5az"
ignore = {
    decals = true,
    bag = true,
    accessory = false,
}
```

Ignored categories do not increase the final clothing price.

Useful for:

* free accessories
* cosmetic-only items
* roleplay items

---

# Barber Pricing

Configuration:

```lua id="r8k1cw"
Config.System.Price.barber = {
    enabled = true,
    basePrice = 50,
    extraCost = 10,
    maxPrice = false,
}
```

Controls pricing for:

* hair
* beard
* makeup
* overlays
* face appearance edits

---

# Tattoo Pricing

Configuration:

```lua id="q6f4my"
Config.System.Price.tattoo = {
    enabled = true,
    basePrice = 0,
    extraCost = 25,
    maxPrice = false,
}
```

Tattoo pricing is calculated per tattoo change.

Useful for:

* realistic tattoo progression
* premium tattoo systems
* economy balancing

---

# Outfit Save Pricing

Configuration:

```lua id="s2k9nd"
Config.System.Price.saveoutfit = 0
```

Controls the cost of saving outfits.

If set to:

```lua id="h5t7wr"
0
```

saving outfits becomes free.

---

# Outfit Changer Pricing

Configuration:

```lua id="k7x4lt"
Config.System.Price.outfitchanger = 0
```

Controls pricing for outfit changing systems.

Useful for:

* clothing room systems
* wardrobe systems
* premium outfit switching

---

# Money Removal Logic

Actual money removal is handled through overrides.

Default override:

```lua id="a3f6vq"
function Config.Override.ServerSide.Functions.RemoveMoney(src, price)
    return false
end
```

Developers must connect this to their economy framework.

---

# Payment Result Behavior

Expected returns:

```lua id="x9c5ju"
true  -> payment successful
false -> payment failed
```

If payment fails:

* the action is blocked
* the appearance change is cancelled
* a notification may be shown

---

# Dynamic Pricing Philosophy

The pricing system was intentionally designed to be flexible.

Developers may create:

* free servers
* realistic economy servers
* premium customization servers
* roleplay-focused pricing systems

without modifying protected files.

---

# Recommended Usage

Recommended lightweight setup:

```lua id="d7z0mx"
basePrice = 0
extraCost = 0
```

Recommended economy-focused setup:

```lua id="n5y2ck"
basePrice = 50
extraCost = 15
maxPrice = 500
```