---
title: Fotoğraf Sistemi
sidebar_position: 1
---

# Fotoğraf Sistemi

Freecam, kullanıcıların kamera kullanımı sırasında doğrudan screenshot almasını sağlayan yerleşik bir **photo capture system** içerir.

Bu özellik, Freecam ortamından çıkmadan sinematik görüntüler yakalamak isteyen içerik üreticileri için tasarlanmıştır.

Fotoğraf sistemi UI üzerinden veya tanımlı capture tuşu ile tetiklenebilir.

---

# Fotoğraf Özelliğini Aktif Etme

Fotoğraf sistemi UI erişim ayarları üzerinden kontrol edilir.

```lua
Config.UI.access.take_photo = true
````

| Value | Behavior                              |
| ----- | ------------------------------------- |
| true  | Fotoğraf çekme özelliğini aktif eder  |
| false | Fotoğraf sistemini devre dışı bırakır |

Bu özellik kapalıysa UI içerisinde fotoğraf seçeneği görünmez.

---

# Fotoğraf Çekme

Sistem aktif olduğunda kullanıcılar Freecam açıkken screenshot alabilir.

Tipik kullanım akışı:

1. Freecam’i aktif et
2. Kamerayı konumlandır
3. Görsel ve environment ayarlarını düzenle
4. Fotoğraf tuşuna bas veya UI butonunu kullan
5. Screenshot alınır

Bu sayede hızlı ve pratik bir şekilde sinematik görüntüler elde edilir.

---

# Kullanım Alanları

Fotoğraf sistemi genellikle şu amaçlarla kullanılır:

* cinematic screenshot
* sunucu tanıtım görselleri
* sosyal medya içerikleri
* sahne kompozisyon önizlemeleri

Freecam tam görsel kontrol sağladığı için screenshot’lar şunları içerebilir:

* cinematic effects
* özel lighting ayarları
* weather değişiklikleri
* depth of field

---

# Custom Screenshot Sistemleri

Geliştiriciler varsayılan screenshot sistemini override edebilir.

Bu sayede aşağıdaki sistemlerle entegrasyon sağlanabilir:

* screenshot-basic
* server-side capture sistemleri
* external API’ler
* custom pipeline yapıları

Örnek override:

```lua
function Config.Override.ClientSide.Functions.TakePhoto()
    -- custom screenshot logic
end
```

Bu yapı sayesinde screenshot alma ve işleme süreci tamamen özelleştirilebilir.

---

# Local Görsel Yakalama

Freecam ile alınan screenshot’lar tüm **local görsel efektleri** içerir:

* PostFX filtreleri
* camera effects
* depth of field
* time override’ları
* weather override’ları

Bu da yüksek kaliteli sinematik çıktılar elde edilmesini sağlar.

---

# Özet

Photo System, kullanıcıların Freecam içerisinden doğrudan screenshot almasını sağlar.

Gelişmiş görsel kontrol ile birleştiğinde, oyun ortamını değiştirmeden yüksek kaliteli sinematik görüntüler üretmek mümkün olur.