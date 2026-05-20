---
title: Configuration Overview
sidebar_position: 1
---

# Configuration Overview

XDEV Appearance was designed around a modular configuration structure.

Instead of placing every setting inside a single file, the system separates functionality into multiple categories.

This makes the resource easier to maintain, extend, and integrate into existing server environments.

---

# Configuration Structure

Main configuration files:

```text id="ib3lzi"
shared/config.lua
shared/data/*
shared/language/*
````

---

# Main Config File

The primary system settings are located inside:

```text id="pf4n0j"
shared/config.lua
```

This file contains:

* system settings
* UI settings
* event settings
* command settings
* override settings
* pricing settings
* compatibility settings

---

# Data Configuration Files

Additional data-driven systems are separated into dedicated files:

```text id="dqp7g8"
shared/data/clothing_rooms.lua
shared/data/opposites.lua
shared/data/outfits.lua
shared/data/peds.lua
shared/data/stores.lua
shared/data/tattoos.lua
```

These files are intended for easier large-scale editing.

---

# Language Files

Languages are separated into dedicated locale files:

```text id="bxkqec"
shared/language/tr.lua
shared/language/en.lua
shared/language/es.lua
shared/language/de.lua
shared/language/fr.lua
shared/language/ru.lua
```

The system supports dynamic locale loading internally.

---

# Configuration Categories

The configuration system is separated into several logical groups.

---

# System

Controls:

* save systems
* framework compatibility
* command systems
* database behavior
* conversion systems
* outfit systems
* cache systems

Documentation:

```text id="gjm6rj"
configuration/system.md
```

---

# UI

Controls:

* hotkeys
* interaction behavior
* flashlight
* hands up
* clothes-off system
* information panels

Documentation:

```text id="3pq6na"
configuration/ui.md
```

---

# Pricing

Controls:

* clothing prices
* barber prices
* tattoo prices
* outfit prices

Documentation:

```text id="jex1sm"
configuration/pricing.md
```

---

# Commands

Controls:

* command names
* permissions
* command activation states

Documentation:

```text id="h6o5ax"
configuration/commands.md
```

---

# Stores

Controls:

* clothing shop locations
* barber locations
* surgeon locations
* tattoo shop locations

Documentation:

```text id="ydjx4k"
configuration/stores.md
```

---

# Clothing Rooms

Controls:

* job outfit rooms
* gang outfit rooms
* restricted clothing areas
* polygon/radius zones

Documentation:

```text id="0jlmft"
configuration/clothing-rooms.md
```

---

# Outfits

Controls:

* default uniforms
* job outfits
* gang outfits
* grade-based outfits

Documentation:

```text id="yd7lbp"
configuration/outfits.md
```

---

# Tattoos

Controls:

* tattoo definitions
* tattoo collections
* tattoo labels
* tattoo categories

Documentation:

```text id="lmj8x5"
configuration/tattoos.md
```

---

# Opposites

Controls opposite clothing mappings between genders.

Used for:

* gender switching
* UI previews
* compatibility handling

Documentation:

```text id="jlwmv5"
configuration/opposites.md
```

---

# Override System

The resource supports extensive override functionality.

Developers can replace:

* notifications
* framework checks
* money handling
* walkstyle systems
* validation systems

without editing protected core files.

---

# Event System

The resource includes a configurable internal event system.

Both client-side and server-side hooks are supported.

Example:

```lua id="ng1g7h"
Config.Events.ClientSide.system = {
    OnMenuOpen = true,
    OnMenuClose = true
}
```

---

# Configuration Philosophy

The system was intentionally designed to avoid hardcoded framework logic.

Most internal behavior can be:

* overridden
* replaced
* disabled
* redirected

through configuration or overrides.