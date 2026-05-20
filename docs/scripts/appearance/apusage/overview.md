---
title: Usage Overview
sidebar_position: 1
---

# Usage Overview

This section explains how the XDEV Appearance system behaves during actual gameplay usage.

Unlike configuration sections, this category focuses on:

- player workflows
- menu behavior
- synchronization behavior
- appearance handling
- outfit usage
- tattoo workflows
- cache systems

---

# Supported Menus

XDEV Appearance includes multiple specialized menus.

Supported menu categories:

```text id="n4m7wr"
Clothing Menu
Barber Menu
Surgeon Menu
Tattoo Menu
Outfit Menu
````

Each menu operates independently while still sharing the same appearance structure internally.

---

# Freemode Workflow

The system is primarily designed around freemode models:

```text id="r2x8mq"
mp_m_freemode_01
mp_f_freemode_01
```

These support:

* full customization
* overlays
* tattoos
* face editing
* clothing systems
* barber systems

---

# Custom Ped Workflow

Custom/addon peds are also supported.

Depending on ped type, the system may rely on:

```text id="f5m9tx"
peddata
```

for rebuilding appearance states.

---

# Appearance Synchronization

The system internally synchronizes:

```text id="z7v2mk"
components
props
overlays
tattoos
peddata
headblend
face features
```

This allows the resource to rebuild appearance data after:

* reconnects
* menu closes
* ped changes
* tattoo refreshes
* reload events

---

# Save Workflow

When the player saves appearance changes:

```text id="y3m8vr"
1. Current appearance is collected
2. Appearance is converted if necessary
3. Database data is updated
4. Appearance synchronization is triggered
5. Save events are fired
```

---

# Cancel Workflow

When appearance changes are cancelled:

```text id="w6x4tp"
1. Previous appearance is restored
2. Temporary changes are discarded
3. Tattoos are refreshed
4. Components are rebuilt
```

No database changes are applied.

---

# Outfit Workflow

The outfit system supports:

* outfit saving
* outfit loading
* outfit deleting
* outfit sharing
* outfit code systems

Depending on server implementation.

---

# Tattoo Workflow

Tattoo handling includes:

```text id="u4m9xq"
zone filtering
opacity control
overlay rebuilding
tattoo refresh
compatibility conversion
```

The system rebuilds tattoos automatically during synchronization events.

---

# Cache Workflow

The face cache system allows players to:

* save face structure
* restore previous face data
* reuse character identities
* preserve facial appearance

The cache system primarily stores:

```text id="m2x7vt"
head blend
face features
head overlays
eye color
```

without affecting clothing data.

---

# Compatibility Workflows

XDEV Appearance supports compatibility handling for:

* qb-clothing
* illenium-appearance
* legacy appearance systems

through internal converters and synchronization layers.

---

# UI Behavior

The UI supports:

* category switching
* live previews
* tattoo searching
* opacity sliders
* component previews
* clothing removal
* information panels

---

# Internal Event Flow

The system internally triggers events during:

```text id="k8m3wp"
menu open
menu close
appearance save
appearance cancel
ped changes
skin loading
outfit save
outfit delete
```

These events may be used by developers for integrations.

---

# Universal Architecture

The system was intentionally designed to remain:

```text id="p9x4mq"
framework-independent
modular
override-friendly
compatibility-focused
```

This allows easier integration into existing servers.

---

# Recommended Reading Order

Recommended usage documentation order:

```text id="x3v8tr"
1. Clothing Menu
2. Barber & Surgeon
3. Tattoo Menu
4. Outfit System
5. Uniform System
6. Face Cache
```