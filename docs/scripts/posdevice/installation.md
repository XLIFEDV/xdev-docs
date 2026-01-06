---
title: Installation
description: How to install and set up the POSDEVICE script
sidebar_position: 1
---

This page explains how to install the **POSDEVICE** script correctly on your server.

Make sure to follow each step carefully to avoid configuration or runtime issues.

---

## Requirements

Before installing POSDEVICE, ensure your server meets the following requirements:

- A working FiveM server
- A supported framework (QB if required by your setup)
- `qb-target` or a compatible targeting system (optional but recommended)
- Access to server and client files

---

## Resource Installation

1. Place the resource into your server’s resources folder:

```text
resources/
└─ [xdev]/
   └─ xdev_posdevice/
````

2. Ensure the folder name is **exactly** as provided.
   Do not rename the resource unless explicitly documented.

---

## Server Configuration

Add the resource to your `server.cfg`:

```cfg
ensure xdev_posdevice
```

Make sure it is started **after** its dependencies.

---

## Dependencies

If you are using `qb-target`, ensure it is started before POSDEVICE:

```cfg
ensure qb-target
ensure xdev_posdevice
```

If another targeting system is used, integration must be handled manually.

---

## Initial Startup

After adding the resource:

1. Restart the server
2. Watch the server console for errors or warnings
3. Confirm the resource starts without issues

If the script fails to start, review:

* Folder structure
* Dependency order
* Configuration files

---

## Verification

To verify a successful installation:

* Join the server
* Trigger the POS Device using the configured method
* Confirm the UI opens correctly
* Confirm no console errors appear

---

## Common Installation Mistakes

* Renaming the resource folder
* Starting the script before its dependencies
* Missing required framework exports
* Editing files without restarting the server

---

## Next Steps

After installation, continue with:

* Configuration
* Usage
* Integrations (qb-target, custom systems)

These sections are documented separately.