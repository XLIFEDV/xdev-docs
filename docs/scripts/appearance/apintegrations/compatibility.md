---
title: Compatibility
sidebar_position: 1
---

# Compatibility

XDEV Appearance was designed to operate as a universal appearance framework rather than a framework-locked clothing resource.

The system supports compatibility workflows for:

- QBCore
- qb-clothing
- illenium-appearance
- legacy appearance systems
- custom frameworks
- standalone environments

---

# System Philosophy

The resource intentionally separates:

```text
appearance logic
framework logic
UI logic
synchronization logic
````

This architecture allows easier integration into existing servers without requiring large rewrites.

---

# Internal Compatibility Layers

The resource internally includes:

```text
converter systems
event bridges
reload systems
ped synchronization
tattoo rebuilding
```

to improve migration compatibility.

---

# Supported Compatibility Targets

---

# QBCore

Native support exists for:

```text
QBCore player data
commands
permissions
job systems
gang systems
```

---

# qb-clothing

The system includes compatibility event bridges for:

```text
qb-clothing
```

Example compatibility events:

```lua
RegisterNetEvent('qb-clothing:client:openMenu')
RegisterNetEvent('qb-clothing:client:openOutfitMenu')
RegisterNetEvent('qb-clothing:client:loadOutfit')
```

This allows older resources to continue functioning without modification.

---

# illenium-appearance

Compatibility support exists for:

```text
illenium menu events
appearance conversion
tattoo conversion
reload compatibility
```

Example compatibility events:

```lua
RegisterNetEvent('illenium-appearance:client:openClothingShopMenu')
RegisterNetEvent('illenium-appearance:client:openTattooShopMenu')
```

---

# Legacy Appearance Systems

The converter layer may be used to support older appearance structures.

Typical conversion targets:

```text
skin
props
components
tattoos
peddata
```

---

# Appearance Conversion

The resource internally converts appearance structures between formats.

This includes:

```text
head overlays
components
props
tattoos
peddata
```

depending on compatibility target.

---

# Tattoo Compatibility

The tattoo system supports rebuilding structures such as:

```lua id="v8m2tw"
{
    collection = "",
    name = "",
    label = "",
    zone = "",
    hashMale = "",
    hashFemale = "",
    opacity = 0.5
}
```

This improves compatibility with:

```text id="m7x4vq"
Illenium Appearance
legacy tattoo systems
external appearance resources
```

---

# Reload Compatibility

The resource includes internal reload systems to improve synchronization after:

```text id="r2m8tx"
menu closing
appearance saving
ped switching
resource restarting
```

This helps reduce:

* invisible tattoos
* missing props
* overlay desync
* incomplete appearance rebuilding

---

# Ped Compatibility

The system supports:

```text id="y6m3vr"
freemode peds
addon peds
custom ped synchronization
```

through:

```text id="u4x9mq"
peddata
```

and rebuild workflows.

---

# Database Compatibility

The SQL structure was intentionally designed to support:

```text id="k8m5tx"
fresh installations
existing databases
Illenium migrations
column extending
```

Example:

```sql id="p3x7vq"
ALTER TABLE playerskins
ADD COLUMN peddata TEXT;
```

This allows existing servers to extend old appearance databases safely.

---

# Event Compatibility

The resource exposes customizable events through:

```lua id="w7m2mr"
sendEvent('system:OnMenuOpen')
```

This allows external systems to integrate without modifying protected files.

---

# Override Compatibility

Override hooks exist for:

```text id="t5m8vq"
notifications
money handling
walkstyles
checks
permissions
```

allowing easier framework replacement.

---

# Universal UI Philosophy

The UI intentionally avoids framework-specific dependencies.

Purpose:

```text id="j9x4mr"
standalone compatibility
custom integrations
simpler migrations
```

---

# Migration Philosophy

The resource was designed so developers can:

```text id="n3m7tx"
replace old appearance systems
keep old events
preserve old resources
avoid full rewrites
```

during migration.

---

# Recommended Migration Workflow

Recommended migration process:

```text id="z8x2vq"
1. Install XDEV Appearance
2. Extend existing SQL tables
3. Enable compatibility events
4. Verify tattoo synchronization
5. Verify ped rebuilding
6. Remove old appearance dependencies
```

---

# Developer Notes

Most appearance systems tightly couple:

```text id="b4m9tr"
framework logic
appearance logic
database logic
```

XDEV intentionally separates these layers to improve:

* compatibility
* migration support
* modularity
* long-term maintainability
