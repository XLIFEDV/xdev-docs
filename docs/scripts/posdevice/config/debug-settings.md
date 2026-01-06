---
title: Debug Settings
sidebar_position: 3
description: Debug mode and startup logging configuration.
---

Debug Settings controls debug mode and startup logging behavior.

## When should you enable debug?

Enable debug mode when you want to:

- Confirm events are fired correctly
- Verify client/server state transitions
- Diagnose why a session doesn’t open/close
- Track UI state updates (payment/menu/history)

## Recommended options to document here

Examples of debug options you might document:

- `Config.Debug.Enabled`
- `Config.Debug.LogStartup`
- `Config.Debug.VerboseEvents`
- `Config.Debug.PrintStateChanges`

> Even if you haven’t created these yet, this page is the perfect place to add them as your system evolves.

:::warning
If you enable verbose debug on a production server, logs can become noisy.
Prefer enabling it temporarily during testing.
:::