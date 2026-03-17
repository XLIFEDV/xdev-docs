---
title: Installation
sidebar_position: 2
---

# Installation

This guide explains how to install **Freecam** on your FiveM server.

The installation process follows the standard resource setup used in most FiveM environments.

---

# Requirements

Before installing Freecam, make sure the following requirements are met:

- A running **FiveM server**
- Basic knowledge of resource management
- Access to your server files

Freecam is framework-independent by default but can be integrated with existing systems using overrides.

---

# Resource Installation

1. Download the resource files.

2. Extract the resource into your server's resource directory:

```

resources/[scripts]/xdev_freecam

```

3. Ensure the folder name matches the expected resource name.

4. Open your `server.cfg` file and add the resource:

```

ensure xdev_freecam

```

5. Restart your server.

---

# Configuration

After installation, open the main configuration file:

```

shared/config.lua

```

This file contains all system settings, including:

- camera behavior
- UI configuration
- visual controls
- environment control
- PostFX and camera effects
- save and reset settings

Each configuration section is explained in the **Configuration** documentation.

---

# Optional Integrations

Freecam supports advanced integrations through the override system.

You can connect it to:

- framework notification systems
- screenshot tools
- custom camera logic
- player-based permissions

More details are available in the **Overrides** section.

---

# Verifying Installation

After starting the server, verify the following:

- the resource starts without errors
- the activation command or key works
- the UI appears when Freecam is activated

If all checks pass, Freecam is successfully installed.

---

# Next Steps

After installation, continue with:

- **Configuration → System Configuration**
- **Configuration → UI System**
- **Usage → Photo System**

These sections explain how to configure and use Freecam effectively.