---
title: Photo System
sidebar_position: 1
---

# Photo System

Freecam includes a built-in **photo capture system** that allows users to take screenshots directly while using the camera.

This feature is designed for creators who want to capture cinematic images without leaving the Freecam environment.

The photo system can be triggered through the UI or by using the configured capture key.

---

# Enabling the Photo Feature

The photo system is controlled via UI access settings.

```lua
Config.UI.access.take_photo = true
````

| Value | Behavior                          |
| ----- | --------------------------------- |
| true  | Enables the photo capture feature |
| false | Disables the photo system         |

If disabled, the photo option will not be available in the UI.

---

# Capturing Photos

When enabled, users can take screenshots while Freecam is active.

Typical workflow:

1. Activate Freecam
2. Position the camera
3. Adjust visual and environment settings
4. Press the photo key or use the UI button
5. Screenshot is captured

This allows quick and efficient cinematic capture.

---

# Use Cases

The photo system is commonly used for:

* cinematic screenshots
* server promotional images
* social media content
* scene composition previews

Because Freecam provides full visual control, screenshots can include:

* cinematic effects
* custom lighting
* weather adjustments
* depth of field

---

# Custom Screenshot Systems

Developers can override the default screenshot behavior.

This allows integration with systems such as:

* screenshot-basic
* server-side capture tools
* external APIs
* custom pipelines

Example override:

```lua
function Config.Override.ClientSide.Functions.TakePhoto()
    -- custom screenshot logic
end
```

This gives full control over how screenshots are captured and processed.

---

# Local Visual Capture

Screenshots captured through Freecam include all **locally applied visual effects**, such as:

* PostFX filters
* camera effects
* depth of field
* time overrides
* weather overrides

This ensures cinematic-quality output.

---

# Summary

The Photo System allows users to capture screenshots directly from the Freecam environment.

Combined with full visual control, it enables creators to produce high-quality cinematic images without modifying the game world.