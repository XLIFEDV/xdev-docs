---
title: Opposite Mapping
sidebar_position: 12
---

# Opposite Mapping

Opposite mapping sistemi geliştiricilerin şu yapılar arasında eşleşen değerleri tanımlamasını sağlar:

- erkek kıyafetleri
- kadın kıyafetleri

ve isteğe bağlı olarak diğer appearance kategorileri arasında da kullanılabilir.

Yapılandırma şu dosya içerisinde bulunur:

```text
shared/data/opposites.lua
````

---

# Sistem Amacı

Sistem şunlara yardımcı olmak için tasarlanmıştır:

* cinsiyet değiştirme
* UI önizlemeleri
* karşı cins kombin önerileri
* kıyafet senkronizasyonu
* uyumluluk işleyişleri

Manuel olarak uygulanmadığı sürece kıyafetleri otomatik değiştirmez.

---

# Temel Yapı

Örnek:

```lua
Config.Opposites = {
    mask = {
        {30, 20},
        {31, 21},
    }
}
```

---

# Mapping Formatı

Her giriş şu yapıyı kullanır:

```lua
{ maleValue, femaleValue }
```

Örnek:

```lua
{30, 20}
```

Anlamı:

```text
erkek drawable 30
=
kadın drawable 20
```

---

# Desteklenen Kategoriler

Desteklenen kıyafet kategorileri:

```text
mask
hair
arms
t-shirt
torso2
vest
decals
pants
shoes
bag
hat
glass
ear
watch
bracelet
accessory
```

---

# Desteklenen Yüz Kategorileri

Desteklenen appearance kategorileri:

```text
facemix
face
face2
eyebrows
beard
blush
lipstick
makeup
ageing
eye_color
moles
```

---

# Desteklenen Yüz Özelliği Kategorileri

Desteklenen yüz özelliği mapping sistemleri:

```text
nose_0
nose_1
nose_2
nose_3
nose_4
nose_5

cheek_1
cheek_2
cheek_3

eye_opening
lips_thickness

jaw_bone_width
jaw_bone_back_length

eyebrown_high
eyebrown_forward

chimp_bone_lowering
chimp_bone_length
chimp_bone_width
chimp_hole

neck_thickness
```

---

# Örnek Kıyafet Mapping Sistemi

Örnek:

```lua
pants = {
    {10, 5},
}
```

Anlamı:

```text
erkek pantolon drawable 10
=
kadın pantolon drawable 5
```

---

# Örnek Prop Mapping Sistemi

Örnek:

```lua
hat = {
    {15, 8},
}
```

Şu durumlarda kullanışlıdır:

* erkek/kadın props sistemleri farklı drawable index kullanıyorsa
* addon paketleri farklı modeller kullanıyorsa
* üniformalar cinsiyete göre değişiyorsa

---

# UI Entegrasyonu

Opposite mapping sistemi temel olarak şunlar için tasarlanmıştır:

* önizleme sistemleri
* otomatik öneriler
* dönüştürme yardımcıları
* senkronizasyon işleyişleri

Resource UI içerisinde opposite değerleri gösterebilir.

---

# Otomatik Dönüştürme

Sistem bilinçli olarak dahili otomatik dönüştürme zorlamaz.

Amaç:

* bozuk kombinleri önlemek
* hatalı mapping sistemlerinden kaçınmak
* geliştirici kontrolünü korumak
* custom mantıkları desteklemek

Geliştiriciler isterse kendi dönüştürme sistemlerini uygulayabilir.

---

# Önerilen Kullanım

Önerilen kullanım alanları:

```text
cinsiyet değiştirme
üniforma senkronizasyonu
addon kıyafet uyumluluğu
otomatik kombin yeniden oluşturma
```

---

# Addon Kıyafet Desteği

Addon kıyafet paketleri çoğunlukla cinsiyetler arasında farklı drawable index değerleri kullanır.

Opposite mapping sistemi şu problemleri çözmeye yardımcı olur:

```text
erkek drawable uyuşmazlığı
kadın drawable uyuşmazlığı
```

Korunan dosyalar içerisine hardcode mantık yazmadan çalışır.

---

# Framework Bağımsızlığı

Opposite sistemi tamamen standalone çalışır.

Şunlara bağımlı değildir:

* QBCore
* ESX
* Illenium
* harici appearance sistemleri

---

# Geliştirici Notları

Birçok appearance sistemi cinsiyetler arası eşdeğer kıyafet ilişkilerini tamamen yok sayar.

XDEV şunları kolaylaştırmak için özel bir mapping katmanı sunar:

* gelecekteki uyumluluk sistemleri
* otomatik dönüştürücüler
* kombin geçiş işleyişleri
* custom senkronizasyon sistemleri

---

# Önerilen İşleyiş

Önerilen işleyiş:

```text
1. Eşleşen erkek/kadın değerlerini belirle
2. Opposite mapping sistemlerini oluştur
3. Cinsiyet değiştirmeyi test et
4. Texture uyumluluğunu doğrula
5. Addon kıyafet davranışlarını doğrula
```