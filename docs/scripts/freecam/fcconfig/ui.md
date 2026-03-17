---
title: UI System
sidebar_position: 2
---

# UI System

Freecam includes a fully integrated **UI control system** that allows users to manage camera behavior and visual settings in real time.

The UI acts as the central control panel for adjusting:

- camera movement
- rotation and zoom
- visual effects
- environment settings
- cinematic features

All UI-related configuration is located inside the `Config.UI` table.

---

# UI Access Control

The `Config.UI.access` table defines which UI features are available.

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

| Option        | Description                                  |
| ------------- | -------------------------------------------- |
| take_photo    | Enables screenshot / photo capture           |
| speed         | Controls camera movement speed               |
| rotate        | Controls camera rotation sensitivity         |
| shift         | Enables temporary speed boost (Shift key)    |
| postfx        | Enables visual effects and PostFX controls   |
| shake         | Enables camera shake controls                |
| dof           | Enables depth-of-field configuration         |
| time          | Enables local time control                   |
| weather       | Enables local weather control                |
| motionblur    | Enables motion blur                          |
| cinema        | Enables cinematic mode                       |
| nightvision   | Enables night vision                         |
| thermal       | Enables thermal vision                       |
| save_settings | Enables saving and resetting camera settings |

---

# PostFX Filters

PostFX filters apply cinematic visual styles to the camera.

```lua id="h5t7qa"
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

All filters are applied locally.

---

# Camera Effects

Camera effects provide additional visual filters.

```lua id="7g3v7k"
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

These effects can simulate different cinematic styles and visual environments.

---

# Weather Control

The UI allows selecting predefined weather types.

```lua id="1qv0ps"
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

Weather changes are applied **locally** and do not affect other players.

---

# Time Control

The UI allows changing the local time of the environment.

```lua id="czzw5k"
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

This allows full control over lighting conditions.

---

# Camera Shake Effects

Camera shake effects simulate dynamic camera movement.

```lua id="6ngg3m"
Config.UI.shake = {
    'HAND_SHAKE',
    'ROAD_VIBRATION_SHAKE',
    'DRUNK_SHAKE',
    'SKY_DIVING_SHAKE'
}
```

These can be used to create more cinematic or realistic footage.

---

# Summary

The UI System provides real-time control over camera and visual settings.

Through the UI, users can:

* adjust camera behavior
* control visual effects
* modify environment settings
* create cinematic scenes

This makes Freecam a complete real-time cinematic control system.