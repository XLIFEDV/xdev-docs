---
title: Installation
sidebar_position: 3
---

# Installation

This guide explains how to install **Advanced Freecam** on your FiveM server.

The installation process is straightforward and follows the standard resource setup used in most FiveM environments.

---

# Requirements

Before installing Advanced Freecam, ensure that the following requirements are met:

- A running **FiveM server**
- Basic knowledge of resource management
- Access to your server files

Depending on your configuration, the system may also integrate with your framework or other resources through overrides.

---

# Resource Installation

1. Download the resource files.

2. Extract the resource into your server's resource directory:

```

resources/[scripts]/xdev_advancedfreecam

```

3. Ensure the folder name matches the expected resource name.

4. Open your `server.cfg` file and add the resource:

```

ensure xdev_advancedfreecam

```

5. Restart your server.

---

# Configuration

After installation, open the configuration file:

```

shared/config.lua

```

This file contains all system settings including:

- camera behavior
- UI configuration
- visual controls
- environment control
- effects and PostFX
- save/reset settings

Each configuration section is explained in the **Configuration** documentation.

---

# Optional Integrations

Advanced Freecam supports additional integrations through the override system.

Developers can connect the system to:

- framework notification systems
- screenshot tools
- custom camera logic
- custom UI integrations

More details about these integrations can be found in the **Advanced Overrides** section.

---

# Verifying Installation

After starting the server, ensure that:

- the resource loads without errors
- the freecam command or activation key works
- the UI appears when the camera system is activated

If everything is working correctly, Advanced Freecam is successfully installed.

---

# Next Steps

Once the installation is complete, you can continue with the following sections:

- **Configuration → System Configuration**
- **Configuration → UI System**
- **Usage → Advanced Features**

These sections explain how to configure and use the Advanced Freecam system.