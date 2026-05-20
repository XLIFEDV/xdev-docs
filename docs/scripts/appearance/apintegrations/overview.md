---
title: Integrations Overview
sidebar_position: 0
---

# Integrations Overview

This section explains how XDEV Appearance integrates with:

- frameworks
- appearance systems
- animation systems
- legacy resources
- synchronization workflows

The resource was intentionally designed to remain modular and compatibility-focused rather than framework-locked.

---

# Integration Philosophy

XDEV Appearance separates:

```text id="m4x8tr"
appearance logic
framework logic
UI logic
database logic
````

This architecture simplifies:

* migrations
* compatibility
* maintenance
* custom integrations

---

# Supported Integrations

Current documented integrations:

```text id="u7m3vq"
QBCore
Illenium Appearance
Walkstyle Systems
Legacy Appearance Resources
```

---

# QBCore Integration

Native QBCore compatibility includes:

```text id="x2m7tw"
commands
permissions
jobs
gangs
player data
```

The system may operate with QBCore directly without major rewrites.

---

# Illenium Compatibility

The resource supports compatibility workflows for:

```text id="f8m4vq"
appearance conversion
tattoo rebuilding
event compatibility
database extension
```

This simplifies migration from Illenium Appearance.

---

# Walkstyle Integration

Optional walkstyle overrides support:

```text id="r5m9tx"
RPEmotes
custom animation systems
movement synchronization
```

through the override system.

---

# Legacy Resource Compatibility

Compatibility layers exist to support older systems such as:

```text id="n6m2vr"
qb-clothing
legacy appearance structures
custom frameworks
```

through:

* converters
* event bridges
* synchronization workflows

---

# Event Integration

The resource exposes configurable events through:

```lua id="p8x4mq"
sendEvent()
```

allowing external systems to integrate safely without modifying protected files.

---

# Override Integration

Developers may replace internal behavior using overrides for:

```text id="d3m7vq"
notifications
payments
walkstyles
permission checks
validation systems
```

This allows integration with nearly any server architecture.

---

# Database Integration

The SQL structure supports:

```text id="v4x8mr"
fresh installs
legacy databases
migration workflows
column extension
```

allowing easier transitions from older appearance systems.

---

# Synchronization Philosophy

XDEV Appearance focuses heavily on:

```text id="q9m5tw"
rebuilding
synchronization
conversion
compatibility
```

instead of relying entirely on cached appearance states.

Purpose:

* reduce desync
* improve tattoo stability
* improve ped rebuilding
* support migrations

---

# Modular Design

The integration system intentionally avoids hardcoded assumptions whenever possible.

This improves support for:

```text id="y8m2tr"
standalone servers
custom frameworks
heavily modified servers
large RP infrastructures
```

---

# Recommended Reading Order

Recommended integration documentation order:

```text id="w3x7mq"
1. Compatibility
2. QBCore
3. Illenium Format
4. Walkstyle
```

---

# Developer Notes

Unlike many appearance systems, XDEV was designed from the beginning to operate as a compatibility layer rather than only a standalone clothing resource.

This philosophy improves:

```text id="h5m9vr"
migration safety
resource flexibility
framework independence
long-term maintainability
```