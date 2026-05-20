---
title: Overview
sidebar_position: 1
---

# XDEV Appearance

XDEV Appearance is a fully customizable and framework-friendly appearance system developed for FiveM servers.

The system is designed around modular architecture, override support, and flexible data handling.  
It supports both standalone usage and compatibility workflows for existing appearance ecosystems such as Illenium Appearance.

---

# Main Features

- Clothing system
- Barber system
- Surgeon / face editing system
- Tattoo system
- Outfit system
- Clothing rooms
- Uniform system
- Face cache system
- Ped support system
- Opposite clothing mapping system
- Multi-language support
- Full override architecture
- Framework compatibility support
- Illenium-compatible format support
- Developer event system
- Export system
- Custom pricing system

---

# Architecture

The resource is separated into multiple layers:

```text
shared/     → Configurations, language files, shared data
client/     → Gameplay logic, UI handling, ped management
server/     → Database handling, conversions, save/load logic
ui/         → NUI interface
````

The system is designed to allow developers to replace internal logic without modifying the core resource.

Most systems can be overridden through:

* override functions
* event hooks
* exports
* configuration files

---

# Compatibility Philosophy

XDEV Appearance internally uses its own appearance structure.

However, the system can:

* read Illenium-compatible data
* convert external appearance formats
* extend existing databases
* continue operating without forcing full database wipes

This allows servers to migrate between systems without permanently breaking existing player data.

---

# Supported Systems

The resource was primarily designed for:

* QBCore
* oxmysql
* ox_lib

However, most systems can be adapted through overrides.

---

# UI System

The interface was built specifically for:

* high customization
* low dependency usage
* keyboard-focused navigation
* developer flexibility

Most UI behavior can be configured or replaced.

---

# Developer Focus

This resource was developed primarily for server developers rather than end users.

The documentation focuses heavily on:

* configuration
* integrations
* overrides
* data handling
* internal workflows
* compatibility systems