---
title: Ücret Yapılandırması
sidebar_position: 4
---

# Ücret Yapılandırması

Ücret sistemi XDEV Appearance içerisindeki tüm ödeme davranışlarını kontrol eder.

Ücret yapılandırması şu dosya içerisinde bulunur:

```text
shared/config.lua
````

---

# Ücret Yapısı

Ana ücret yapılandırması:

```lua
Config.System.Price = {}
```

Bu bölüm şunları kontrol eder:

* kıyafet ücretleri
* barber ücretleri
* dövme ücretleri
* kombin kayıt ücretleri
* kombin değiştirme ücretleri

---

# Kıyafet Ücretlendirmesi

Yapılandırma:

```lua
Config.System.Price.clothing = {
    enabled = true,
    basePrice = 50,
    extraCost = 10,
    maxPrice = false,
}
```

---

# Kıyafet Ücret Mantığı

Kıyafet sistemi ücretleri dinamik olarak hesaplar.

Formül:

```text
basePrice + değiştirilenItemSayısı * extraCost
```

Örnek:

```text
basePrice = 50
extraCost = 10
3 kıyafet değişikliği

Sonuç:
50 + (3 * 10) = 80
```

---

# maxPrice

Yapılandırma:

```lua
maxPrice = 500
```

Amaç:

Maksimum kıyafet ücretini sınırlar.

Şu şekilde ayarlanırsa:

```lua
false
```

maksimum limit uygulanmaz.

---

# Yok Sayılan Kıyafet Kategorileri

Kıyafet sistemi yok sayılan kategorileri destekler.

Örnek:

```lua
ignore = {
    decals = true,
    bag = true,
    accessory = false,
}
```

Yok sayılan kategoriler son kıyafet ücretine eklenmez.

Şunlar için kullanışlıdır:

* ücretsiz aksesuarlar
* sadece kozmetik itemler
* roleplay itemleri

---

# Barber Ücretlendirmesi

Yapılandırma:

```lua
Config.System.Price.barber = {
    enabled = true,
    basePrice = 50,
    extraCost = 10,
    maxPrice = false,
}
```

Şunların ücretlerini kontrol eder:

* saç
* sakal
* makyaj
* overlay sistemleri
* yüz appearance düzenlemeleri

---

# Dövme Ücretlendirmesi

Yapılandırma:

```lua
Config.System.Price.tattoo = {
    enabled = true,
    basePrice = 0,
    extraCost = 25,
    maxPrice = false,
}
```

Dövme ücretleri her dövme değişikliğine göre hesaplanır.

Şunlar için kullanışlıdır:

* gerçekçi dövme ilerleme sistemi
* premium dövme sistemleri
* ekonomi dengelemesi

---

# Kombin Kayıt Ücreti

Yapılandırma:

```lua
Config.System.Price.saveoutfit = 0
```

Kombin kayıt ücretini kontrol eder.

Şu şekilde ayarlanırsa:

```lua
0
```

kombin kaydetme ücretsiz olur.

---

# Kombin Değiştirme Ücreti

Yapılandırma:

```lua
Config.System.Price.outfitchanger = 0
```

Kombin değiştirme sistemlerinin ücretini kontrol eder.

Şunlar için kullanışlıdır:

* kıyafet odası sistemleri
* gardırop sistemleri
* premium kombin değiştirme sistemleri

---

# Para Düşme Mantığı

Gerçek para düşme işlemi override sistemleri üzerinden yönetilir.

Varsayılan override:

```lua
function Config.Override.ServerSide.Functions.RemoveMoney(src, price)
    return false
end
```

Geliştiricilerin bunu kendi ekonomi frameworküne bağlaması gerekir.

---

# Ödeme Sonuç Davranışı

Beklenen dönüş değerleri:

```lua
true  -> ödeme başarılı
false -> ödeme başarısız
```

Ödeme başarısız olursa:

* işlem engellenir
* appearance değişikliği iptal edilir
* bildirim gösterilebilir

---

# Dinamik Ücret Mantığı

Ücret sistemi bilinçli olarak esnek şekilde tasarlanmıştır.

Geliştiriciler şunları oluşturabilir:

* ücretsiz sunucular
* gerçekçi ekonomi sunucuları
* premium özelleştirme sunucuları
* roleplay odaklı ücret sistemleri

Korunan dosyaları düzenlemeden çalıştırabilir.

---

# Önerilen Kullanım

Önerilen hafif yapılandırma:

```lua
basePrice = 0
extraCost = 0
```

Önerilen ekonomi odaklı yapılandırma:

```lua
basePrice = 50
extraCost = 15
maxPrice = 500
```
