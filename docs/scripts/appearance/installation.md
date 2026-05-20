---
title: Installation
sidebar_position: 2
---

# Installation

This guide explains the complete installation process for XDEV Appearance.

The resource is designed to support both:

- fresh installations
- existing servers already using other appearance systems

---

# Requirements

Required dependencies:

- QBCore
- oxmysql
- ox_lib

Required resource order:

```cfg
ensure oxmysql
ensure ox_lib
ensure qb-core
ensure xdev_appearance
````

---

# Resource Installation

Place the resource into your server resources folder:

```text
resources/[standalone]/xdev_appearance
```

Add the resource to your server configuration:

```cfg
ensure xdev_appearance
```

---

# SQL Installation

Import the SQL file included with the resource.

The SQL structure supports:

* fresh installs
* existing Illenium databases
* automatic database extension

The installer automatically adds missing columns if required.

Supported extensions include:

* tattoo
* peddata
* active
* props
* components
* outfitId

---

# Recommended Database Setup

Recommended database:

```text
utf8mb4
```

Recommended storage engine:

```text
InnoDB
```

---

# Framework Configuration

The resource is configured for QBCore by default.

Compatibility events are included for:

* qb-clothing
* illenium-appearance

These compatibility events are located in:

```text
escrow/client/compatibility.lua
```

---

# Ox Lib

The system uses ox_lib internally.

Make sure the following line exists before the resource starts:

```lua
@ox_lib/init.lua
```

This is already included inside the fxmanifest.

---

# Escrow Structure

The resource uses partial escrow protection.

Editable files:

```text
shared/*.lua
shared/language/*.lua
shared/data/*.lua
```

Protected files:

```text
escrow/client/*
escrow/server/*
```

This allows developers to:

* customize configs
* create integrations
* override systems
* modify language files

without exposing protected internal logic.

---

# First Startup

After starting the resource:

1. verify the database tables were created correctly
2. verify no oxmysql errors appear
3. verify the appearance menu opens correctly
4. verify player skins save correctly
5. verify tattoos and outfits save correctly

---

# Recommended Checks

Before production usage, test:

* character creation
* clothing save/load
* tattoo save/load
* outfit save/load
* outfit sharing codes
* reconnect persistence
* compatibility mode
* Illenium format mode