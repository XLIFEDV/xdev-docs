---
title: Store Configuration
sidebar_position: 8
---

# Store Configuration

Store locations are configured inside:

```text id="z3m8fq"
shared/data/stores.lua
````

This system controls all interaction locations related to:

* clothing shops
* barber shops
* surgeon locations
* tattoo shops

---

# Store System Philosophy

The store system was designed to be:

* lightweight
* framework-independent
* easy to extend
* compatible with multiple interaction systems

The resource internally handles:

* marker rendering
* interaction checks
* menu opening
* distance validation

---

# Store Categories

Supported store types:

```text id="u6p4rh"
clothing
barber
surgeon
tattoo
```

Each category may contain multiple locations.

---

# Basic Structure

Example structure:

```lua id="f8q2tz"
Config.Stores = {
    clothing = {
        {
            coords = vector3(72.3, -1399.1, 29.3)
        }
    }
}
```

---

# Coordinates

Each store requires coordinates.

Example:

```lua id="v4k9xm"
coords = vector3(x, y, z)
```

These coordinates define:

* interaction position
* marker position
* menu activation area

---

# Multiple Locations

Each category supports unlimited locations.

Example:

```lua id="q7y5nw"
Config.Stores.clothing = {
    {
        coords = vector3(72.3, -1399.1, 29.3)
    },

    {
        coords = vector3(1693.2, 4822.1, 42.0)
    }
}
```

---

# Clothing Shops

Clothing shops provide access to:

* clothing customization
* props
* accessories
* outfit systems

Menu type:

```text id="s6v2jk"
clothing
```

---

# Barber Shops

Barber shops provide access to:

* hair
* beard
* overlays
* makeup
* face overlays

Menu type:

```text id="r8n4xm"
barber
```

---

# Surgeon Shops

Surgeon locations provide access to:

* facial structure editing
* head blend editing
* face features
* eye customization

Menu type:

```text id="m2p7vy"
surgeon
```

---

# Tattoo Shops

Tattoo locations provide access to:

* tattoo categories
* tattoo previews
* tattoo opacity editing
* tattoo saving

Menu type:

```text id="w1f9cq"
tattoo
```

---

# Marker System

The resource internally handles marker rendering.

Depending on implementation, stores may display:

* markers
* 3D text
* prompts
* interaction hints

Developers may override this behavior if desired.

---

# Distance Validation

The resource validates interaction distance before opening menus.

Purpose:

* prevent remote triggering
* improve synchronization
* improve interaction consistency

---

# Framework Independence

The store system does not require:

* qb-target
* ox_target
* third-party interaction systems

However, developers may integrate custom interaction systems manually.

---

# Custom Interaction Systems

Developers may:

* disable internal markers
* replace interaction handling
* integrate targeting systems
* use custom UI prompts

through overrides or custom integrations.

---

# Recommended Workflow

Recommended setup:

```text id="h4v6tr"
1. Configure store positions
2. Verify interaction range
3. Verify menu opening
4. Verify pricing system
5. Verify synchronization
```

---

# Developer Notes

The store system intentionally avoids framework-specific interaction logic.

This allows easier integration with:

* standalone servers
* QBCore
* custom frameworks
* target systems
* custom interaction handlers