---
title: Follow System
sidebar_position: 4
---

# Follow System

Freecam Classic uses a player-bound camera behavior.

This means the camera remains dynamically linked to the player while Freecam is active.

---

## How It Behaves

When Freecam is enabled:

- The camera maintains a stable spatial relationship with the player.
- If the player moves, the camera moves with them.
- The camera does not detach or drift into the world.
- Position consistency is preserved at all times.

This ensures that Freecam remains predictable and controlled.

---

## Why This Design Exists

Classic edition is designed to be:

- Lightweight
- Reliable
- Safe for administrative and moderation use
- Easy to integrate into structured servers

A fully detached free-floating camera could create positional instability or unintended behavior.  
The follow system prevents that by maintaining positional alignment with the player entity.

---

## Movement Within Limits

Although the camera follows the player, it still allows controlled repositioning within configured limits.

The system ensures:

- Maximum distance restrictions are respected
- Movement remains consistent
- Camera control stays responsive

---

## Design Philosophy

The Follow System prioritizes:

- Stability
- Control
- Safety
- Predictable behavior

It is intentionally always active in Classic edition and cannot be disabled through configuration.
