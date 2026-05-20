---
title: Eventler
sidebar_position: 2
---

# Eventler

XDEV Appearance, geliştiricilerin korunan dosyaları düzenlemeden dahili işleyişlere bağlanabilmesini sağlayan modüler bir event sistemi içerir.

Event sistemi şunlar için tasarlanmıştır:

- entegrasyonlar
- log sistemleri
- senkronizasyon
- harici sistemler
- özel işleyişler
- server-side otomasyonlar

---

# Event Mantığı

Birçok appearance sistemi tutarsız veya hardcode event sistemleri sunar.

XDEV bunun yerine merkezi bir yapı kullanır:

```lua
sendEvent()
````

Amaç:

* daha temiz entegrasyonlar
* daha kolay bakım süreçleri
* yapılandırılabilir event davranışları
* modüler mimari

---

# Event Yapılandırması

Event sistemleri şu yapılar üzerinden yapılandırılır:

```lua
Config.Events.ClientSide
Config.Events.ServerSide
```

Örnek:

```lua
Config.Events.ClientSide.system = {
    OnMenuOpen = false,
    OnMenuClose = false,
    OnAppearanceSaved = false,
    OnAppearanceCanceled = false,
    OnPedChanged = false
}

Config.Events.ServerSide.system = {
    OnSkinLoad = false,
    OnSkinSave = false,
    OnOutfitSave = false,
    OnOutfitDelete = false
}
```

---

# sendEvent Yardımcı Sistemi

Dahili event tetikleme sistemi şu yapıyı kullanır:

```lua
sendEvent('system:OnMenuOpen')
```

Yardımcı sistem otomatik olarak:

```text
yapılandırmayı doğrular
event isimlerini oluşturur
client/server eventlerini tetikler
senkronizasyonu yönetir
```

---

# Dahili Event Formatı

Oluşturulan event formatı:

```text
resource_name:events:system:OnMenuOpen
```

Örnek:

```text
xdev_appearance:events:system:OnMenuOpen
```

---

# Client-Side Eventler

Desteklenen client eventleri:

```text
OnMenuOpen
OnMenuClose
OnAppearanceSaved
OnAppearanceCanceled
OnPedChanged
```

---

# Server-Side Eventler

Desteklenen server eventleri:

```text
OnSkinLoad
OnSkinSave
OnOutfitSave
OnOutfitDelete
```

---

# Event Durum Tipleri

Event yapılandırmaları birden fazla davranışı destekler.

---

# false

```lua
OnMenuOpen = false
```

Davranış:

```text
event tamamen devre dışı bırakılır
```

Hiçbir event tetiklenmez.

---

# true

```lua
OnMenuOpen = true
```

Davranış:

```text
event yalnızca mevcut tarafta tetiklenir
```

Örnek:

* sadece client
* sadece server

Eventin hangi tarafta oluştuğuna bağlı olarak değişir.

---

# Özel Değer

Örnek:

```lua
OnMenuOpen = "sync"
```

Davranış:

```text
event hem client hem server tarafında tetiklenir
```

Bu yapı otomatik senkronize işleyişler sağlar.

---

# Client Event Örneği

Örnek listener:

```lua
RegisterNetEvent('xdev_appearance:events:system:OnMenuOpen', function()
    print('Menu opened')
end)
```

---

# Server Event Örneği

Örnek listener:

```lua
RegisterNetEvent('xdev_appearance:events:system:OnSkinSave', function(source)
    print(source .. ' saved appearance')
end)
```

---

# Menü Eventleri

Menü eventleri şunlar için kullanışlıdır:

```text
kamera sistemleri
HUD gizleme sistemleri
ses sistemleri
animasyon sistemleri
UI senkronizasyonu
```

---

# Appearance Kayıt Eventleri

Kayıt eventleri yaygın olarak şunlar için kullanılır:

```text
log sistemleri
kimlik sistemleri
yedekleme sistemleri
Discord entegrasyonları
```

---

# Kombin Eventleri

Kombin eventleri şunlar için kullanışlıdır:

```text
gardırop sistemleri
üniforma sistemleri
meslek entegrasyonları
kombin paylaşımı
```

---

# Ped Değişim Eventleri

Ped değişim eventleri şunlar için yardımcı olur:

```text
custom ped yeniden oluşturma
silah sistemleri
dövme yenileme
addon ped senkronizasyonu
```

---

# Senkronizasyon İşleyişi

Eventler çift taraflı senkronizasyon için yapılandırıldığında:

```text
client eventi tetiklenir
server relay sistemi tetiklenir
eşleşen taraf eventi alır
```

Tüm işlemler helper sistemi üzerinden otomatik çalışır.

---

# Güvenlik Tasarımı

Helper sistemi event tetiklemeden önce event mevcutluğunu bilinçli olarak doğrular.

Amaç:

```text
geçersiz event spamini önlemek
eksik yapılandırma problemlerini önlemek
gereksiz network eventlerini azaltmak
```

---

# Önerilen Kullanım

Önerilen event kullanım alanları:

```text
harici entegrasyonlar
log sistemleri
analitik sistemleri
özel gameplay sistemleri
```

---

# Geliştirici Notları

Event sistemi bilinçli olarak şu yapılarda kalacak şekilde tasarlanmıştır:

```text
modüler
hafif
framework bağımsız
override uyumlu
```

Hardcode bağımlılıklar oluşturmadan çalışır.
