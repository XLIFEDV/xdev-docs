---
title: Uyumluluk
sidebar_position: 1
---

# Uyumluluk

XDEV Appearance, framework bağımlı bir kıyafet resource'u yerine evrensel bir appearance frameworkü olarak çalışacak şekilde tasarlanmıştır.

Sistem şu yapılar için uyumluluk işleyişleri destekler:

- QBCore
- qb-clothing
- illenium-appearance
- eski appearance sistemleri
- özel framework sistemleri
- standalone ortamlar

---

# Sistem Mantığı

Resource bilinçli olarak şunları birbirinden ayırır:

```text
appearance mantığı
framework mantığı
UI mantığı
senkronizasyon mantığı
````

Bu mimari mevcut sunuculara büyük düzenlemeler gerektirmeden daha kolay entegrasyon sağlar.

---

# Dahili Uyumluluk Katmanları

Resource dahili olarak şunları içerir:

```text
dönüştürücü sistemler
event köprüleri
reload sistemleri
ped senkronizasyonu
dövme yeniden oluşturma
```

Amaç geçiş uyumluluğunu geliştirmektir.

---

# Desteklenen Uyumluluk Hedefleri

---

# QBCore

Dahili destek şunlar için mevcuttur:

```text
QBCore oyuncu verileri
komut sistemleri
yetki sistemleri
meslek sistemleri
çete sistemleri
```

---

# qb-clothing

Sistem şu yapı için uyumluluk event köprüleri içerir:

```text
qb-clothing
```

Örnek uyumluluk eventleri:

```lua
RegisterNetEvent('qb-clothing:client:openMenu')
RegisterNetEvent('qb-clothing:client:openOutfitMenu')
RegisterNetEvent('qb-clothing:client:loadOutfit')
```

Bu yapı eski resource'ların düzenleme gerektirmeden çalışmaya devam etmesini sağlar.

---

# illenium-appearance

Uyumluluk desteği şunlar için mevcuttur:

```text
illenium menü eventleri
appearance dönüştürme
dövme dönüştürme
reload uyumluluğu
```

Örnek uyumluluk eventleri:

```lua
RegisterNetEvent('illenium-appearance:client:openClothingShopMenu')
RegisterNetEvent('illenium-appearance:client:openTattooShopMenu')
```

---

# Eski Appearance Sistemleri

Dönüştürücü katmanı eski appearance yapılarını desteklemek için kullanılabilir.

Tipik dönüştürme hedefleri:

```text
skin
props
components
tattoos
peddata
```

---

# Appearance Dönüştürme

Resource appearance yapılarını dahili olarak formatlar arasında dönüştürür.

Şunlar dahil:

```text
head overlays
components
props
tattoos
peddata
```

Uyumluluk hedefine bağlı olarak değişebilir.

---

# Dövme Uyumluluğu

Dövme sistemi aşağıdaki gibi yapıları yeniden oluşturmayı destekler:

```lua
{
    collection = "",
    name = "",
    label = "",
    zone = "",
    hashMale = "",
    hashFemale = "",
    opacity = 0.5
}
```

Bu yapı şu sistemlerle uyumluluğu geliştirir:

```text
Illenium Appearance
eski dövme sistemleri
harici appearance resource'ları
```

---

# Reload Uyumluluğu

Resource aşağıdaki işlemler sonrasında senkronizasyonu geliştirmek için dahili reload sistemleri içerir:

```text
menü kapatma
appearance kaydetme
ped değiştirme
resource yeniden başlatma
```

Bu yapı şunları azaltmaya yardımcı olur:

* görünmeyen dövmeler
* eksik prop sistemleri
* overlay desync problemleri
* eksik appearance yeniden oluşturma işlemleri

---

# Ped Uyumluluğu

Sistem şunları destekler:

```text
freemode pedler
addon pedler
custom ped senkronizasyonu
```

Şu yapı üzerinden çalışır:

```text
peddata
```

ve yeniden oluşturma işleyişlerini kullanır.

---

# Veritabanı Uyumluluğu

SQL yapısı bilinçli olarak şunları destekleyecek şekilde tasarlanmıştır:

```text
sıfırdan kurulumlar
mevcut veritabanları
Illenium geçişleri
sütun genişletme sistemi
```

Örnek:

```sql
ALTER TABLE playerskins
ADD COLUMN peddata TEXT;
```

Bu yapı mevcut sunucuların eski appearance veritabanlarını güvenli şekilde genişletmesini sağlar.

---

# Event Uyumluluğu

Resource özelleştirilebilir event sistemlerini şu yapı üzerinden sunar:

```lua
sendEvent('system:OnMenuOpen')
```

Bu yapı harici sistemlerin korunan dosyaları düzenlemeden entegre olmasını sağlar.

---

# Override Uyumluluğu

Override hook sistemleri şunlar için mevcuttur:

```text
bildirim sistemleri
para yönetimi
walkstyle sistemleri
kontrol sistemleri
yetki sistemleri
```

Bu yapı framework değiştirmeyi kolaylaştırır.

---

# Evrensel UI Mantığı

UI sistemi bilinçli olarak framework bağımlı yapılar kullanmaz.

Amaç:

```text
standalone uyumluluğu
özel entegrasyonlar
daha kolay geçiş süreçleri
```

---

# Geçiş Mantığı

Resource geliştiricilerin şunları yapabilmesi için tasarlanmıştır:

```text
eski appearance sistemlerini değiştirmek
eski eventleri korumak
eski resource'ları korumak
tam sistem yeniden yazımından kaçınmak
```

Geçiş süreçleri sırasında kullanılabilir.

---

# Önerilen Geçiş İşleyişi

Önerilen geçiş süreci:

```text
1. XDEV Appearance kur
2. Mevcut SQL tablolarını genişlet
3. Uyumluluk eventlerini aktif et
4. Dövme senkronizasyonunu doğrula
5. Ped yeniden oluşturmayı doğrula
6. Eski appearance bağımlılıklarını kaldır
```

---

# Geliştirici Notları

Birçok appearance sistemi şu yapıları sıkı şekilde birbirine bağlar:

```text
framework mantığı
appearance mantığı
veritabanı mantığı
```

XDEV bilinçli olarak bu katmanları birbirinden ayırır.

Amaç şunları geliştirmektir:

* uyumluluk
* geçiş desteği
* modülerlik
* uzun vadeli sürdürülebilirlik
