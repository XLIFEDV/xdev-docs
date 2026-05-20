---
title: Sistem Yapılandırması
sidebar_position: 2
---

# Sistem Yapılandırması

Ana sistem davranışı şu dosya üzerinden kontrol edilir:

```text
shared/config.lua
````

Bu bölüm XDEV Appearance tarafından kullanılan temel yapılandırma sistemlerini açıklar.

---

# Sistem Yapısı

Ana sistem yapılandırması:

```lua
Config.System = {}
```

Bu bölüm şunları kontrol eder:

* appearance kayıt sistemi
* kombin sistemleri
* önbellek sistemleri
* uyumluluk modları
* komut sistemleri
* dönüştürme sistemleri

---

# Skin Format Sistemi

Resource birden fazla appearance yapısını destekler.

Yapılandırma:

```lua
Config.System.UseSystemSkinFormat = true
```

---

# Davranış

## true

XDEV appearance yapısını kullanır.

Resource şunları kaydeder:

* skin
* tattoo
* peddata
* kombin yapıları

Dahili XDEV işleyişi üzerinden çalışır.

---

## false

Illenium uyumlu appearance formatını kullanır.

Sistem dahili olarak şunları otomatik dönüştürür:

* overlays
* components
* props
* tattoos
* yüz verileri

Yapılar arasında dönüşüm işlemi yapar.

Bu mod temel olarak uyumluluk ve geçiş desteği için bulunur.

---

# Dahili Dönüştürme İşleyişi

Veritabanı yapısından bağımsız olarak resource dahili olarak XDEV yapısıyla çalışır.

Uyumluluk modu aktif olduğunda:

```text
Harici Format
        ↓
Dahili Dönüştürme
        ↓
XDEV İşleyişi
        ↓
Kayıt Dönüştürmesi
        ↓
Veritabanı
```

Bu yapı şunları sağlar:

* wipe olmadan geçiş
* hibrit uyumluluk
* otomatik yapı dönüştürme

---

# Dövme Sistemi

Dövme davranışı skin verilerinden ayrı şekilde yönetilir.

Sistem şunları bağımsız olarak saklar:

```lua
skin
tattoo
peddata
```

Bu yapı şunları sağlar:

* dövme yeniden oluşturma
* uyumluluk dönüştürmeleri
* kısmi yenileme sistemleri
* dövme senkronizasyonu

---

# Yüz Önbellek Sistemi

Resource bir yüz önbellek sistemi içerir.

Bu sistem şunları saklar:

* yüz blend verileri
* yüz yapısı
* overlay sistemleri
* yüz appearance ayarları

Kıyafetlerden bağımsız çalışır.

Amaç:

* karakter kimliğini korumak
* yüz yapılarını geri yüklemek
* yüz verilerini kaybetmeden kombin değiştirebilmek

---

# Önbellek Onay Sistemi

Kayıtlı yüz verisi uygulanırken sistem bir onay penceresi gösterebilir.

Oyuncu şunları yapabilir:

* kayıtlı veriyi uygulamak
* işlemi iptal etmek
* kayıtlı veriyi silmek

Bu davranış tamamen yapılandırılabilir durumdadır.

---

# Kombin Sistemi

Kombin sistemi şunları destekler:

* kişisel kombinler
* meslek kombinleri
* çete kombinleri
* kombin paylaşımı
* kombin kodları

Desteklenen formatlar:

* XDEV formatı
* Illenium uyumlu format

---

# Kombin Paylaşım Kodları

Kombin kodları şu tablo içerisinde saklanır:

```text
player_outfit_codes
```

Bu yapı şunları sağlar:

* kombin içe aktarma
* herkese açık kombin paylaşımı
* harici kombin sistemleri

---

# Ped Sistemi

Resource şunları destekler:

* freemode pedler
* addon pedler
* custom ped yapıları

Ek ped verileri şu yapı üzerinden ayrı şekilde saklanır:

```lua
peddata
```

Bu yapı custom ped sistemleri için daha iyi senkronizasyon sağlar.

---

# Komut Sistemi

Komut davranışları tamamen yapılandırılabilir durumdadır.

Örnek:

```lua
Config.System.commands = {
    reloadSelf = {
        enabled = true,
        name = "reload"
    }
}
```

Sistem şunları destekler:

* yetki kontrolü
* komut yeniden adlandırma
* komut devre dışı bırakma

---

# Event Sistemi

Resource yapılandırılabilir event hook sistemleri içerir.

Örnek:

```lua
Config.Events.ClientSide.system = {
    OnMenuOpen = true,
    OnMenuClose = true
}
```

Bu event sistemleri şu modlarda çalışabilir:

* devre dışı
* yalnızca local
* çift taraflı senkronize

Yapılandırma değerine bağlı olarak değişir.

---

# Ücret Sistemi

Ücret sistemi şunları destekler:

* kıyafet ücretleri
* barber ücretleri
* dövme ücretleri
* kombin ücretleri

Ücret davranışları şunları içerebilir:

* temel ücretler
* ekstra maliyetler
* yok sayılan kategoriler
* maksimum limitler

---

# Uyumluluk Katmanı

Uyumluluk sistemleri core işleyişten ayrı şekilde yönetilir.

Dahil edilen entegrasyonlar:

* qb-clothing
* illenium-appearance

Resource dahili olarak XDEV yapılarıyla çalışırken harici işleyişleri taklit edebilir.

---

# Önerilen Kullanım

Yeni sunucular için önerilen yapılandırma:

```lua
Config.System.UseSystemSkinFormat = true
```

Mevcut Illenium sunucuları için önerilen yapılandırma:

```lua
Config.System.UseSystemSkinFormat = false
```

Geçiş süreci boyunca kullanılabilir.
