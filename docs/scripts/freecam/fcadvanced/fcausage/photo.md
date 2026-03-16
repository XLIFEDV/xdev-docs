---
title: Photo System
sidebar_position: 1
---

# Photo System

Advanced Freecam includes a **photo capture system** that allows users to take screenshots directly while using the camera.

This feature is designed for creators who want to capture cinematic images without leaving the Freecam environment.

The photo system can be controlled through the UI or by using the configured capture key.

---

# Enabling the Photo Feature

The photo system is controlled through the UI access configuration.

```lua
Config.UI.access.take_photo = true
````

| Value | Behavior                          |
| ----- | --------------------------------- |
| true  | Enables the photo capture feature |
| false | Disables the photo system         |

If this option is disabled, the screenshot functionality will not appear in the UI.

---

# Capturing Photos

When the photo system is enabled, users can capture screenshots while using Freecam.

Typical workflow:

1. Activate Freecam.
2. Adjust camera position and visual settings.
3. Press the configured photo key or use the UI button.
4. The screenshot will be captured.

This allows creators to quickly capture cinematic scenes.

---

# Use Cases

The photo system is commonly used for:

* cinematic screenshots
* server promotional images
* social media content
* scene composition previews

Because Advanced Freecam includes full visual control, screenshots can be captured with:

* cinematic effects
* controlled lighting
* custom weather
* depth of field

---

# Custom Screenshot Systems

Developers can override the default screenshot behavior.

This allows integration with custom tools such as:

* screenshot-basic
* server-side capture systems
* external screenshot services
* custom image pipelines

Example override:

```lua
function Config.Override.ClientSide.Functions.TakePhoto()
    -- custom screenshot logic
end
```

By overriding this function, developers can fully control how screenshots are captured and processed.

---

# Local Visual Capture

Screenshots taken through Advanced Freecam will capture all **locally applied visual effects**, including:

* PostFX filters
* camera effects
* depth of field
* time overrides
* weather overrides

This makes the photo system ideal for creating cinematic visuals.

---

# Summary

The Photo System allows users to capture screenshots directly from the Freecam environment.

Combined with Advanced Freecam's visual control systems, this feature enables creators to produce high-quality cinematic images without modifying the game environment.