---
title: Camera Effects / PostFX
sidebar_position: 5
---

# Camera Effects & PostFX

Freecam includes a **visual effects system** that allows users to apply cinematic filters directly to the camera.

These effects modify the visual appearance of the scene using color grading, contrast adjustments, and cinematic overlays.

All effects are applied **locally** and only affect the user's camera.

---

# Camera Effects

Camera effects apply visual filters that change how the scene is rendered.

These filters can simulate different camera styles, cinematic looks, and environmental visuals.

Available effects are defined in the configuration:

```lua
Config.UI.effect = {
    "default",
    "cinema",
    "NG_filmic01",
    "NG_filmic02",
    "NG_filmic03",
    "NG_filmic04",
    "MP_Powerplay_blend",
    "MP_death_grade",
    "CAMERA_BW",
    "scanline_cam",
    "heliGunCam",
    "hud_def_blur",
    "spectator5",
    "underwater",
    "drug_flying_base"
}
````

These effects can influence:

* color tone
* lighting balance
* cinematic style
* environmental atmosphere

---

# PostFX Filters

PostFX filters apply additional **post-processing visual effects**.

These filters are typically used to adjust scene tone, lighting transitions, and cinematic presentation.

Available PostFX filters:

```lua
Config.UI.postfx = {
    "default",
    "MenuMGHeistIn",
    "MenuMGSelectionIn",
    "DrugsMichaelAliensFight",
    "HeistCelebPass",
    "BikerFilter",
    "Rampage",
    "MP_intro_logo"
}
```

PostFX can be used to create:

* cinematic transitions
* dramatic lighting styles
* stylized environments
* recording-ready visuals

---

# Effect Usage

Camera effects and PostFX filters can be controlled through the UI while Freecam is active.

Users can instantly switch between different effects to adjust the visual style of the scene.

This allows experimentation without modifying configuration files.

---

# Local Rendering

All visual effects in Freecam are **client-side only**.

This means:

* other players do not see the applied effects
* server gameplay remains unchanged
* effects are used purely for cinematic and visual purposes

---

# Summary

The Camera Effects and PostFX system allows real-time control over the visual appearance of scenes.

By combining different filters and effects, creators can produce cinematic visuals for recordings, screenshots, and scene composition.