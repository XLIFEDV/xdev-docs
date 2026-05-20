---
title: Kıyafet Çıkarma Yapılandırması
sidebar_position: 6
---

# Kıyafet Çıkarma Yapılandırması

Kıyafet çıkarma sistemi oyuncuların appearance menüsü üzerinden kıyafet parçalarını geçici olarak çıkarmasını sağlar.

Bu sistem temel olarak şunlar için tasarlanmıştır:

- roleplay etkileşimleri
- kombin önizlemeleri
- immersion sistemleri
- kıyafet inceleme işlemleri

---

# Ana Yapılandırma

Yapılandırma:

```lua
Config.UI.EnableClothesOff = true
````

Devre dışı bırakılırsa:

```lua
Config.UI.EnableClothesOff = false
```

tüm kıyafet çıkarma işlevleri kullanılamaz hale gelir.

---

# Sistem Amacı

Kıyafet çıkarma sistemi kıyafetleri kalıcı olarak silmez.

Bunun yerine kıyafet parçalarını önceden tanımlanmış fallback değerleri kullanarak geçici olarak değiştirir.

Bu yapı oyuncuların:

* ceket çıkarmasını
* aksesuar çıkarmasını
* şapka çıkarmasını
* prop gizlemesini
* kıyafet katmanlarını önizlemesini

appearance verisini manuel olarak kaydetmedikleri sürece kalıcı şekilde değiştirmeden kullanmasını sağlar.

---

# Fallback Kıyafet Değerleri

Fallback kıyafet değerleri şu dosya içerisinde yapılandırılır:

```text
shared/data/outfits.lua
```

Örnek:

```lua
['pants'] = {item = 0, texture = 0},
['arms'] = {item = 15, texture = 0},
['t-shirt'] = {item = 15, texture = 0},
['torso2'] = {item = 15, texture = 0},
['hat'] = {item = -1, texture = 0},
```

---

# Desteklenen Kategoriler

Kıyafet çıkarma sistemi şunları destekler:

```text
pants
arms
t-shirt
torso2
vest
shoes
accessory
bag
mask
decals
hat
glass
ear
watch
bracelet
```

---

# Prop Temizleme

Props sistemleri şu yapı ile tamamen kaldırılır:

```lua
item = -1
```

Örnekler:

```lua
['hat'] = {item = -1, texture = 0},
['glass'] = {item = -1, texture = 0},
```

Bu yapı genellikle şunlar için kullanılır:

* şapkalar
* gözlükler
* küpeler
* saatler
* bileklikler

---

# Freemode ve Custom Pedler

Kıyafet çıkarma işleyişi ped tipine göre farklı davranır.

---

# Freemode Pedler

Freemode pedlerde:

```text
mp_m_freemode_01
mp_f_freemode_01
```

sistem component ve props yapılarını doğrudan değiştirir.

---

# Custom Pedler

Addon/custom pedlerde sistem şu yapıya bağlı çalışabilir:

```lua
peddata
```

Sunucu implementasyonuna bağlı olarak değişebilir.

Custom pedler ek senkronizasyon mantığı gerektirebilir.

---

# Kombin Etkileşimi

Kıyafet çıkarma sistemi şunlarla etkileşim kurar:

* kayıtlı kombinler
* geçici appearance durumları
* menü önizleme sistemleri

Oyuncu değişiklikleri iptal ederse:

* önceki kıyafetler geri yüklenir
* geçici kaldırılan kıyafetler geri alınır

---

# Kayıt Davranışı

Çıkarılan kıyafetler yalnızca şu işlem yapılırsa kalıcı kaydedilir:

```text
Save
```

Menüyü kapatmak veya iptal etmek önceki appearance verisini geri yükler.

---

# UI Entegrasyonu

Kıyafet çıkarma sistemi doğrudan UI ile entegre çalışır.

Oyuncular:

* kıyafet alanlarına tıklayabilir
* kategorileri kaldırabilir
* fallback durumlarını önizleyebilir
* appearance parçalarını geri yükleyebilir

menü etkileşimleri üzerinden işlem yapabilir.

---

# Önerilen Fallback Yapılandırması

Önerilen gerçekçi fallback değerleri:

```lua
['arms'] = {item = 15, texture = 0},
['t-shirt'] = {item = 15, texture = 0},
['torso2'] = {item = 15, texture = 0},
```

Önerilen temiz prop kaldırma yapısı:

```lua
item = -1
```

Tüm prop kategorileri için kullanılabilir.

---

# Roleplay Kullanımı

Yaygın RP kullanım alanları:

* ceket çıkarma
* kask çıkarma
* üniforma değiştirme
* taktik ekipman kullanımı
* günlük kıyafet geçişleri

---

# Geliştirici Notları

Sistem bilinçli olarak doğrudan silme yerine fallback appearance değiştirme sistemi kullanır.

Bu yapı şunları geliştirir:

* senkronizasyon kararlılığı
* rollback yönetimi
* uyumluluk işleyişleri
* kombin geri yükleme