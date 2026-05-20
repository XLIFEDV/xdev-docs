---
title: Kombin Yapılandırması
sidebar_position: 10
---

# Kombin Yapılandırması

Kombin sistemi şunları kontrol eder:

- meslek üniformaları
- çete üniformaları
- varsayılan kombinler
- grade tabanlı kombinler
- fallback kıyafet durumları

Yapılandırma şu dosya içerisinde bulunur:

```text
shared/data/outfits.lua
````

---

# Sistem Amacı

Kombin sistemi şunlar için tasarlanmıştır:

* faction üniformaları
* departman kıyafetleri
* roleplay organizasyonları
* kıyafet odaları
* fallback kıyafet sistemleri

Sistem şunları destekler:

* freemode kombinler
* kısmi kıyafet durumları

---

# Yapı Genel Bakış

Ana yapı:

```lua
Config.Outfits = {}
```

Örnek:

```lua
Config.Outfits = {
    ['police'] = {
        ['male'] = {
            [0] = {
                {
                    outfitLabel = 'Uniform',
                    outfitData = {}
                }
            }
        }
    }
}
```

---

# Grup İsimleri

İlk key kombin grubunu belirtir.

Örnekler:

```lua
['police']
['ambulance']
['ballas']
['vagos']
```

Şunları temsil edebilir:

* meslekler
* çeteler
* faction sistemleri
* organizasyonlar

Sunucu mantığına bağlı olarak değişir.

---

# Cinsiyet Yapısı

Desteklenen cinsiyetler:

```text
male
female
```

Örnek:

```lua
['male'] = { ... }
['female'] = { ... }
```

---

# Grade Sistemi

Kombin sistemi grade tabanlı kombinleri destekler.

Örnek:

```lua
[0] = { ... }
[1] = { ... }
[2] = { ... }
```

Bu yapı şunları sağlar:

* rütbe üniformaları
* ilerleme sistemleri
* departman hiyerarşi kıyafetleri

---

# Kombin Etiketleri

Her kombin özel bir etiketi destekler.

Örnek:

```lua
outfitLabel = 'Uniform'
```

Şu alanlarda kullanılır:

* kıyafet odaları
* kombin menüleri
* UI seçimleri

---

# Kombin Verisi

Gerçek kıyafet verileri şu yapı içerisinde saklanır:

```lua
outfitData = {}
```

Örnek:

```lua
['pants'] = {item = 0, texture = 0},
['torso2'] = {item = 15, texture = 0},
['hat'] = {item = -1, texture = 0},
```

---

# Desteklenen Kategoriler

Desteklenen kıyafet kategorileri:

```text
pants
arms
t-shirt
vest
torso2
shoes
accessory
mask
decals
bag
hat
glass
ear
watch
bracelet
```

---

# Item Değerleri

Örnek:

```lua
item = 15
```

Drawable/component ID değerini temsil eder.

---

# Texture Değerleri

Örnek:

```lua
texture = 0
```

Drawable'ın texture varyasyonunu temsil eder.

---

# Prop Kaldırma

Props sistemleri şu yapı ile kaldırılabilir:

```lua
item = -1
```

Örnek:

```lua
['hat'] = {item = -1, texture = 0}
```

Şunlar için kullanılır:

* şapkalar
* gözlükler
* küpeler
* saatler
* bileklikler

---

# Fallback Kıyafetler

Kombin sistemi clothes-off sistemi tarafından dahili olarak da kullanılır.

Fallback durumları kombin değerlerinden yüklenir.

Örnek:

```lua
['arms'] = {item = 15, texture = 0}
```

Bu yapı oyuncunun üst kıyafetini çıkardıktan sonra nasıl görüneceğini belirler.

---

# Kıyafet Odası Entegrasyonu

Kombinler doğrudan şu sistem ile entegre çalışır:

```text
shared/data/clothing_rooms.lua
```

Sistem otomatik olarak eşleşen:

* meslek kombinlerini
* çete kombinlerini
* cinsiyet kombinlerini
* grade kombinlerini

oyuncu verilerine göre seçer.

---

# Freemode Önerileri

Freemode uyumluluğu için önerilen modeller:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Bu modeller en stabil kıyafet desteğini sağlar.

---

# Kısmi Kombin Desteği

Kombinlerin tüm kategorileri içermesi zorunlu değildir.

Örnek:

```lua
outfitData = {
    ['torso2'] = {item = 15, texture = 0}
}
```

Yalnızca belirtilen kategoriler değiştirilir.

Bu yapı şunlar için kullanışlıdır:

* taktik yelekler
* ceketler
* aksesuarlar
* kısmi üniforma sistemleri

---

# Önerilen İşleyiş

Önerilen işleyiş:

```text
1. Kıyafet odası oluştur
2. Kombin gruplarını yapılandır
3. Cinsiyet yapılarını yapılandır
4. Grade yapılarını yapılandır
5. Senkronizasyonu test et
```

---

# Geliştirici Notları

Kombin sistemi bilinçli olarak dahili framework bağımlı meslek mantıklarından kaçınır.

Amaç:

* daha kolay framework entegrasyonu
* çete desteği
* standalone uyumluluğu
* daha basit override işleyişleri