---
title: Save & Reset Settings
sidebar_position: 6
---

# Save & Reset Settings

Freecam includes a **settings persistence system** that allows users to save and restore their camera configuration.

This feature helps maintain consistent camera setups across multiple recording sessions.

When enabled, users can store their current camera configuration and restore it later.

---

# Enabling the System

The settings system is controlled through the UI configuration.

```lua
Config.UI.access.save_settings = true
````

| Value | Behavior                                     |
| ----- | -------------------------------------------- |
| true  | Enables saving and resetting camera settings |
| false | Disables the settings system                 |

If disabled, all save and reset functionality will be unavailable.

---

# Saving Camera Settings

When enabled, users can store their current camera configuration.

Saved data may include:

* movement speed
* rotation speed
* zoom settings
* visual effects
* depth of field values
* camera shake parameters
* environment overrides

This allows quick restoration of preferred cinematic setups.

---

# Resetting Camera Settings

The reset option restores all camera settings to their default values.

Resetting will:

* remove saved values
* restore default configuration
* reset UI parameters

This is useful when switching between different cinematic setups.

---

# Workflow Example

Typical usage flow:

1. Adjust camera settings using the UI
2. Configure visual effects and environment
3. Save the configuration
4. Restore it later for another session

This reduces setup time and ensures consistency.

---

# When to Use Saved Settings

Saving settings is useful when:

* recording multiple scenes
* maintaining consistent cinematic setups
* capturing multiple screenshots with identical visuals
* preparing predefined recording environments

---

# Summary

The Save & Reset system allows users to persist and reuse camera configurations.

This improves workflow efficiency and makes Freecam more practical for repeated cinematic use.