---
title: Configuration
sidebar_position: 1
---

# Freecam Classic – Configuration

Freecam Classic is fully controlled through the `config.lua` file.

All system behavior — including activation logic, camera limits, validation checks and integration settings — is defined inside this configuration layer.

This design ensures that the system remains:

- Lightweight
- Predictable
- Easy to maintain
- Safe to integrate into existing servers

---

## Configuration Structure

The configuration file is divided into logical sections:

- Locale settings
- Debug mode
- System validation checks
- Activation configuration
- Camera behavior settings
- Movement and rotation multipliers
- Override hooks
- Events and exports

Each section operates independently but contributes to the overall Freecam workflow.

---

## What Can Be Configured?

Freecam Classic allows you to control:

### • Activation Method
Define whether Freecam is accessed via:
- Chat command
- Key binding
- Hold-to-activate logic

### • Camera Reset Behavior
Choose whether camera values reset every activation or persist between sessions.

### • Movement & Rotation Limits
Control:
- Maximum camera distance
- Minimum and maximum zoom (FOV)
- Movement speed multipliers
- Rotation speed multipliers
- Zoom speed multipliers

### • Validation Flow
Enable or disable checks for:
- Dead state
- Vehicle state
- Custom server logic

### • Integration Settings
Configure:
- Optional exports
- Optional client-side events
- Override hooks for custom behavior

---

## Configuration Philosophy

Freecam Classic is designed to be configuration-driven.

Instead of modifying internal logic, server owners should:

- Adjust values inside `config.lua`
- Enable or disable specific modules
- Use override hooks when deeper customization is required

This ensures the script remains stable and update-safe.
