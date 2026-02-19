---
title: Exportlar
sidebar_position: 3
---

# Exportlar

Klasik Serbest Kamera, diğer scriptlerle entegrasyon için opsiyonel export fonksiyonları sunar.

Exportlar varsayılan olarak kapalıdır ve `config.lua` üzerinden aktifleştirilmelidir.

---

## Exportları Aktifleştirme

`config.lua` içerisinde:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
````

Sadece kullanacağınız exportları aktifleştirmeniz önerilir.

---

## openFreecam()

Serbest Kamera’yı script üzerinden aktif eder.

Örnek:

```lua
exports['xdev-freecam']:openFreecam()
```

### Dönüş Değeri

Fonksiyon şu değerlerden birini döndürür:

* `false` → Aktivasyon başarılı
* `string` → Aktivasyon engellendi (lokalize edilmiş sistem mesajı)

Engellenme sebepleri şunlar olabilir:

* Oyuncu doğrulama başarısız
* Araç kısıtlaması
* Özel kontrol engeli
* Serbest Kamera zaten aktif

---

## closeFreecam()

Serbest Kamera’yı script üzerinden kapatır.

Örnek:

```lua
exports['xdev-freecam']:closeFreecam()
```

Bu işlem normal oyun kamerasını güvenli şekilde geri yükler.

---

## getData()

Mevcut Serbest Kamera durum bilgilerini döndürür.

Örnek:

```lua
local data = exports['xdev-freecam']:getData()
```

### Dönen Veri Yapısı

```lua
{
  freecamActive = boolean,
  cam = false veya {
    cam = number,
    camData = table veya false,
    mainCoords = vector3
  },
  configSystem = Config.System
}
```

### Alan Açıklamaları

* `freecamActive` → Serbest Kamera’nın aktif olup olmadığını belirtir.
* `cam` → Aktifse kamera verilerini içerir, değilse `false`.
* `mainCoords` → Oyuncunun mevcut dünya koordinatları.
* `configSystem` → Geçerli sistem yapılandırması.

---

## Entegrasyon Notları

Exportlar şu amaçlarla kullanılabilir:

* Yönetim panelleri
* Moderasyon araçları
* Koşullu aktivasyon sistemleri
* Harici durum takibi

Doğrulama mantığının Serbest Kamera içerisinde kalması, exportların ise kontrollü etkileşim için kullanılması önerilir.