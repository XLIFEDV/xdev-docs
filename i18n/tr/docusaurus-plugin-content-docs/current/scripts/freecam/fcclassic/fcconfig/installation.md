---
title: Kurulum
sidebar_position: 2
---

# Kurulum

Bu rehber, Klasik Serbest Kamera’nın FiveM sunucunuza doğru şekilde nasıl kurulacağını açıklar.

---

## 1) Resource Yerleştirme

Serbest Kamera klasörünü sunucunuzun resources dizinine yerleştirin.

Örnek:

````

resources/[xdev]/xdev-freecam

```

Klasör adı, `server.cfg` içinde kullanacağınız resource adıyla eşleşmelidir.

---

## 2) server.cfg Yapılandırması

`server.cfg` dosyanıza aşağıdaki satırı ekleyin:

```

ensure xdev-freecam

```

Bir framework kullanıyorsanız (örneğin QBCore), Serbest Kamera’dan önce başlatıldığından emin olun:

```

ensure qb-core
ensure xdev-freecam

````

Bu, doğru bağımlılık sırasını garanti eder.

---

## 3) Dil Ayarı

`config.lua` dosyasını açarak tercih ettiğiniz dili ayarlayın:

```lua
Config.Locale = 'en'
````

Mevcut seçenekler:

* `nil` / `false` → otomatik algılama (varsayılan: İngilizce)
* `'tr'`
* `'en'`
* `'de'`
* `'fr'`
* `'ru'`
* `'es'`

---

## 4) Sistem Ayarlarını Kontrol Etme

Sunucuyu başlatmadan önce aşağıdaki ayarları gözden geçirmeniz önerilir:

* Aktivasyon ayarları (`Config.System.action`)
* Kamera limitleri
* Doğrulama kontrolleri
* Hız çarpanları
* Reset davranışı

Tüm sistem davranışı `config.lua` üzerinden kontrol edilir.

---

## 5) Opsiyonel: Export’ları Aktifleştirme

Varsayılan olarak export’lar kapalıdır.

Aktifleştirmek için:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
```

Sadece kullanacağınız export’ları aktifleştirmeniz önerilir.

---

## 6) Opsiyonel: Event’leri Aktifleştirme

Client-side event’ler varsayılan olarak kapalıdır.

```lua
Config.Events.ClientSide.system = {
    onStart = false,
    onClose = false
}
```

Şunları yapabilirsiniz:

* `true` yaparak varsayılan tetikleyicileri kullanmak
* Özel bir event ismi vererek kendi event’inizi tanımlamak

---

## 7) Son Adım

Kurulumu tamamladıktan sonra sunucunuzu yeniden başlatın.

Klasik Serbest Kamera artık yapılandırmanıza uygun şekilde kullanıma hazırdır.