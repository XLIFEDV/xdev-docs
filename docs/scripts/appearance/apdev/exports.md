---
title: Exports
sidebar_position: 3
---

# Exports

XDEV Appearance exposes multiple exports to simplify external integrations without requiring direct access to internal resource logic.

The export system was designed for:

- external resources
- framework bridges
- admin systems
- customization tools
- synchronization workflows
- modular integrations

---

# Export Philosophy

Most appearance systems tightly couple functionality to internal events or callbacks.

XDEV instead exposes reusable exports to improve:

```text id="m4x8tr"
modularity
compatibility
maintainability
developer flexibility
````

---

# Export Architecture

Exports are intended to provide:

```text id="u7m3vq"
safe access
external integrations
resource communication
appearance control
```

without modifying protected files.

---

# startPlayerCustomization

Purpose:

```text id="x2m7tw"
open first character creation workflow
```

Example:

```lua id="f8m4vq"
exports('startPlayerCustomization', function()

end)
```

---

# Usage Example

Example usage:

```lua id="r5m9tx"
exports['xdev_appearance']:startPlayerCustomization()
```

---

# Internal Workflow

The export internally:

```text id="n6m2vr"
loads freemode model
detects gender
opens appearance menu
starts first creation state
```

---

# Typical Usage

Common use cases:

```text id="p8x4mq"
multicharacter systems
spawn selectors
identity systems
registration systems
```

---

# First Character Support

The export was specifically designed to support:

```text id="d3m7vq"
first spawn workflows
new player creation
identity initialization
```

without requiring direct event access.

---

# Compatibility Support

The export integrates naturally with:

```text id="v4x8mr"
QBCore
custom multicharacter systems
legacy character systems
```

depending on server implementation.

---

# Event Compatibility

Exports may internally trigger:

```text id="q9m5tw"
menu events
ped synchronization
appearance rebuilds
```

through the internal event system.

---

# Ped Initialization

The export automatically handles:

```text id="y8m2tr"
mp_m_freemode_01
mp_f_freemode_01
```

selection based on player gender.

---

# Resource Safety

Exports intentionally avoid exposing direct internal structures.

Purpose:

```text id="w3x7mq"
safer integrations
update stability
reduced dependency conflicts
```

---

# Recommended Usage

Recommended usage:

```text id="h5m9vr"
external spawn systems
identity registration
new player onboarding
```

---

# Future Expansion

The export system was intentionally designed to support future expansion.

Potential external integrations include:

```text id="k7m3vq"
appearance retrieval
outfit loading
tattoo rebuilding
cache handling
ped synchronization
```

depending on server needs.

---

# Integration Philosophy

XDEV exports intentionally remain:

```text id="u4x8mr"
lightweight
modular
framework-independent
```

to simplify cross-resource communication.

---

# Developer Notes

Exports should generally be preferred over:

```text id="p2x7tw"
direct event spoofing
internal state editing
protected file modifications
```

whenever possible.

This improves:

* update compatibility
* resource stability
* maintainability
