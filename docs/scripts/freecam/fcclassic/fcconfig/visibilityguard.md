---
title: Visibility Guard
sidebar_position: 5
---

## Overview

The Visibility Guard system prevents the camera from moving to positions where the player would no longer be rendered or visible.

This protection ensures that the camera cannot unintentionally move behind walls, inside geometry, or into positions where the player entity is not visible to the game renderer.

This helps maintain visual consistency when recording, taking screenshots, or using the cinematic camera.

---

## Configuration

```lua
Config.System.VisibilityGuard = true
````

### Description

| Option          | Type    | Default | Description                                                                                     |
| --------------- | ------- | ------- | ----------------------------------------------------------------------------------------------- |
| VisibilityGuard | boolean | true    | Prevents the camera from moving to positions where the player would not be rendered or visible. |

---

## Behavior

When enabled:

* Camera movement is validated before applying the new position
* If the new camera position would hide the player entity, the movement is rejected
* Prevents camera clipping behind walls or inside map geometry

When disabled:

* The camera can move freely without visibility checks