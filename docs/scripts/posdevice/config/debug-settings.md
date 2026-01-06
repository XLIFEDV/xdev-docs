---
title: Debug Settings
sidebar_position: 3
---

Debug Settings controls debug mode and startup logging behavior.

## When should you enable debug?

Enable debug mode when you want to:

- Confirm events are fired correctly
- Verify client/server state transitions
- Diagnose why a session doesn’t open/close
- Track UI state updates (payment/menu/history)

:::warning
If you enable verbose debug on a production server, logs can become noisy.
Prefer enabling it temporarily during testing.
:::