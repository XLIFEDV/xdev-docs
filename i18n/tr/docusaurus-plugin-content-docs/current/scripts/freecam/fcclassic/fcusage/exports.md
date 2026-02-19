---
title: Exports
sidebar_position: 3
---

# Exports
```

Varsayılan olarak kapalıdır.

---

## openFreecam()

Başarılıysa `false`, hata varsa lokalize edilmiş mesaj döner.

---

## closeFreecam()

Freecam’i kapatır.

---

## getData()

Döndürür:

```lua
{
  freecamActive = boolean,
  cam = false veya table,
  configSystem = Config.System
}
```