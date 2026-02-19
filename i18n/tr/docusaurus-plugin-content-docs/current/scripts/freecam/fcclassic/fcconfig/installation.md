---
title: Installation
sidebar_position: 2
---

# Kurulum
```

## 1) Resource Yerleştirme

```
resources/[xdev]/xdev-freecam
```

## 2) server.cfg

```
ensure xdev-freecam
```

Framework varsa önce onu yükleyin:

```
ensure qb-core
ensure xdev-freecam
```

---

## 3) Dil Ayarı

```lua
Config.Locale = 'en'
```

---

## 4) Exports Aktifleştirme

Varsayılan olarak kapalıdır:

```lua
Config.Exports.openFreecam  = false
Config.Exports.closeFreecam = false
Config.Exports.getData      = false
```

---

## 5) Event Aktifleştirme

```lua
Config.Events.ClientSide.system = {
  onStart = false,
  onClose = false
}
```