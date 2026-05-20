---
title: Veritabanı
sidebar_position: 3
---

# Veritabanı

XDEV Appearance hem:

- sıfırdan veritabanı kurulumlarını
- mevcut appearance veritabanlarını

destekler.

Sistem, mevcut veritabanı yapılarını tamamen değiştirmek yerine genişletmek üzerine tasarlanmıştır.

---

# Veritabanı Mantığı

Resource dahili olarak XDEV appearance yapısını kullanır.

Ancak uyumluluk desteği sayesinde:

- harici appearance verilerini okuyabilir
- harici formatları dönüştürebilir
- mevcut SQL tablolarını genişletebilir
- hibrit kayıt yapılarını destekleyebilir

Bu yapı özellikle Illenium uyumluluk süreçleri için kullanılır.

---

# Desteklenen Tablolar

Resource şu tabloları kullanır:

```text
playerskins
player_outfits
player_outfit_codes
````

---

# playerskins

Ana oyuncu appearance veri tablosudur.

Şunları saklar:

* model
* skin
* tattoos
* ped data
* active state

Örnek yapı:

```sql
CREATE TABLE `playerskins` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `citizenid` VARCHAR(255) NOT NULL,
    `model` VARCHAR(255) NOT NULL,
    `skin` TEXT NOT NULL,
    `tattoo` TEXT NOT NULL,
    `peddata` TEXT NOT NULL,
    `active` LONGTEXT NOT NULL DEFAULT 'false',
    PRIMARY KEY (`id`)
)
```

---

# Önemli Alanlar

## model

Ped modelini saklar.

Örnekler:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Custom ped hash değerleri de kullanılabilir.

---

## skin

Ana appearance yapısını saklar.

Şunları içerir:

* kıyafetler
* yüz verileri
* overlay sistemleri
* saç sistemi
* prop sistemleri
* component sistemleri

Yapılandırma kullanılan kayıt formatına bağlıdır.

---

## tattoo

Dövme verilerini ayrı şekilde saklar.

Bu yapı şunları sağlar:

* bağımsız dövme yükleme sistemi
* uyumluluk dönüştürmeleri
* dövme yenileme yeniden oluşturma işlemleri

---

## peddata

Custom ped component verilerini saklar.

Temel kullanım alanları:

* freemode olmayan pedler
* addon pedler
* custom ped senkronizasyonu

Illenium Appearance normalde bu alanı kullanmaz.

XDEV sütun eksikse tabloyu otomatik olarak genişletir.

---

## active

Aktif skin takibi için kullanılır.

Normalde şu değerleri içerir:

```text
true
false
```

---

# player_outfits

Kaydedilmiş kombinleri saklar.

Hem:

* XDEV kombin yapısını
* Illenium uyumlu kombin yapısını

destekler.

---

# Desteklenen Kombin Verileri

XDEV yapısı:

```text
skin
outfitId
```

Illenium uyumlu yapı:

```text
props
components
```

Sistem hibrit kullanımı destekler.

---

# Kombin Uyumluluğu

Sunucu daha önce Illenium Appearance kullandıysa:

* eksik sütunlar otomatik eklenir
* mevcut kombinler kullanılmaya devam eder
* uyumluluk dönüştürmeleri çalışmaya devam eder

---

# player_outfit_codes

Kombin paylaşım kodlarını saklar.

Şunlar için kullanılır:

* kombin kod sistemleri
* kombin içe aktarma sistemi
* kombin paylaşım süreçleri

Örnek:

```sql
CREATE TABLE `player_outfit_codes` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `outfitid` INT(11) NOT NULL,
    `code` VARCHAR(50) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
)
```

---

# Otomatik SQL Genişletme

Kurulum sistemi eksik sütunları otomatik olarak kontrol eder.

Gerekirse sistem şunları ekler:

```text
tattoo
peddata
active
props
components
outfitId
```

Bu sayede mevcut veritabanları tam sıfırlama gerektirmeden çalışmaya devam eder.

---

# Illenium Uyumluluğu

Uyumluluk modu aktif olduğunda:

* XDEV Illenium uyumlu yapıları okur
* veriler dahili olarak dönüştürülür
* resource dahili tarafta XDEV işleyişini kullanmaya devam eder

Bu yapı sistemler arasında sorunsuz geçiş yapılmasını sağlar.

---

# Önerilen Veritabanı Ayarları

Önerilen collation:

```text
utf8mb4_general_ci
```

Önerilen engine:

```text
InnoDB
```