---
title: Komut Yapılandırması
sidebar_position: 5
---

# Komut Yapılandırması

Komut sistemi XDEV Appearance tarafından kullanılan yönetim ve yardımcı komutları kontrol eder.

Komut yapılandırması şu dosya içerisinde bulunur:

```text
shared/config.lua
````

---

# Komut Yapısı

Ana komut yapılandırması:

```lua
Config.System.commands = {}
```

Örnek:

```lua
Config.System.commands = {
    reloadSelf = {
        enabled = true,
        name = "reload"
    },

    reloadPlayer = {
        enabled = true,
        name = "reloadplayer",
        permission = "admin"
    }
}
```

---

# Komut Alanları

## enabled

Komutun aktif olup olmadığını kontrol eder.

Örnek:

```lua
enabled = true
```

Şu şekilde ayarlanırsa:

```lua
false
```

komut tamamen devre dışı bırakılır.

---

# name

Gerçek chat/konsol komutunu belirler.

Örnek:

```lua
name = "reload"
```

Kullanım:

```text
/reload
```

---

# permission

Gerekli QBCore yetki/grubunu belirler.

Örnek:

```lua
permission = "admin"
```

Yalnızca bu yetkiye sahip oyuncular komutu kullanabilir.

Kaldırılırsa veya nil yapılırsa komut herkese açık hale gelir.

---

# Kullanılabilir Komutlar

---

# reloadSelf

Oyuncunun kendi appearance sistemini yeniden yükler.

Örnek:

```lua
reloadSelf = {
    enabled = true,
    name = "reload"
}
```

Amaç:

* appearance yenileme
* dövmeleri yeniden yükleme
* component sistemlerini yeniden oluşturma
* zorunlu senkronizasyon

---

# reloadPlayer

Başka bir oyuncunun appearance sistemini yeniden yükler.

Örnek:

```lua
reloadPlayer = {
    enabled = true,
    name = "reloadplayer",
    permission = "admin"
}
```

Şunlar için kullanışlıdır:

* yönetim işlemleri
* desync problemlerini düzeltme
* destek durumları

---

# openMenu

Hedef oyuncu için appearance menüsünü açar.

Örnek:

```lua
openMenu = {
    enabled = true,
    name = "clothemenu",
    permission = "admin"
}
```

Şunlar için kullanışlıdır:

* destek araçları
* staff yönetimi
* zorunlu özelleştirme işleyişleri

---

# givePed

Hedef oyuncuya bir ped modeli verir.

Örnek:

```lua
givePed = {
    enabled = true,
    name = "giveped",
    permission = "admin"
}
```

Kullanım örneği:

```text
/giveped 1 mp_m_freemode_01
```

---

# Dil Desteği

Komut açıklamaları ve parametre etiketleri locale dosyaları üzerinden çevrilir.

Örnek:

```lua
_L('commands.reloadSelf')
```

Desteklenen çeviriler şunları içerir:

* komut açıklamaları
* parametre açıklamaları
* kullanım mesajları
* hata mesajları

---

# Dahili Komut İşleyişi

Komutlar dahili olarak şunları destekler:

* argüman doğrulama
* yetki doğrulama
* bildirim hook sistemleri
* hedef doğrulama
* override entegrasyonları

---

# Bildirim Entegrasyonu

Komut bildirimleri override sistemi üzerinden yönlendirilir.

Örnek:

```lua
Override.SendNotify(source, message, type)
```

Bu yapı şunlarla entegrasyon sağlar:

* QBCore bildirimleri
* ox_lib bildirimleri
* özel bildirim sistemleri

---

# Yetki Mantığı

Sistem bilinçli olarak hardcode admin kontrollerinden kaçınır.

Geliştiriciler şunları yapabilir:

* komut isimlerini değiştirmek
* komutları devre dışı bırakmak
* yetkileri değiştirmek
* yetki sistemlerini değiştirmek

Korunan dosyaları düzenlemeden çalıştırabilir.

---

# Önerilen Kurulum

Önerilen herkese açık komutlar:

```lua
reloadSelf
```

Önerilen yalnızca admin komutları:

```lua
reloadPlayer
openMenu
givePed
```
