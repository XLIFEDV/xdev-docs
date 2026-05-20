---
title: Yapılandırma Genel Bakış
sidebar_position: 1
---

# Yapılandırma Genel Bakış

XDEV Appearance modüler bir yapılandırma sistemi üzerine tasarlanmıştır.

Tüm ayarları tek bir dosya içerisine yerleştirmek yerine sistem işlevleri birden fazla kategoriye ayırır.

Bu yapı resource'un bakımını, genişletilmesini ve mevcut sunucu ortamlarına entegre edilmesini kolaylaştırır.

---

# Yapılandırma Yapısı

Ana yapılandırma dosyaları:

```text
shared/config.lua
shared/data/*
shared/language/*
````

---

# Ana Config Dosyası

Temel sistem ayarları şu dosya içerisinde bulunur:

```text
shared/config.lua
```

Bu dosya şunları içerir:

* sistem ayarları
* UI ayarları
* event ayarları
* komut ayarları
* override ayarları
* ücret ayarları
* uyumluluk ayarları

---

# Veri Yapılandırma Dosyaları

Ek veri tabanlı sistemler ayrı dosyalara bölünmüştür:

```text
shared/data/clothing_rooms.lua
shared/data/opposites.lua
shared/data/outfits.lua
shared/data/peds.lua
shared/data/stores.lua
shared/data/tattoos.lua
```

Bu dosyalar büyük ölçekli düzenlemeleri kolaylaştırmak için tasarlanmıştır.

---

# Dil Dosyaları

Diller ayrı locale dosyalarına bölünmüştür:

```text
shared/language/tr.lua
shared/language/en.lua
shared/language/es.lua
shared/language/de.lua
shared/language/fr.lua
shared/language/ru.lua
```

Sistem dahili olarak dinamik locale yükleme desteği sunar.

---

# Yapılandırma Kategorileri

Yapılandırma sistemi birden fazla mantıksal gruba ayrılmıştır.

---

# Sistem

Şunları kontrol eder:

* kayıt sistemleri
* framework uyumluluğu
* komut sistemleri
* veritabanı davranışları
* dönüştürme sistemleri
* kombin sistemleri
* önbellek sistemleri

Dokümantasyon:

```text
configuration/system.md
```

---

# UI

Şunları kontrol eder:

* hotkey sistemleri
* etkileşim davranışları
* fener sistemi
* eller yukarı sistemi
* kıyafet çıkarma sistemi
* bilgi panelleri

Dokümantasyon:

```text
configuration/ui.md
```

---

# Ücret Sistemi

Şunları kontrol eder:

* kıyafet ücretleri
* barber ücretleri
* dövme ücretleri
* kombin ücretleri

Dokümantasyon:

```text
configuration/pricing.md
```

---

# Komutlar

Şunları kontrol eder:

* komut isimleri
* yetkiler
* komut aktivasyon durumları

Dokümantasyon:

```text
configuration/commands.md
```

---

# Mağazalar

Şunları kontrol eder:

* kıyafet mağazası konumları
* barber konumları
* cerrah konumları
* dövme mağazası konumları

Dokümantasyon:

```text
configuration/stores.md
```

---

# Kıyafet Odaları

Şunları kontrol eder:

* meslek kombin odaları
* çete kombin odaları
* kısıtlı kıyafet alanları
* polygon/radius bölgeleri

Dokümantasyon:

```text
configuration/clothing-rooms.md
```

---

# Kombinler

Şunları kontrol eder:

* varsayılan üniformalar
* meslek kombinleri
* çete kombinleri
* grade tabanlı kombinler

Dokümantasyon:

```text
configuration/outfits.md
```

---

# Dövmeler

Şunları kontrol eder:

* dövme tanımları
* dövme koleksiyonları
* dövme etiketleri
* dövme kategorileri

Dokümantasyon:

```text
configuration/tattoos.md
```

---

# Opposites

Cinsiyetler arası karşıt kıyafet eşlemelerini kontrol eder.

Şunlar için kullanılır:

* cinsiyet değiştirme
* UI önizlemeleri
* uyumluluk işlemleri

Dokümantasyon:

```text
configuration/opposites.md
```

---

# Override Sistemi

Resource kapsamlı override sistemi desteği sunar.

Geliştiriciler şunları değiştirebilir:

* bildirim sistemleri
* framework kontrolleri
* para yönetimi
* walkstyle sistemleri
* doğrulama sistemleri

Korunan core dosyalarını düzenlemeden çalışır.

---

# Event Sistemi

Resource yapılandırılabilir dahili event sistemi içerir.

Hem client-side hem server-side hook sistemleri desteklenir.

Örnek:

```lua
Config.Events.ClientSide.system = {
    OnMenuOpen = true,
    OnMenuClose = true
}
```

---

# Yapılandırma Mantığı

Sistem bilinçli olarak hardcode framework mantıklarından kaçınacak şekilde tasarlanmıştır.

Dahili davranışların çoğu:

* override edilebilir
* değiştirilebilir
* devre dışı bırakılabilir
* yönlendirilebilir

Yapılandırma veya override sistemleri üzerinden kontrol edilir.