---
title: UI System
sidebar_position: 2
---

# UI System

Advanced Freecam introduces a fully integrated **UI control system** that allows users to adjust camera behavior and visual settings directly while using the camera.

The UI acts as the main control panel for managing camera parameters, visual effects, and environmental settings.

All UI-related configuration is located inside the `Config.UI` table.

---

# UI Access Control

The `Config.UI.access` table controls which UI features are available.

Each option can be enabled or disabled individually.

```lua
Config.UI.access = {
    take_photo = true,
    speed = true,
    rotate = true,
    shift = true,
    postfx = {
        effect = true,
        postfx = true
    },
    shake = true,
    dof = {
        near_dof = true,
        far_dof = true,
        dof_strength = true
    },
    time = true,
    weather = true,
    motionblur = true,
    cinema = true,
    nightvision = true,
    thermal = true,
    save_settings = true
}
````

If the `access` table is **false or nil**, the entire UI system will be disabled.

---

# UI Options

| Option        | Description                                       |
| ------------- | ------------------------------------------------- |
| take_photo    | Enables the screenshot / photo feature            |
| speed         | Allows adjusting camera movement speed            |
| rotate        | Allows adjusting camera rotation sensitivity      |
| shift         | Enables temporary speed boost while holding Shift |
| postfx        | Enables visual effect controls                    |
| shake         | Enables camera shake controls                     |
| dof           | Enables depth-of-field configuration              |
| time          | Enables local time control                        |
| weather       | Enables local weather control                     |
| motionblur    | Enables motion blur                               |
| cinema        | Enables cinematic mode                            |
| nightvision   | Enables night vision                              |
| thermal       | Enables thermal vision                            |
| save_settings | Enables saving and resetting camera settings      |

---

# PostFX Filters

PostFX filters apply cinematic visual styles to the camera.

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

These filters affect:

* color grading
* lighting style
* cinematic tone

They are applied locally and only affect the user's camera.

---

# Camera Effects

Camera effects apply additional visual filters.

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
```

These effects can simulate different cinematic styles or environmental visuals.

---

# Weather Control

The UI allows selecting predefined weather types.

```lua
Config.UI.weather = {
    'CLEAR',
    'EXTRASUNNY',
    'CLOUDS',
    'OVERCAST',
    'RAIN',
    'THUNDER',
    'SMOG',
    'FOGGY',
    'XMAS',
    'SNOW',
    'BLIZZARD',
    'NEUTRAL',
    'CLEARING'
}
```

Weather changes are **applied locally** and do not affect other players.

---

# Time Control

The UI can change the local time of the environment.

```lua
Config.UI.time = {
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00'
}
```

This allows creators to control lighting conditions for recordings or screenshots.

---

# Camera Shake Effects

Camera shake effects simulate handheld camera movement.

```lua
Config.UI.shake = {
    'HAND_SHAKE',
    'ROAD_VIBRATION_SHAKE',
    'DRUNK_SHAKE',
    'SKY_DIVING_SHAKE'
}
```

These effects can be used to create more dynamic or cinematic recordings.

---

# Summary

The **UI System** provides real-time access to camera and visual controls, allowing users to adjust cinematic parameters without modifying configuration files.

Through this interface, users can control:

* camera movement settings
* visual effects
* environmental settings
* cinematic features

This makes Advanced Freecam significantly more powerful than the base Classic Freecam system.