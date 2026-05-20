---
title: System Configuration
sidebar_position: 2
---

# System Configuration

The main system behavior is controlled through:

```text id="i8r2j9"
shared/config.lua
````

This section explains the core configuration systems used by XDEV Appearance.

---

# System Structure

Main system configuration:

```lua id="gm9k4x"
Config.System = {}
```

This section controls:

* appearance saving
* outfit systems
* cache systems
* compatibility modes
* command systems
* conversion systems

---

# Skin Format System

The resource supports multiple appearance structures.

Configuration:

```lua id="mb8j6a"
Config.System.UseSystemSkinFormat = true
```

---

# Behavior

## true

Uses the XDEV appearance structure.

The resource saves:

* skin
* tattoo
* peddata
* outfit structures

using the internal XDEV workflow.

---

## false

Uses Illenium-compatible appearance formatting.

The system automatically converts:

* overlays
* components
* props
* tattoos
* face data

between structures internally.

This mode exists primarily for compatibility and migration support.

---

# Internal Conversion Workflow

Regardless of database structure, the resource internally works with the XDEV structure.

When compatibility mode is enabled:

```text id="t6v0lu"
External Format
        ↓
Internal Conversion
        ↓
XDEV Workflow
        ↓
Save Conversion
        ↓
Database
```

This allows:

* migration without wipes
* hybrid compatibility
* automatic structure translation

---

# Tattoo System

Tattoo behavior is handled separately from skin data.

The system stores:

```lua id="x8o1b0"
skin
tattoo
peddata
```

independently.

This allows:

* tattoo rebuilding
* compatibility conversions
* partial refresh systems
* tattoo synchronization

---

# Face Cache System

The resource includes a face cache system.

This system stores:

* face blend data
* facial structure
* overlays
* facial appearance settings

independently from clothing.

Purpose:

* preserve character identity
* restore face structures
* allow outfit switching without losing face data

---

# Cache Confirmation System

When applying cached face data, the system can display a confirmation dialog.

The player may:

* apply cached data
* cancel the operation
* delete cached data

This behavior is fully configurable.

---

# Outfit System

The outfit system supports:

* personal outfits
* job outfits
* gang outfits
* outfit sharing
* outfit codes

Supported formats:

* XDEV format
* Illenium-compatible format

---

# Outfit Sharing Codes

Outfit codes are stored inside:

```text id="v1dl8q"
player_outfit_codes
```

This allows:

* outfit importing
* public outfit sharing
* external outfit systems

---

# Ped System

The resource supports:

* freemode peds
* addon peds
* custom ped structures

Additional ped data is stored separately through:

```lua id="h1bz7p"
peddata
```

This allows better synchronization for custom ped systems.

---

# Command System

Command behavior is fully configurable.

Example:

```lua id="dmpyfr"
Config.System.commands = {
    reloadSelf = {
        enabled = true,
        name = "reload"
    }
}
```

The system supports:

* permission control
* command renaming
* command disabling

---

# Event System

The resource includes configurable event hooks.

Example:

```lua id="bw5w9n"
Config.Events.ClientSide.system = {
    OnMenuOpen = true,
    OnMenuClose = true
}
```

These events may operate as:

* disabled
* local-only
* cross-side synchronized

depending on configuration values.

---

# Pricing System

The pricing system supports:

* clothing pricing
* barber pricing
* tattoo pricing
* outfit pricing

Pricing behavior may include:

* base prices
* extra costs
* ignored categories
* maximum limits

---

# Compatibility Layer

Compatibility systems are handled separately from the core workflow.

Included integrations:

* qb-clothing
* illenium-appearance

The resource can emulate external workflows while still operating internally using XDEV structures.

---

# Recommended Usage

Recommended setup for new servers:

```lua id="fq88vj"
Config.System.UseSystemSkinFormat = true
```

Recommended setup for existing Illenium servers:

```lua id="w8o6ht"
Config.System.UseSystemSkinFormat = false
```

during migration periods.