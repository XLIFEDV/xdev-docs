---
title: Command Configuration
sidebar_position: 5
---

# Command Configuration

The command system controls administrative and utility commands used by XDEV Appearance.

Command configuration is located inside:

```text id="k9z4mt"
shared/config.lua
````

---

# Command Structure

Main command configuration:

```lua id="q2x6va"
Config.System.commands = {}
```

Example:

```lua id="z5r1yl"
Config.System.commands = {
    reloadSelf = {
        enabled = true,
        name = "reload"
    },

    reloadPlayer = {
        enabled = true,
        name = "reloadplayer",
        permission = "admin"
    }
}
```

---

# Command Fields

## enabled

Controls whether the command is active.

Example:

```lua id="a6m9tw"
enabled = true
```

If set to:

```lua id="u8v5fr"
false
```

the command is completely disabled.

---

# name

Defines the actual chat/console command.

Example:

```lua id="n7c4ep"
name = "reload"
```

Usage:

```text id="j1x8zm"
/reload
```

---

# permission

Defines the required QBCore permission/group.

Example:

```lua id="b4w6nk"
permission = "admin"
```

Only players with this permission may use the command.

If removed or set to nil, the command becomes public.

---

# Available Commands

---

# reloadSelf

Reloads the player's own appearance.

Example:

```lua id="u3p7fr"
reloadSelf = {
    enabled = true,
    name = "reload"
}
```

Purpose:

* refresh appearance
* reload tattoos
* rebuild components
* force synchronization

---

# reloadPlayer

Reloads another player's appearance.

Example:

```lua id="q7e4vb"
reloadPlayer = {
    enabled = true,
    name = "reloadplayer",
    permission = "admin"
}
```

Useful for:

* administration
* fixing desync issues
* support situations

---

# openMenu

Opens the appearance menu for a target player.

Example:

```lua id="p2j9ml"
openMenu = {
    enabled = true,
    name = "clothemenu",
    permission = "admin"
}
```

Useful for:

* support tools
* staff management
* forced customization workflows

---

# givePed

Gives a ped model to a target player.

Example:

```lua id="f6v2yc"
givePed = {
    enabled = true,
    name = "giveped",
    permission = "admin"
}
```

Usage example:

```text id="e5m4nr"
/giveped 1 mp_m_freemode_01
```

---

# Localization Support

Command descriptions and parameter labels are translated through locale files.

Example:

```lua id="r0x6ht"
_L('commands.reloadSelf')
```

Supported translations include:

* command descriptions
* parameter descriptions
* usage messages
* error messages

---

# Internal Command Workflow

Commands internally support:

* argument validation
* permission validation
* notification hooks
* target validation
* override integrations

---

# Notification Integration

Command notifications are routed through the override system.

Example:

```lua id="t5v7dj"
Override.SendNotify(source, message, type)
```

This allows integration with:

* QBCore notifications
* ox_lib notifications
* custom notification systems

---

# Permission Philosophy

The system intentionally avoids hardcoded admin checks.

Developers may:

* rename commands
* disable commands
* change permissions
* replace permission systems

without modifying protected files.

---

# Recommended Setup

Recommended public commands:

```lua id="m9y4ql"
reloadSelf
```

Recommended admin-only commands:

```lua id="a4n2cp"
reloadPlayer
openMenu
givePed
```