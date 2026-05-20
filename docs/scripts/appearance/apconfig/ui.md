---
title: UI Configuration
sidebar_position: 3
---

# UI Configuration

UI-related settings are controlled through:

```text id="4znz2z"
shared/config.lua
````

The UI system was designed around:

* keyboard-focused navigation
* low dependency usage
* developer customization
* modular interaction handling

---

# UI Structure

Main UI configuration:

```lua id="w5efya"
Config.UI = {}
```

This section controls:

* hotkeys
* interaction delays
* utility actions
* information panels
* clothing interaction systems

---

# Hotkey Delay

Configuration:

```lua id="m8jv7u"
Config.UI.HotkeyDelay = 500
```

Defines the delay (in milliseconds) before UI hotkeys become active after opening the menu.

Purpose:

* prevents accidental key presses
* prevents held keys from triggering actions immediately
* improves menu stability

---

# Flashlight System

Configuration:

```lua id="q4tkn3"
Config.UI.EnableFlashlight = true
```

Enables the flashlight utility button inside the appearance menu.

This allows players to illuminate darker areas while customizing characters.

---

# Hands Up System

Configuration:

```lua id="b5x3cs"
Config.UI.EnableHandsUp = true
```

Enables the hands-up action inside the menu.

Useful for:

* checking torso clothing
* checking accessories
* viewing side details

---

# Information Panel

Configuration:

```lua id="md9r7g"
Config.UI.EnableInfoPanel = true
```

Controls the built-in information/help panel.

The panel may contain:

* hotkey information
* interaction explanations
* menu usage hints
* developer-provided instructions

---

# Clothes-Off System

Configuration:

```lua id="lj2x8u"
Config.UI.EnableClothesOff = true
```

Enables the clothing removal system.

This allows players to:

* remove clothing pieces
* preview fallback clothing
* temporarily hide components

The system uses fallback clothing values configured inside:

```text id="4e0fkr"
shared/data/outfits.lua
```

---

# Menu Architecture

The UI internally separates systems into multiple menu groups.

Examples:

* clothing
* barber
* surgeon
* tattoos
* outfits
* accessories

Each section operates independently.

---

# NUI Structure

UI files are located inside:

```text id="n9lv6f"
ui/
```

Main files:

```text id="j0r3tm"
ui/index.html
ui/css/style.css
ui/javascript/main.js
```

---

# HTML Structure

Main interface container:

```html id="z0efxl"
<div class="appearances">
    <div class="buttons"></div>
    <div class="appearance"></div>
</div>
```

The interface dynamically builds menu elements using JavaScript.

---

# Character Area

The UI includes an interactive body area system.

Example:

```html id="h5m6vx"
<div id="character_area" class="character_area">
```

This system is used for:

* body-part selection
* camera focusing
* quick navigation

---

# Question / Confirmation System

The UI includes a built-in confirmation system.

Used for:

* save confirmations
* cancel confirmations
* cache confirmations
* delete confirmations

Example workflow:

```text id="q9k5tl"
Apply
Cancel
Delete
Confirm
```

---

# Cache Confirmation UI

The face cache system uses a dedicated confirmation dialog.

Supported actions:

* apply cached data
* cancel
* delete saved cache

This system is fully translatable through locale files.

---

# Localization Support

The UI supports multi-language translation through:

```text id="n3a5zh"
shared/language/*
```

Supported languages:

* Turkish
* English
* Spanish
* German
* French
* Russian

---

# Keyboard Navigation

The UI was primarily designed for keyboard usage.

Examples:

* enter
* backspace
* arrow navigation
* hotkey actions

The hotkey delay system exists specifically to improve keyboard stability.

---

# Styling

Main UI styling is located inside:

```text id="e7zq0v"
ui/css/style.css
```

Developers may customize:

* colors
* layout
* spacing
* transitions
* glow effects
* panel positioning

---

# JavaScript Logic

Main UI behavior is controlled through:

```text id="l6k4cx"
ui/javascript/main.js
```

This includes:

* menu rendering
* button handling
* NUI callbacks
* animations
* interaction logic

---

# Recommended Customization Workflow

Recommended editing order:

```text id="l7v1pr"
1. config.lua
2. language files
3. style.css
4. main.js
```

Avoid modifying protected gameplay logic unless necessary.