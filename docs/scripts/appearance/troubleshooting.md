---
title: Troubleshooting
sidebar_position: 99
---

# Troubleshooting

This section covers common problems, synchronization issues, migration problems, and debugging workflows for XDEV Appearance.

The system was designed to remain modular and compatibility-focused, but appearance systems naturally involve many moving parts:

- peds
- overlays
- tattoos
- clothing
- synchronization
- framework integration

---

# Tattoos Not Appearing

## Problem

```text id="m4x8tr"
Tattoos save correctly but do not appear on the ped.
````

---

## Common Causes

Typical causes:

```text id="u7m3vq"
non-freemode ped
overlay rebuild failure
appearance cache conflict
external appearance resource conflict
```

---

## Recommended Checks

Verify:

```text id="x2m7tw"
model == mp_m_freemode_01
model == mp_f_freemode_01
```

because GTA tattoos only work properly on freemode peds.

---

## Refresh Workflow

The resource includes tattoo rebuild workflows internally.

If tattoos disappear after:

```text id="f8m4vq"
menu closing
ped reload
resource restart
```

verify that the refresh logic is running correctly.

---

# Tattoos Disappear After External Menus

## Problem

```text id="r5m9tx"
External appearance menus remove or overwrite tattoos.
```

---

## Cause

Some appearance resources internally cache appearance states and overwrite current overlays after menu closing.

This is especially common during:

```text id="n6m2vr"
appearance rebuilds
cached menu states
legacy synchronization
```

---

## Recommendation

Use:

```text id="p8x4mq"
reload workflows
tattoo rebuilds
appearance synchronization
```

after external menu interactions.

---

# Props Not Loading

## Problem

```text id="d3m7vq"
Hats, glasses, watches, or accessories disappear.
```

---

## Common Causes

Typical causes:

```text id="v4x8mr"
invalid drawable
invalid texture
custom ped incompatibility
prop clearing
```

---

## Debugging

Verify:

```lua id="q9m5tw"
drawable ~= -1
```

unless intentionally removing props.

---

# Components Not Applying

## Problem

```text id="y8m2tr"
Clothing changes save but do not appear.
```

---

## Common Causes

Typical causes:

```text id="w3x7mq"
invalid drawable
invalid texture
custom ped incompatibility
component mismatch
```

---

## Recommended Validation

Verify:

```text id="h5m9vr"
drawable exists
texture exists
ped supports component
```

before applying values.

---

# Custom Ped Problems

## Problem

```text id="k7m3vq"
Addon/custom peds behave incorrectly.
```

---

## Cause

Custom peds may not support:

```text id="u4x8mr"
overlays
face blend
props
components
tattoos
```

like freemode peds do.

---

## Recommendation

Use:

```text id="p2x7tw"
peddata
```

for addon/custom ped synchronization workflows.

---

# Overlay Problems

## Problem

```text id="r8m4vq"
Makeup, blush, lipstick, or beard colors appear incorrect.
```

---

## Cause

Different GTA overlays internally use different color palettes.

Example:

```text id="j6m9tx"
palette 1
palette 2
```

Some overlays may visually appear different depending on palette behavior.

---

# Moles / Freckles Not Using Colors

## Explanation

Moles/freckles typically do NOT use hair-style color palettes like:

```text id="f2m8vq"
beard
eyebrows
makeup
```

Usually only:

```text id="z5x3mr"
style
opacity
```

are relevant.

---

# Appearance Not Saving

## Problem

```text id="u8m4tw"
Changes preview correctly but disappear after reconnect.
```

---

## Common Causes

Typical causes:

```text id="n7x2vq"
database save failure
invalid JSON
SQL mismatch
conversion failure
```

---

## Recommended Checks

Verify:

```text id="m3x9vr"
playerskins table
JSON encoding
SQL columns
converter logic
```

---

# SQL Errors

## Problem

```text id="q5m8tx"
oxmysql query errors
invalid syntax
```

---

## Common Cause

Tables or JSON structures may not match expected format.

Example issue:

```text id="r4x7mq"
Lua table inserted directly into SQL without JSON encoding
```

---

## Recommended Fix

Always encode structured data before saving:

```lua id="v9m2wr"
json.encode(data)
```

---

# Appearance Resets After Restart

## Problem

```text id="p6x8vq"
Player appearance resets after reconnect or resource restart.
```

---

## Common Causes

Typical causes:

```text id="f3m7tx"
missing synchronization
reload conflict
external appearance resource
invalid save structure
```

---

## Recommended Workflow

Verify:

```text id="x8m4vr"
skin saves correctly
tattoos rebuild correctly
ped reload triggers
appearance synchronization runs
```

---

# Commands Not Working

## Problem

```text id="t5m9vq"
Commands do not execute.
```

---

## Recommended Checks

Verify:

```text id="b7x2mq"
QBCore installed
permission valid
command enabled
```

inside:

```lua id="h6m4tw"
Config.System.commands
```

---

# Menu Inputs Stuck

## Problem

```text id="m9x3vr"
Enter key or hotkeys trigger unexpectedly after opening menus.
```

---

## Cause

Keys may still be considered pressed during UI focus switching.

---

## Recommended Solution

Use configurable delays:

```lua id="u2m8vq"
Config.UI.HotkeyDelay
```

and validate key release states before accepting interactions.

---

# Tattoo Opacity Looks Wrong

## Problem

```text id="q4x7mr"
Opacity values appear too strong or too weak.
```

---

## Cause

Some systems use:

```text id="p8m5tw"
0 -> 100
```

while others use:

```text id="k3x9vq"
0.0 -> 1.0
```

The resource internally normalizes values during rebuild workflows.

---

# Migration Issues

## Problem

```text id="w6m2tr"
Old appearance systems conflict with XDEV Appearance.
```

---

## Recommended Migration Workflow

Recommended process:

```text id="n5x8mq"
1. Disable old reload systems
2. Disable old tattoo rebuilds
3. Verify SQL structure
4. Verify compatibility events
5. Test synchronization
```

---

# Debug Recommendation

When debugging appearance issues:

```text id="f4m7vq"
test freemode first
test without external resources
test synchronization separately
```

before debugging addon/custom ped behavior.

---

# Developer Notes

Appearance systems are heavily affected by:

```text id="v8x3mr"
ped limitations
GTA natives
external resources
cached states
```

Most visual bugs are synchronization problems rather than database problems.

---

# Final Notes

XDEV Appearance was intentionally designed around:

```text id="r7m4tw"
modularity
compatibility
rebuild reliability
conversion support
```

to reduce long-term appearance desync issues across large roleplay servers.