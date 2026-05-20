---
title: QBCore Entegrasyonu
sidebar_position: 2
---

# QBCore Entegrasyonu

XDEV Appearance dahili QBCore uyumluluğu içerir ve QBCore tabanlı sunucularla doğal şekilde çalışacak şekilde tasarlanmıştır.

Sistem şunları destekler:

- oyuncu veri entegrasyonu
- meslek sistemleri
- çete sistemleri
- komut sistemleri
- yetki sistemleri
- bildirim sistemleri
- appearance senkronizasyonu

Ağır düzenlemeler gerektirmeden çalışır.

---

# Bağımlılık

QBCore şu yapı içerisinde bağımlılık olarak tanımlanmıştır:

```lua
dependencies {
    'qb-core'
}
````

Bu yapı sistemin otomatik olarak şunlara erişmesini sağlar:

* oyuncu verileri
* meslek sistemleri
* çete sistemleri
* yetkiler
* callback sistemleri

---

# Framework Ayarı

Framework davranışı şu yapı üzerinden kontrol edilir:

```lua
Config.Override.ClientSide.Framework = true
```

Aktif olduğunda:

```text
QBCore doğrulama sistemleri aktif hale gelir
```

Devre dışı bırakıldığında:

```text
geliştiricilerin kendi doğrulama mantığını yazması gerekir
```

---

# Oyuncu Verisi Kullanımı

Sistem QBCore oyuncu verilerini şunlar için kullanır:

```text
meslek kontrolleri
çete kontrolleri
cinsiyet kontrolleri
appearance yükleme sistemi
```

Örnek:

```lua
QBCore.Functions.GetPlayerData()
```

---

# Cinsiyet Yönetimi

Karakter cinsiyeti otomatik olarak QBCore oyuncu verilerinden çözülür.

Örnek işleyiş:

```lua
if pData.charinfo.gender == 1 then
    skin = "mp_f_freemode_01"
end
```

Bu yapı şuralarda kullanılır:

* ilk karakter oluşturma
* appearance yeniden oluşturma
* menü başlatma işlemleri

---

# Komut Entegrasyonu

Komut sistemleri doğrudan şu yapı ile entegre çalışır:

```lua
QBCore.Commands.Add()
```

Desteklenen komut işleyişleri:

```text
reload komutları
admin menü komutları
ped komutları
```

---

# Yetki Desteği

Yönetici komutları dahili QBCore yetki sistemlerini destekler.

Örnek:

```lua
permission = "admin"
```

Bu yapı doğrudan şunların kullanılmasını sağlar:

```text
admin
god
özel yetki grupları
```

sunucu yapılandırmasına bağlı olarak değişebilir.

---

# Kıyafet Odası Entegrasyonu

Kıyafet odaları QBCore meslek ve çete sistemlerini destekler.

Desteklenen doğrulamalar:

```text
PlayerData.job.name
PlayerData.gang.name
```

Bu yapı şunları sağlar:

* polis dolapları
* EMS üniformaları
* çete kombin odaları
* fraksiyon sistemleri

---

# Bildirim Override Sistemi

Sistem bilinçli olarak hardcode bildirim sistemi kullanmaz.

Varsayılan override:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message)
    return false
end
```

Örnek QBCore entegrasyonu:

```lua
QBCore.Functions.Notify(message, 'error')
```

---

# Para Yönetimi

Ödeme sistemleri override yapıları üzerinden yönetilir.

Varsayılan override:

```lua
function Config.Override.ServerSide.Functions.RemoveMoney(src, price)
    return false
end
```

Örnek QBCore entegrasyonu:

```lua
local Player = QBCore.Functions.GetPlayer(src)

if Player.PlayerData.money.cash >= price then
    Player.Functions.RemoveMoney('cash', price)
    return true
end

return false
```

---

# İlk Karakter Desteği

Resource QBCore uyumlu ilk karakter desteği içerir.

Örnek:

```lua
RegisterNetEvent('qb-clothes:client:CreateFirstCharacter')
```

Bu yapı otomatik olarak:

```text
cinsiyeti algılar
freemode pedi yükler
karakter menüsünü açar
```

---

# Kombin Uyumluluğu

Sistem şunları destekler:

```text
qb-clothing kombin eventleri
QBCore appearance işleyişleri
```

Uyumluluk köprüleri üzerinden çalışır.

---

# Reload Desteği

Appearance reload sistemleri doğal şekilde QBCore eventleriyle entegre çalışır.

Örnek:

```lua
TriggerClientEvent("xdev_appearance:reload_ped", source)
```

Şunlar için kullanılır:

* desync kurtarma işlemleri
* dövme yeniden oluşturma
* appearance yenileme

---

# Veritabanı Uyumluluğu

Resource mevcut QBCore uyumlu veritabanlarını genişletmeyi destekler.

Tipik desteklenen tablolar:

```text
playerskins
player_outfits
player_outfit_codes
```

---

# Evrensel Entegrasyon Mantığı

QBCore dahili olarak desteklense bile sistem bilinçli şekilde framework bağımlı hale getirilmemiştir.

Amaç:

```text
daha kolay geçiş süreçleri
modülerlik
özel framework desteği
standalone uyumluluğu
```

---

# Önerilen QBCore İşleyişi

Önerilen entegrasyon işleyişi:

```text
1. Bağımlılığı kur
2. Override sistemlerini yapılandır
3. Bildirim sistemlerini yapılandır
4. Para yönetimini yapılandır
5. Meslek/çete sistemlerini doğrula
6. Senkronizasyonu doğrula
```

---

# Geliştirici Notları

Birçok QBCore appearance sisteminin aksine XDEV bilinçli olarak şunları birbirinden ayırır:

```text
QBCore mantığı
appearance mantığı
veritabanı mantığı
```

Bu mimari şunları geliştirir:

* sürdürülebilirlik
* geçiş desteği
* uyumluluk
* özelleştirme esnekliği
