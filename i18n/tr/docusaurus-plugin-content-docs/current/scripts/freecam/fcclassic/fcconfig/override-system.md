---
title: Override System
sidebar_position: 5
---

# Override Sistemi
```

Freecam açılmadan önce doğrulama yapılır:

1. Ölüm kontrolü
2. Araç kontrolü
3. Özel kontrol

---

## Kontrolleri Açma/Kapama

```lua
Config.System.checks.dead    = true/false
Config.System.checks.vehicle = true/false
```

---

## Doğrulama Akışı

* DeadCheck başarısız → `system.dead_check`
* VehicleCheck başarısız → `system.vehicle_check`
* Custom Check başarısız → `system.check`
* Zaten aktif → `system.freecam_active`