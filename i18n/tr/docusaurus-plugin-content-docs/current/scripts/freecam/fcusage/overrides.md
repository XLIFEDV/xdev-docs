---
title: Override Sistemi
sidebar_position: 2
---

# Override Sistemi

Freecam, geliştiricilerin dahili sistemleri kendi implementasyonları ile değiştirmesine olanak sağlayan esnek bir **override system** içerir.

Bu sistem sayesinde Freecam’i framework’lere, UI sistemlerine ve sunucu logic’ine **core resource’u değiştirmeden** entegre etmek mümkündür.

Tüm override ayarları `Config.Override` tablosu içerisinde bulunur.

---

# Override Mimarisi

Override sistemi iki ana scope’a ayrılır:

| Scope | Description |
|------|------------|
| ClientSide | Client-side logic’i override eder |
| ServerSide | Server-side logic’i override eder |

Her override ayrı ayrı aktif veya pasif yapılabilir.

Aktif edildiğinde sistem varsayılan logic yerine geliştiricinin yazdığı fonksiyonu kullanır.

---

# Client-Side Overrides

Client-side override’lar, kamera davranışını ve client taraflı sistemleri değiştirmeye olanak sağlar.

Yaygın kullanım alanları:

- custom notification sistemleri  
- screenshot entegrasyonları  
- visual system kontrolü  
- framework doğrulama (validation)  

Örnek config:

```lua
Config.Override.ClientSide.DeadCheck = false
Config.Override.ClientSide.VehicleCheck = false
Config.Override.ClientSide.Check = false
Config.Override.ClientSide.SendNotify = false
Config.Override.ClientSide.TakePhoto = false
````

Bir değer **true** olarak ayarlanırsa, ilgili override fonksiyonu kullanılacaktır.

---

# Client Override Fonksiyonları

Client override fonksiyonları şu alanda tanımlanır:

```lua
Config.Override.ClientSide.Functions
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message)
    -- custom notification system
end
```

Bu yapı sayesinde şu sistemlerle entegrasyon yapılabilir:

* QBCore
* ox_lib
* mythic_notify
* custom UI sistemleri

---

# Server-Side Overrides

Server-side override’lar backend logic’i kontrol etmeye olanak sağlar.

Yaygın kullanım alanları:

* kamera ayarlarını kaydetme
* kayıtlı verileri yükleme
* verileri sıfırlama
* database entegrasyonu

Örnek config:

```lua
Config.Override.ServerSide.GetSettings = false
Config.Override.ServerSide.SaveSettings = false
Config.Override.ServerSide.ResetSettings = false
```

Aktif edildiğinde custom server-side fonksiyonlar kullanılır.

---

# Server Override Fonksiyonları

Server override fonksiyonları şu alanda tanımlanır:

```lua
Config.Override.ServerSide.Functions
```

Örnek:

```lua
function Config.Override.ServerSide.Functions.SaveSettings(src, settings)
    -- custom save logic
end
```

Geliştiriciler bu sistemi şu amaçlarla kullanabilir:

* custom database sistemlerine veri kaydetmek
* player data sistemleri ile entegrasyon yapmak
* özel persistence logic oluşturmak

---

# Neden Override Kullanılmalı?

Override sistemi, resource dosyalarını değiştirmeden sistemi genişletmeye veya özelleştirmeye imkan sağlar.

Avantajları:

* daha kolay güncelleme
* framework uyumluluğu
* modüler yapı
* daha güvenli bakım süreci

---

# En İyi Kullanım Pratikleri

Override kullanırken:

* sadece ihtiyacınız olan override’ları aktif edin
* custom logic’i core resource’tan ayrı tutun
* script dosyalarını doğrudan düzenlemekten kaçının

Bu yaklaşım sistemin **update-safe ve sürdürülebilir** kalmasını sağlar.

---

# Özet

Override sistemi, Freecam davranışını tamamen özelleştirme imkanı sunar.

Bu yapı sayesinde Freecam, kompleks sunucu ortamlarına kolayca entegre edilebilir ve uyumluluk bozulmadan genişletilebilir.