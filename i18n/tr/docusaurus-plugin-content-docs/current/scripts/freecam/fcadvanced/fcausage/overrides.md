---
title: Gelişmiş Override Sistemi
sidebar_position: 2
---

# Gelişmiş Override Sistemi

Gelişmiş Serbest Kamera, geliştiricilerin dahili script mantığını kendi implementasyonlarıyla değiştirebilmesini sağlayan esnek bir **override sistemi** içerir.

Bu sistem sayesinde kamera; özel frameworkler, UI sistemleri veya sunucu mantıkları ile **core resource dosyasını değiştirmeden** entegre edilebilir.

Override ayarları `Config.Override` tablosu içerisinde yapılandırılır.

---

# Override Mimarisi

Override sistemi iki farklı kapsamdan oluşur:

| Scope | Description |
|------|------|
| ClientSide | Client tarafındaki mantığı override eder |
| ServerSide | Server tarafındaki mantığı override eder |

Her override ayrı ayrı aktif veya pasif hale getirilebilir.

Aktif edildiğinde sistem dahili implementasyon yerine geliştiricinin yazdığı fonksiyonu çalıştırır.

---

# Client-Side Overrides

Client-side override'lar geliştiricilerin kamera davranışını ve client tarafındaki mantığı değiştirmesine olanak tanır.

Örnek kullanım alanları:

- custom notifications
- screenshot integration
- visual system integration
- framework validation logic

Örnek configuration:

```lua
Config.Override.ClientSide.DeadCheck = false
Config.Override.ClientSide.VehicleCheck = false
Config.Override.ClientSide.Check = false
Config.Override.ClientSide.SendNotify = false
Config.Override.ClientSide.TakePhoto = false
````

Bir değer **true** olarak ayarlanırsa sistem ilgili override fonksiyonunu kullanır.

---

# Client Override Fonksiyonları

Client-side override fonksiyonları şu bölümde tanımlanır:

```lua
Config.Override.ClientSide.Functions
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message)
    -- custom notification system
end
```

Bu yapı şu sistemlerle entegrasyon için kullanılabilir:

* QBCore
* ox_lib
* mythic_notify
* custom notification systems

---

# Server-Side Overrides

Server-side override'lar geliştiricilerin backend mantığını kontrol etmesine olanak tanır.

Örnek kullanım alanları:

* veri yönetimi
* kalıcı ayar saklama
* framework entegrasyonları

Örnek configuration:

```lua
Config.Override.ServerSide.GetSettings = false
Config.Override.ServerSide.SaveSettings = false
Config.Override.ServerSide.ResetSettings = false
```

Aktif edildiğinde sistem dahili fonksiyonlar yerine geliştiricinin yazdığı server-side fonksiyonları kullanır.

---

# Server Override Fonksiyonları

Server override fonksiyonları şu bölümde tanımlanır:

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

* ayarları özel bir database içerisinde saklamak
* framework player data ile entegrasyon yapmak
* özel persistence sistemleri oluşturmak

---

# Neden Override Kullanılmalı?

Override sistemi geliştiricilerin resource dosyasını değiştirmeden sistemi genişletmesine veya özelleştirmesine olanak tanır.

Avantajları:

* daha kolay güncellemeler
* framework uyumluluğu
* özel mantık desteği
* daha güvenli resource yönetimi

---

# En İyi Kullanım Pratikleri

Override kullanırken:

* yalnızca kullanacağınız override'ları aktif edin
* özel mantığı core resource dışında tutun
* script'in dahili dosyalarını doğrudan değiştirmekten kaçının

Override sistemi kullanıldığında resource **update-safe ve modüler** kalır.

---

# Özet

Gelişmiş Override sistemi geliştiricilerin kamera sisteminin dahili mantığını kendi implementasyonlarıyla değiştirmesine olanak tanır.

Bu sistem sayesinde Gelişmiş Serbest Kamera karmaşık sunucu yapıları veya özel frameworkler ile maksimum esneklikle entegre edilebilir.