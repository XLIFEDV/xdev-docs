---
title: Usage Overview
sidebar_position: 1
---

# Usage Overview

This section explains how Freecam Classic is used in practice.

Freecam Classic is designed to operate without a graphical interface.  
All interaction is performed through configured controls and system behavior defined in `config.lua`.

---

## How Freecam Is Used

Freecam can be activated through:

- A chat command
- A key binding
- A hold-to-activate configuration

Once activated:

- Normal gameplay controls are temporarily restricted.
- Camera movement, rotation, and zoom become available.
- The camera remains positionally linked to the player.
- Movement operates within configured limits.

When disabled, the system restores normal gameplay control.

---

## Intended Use Cases

Freecam Classic is commonly used for:

- Administrative camera control
- Moderation tasks
- Scene inspection
- Controlled cinematic positioning
- Structured server environments

It is not intended to function as a fully detached spectator mode.

---

## Integration Workflow

Freecam can be:

- Triggered manually by users
- Controlled via exports
- Restricted through validation checks
- Extended through override logic

This makes it suitable for integration into:

- Admin panels
- Moderation systems
- Custom server tools
- Conditional activation environments

---

## Operational Principles

Freecam Classic follows a strict usage philosophy:

- Controlled activation
- Predictable behavior
- Limited movement range
- Player-bound camera logic
- Configuration-driven system control

Understanding these principles ensures stable and intended usage.