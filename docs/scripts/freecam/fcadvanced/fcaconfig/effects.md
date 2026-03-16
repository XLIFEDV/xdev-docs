---
title: Camera Effects / PostFX
sidebar_position: 5
---

# Camera Effects & PostFX

Advanced Freecam includes a **visual effects system** that allows users to apply cinematic filters directly to the camera.

These effects modify the visual appearance of the scene by applying different color grading styles, contrast adjustments, and cinematic overlays.

All effects are applied **locally** and only affect the user's camera.

---

# Camera Effects

Camera effects apply visual filters that modify how the scene is rendered.

These filters can simulate different camera styles, cinematic looks, or environmental visual changes.

The available effects are defined in the configuration:

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

These effects can alter:

* color tone
* lighting balance
* cinematic style
* environmental atmosphere

---

# PostFX Filters

PostFX filters apply additional **post-processing visual effects**.

These filters often affect lighting transitions, scene tone, or cinematic presentation.

The available PostFX filters are defined in the configuration:

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

PostFX filters can be used to create:

* cinematic transitions
* dramatic lighting styles
* stylized visual environments
* recording-ready visual scenes

---

# Effect Usage

Camera effects and PostFX filters can be controlled through the UI while Freecam is active.

Users can quickly switch between effects to adjust the visual presentation of the scene.

This allows creators to experiment with different visual styles without modifying configuration files.

---

# Local Rendering

All effects applied through Advanced Freecam are **client-side only**.

This means:

* other players will not see the applied effects
* server gameplay remains unaffected
* effects are used purely for cinematic and visual purposes

---

# Summary

The Camera Effects and PostFX system allows creators to modify the visual appearance of scenes in real time.

By combining different filters and effects, users can create cinematic visuals tailored for recordings, screenshots, or scene composition.