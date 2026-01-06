---
title: System Settings
sidebar_position: 2
description: General system-related configuration options for XDEV POS Device.
---

System Settings contains **general** configuration options that define how the POS Device behaves at runtime.

## What belongs in this section?

Use System Settings for:

- Core toggles that enable/disable major features
- Defaults that affect global behavior
- Security/validation behavior (if not UI-related)

## Recommended structure (for your future detailed docs)

When you expand this page, aim for this pattern for each option:

### Option name
**Path:** `Config.XYZ.OptionName`  
**Type:** `boolean | number | string | table`  
**Default:** `true/false/...`  
**What it does:** short, clear explanation  
**Example config:**
```lua
Config.XYZ.OptionName = true
````

**Notes / edge cases:**

* what happens if it’s false
* what happens if the value is missing
* server/client impact (if relevant)