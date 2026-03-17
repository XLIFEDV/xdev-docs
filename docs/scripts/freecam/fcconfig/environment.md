---
title: Time & Weather Control
sidebar_position: 4
---

# Time & Weather Control

Freecam includes an **environment control system** that allows users to locally modify the time and weather conditions of the scene.

These controls are available through the UI and are designed to help adjust the atmosphere for cinematic recordings or screenshots.

All changes are applied **locally** and do not affect the server or other players.

---

# Local Time Control

The time control system allows users to override the in-game time while using Freecam.

This feature is useful for adjusting lighting conditions in cinematic scenes.

Time values are defined in the configuration:

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
````

When enabled, the selected time applies only to the player's camera view.

Other players will continue to see the server’s default time.

---

# Local Weather Control

The weather control system allows users to change weather conditions locally.

This is useful for controlling the visual atmosphere without modifying the global server environment.

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

Weather changes are applied **only to the local player**.

Other players will not see these changes.

---

# Use Cases

Time and weather control are commonly used for:

* cinematic recordings
* scene composition
* screenshot capture
* controlling lighting conditions
* creating specific atmospheres

Examples:

* sunset scenes using evening time
* foggy environments for atmospheric recordings
* snow scenes for winter visuals

---

# Important Notes

* Time and weather overrides are **client-side only**
* They do **not affect the global server environment**
* They are intended purely for **visual and cinematic use**

---

# Summary

The environment control system allows creators to quickly adjust the visual atmosphere of a scene.

By using local time and weather overrides, Freecam enables flexible cinematic setups without affecting normal gameplay.