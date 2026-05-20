---
title: Database
sidebar_position: 3
---

# Database

XDEV Appearance supports both:

- fresh database installations
- existing appearance databases

The system was designed to extend existing structures instead of forcing complete database replacements.

---

# Database Philosophy

The resource internally uses the XDEV appearance structure.

However, compatibility support allows:

- reading external appearance data
- converting external formats
- extending existing SQL tables
- supporting hybrid save structures

This is primarily used for Illenium compatibility workflows.

---

# Supported Tables

The resource uses:

```text id="fh73cg"
playerskins
player_outfits
player_outfit_codes
````

---

# playerskins

Main player appearance storage table.

Stores:

* model
* skin
* tattoos
* ped data
* active state

Example structure:

```sql id="zn2ij7"
CREATE TABLE `playerskins` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `citizenid` VARCHAR(255) NOT NULL,
    `model` VARCHAR(255) NOT NULL,
    `skin` TEXT NOT NULL,
    `tattoo` TEXT NOT NULL,
    `peddata` TEXT NOT NULL,
    `active` LONGTEXT NOT NULL DEFAULT 'false',
    PRIMARY KEY (`id`)
)
```

---

# Important Fields

## model

Stores the ped model.

Examples:

```text id="xj7d7l"
mp_m_freemode_01
mp_f_freemode_01
```

Custom ped hashes may also be used.

---

## skin

Stores the main appearance structure.

Contains:

* clothing
* face data
* overlays
* hair
* props
* components

The structure depends on the configured save format.

---

## tattoo

Stores tattoo data separately.

This allows:

* independent tattoo loading
* compatibility conversion
* tattoo refresh rebuilding

---

## peddata

Stores custom ped component information.

Used primarily for:

* non-freemode peds
* addon peds
* custom ped synchronization

Illenium Appearance does not normally use this field.

XDEV automatically extends the table if the column is missing.

---

## active

Used for active skin tracking.

Normally contains:

```text id="b6zll9"
true
false
```

---

# player_outfits

Stores saved outfits.

Supports both:

* XDEV outfit structure
* Illenium-compatible outfit structure

---

# Supported Outfit Data

XDEV structure:

```text id="s7w97k"
skin
outfitId
```

Illenium-compatible structure:

```text id="q2cf0x"
props
components
```

The system supports hybrid usage.

---

# Outfit Compatibility

If the server previously used Illenium Appearance:

* missing columns are automatically added
* existing outfits remain usable
* compatibility conversion remains possible

---

# player_outfit_codes

Stores outfit sharing codes.

Used for:

* outfit code systems
* outfit importing
* outfit sharing workflows

Example:

```sql id="m6lq1v"
CREATE TABLE `player_outfit_codes` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `outfitid` INT(11) NOT NULL,
    `code` VARCHAR(50) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
)
```

---

# Automatic SQL Extension

The installer automatically checks for missing columns.

If required, the system adds:

```text id="eyjv6q"
tattoo
peddata
active
props
components
outfitId
```

This allows existing databases to continue functioning without full resets.

---

# Illenium Compatibility

When compatibility mode is enabled:

* XDEV reads Illenium-compatible structures
* data is converted internally
* the resource continues using the XDEV workflow internally

This allows seamless migration between systems.

---

# Recommended Database Settings

Recommended collation:

```text id="jlwm5r"
utf8mb4_general_ci
```

Recommended engine:

```text id="r89kh6"
InnoDB
```