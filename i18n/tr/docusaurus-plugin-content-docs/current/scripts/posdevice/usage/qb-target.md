---
title: qb-target Entegrasyonu
description: POSDEVICE’in qb-target ile entegrasyonu
sidebar_position: 1
---

# qb-target Entegrasyonu

Bu belge, **POSDEVICE** scriptinin `qb-target` ile nasıl entegre edileceğini açıklar.  
Bu entegrasyon sayesinde oyuncular POS Device kullanarak birbirleriyle etkileşime girebilir.

---

## Yöntem A — Statik Yapılandırma

POS Device etkileşimini doğrudan `qb-target` yapılandırmanız içinde kaydedin.

```lua
Config.GlobalPlayerOptions = {
  options = {
    {
      label = "POS Device Kullan",
      type = "client",
      action = function(entity)
        TriggerEvent(
          'xdev_posdevice:open_device',
          'payment',
          GetPlayerServerId(NetworkGetPlayerIndexFromPed(entity))
        )
      end
    }
  },
  distance = 3.0
}
````

---

## Yöntem B — Çalışma Zamanında Kayıt (Runtime)

Etkileşimi çalışma zamanı sırasında dinamik olarak kaydedin.

```lua
exports['qb-target']:AddGlobalPlayer({
  options = {
    {
      label = "POS Device Kullan",
      type = "client",
      action = function(entity)
        TriggerEvent(
          'xdev_posdevice:open_device',
          'payment',
          GetPlayerServerId(NetworkGetPlayerIndexFromPed(entity))
        )
      end
    }
  },
  distance = 3.0
})
```

---

## Notlar

* Her iki yöntem de aynı şekilde çalışır
* Yanlışlıkla tetiklemeleri önlemek için mesafe düşük tutulmalıdır
* Doğrulama ve güvenlik kontrolleri POSDEVICE tarafından dahili olarak yapılır

```