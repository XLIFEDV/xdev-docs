---
title: Kıyafet Odaları
sidebar_position: 9
---

# Kıyafet Odaları

Kıyafet odası sistemi geliştiricilerin şu yapılar için kısıtlı kombin alanları oluşturmasını sağlar:

- meslekler
- çeteler
- organizasyonlar
- departmanlar
- faction sistemleri

Yapılandırma şu dosya içerisinde bulunur:

```text
shared/data/clothing_rooms.lua
````

---

# Sistem Amacı

Kıyafet odaları temel olarak şunlar için kullanılır:

* polis dolap odaları
* EMS dolap odaları
* çete kombin odaları
* faction üniformaları
* kısıtlı kıyafet alanları

Sistem şunları destekler:

* herkese açık kıyafet odaları
* kısıtlı kıyafet odaları

---

# Desteklenen Alan Tipleri

Resource şunları destekler:

```text
radius
poly
```

---

# Radius Alanları

Dairesel etkileşim bölgeleridir.

Örnek:

```lua
{
    areaType = 'radius',
    coords = vector3(480.7, -1010.5, 30.6),
    radius = 5.0
}
```

Şunlar için en uygundur:

* dolap odaları
* küçük kombin noktaları
* interior alanları
* kompakt bölgeler

---

# Poly Alanları

Polygon tabanlı etkileşim bölgeleridir.

Örnek:

```lua
{
    areaType = 'poly',
    points = {
        vector2(1.0, 1.0),
        vector2(5.0, 1.0),
        vector2(5.0, 5.0),
        vector2(1.0, 5.0)
    }
}
```

Şunlar için en uygundur:

* büyük interior alanları
* özel binalar
* karmaşık etkileşim bölgeleri

---

# Temel Yapı

Örnek yapılandırma:

```lua
{
    gender = 'male',
    requiredJob = 'police',
    isGang = false,

    areaType = 'radius',
    coords = vector3(480.7, -1010.5, 30.6),
    radius = 5.0
}
```

---

# Cinsiyet Kısıtlamaları

Desteklenen değerler:

```text
male
female
```

Belirtilmezse:

```text
her iki cinsiyet de erişebilir
```

---

# Meslek Kısıtlamaları

Örnek:

```lua
requiredJob = 'police'
```

Yalnızca belirtilen mesleğe sahip oyuncular kıyafet odasına erişebilir.

---

# Çete Kısıtlamaları

Örnek:

```lua
requiredJob = 'ballas',
isGang = true
```

Şu durumda:

```lua
isGang = true
```

sistem meslek verisi yerine çete verisini doğrular.

---

# Herkese Açık Odalar

Şu şekilde ayarlanırsa:

```lua
requiredJob = nil
```

oda herkese açık hale gelir.

Herhangi bir kısıtlama kontrolü uygulanmaz.

---

# Blip Sistemi

Kıyafet odaları isteğe bağlı blip desteği sunar.

---

# Basit Blip

Örnek:

```lua
blip = true
```

Varsayılan blip ayarlarını kullanır.

---

# Gelişmiş Blip

Örnek:

```lua
blip = {
    active = true,
    sprite = 73,
    color = 3,
    scale = 0.7,
    label = 'Police Locker'
}
```

---

# Desteklenen Blip Alanları

Desteklenen yapılandırmalar:

```text
active
coords
sprite
color
scale
label
display
shortRange
```

---

# Blip Koordinatları

Özel blip konumları kullanılabilir.

Örnek:

```lua
blip = {
    coords = vector3(x, y, z)
}
```

Belirtilmezse:

```text
ana oda koordinatları kullanılır
```

---

# Üniforma Sistemi Entegrasyonu

Kıyafet odaları doğrudan şu sistem ile entegre çalışır:

```text
shared/data/outfits.lua
```

Sistem otomatik olarak eşleşen:

* meslek kombinlerini
* çete kombinlerini
* grade kombinlerini
* cinsiyet kombinlerini

yükler.

---

# Grade Desteği

Sistem grade tabanlı kombinleri destekler.

Örnek:

```lua
['male'] = {
    [0] = { ... },
    [1] = { ... },
    [2] = { ... }
}
```

Farklı grade sistemleri farklı üniformalar alabilir.

---

# Framework Bağımsızlığı

Kıyafet odası sistemi bilinçli olarak hardcode framework mantıklarından kaçınır.

Geliştiriciler şunları değiştirebilir:

* yetki yönetimi
* etkileşim mantığı
* oda doğrulama sistemi
* blip yönetimi

Override veya entegrasyon sistemleri üzerinden çalıştırabilir.

---

# Önerilen Kullanım

Şunlar için önerilir:

```text
police
ambulance
mechanic
gangs
factions
organizations
```

---

# Geliştirici Notları

Kıyafet odası sistemi kıyafet mağazalarından ayrı şekilde tasarlanmıştır.

Amaç:

* daha iyi roleplay kontrolü
* kısıtlı kombin yönetimi
* daha temiz organizasyon desteği
* framework bağımsız yetki sistemleri