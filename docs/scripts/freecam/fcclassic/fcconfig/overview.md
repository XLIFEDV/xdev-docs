---
title: Configuration Overview
sidebar_position: 1
---

# Configuration Overview

This section documents all configuration modules used by Freecam Classic.

Freecam Classic is entirely configuration-driven.  
All system behavior is defined inside `config.lua`.

No internal files need to be modified.

---

## Configuration Categories

The configuration is structured into the following logical areas:

- System behavior
- Activation rules
- Camera limits
- Movement and rotation multipliers
- Validation checks
- Override hooks
- Events and exports

Each module controls a specific part of the Freecam lifecycle.

---

## Core Philosophy

Freecam Classic is designed around:

- Controlled activation
- Predictable camera behavior
- Modular validation
- Safe integration
- Update-friendly architecture

Server owners are expected to adjust values through configuration rather than modifying script logic.

---

## What You Will Learn in This Section

Inside this configuration section, you will find:

- How activation is configured
- How camera limits are defined
- How movement speed is controlled
- How validation checks work
- How to enable exports and events
- How to extend behavior using overrides

This ensures full control over Freecam Classic without compromising stability.
