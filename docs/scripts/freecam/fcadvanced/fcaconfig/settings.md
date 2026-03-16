---
title: Save & Reset Settings
sidebar_position: 6
---

# Save & Reset Settings

Advanced Freecam includes a **settings persistence system** that allows users to save and restore their camera configuration.

This feature helps creators maintain consistent camera setups across multiple recording sessions.

When enabled, users can store their current camera configuration and restore it later.

---

# Enabling the System

The settings system can be enabled or disabled through the UI configuration.

```lua
Config.UI.access.save_settings = true
````

| Value | Behavior                                     |
| ----- | -------------------------------------------- |
| true  | Enables saving and resetting camera settings |
| false | Disables the settings system                 |

If this option is disabled, all save and reset functionality will be unavailable.

---

# Saving Camera Settings

When the save system is enabled, users can store their current camera configuration.

The saved settings may include:

* movement speed
* rotation speed
* zoom settings
* visual effects
* depth of field values
* camera shake parameters
* environment overrides

This allows users to quickly restore a preferred cinematic setup.

---

# Resetting Camera Settings

The reset option restores the camera configuration back to its default values.

Resetting settings will:

* remove previously saved values
* restore default configuration values
* reset UI parameters

This is useful when switching between different cinematic setups.

---

# Workflow Example

Typical usage of the settings system:

1. Adjust camera settings using the UI.
2. Configure effects, environment settings, and movement behavior.
3. Save the configuration.
4. Restore the settings later when starting a new recording session.

This workflow helps creators quickly prepare consistent camera scenes.

---

# When to Use Saved Settings

Saving camera settings is useful when:

* recording multiple scenes
* maintaining consistent cinematic camera setups
* capturing multiple screenshots with identical visual settings
* preparing pre-configured recording environments

---

# Summary

The Save & Reset Settings system allows users to persist camera configurations and reuse them across sessions.

This feature improves usability and helps streamline cinematic workflows when working with Advanced Freecam.
