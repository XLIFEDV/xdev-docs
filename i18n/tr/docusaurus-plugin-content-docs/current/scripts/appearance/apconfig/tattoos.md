---
title: Dövme Yapılandırması
sidebar_position: 11
---

# Dövme Yapılandırması

Dövme sistemi şunları kontrol eder:

- dövme tanımları
- dövme etiketleri
- dövme koleksiyonları
- dövme bölgeleri
- dövme uyumluluk verileri

Yapılandırma şu dosya içerisinde bulunur:

```text
shared/data/tattoos.lua
````

---

# Sistem Amacı

Dövme sistemi şunları desteklemek için tasarlanmıştır:

* freemode dövmeleri
* opaklık kontrolü
* dövme senkronizasyonu
* uyumluluk dönüştürmeleri
* harici appearance yapıları

Sistem kıyafet verilerinden bağımsız çalışır.

---

# Yapı Genel Bakış

Ana yapı:

```lua
Config.Tattoos = {}
```

Örnek:

```lua
Config.Tattoos = {
    ZONE_TORSO = {
        {
            name = "TAT_AR_000",
            label = "Turbulence",
            hashMale = "MP_Airraces_Tattoo_000_M",
            hashFemale = "MP_Airraces_Tattoo_000_F",
            zone = "ZONE_TORSO",
            collection = "mpairraces_overlays"
        }
    }
}
```

---

# Dövme Bölgeleri

Desteklenen bölgeler:

```text
ZONE_HEAD
ZONE_TORSO
ZONE_LEFT_ARM
ZONE_RIGHT_ARM
ZONE_LEFT_LEG
ZONE_RIGHT_LEG
```

Bu bölgeler şunlar için kullanılır:

* UI gruplama
* dövme filtreleme
* dövme yeniden oluşturma
* uyumluluk dönüştürme

---

# Dövme Girdi Yapısı

Her dövme girdisi şunları içerir:

```lua
{
    name = "",
    label = "",
    hashMale = "",
    hashFemale = "",
    zone = "",
    collection = ""
}
```

---

# name

Dahili dövme tanımlayıcısıdır.

Örnek:

```lua
name = "TAT_BB_021"
```

Şunlar için kullanılır:

* kaydetme
* senkronizasyon
* dönüştürmeler
* yeniden oluşturma

---

# label

UI içerisinde gösterilen addır.

Örnek:

```lua
label = "Pirate Skull"
```

---

# hashMale / hashFemale

Gerçek GTA dövme overlay hash değerleridir.

Örnek:

```lua
hashMale = "MP_Bea_M_Head_000"
hashFemale = "MP_Bea_F_Head_000"
```

Dövme uygulama sırasında dahili olarak kullanılır.

---

# collection

GTA dövme koleksiyonunu belirtir.

Örnek:

```lua
collection = "mpbeach_overlays"
```

---

# Opaklık Desteği

Sistem dövme opaklığını destekler.

Örnek kayıt yapısı:

```lua
{
    name = "TAT_BB_021",
    opacity = 0.4
}
```

Opaklık dahili olarak şu aralıkta normalize edilir:

```text
0.0 -> 1.0
```

---

# Dövme Kayıt Yapısı

XDEV dövme yapısı şunu destekler:

```lua
{
    ZONE_HEAD = {
        {
            name = "TAT_BB_021",
            opacity = 0.4
        }
    }
}
```

---

# Uyumluluk Yapıları

Sistem şu yapılar arasında dönüştürme desteği sunar:

* XDEV dövme yapıları
* Illenium uyumlu yapılar

Örnek Illenium uyumlu yapı:

```lua
{
    collection = "mpbeach_overlays",
    name = "TAT_BB_021",
    label = "Pirate Skull",
    zone = "ZONE_HEAD",
    hashFemale = "",
    hashMale = "MP_Bea_M_Head_000",
    opacity = 0.6
}
```

---

# Dahili Dövme İşleyişi

Sistem dahili olarak:

```text
1. Dövme verisini okur
2. Dövme durumunu yeniden oluşturur
3. Mevcut overlay sistemlerini temizler
4. Aktif dövmeleri uygular
5. Opaklığı senkronize eder
```

---

# Dövme Yenileme Sistemi

Resource tam kapsamlı bir dövme yenileme işleyişi içerir.

Amaç:

* overlay sistemlerini yeniden oluşturmak
* desync problemlerini önlemek
* ped değişimlerinden sonra dövmeleri geri yüklemek
* uyumluluk verilerini senkronize etmek

Bu özellikle şunlar için önemlidir:

* custom ped değişimleri
* appearance reload işlemleri
* kombin yeniden oluşturma işlemleri
* reconnect senkronizasyonu

---

# Freemode Gereksinimi

Tam dövme desteği freemode pedleri gerektirir:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Custom/addon pedler overlay sistemlerini düzgün desteklemeyebilir.

---

# UI Özellikleri

Dövme UI sistemi şunları destekler:

* kategori filtreleme
* opaklık düzenleme
* canlı önizlemeler
* dövme arama
* dövme kaldırma

---

# Dövme Arama

UI dahili dövme filtreleme sistemi içerir.

Oyuncular dövmeleri şunlara göre arayabilir:

```text
label
name
```

Bu yapı büyük dövme koleksiyonlarında gezinmeyi kolaylaştırır.

---

# Önerilen Kullanım

Önerilen işleyiş:

```text
1. Dövme tanımlarını yapılandır
2. Koleksiyonları doğrula
3. Overlay hash değerlerini doğrula
4. Opaklık yönetimini test et
5. Senkronizasyonu test et
```

---

# Geliştirici Notları

Birçok appearance sisteminin aksine XDEV şu yapıları birbirinden ayırır:

```text
skin
tattoo
peddata
```

Bu mimari şunları geliştirir:

* dövme yeniden oluşturma
* uyumluluk işleyişleri
* ped senkronizasyonu
* overlay kararlılığı
