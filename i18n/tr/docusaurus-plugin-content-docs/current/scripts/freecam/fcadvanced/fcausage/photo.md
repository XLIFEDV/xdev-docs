---
title: Fotoğraf Sistemi
sidebar_position: 1
---

# Fotoğraf Sistemi

Gelişmiş Serbest Kamera, kullanıcıların kamerayı kullanırken doğrudan ekran görüntüsü alabilmesini sağlayan bir **photo capture sistemi** içerir.

Bu özellik, içerik üreticilerin Freecam ortamından çıkmadan sinematik görüntüler yakalayabilmesi için tasarlanmıştır.

Fotoğraf sistemi UI üzerinden veya yapılandırılmış capture tuşu kullanılarak kontrol edilebilir.

---

# Fotoğraf Özelliğini Aktifleştirme

Fotoğraf sistemi UI erişim yapılandırması üzerinden kontrol edilir.

```lua
Config.UI.access.take_photo = true
````

| Value | Behavior                              |
| ----- | ------------------------------------- |
| true  | Fotoğraf çekme özelliğini aktif eder  |
| false | Fotoğraf sistemini devre dışı bırakır |

Bu seçenek kapatılırsa screenshot özelliği UI içerisinde görünmez.

---

# Fotoğraf Çekme

Fotoğraf sistemi aktif olduğunda kullanıcılar Freecam kullanırken screenshot alabilir.

Tipik kullanım akışı:

1. Freecam'i aktif edin.
2. Kamera pozisyonunu ve görsel ayarları düzenleyin.
3. Tanımlı fotoğraf tuşuna basın veya UI üzerindeki butonu kullanın.
4. Screenshot alınır.

Bu yöntem içerik üreticilerin sinematik sahneleri hızlı bir şekilde yakalamasını sağlar.

---

# Kullanım Senaryoları

Fotoğraf sistemi genellikle şu amaçlarla kullanılır:

* cinematic screenshots
* server promotional images
* social media content
* scene composition previews

Gelişmiş Serbest Kamera tam görsel kontrol sunduğu için screenshotlar şu özelliklerle birlikte alınabilir:

* cinematic effects
* controlled lighting
* custom weather
* depth of field

---

# Özel Screenshot Sistemleri

Geliştiriciler varsayılan screenshot davranışını override edebilir.

Bu sayede sistem şu araçlarla entegre edilebilir:

* screenshot-basic
* server-side capture systems
* external screenshot services
* custom image pipelines

Örnek override:

```lua
function Config.Override.ClientSide.Functions.TakePhoto()
    -- custom screenshot logic
end
```

Bu fonksiyon override edildiğinde geliştiriciler screenshotların nasıl alınacağını ve işleneceğini tamamen kontrol edebilir.

---

# Yerel Görsel Yakalama

Gelişmiş Serbest Kamera üzerinden alınan screenshotlar tüm **yerel olarak uygulanmış görsel efektleri** içerir.

Buna şunlar dahildir:

* PostFX filters
* camera effects
* depth of field
* time overrides
* weather overrides

Bu nedenle fotoğraf sistemi sinematik görseller üretmek için oldukça uygundur.

---

# Özet

Fotoğraf Sistemi, kullanıcıların Freecam ortamından doğrudan screenshot almasına olanak tanır.

Gelişmiş Serbest Kamera'nın sunduğu görsel kontrol sistemleriyle birlikte kullanıldığında, bu özellik oyun ortamını değiştirmeden yüksek kaliteli sinematik görüntüler oluşturmayı mümkün kılar.