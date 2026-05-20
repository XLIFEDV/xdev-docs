---
title: Veri Formatı
sidebar_position: 4
---

# Veri Formatı

XDEV Appearance dahili olarak yapılandırılmış appearance verileri kullanarak şunları senkronize eder:

- kıyafet sistemleri
- prop sistemleri
- overlay sistemleri
- dövmeler
- peddata
- yüz yapısı

Bu doküman dahili veri formatı mantığını ve desteklenen yapıları açıklar.

---

# Sistem Mantığı

Birçok appearance sisteminin aksine XDEV bilinçli olarak şunları birbirinden ayırır:

```text
appearance
tattoos
peddata
outfits
cache data
````

Modüler yapılar halinde çalışır.

Amaç:

* daha temiz senkronizasyon
* uyumluluk desteği
* yeniden oluşturma güvenilirliği
* daha kolay dönüştürme işlemleri

---

# Ana Appearance Yapısı

Tipik appearance yapısı:

```lua
{
    model = "",
    hair = {},
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    eyeColor = 0,
    components = {},
    props = {},
    tattoos = {}
}
```

---

# Model

Aktif ped modelini saklar.

Örnek:

```lua
model = "mp_m_freemode_01"
```

Şunlar için kullanılır:

* ped yeniden oluşturma
* uyumluluk doğrulama
* senkronizasyon işleyişleri

---

# Saç Yapısı

Örnek:

```lua
hair = {
    style = 0,
    texture = 0,
    color = 0,
    highlight = 0
}
```

Desteklenen değerler:

```text
style
texture
color
highlight
```

---

# Head Blend Yapısı

Örnek:

```lua
headBlend = {
    shapeFirst = 0,
    shapeSecond = 0,
    skinFirst = 0,
    skinSecond = 0,
    shapeMix = 0.0,
    skinMix = 0.0
}
```

Amaç:

```text
yüz genetiği
ten karıştırma sistemi
ebeveyn karıştırma sistemi
```

---

# Face Features Yapısı

Örnek:

```lua
faceFeatures = {
    noseWidth = 0,
    jawBoneWidth = 0,
    chinBoneSize = 0
}
```

Desteklenen kategoriler:

```text
nose
jaw
chin
cheeks
eyes
neck
lips
```

---

# Head Overlays Yapısı

Örnek:

```lua
headOverlays = {
    beard = {
        style = 0,
        opacity = 0,
        color = 1,
        secondColor = 0
    }
}
```

Desteklenen overlay değerleri:

```text
style
opacity
color
secondColor
```

---

# Overlay Notları

Bazı overlay sistemleri renk paletlerini desteklerken bazıları yalnızca opaklık desteği sunar.

Tipik renk destekli overlay sistemleri:

```text
beard
eyebrows
makeup
lipstick
blush
```

---

# Göz Rengi Yapısı

Örnek:

```lua
eyeColor = 0
```

Şu işleyişlerde kullanılır:

* cerrah sistemleri
* yüz yeniden oluşturma
* önbellek senkronizasyonu

---

# Components Yapısı

Components GTA kıyafet kategorilerini temsil eder.

Örnek:

```lua
components = {
    {
        component_id = 11,
        drawable = 5,
        texture = 0
    }
}
```

Desteklenen değerler:

```text
component_id
drawable
texture
```

---

# Props Yapısı

Props çıkarılabilir GTA aksesuarlarını temsil eder.

Örnek:

```lua
props = {
    {
        prop_id = 0,
        drawable = -1,
        texture = -1
    }
}
```

Şu kullanım:

```lua
drawable = -1
```

prop'u tamamen kaldırır.

---

# Dövme Yapısı

Örnek:

```lua
tattoos = {
    ZONE_HEAD = {
        {
            name = "TAT_BB_021",
            opacity = 0.4
        }
    }
}
```

Desteklenen değerler:

```text
name
opacity
zone
collection
hashes
```

Senkronizasyon aşamasına bağlı olarak değişebilir.

---

# peddata Yapısı

peddata sistemi temel olarak şunlar için bulunur:

```text
custom pedler
addon pedler
ped yeniden oluşturma
gelişmiş senkronizasyon
```

Birçok appearance sisteminin aksine XDEV ped'e özel appearance verilerini freemode yapılarından ayırır.

---

# Kombin Veri Yapısı

Kombinler bilinçli olarak hafif yapılar kullanır.

Örnek:

```lua
{
    components = {},
    props = {}
}
```

Amaç:

```text
kimlik verilerini korumak
yüz verilerinin üzerine yazılmasını önlemek
senkronizasyonu basitleştirmek
```

---

# Önbellek Veri Yapısı

Yüz önbellek yapıları genellikle şunları içerir:

```lua
{
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    eyeColor = 0,
    hair = {}
}
```

Kıyafet veya dövme verileri olmadan çalışır.

---

# Karşılaştırma İşleyişleri

Sistem kayıt işleminden önce dahili olarak değer karşılaştırmaları yapabilir.

Yaygın karşılaştırma hedefleri:

```text
item
texture
mix
opacity
color
```

Amaç:

* gereksiz kayıt işlemlerini azaltmak
* senkronizasyonu optimize etmek
* gereksiz güncellemeleri önlemek

---

# Uyumluluk Yapıları

Dönüştürücü katmanı şu sistemlerden gelen yapıları destekler:

```text
Illenium Appearance
eski appearance sistemleri
özel framework sistemleri
```

Dahili yeniden oluşturma işleyişleri üzerinden çalışır.

---

# Serialization

Appearance yapılarının çoğu şu yöntem kullanılarak saklanır:

```text
JSON encoding
```

SQL tabloları içerisinde kullanılır.

Tipik alanlar:

```text
skin
tattoo
peddata
components
props
```

---

# Senkronizasyon Mantığı

XDEV bilinçli olarak appearance yapısını tek bir büyük yapı yerine birden fazla senkronize veri yapısından yeniden oluşturur.

Amaç:

```text
daha iyi yeniden oluşturma güvenilirliği
modülerlik
uyumluluk desteği
ped senkronizasyonu
```

---

# Geliştirici Notları

Resource bilinçli olarak tek ve katı bir appearance yapısını zorunlu tutmaz.

Bunun yerine mimari şu yapılara odaklanır:

```text
dönüştürme
modülerlik
uyumluluk
yeniden oluşturma güvenliği
```

Uzun vadeli bakım ve geçiş süreçlerini kolaylaştırmak için tasarlanmıştır.
