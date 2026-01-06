---
title: Eventler & Exportlar
description: POSDEVICE event ve export referansı
sidebar_position: 2
---

Bu belge, **POSDEVICE** sistemi tarafından sağlanan tüm **event** ve **export**’ları açıklar.

---

## POS Device Açma

### Ödeme Modu

Başka bir oyuncudan ödeme talep edilirken kullanılır.

```lua
TriggerEvent('xdev_posdevice:open_device', 'payment', TARGET_ID)
````

Export kullanımı:

```lua
exports.xdev_posdevice:openDevice('payment', TARGET_ID)
```

Davranış:

* Operatör için POS arayüzünü açar
* Hedef oyuncuya ödeme talebi gönderir
* Her iki oyuncuyu senkronize bir oturuma kilitler

---

### Geçmiş Modu

İşlem geçmişi arayüzünü açmak için kullanılır.

```lua
TriggerEvent('xdev_posdevice:open_device', 'menu', HISTORY_DATA)
```

Export kullanımı:

```lua
exports.xdev_posdevice:openDevice('menu', HISTORY_DATA)
```

Davranış:

* Geçmiş menüsünü açar
* Başka bir oyuncu dahil edilmez
* Paylaşılan bir oturum oluşturulmaz

---

## POS Device Kapatma

```lua
TriggerEvent('xdev_posdevice:close_device')
```

Export kullanımı:

```lua
exports.xdev_posdevice:closeDevice()
```

Davranış:

* Aktifse cihazı kapatır
* Oturum verilerini güvenli şekilde temizler

---

## Client-side Cihaz Durumu

Mevcut POS Device durumunu client tarafında okur.

```lua
local info = exports.xdev_posdevice:getInfoDevice()
```

Örnek çıktı:

```lua
{
  device = "payment_menu",
  operator = true,
  customer = false,
  target = 12,
  payment_amount = 100
}
```

### Notlar

* Yalnızca client-side’dır
* Güvenlik kararları için kullanılmamalıdır
* Yetkili doğrulama server-side yapılır
