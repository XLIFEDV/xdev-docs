---
title: System Settings
sidebar_position: 3
---

# Sistem Ayarları

Bu sayfa, Freecam Classic tarafından kullanılan `config.lua` ayarlarını açıklar.
```

---

## Locale

```lua
Config.Locale = 'en'
```

* `nil` / `false`: dili otomatik algılar (varsayılan: İngilizce)
* `'tr'`, `'en'`, `'de'`, `'fr'`, `'ru'`, `'es'`

---

## Debug Mode

```lua
Config.System.Debug = false
```

* `false`: yalnızca kritik hatalar yazdırılır
* `true`: ayrıntılı debug logları yazdırılır (doğrulama, locale tespiti vb.)

---

## System Checks

Bu ayarlar, Freecam açılırken doğrulama yapılmasını belirler.

```lua
Config.System.checks.dead    = false
Config.System.checks.vehicle = false
```

### Dead Check

* `true`: oyuncunun hayatta olması gerekir
* `false`: ölüm kontrolü yapılmaz

### Vehicle Check

* `true`: araç durumu kontrol edilir
* `false`: araç kontrolü yapılmaz

> Not: “Geçerli” durumun ne olduğu, override implementasyonunuza bağlıdır.

---

## Activation (Komut / Tuş / Basılı Tutma)

```lua
Config.System.action = {
    command = "freecam",
    key = "V",
    hold = 2000
}
```

### Alanlar

* `command`: Sohbet komutu adı (`/freecam`)
* `key`: Tuş ataması (örnek: `V`)
* `hold`: Tuşun basılı tutulma süresi (milisaniye)

### Davranış Kuralları

* `command` `nil` ise → varsayılan `"freecam"` kullanılır
* `key` `nil` ise → tuş ile erişim devre dışı kalır
* `key` `nil` ama `hold` dolu ise → yine erişim sağlanmaz
* `hold` `nil` ise → varsayılan 2000 ms kullanılır

---

## Reset Behavior

```lua
Config.System.reset = false
```

* `true`: her açılışta kamera ayarları sıfırlanır
* `false`: son kullanılan ayarlar korunur

Reset açıkken yeni kamera verisi oluşturulur:

```lua
camData = {
  coord  = Config.System.firstposition,
  zoom   = Config.System.values.zoom.default,
  rotate = vector3(0.0, 0.0, 0.0)
}
```

---

## Initial Camera Offset

```lua
Config.System.firstposition = vec3(0.0, 1.5, 0.5)
```

Freecam ilk açıldığında kullanılacak başlangıç konum ofsetidir.

---

## Camera Animation Duration

```lua
Config.System.cam_animation = 750 -- ms
```

Freecam açılış/kapanış geçiş süresini belirler.

---

## Zoom (FOV)

```lua
Config.System.values.zoom.default = 90.0
Config.System.values.zoom.min     = 10.0
Config.System.values.zoom.max     = 120.0
```

Zoom işlemi FOV (Field of View) değiştirerek yapılır.

---

## Distance Limit

```lua
Config.System.values.distance = 7.5
```

Kamera oyuncudan bu mesafeden daha uzağa gidemez.

---

## Speed Multipliers

### Movement

```lua
Config.System.multipliers.move.slow = 0.005
Config.System.multipliers.move.fast = 0.1
```

### Rotation

```lua
Config.System.multipliers.rotate.slow = 0.25
Config.System.multipliers.rotate.fast = 1.0
```

### Zoom

```lua
Config.System.multipliers.zoom.slow = 0.25
Config.System.multipliers.zoom.fast = 1.0
```