---
title: Illenium Format Entegrasyonu
sidebar_position: 3
---

# Illenium Format Entegrasyonu

XDEV Appearance, Illenium Appearance yapıları ve işleyişleri için uyumluluk desteği içerir.

Bu entegrasyon şunları kolaylaştırmak için geliştirilmiştir:

- sunucu geçişleri
- veritabanı geçişleri
- dövme uyumluluğu
- appearance senkronizasyonu
- eski sistem desteği

Tam sistem yeniden yazımı gerektirmeden çalışır.

---

# Uyumluluk Mantığı

Sistem bilinçli olarak şunları yapabilecek şekilde tasarlanmıştır:

```text
okuma
dönüştürme
senkronizasyon
yeniden oluşturma
````

Illenium uyumlu appearance yapılarını dahili olarak işler.

Amaç:

* daha kolay geçiş süreçleri
* uyumluluk desteği
* daha sorunsuz sunucu geçişleri

---

# Desteklenen Uyumluluk Alanları

Desteklenen uyumluluk işleyişleri:

```text
appearance dönüştürme
dövme dönüştürme
menü event uyumluluğu
reload uyumluluğu
veritabanı genişletme
```

---

# Desteklenen Eventler

Resource, Illenium menüleri için uyumluluk event köprüleri içerir.

Örnekler:

```lua
RegisterNetEvent('illenium-appearance:client:openClothingShopMenu')
RegisterNetEvent('illenium-appearance:client:openBarberShopMenu')
RegisterNetEvent('illenium-appearance:client:openSurgeonShopMenu')
RegisterNetEvent('illenium-appearance:client:openTattooShopMenu')
RegisterNetEvent('illenium-appearance:client:openOutfitMenu')
```

Bu eventler eski resource'ları otomatik olarak XDEV Appearance sistemine yönlendirir.

---

# Appearance Yapı Uyumluluğu

XDEV aşağıdaki gibi Illenium tarzı appearance yapılarını destekler:

```lua
{
    hair = {},
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    tattoos = {},
    components = {},
    props = {}
}
```

Dönüştürücü sistemi bu verileri dahili olarak XDEV uyumlu işleyişlere yeniden oluşturur.

---

# Dövme Uyumluluğu

Dövme sistemi Illenium tarzı dövme girişlerini destekler.

Örnek:

```lua
{
    collection = "mpbeach_overlays",
    name = "TAT_BB_021",
    label = "Pirate Skull",
    zone = "ZONE_HEAD",
    hashMale = "MP_Bea_M_Head_000",
    hashFemale = "",
    opacity = 0.6
}
```

---

# Dövme Yeniden Oluşturma

Dövmeler yüklendiğinde:

```text
1. Dövme verisi ayrıştırılır
2. Overlay hash değerleri çözülür
3. Dövme bölgeleri yeniden oluşturulur
4. Opaklık normalize edilir
5. Dövmeler yeniden uygulanır
```

Bu yapı geçiş süreçlerinde uyumluluğun korunmasına yardımcı olur.

---

# Opaklık Normalizasyonu

Illenium yapıları genellikle şu opaklık aralığını kullanır:

```text
0.0 -> 1.0
```

XDEV dahili olarak şu aralıklar arasında normalize işlemi destekler:

```text
0 -> 100
```

ve:

```text
0.0 -> 1.0
```

Senkronizasyon aşamasına bağlı olarak değişebilir.

---

# Overlay Uyumluluğu

Head overlay sistemleri de dahili olarak dönüştürülür.

Desteklenen overlay alanları:

```text
style
opacity
color
secondColor
```

Örnek:

```lua
makeUp = {
    style = 0,
    opacity = 0,
    color = 1,
    secondColor = 0
}
```

---

# Overlay Notları

Bazı eski Illenium işleyişleri devre dışı overlay sistemlerini şu şekilde saklayabilir:

```text
style = 0
opacity = 0
```

şunun yerine:

```text
style = -1
```

Kullanılan implementasyona bağlı olarak bu normal davranıştır.

---

# Veritabanı Genişletme Desteği

SQL kurulumu mevcut Illenium veritabanlarını güvenli şekilde genişletmeyi destekler.

Örnek:

```sql
ALTER TABLE playerskins
ADD COLUMN peddata TEXT;
```

Bu yapı mevcut appearance verilerini silmeden geçiş yapılmasını sağlar.

---

# Ped Data Entegrasyonu

Illenium Appearance sisteminin aksine XDEV şu yapıyı ekler:

```text
peddata
```

Amaç:

* custom ped desteğini geliştirmek
* addon ped yeniden oluşturmayı geliştirmek
* senkronizasyon güvenilirliğini artırmak

---

# Reload Uyumluluğu

Resource özellikle şu problemleri azaltmak için reload işleyişleri içerir:

```text
eksik dövmeler
overlay desync problemleri
prop kayıpları
component desync problemleri
```

Özellikle geçiş süreçleri veya menü yeniden oluşturma işlemlerinden sonra kullanılır.

---

# Önbellek Farklılıkları

Illenium menü kullanımı sırasında appearance durumlarını dahili olarak önbelleğe alabilir.

XDEV ise bunun yerine şuna odaklanır:

```text
appearance yapısını doğrudan senkronize edilmiş veriler üzerinden yeniden oluşturmak
```

Amaç uzun vadeli tutarlılığı geliştirmektir.

---

# Geçiş Önerileri

Önerilen geçiş işleyişi:

```text
1. Mevcut SQL tablolarını genişlet
2. Uyumluluk eventlerini aktif et
3. Dövme yeniden oluşturmayı doğrula
4. Overlay senkronizasyonunu doğrula
5. Ped yeniden oluşturmayı doğrula
6. Eski bağımlılıkları aşamalı olarak kaldır
```

---

# Yaygın Geçiş Problemleri

Tipik geçiş problemleri:

```text
dövme overlay sistemlerinin yeniden oluşturulmaması
önbelleğe alınmış appearance durumları
custom ped uyumsuzluğu
eski overlay yapıları
```

Problemlerin çoğu veritabanı yapısından değil, eski önbellek mantığından kaynaklanır.

---

# Geliştirici Notları

XDEV bilinçli olarak Illenium dahili mantığını tamamen kopyalamaz.

Bunun yerine sistem şunlara odaklanır:

```text
uyumluluk
dönüştürme
yeniden oluşturma
geçiş desteği
```

Kendi modüler mimarisini kullanmaya devam eder.

