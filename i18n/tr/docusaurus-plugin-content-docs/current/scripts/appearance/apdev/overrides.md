---
title: Override Sistemleri
sidebar_position: 1
---

# Override Sistemleri

XDEV Appearance, geliştiricilerin korunan dosyaları düzenlemeden dahili davranışları güvenli şekilde değiştirmesini sağlayan modüler bir override sistemi içerir.

Override sistemi şunları desteklemek için tasarlanmıştır:

- framework değişimleri
- özel entegrasyonlar
- ekonomi sistemleri
- bildirim sistemleri
- yetki sistemleri
- animasyon sistemleri
- doğrulama sistemleri

---

# Override Mantığı

Birçok appearance sistemi framework mantığını doğrudan korunan dosyalar içerisine hardcode eder.

XDEV bilinçli olarak şunları birbirinden ayırır:

```text
core mantığı
framework mantığı
özel mantıklar
````

Override hook sistemleri üzerinden çalışır.

Amaç:

* daha kolay bakım süreçleri
* daha güvenli güncellemeler
* uyumluluk esnekliği
* daha temiz entegrasyonlar

---

# Override Konumları

Override sistemleri temel olarak şu dosyalar içerisinde bulunur:

```text
shared/client.lua
shared/server.lua
```

---

# Client-Side Override Sistemleri

Client-side override yapıları:

```lua
Config.Override.ClientSide.Functions
```

---

# Server-Side Override Sistemleri

Server-side override yapıları:

```lua
Config.Override.ServerSide.Functions
```

---

# DeadCheck Override

Amaç:

```text
oyuncunun hayatta olup olmadığını doğrulamak
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.DeadCheck(ped)
    return false
end
```

Beklenen dönüş değeri:

```text
true  -> oyuncu geçerli/hayatta
false -> işlemi engelle
```

---

# VehicleCheck Override

Amaç:

```text
araç durumunu doğrulamak
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.VehicleCheck(ped)
    return false
end
```

Beklenen dönüş değeri:

```text
true  -> oyuncu araç içerisinde
false -> oyuncu araç içerisinde değil
```

---

# Check Override

Amaç:

```text
genel özel doğrulama hook sistemi
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.Check(ped)
    return false
end
```

Şunlar için kullanışlıdır:

* admin kısıtlamaları
* meslek kısıtlamaları
* bölge kısıtlamaları
* özel yetki sistemleri
* event kilitleme sistemleri

---

# Client Bildirim Override Sistemi

Amaç:

```text
client-side bildirim sistemlerini değiştirmek
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message, ...)
    return false
end
```

QBCore örneği:

```lua
QBCore.Functions.Notify(message, 'error')
```

---

# Walkstyle Override

Amaç:

```text
hareket stillerini kaydetmek ve geri yüklemek
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.Walkstyle()

end
```

Desteklenen yapılar:

* RPEmotes
* özel hareket sistemleri
* animasyon frameworkleri

---

# Outfit ID Override

Amaç:

```text
benzersiz kombin kimlikleri oluşturmak
```

Örnek:

```lua
function Config.Override.ServerSide.Functions.CreateOutfitID()
    return 'OUTFIT_ID'
end
```

Geliştiriciler bunu şu sistemlerle değiştirebilir:

* UUID sistemleri
* timestamp sistemleri
* rastgele üreticiler
* harici API sistemleri

---

# Para Override Sistemi

Amaç:

```text
appearance ödeme sistemlerini yönetmek
```

Örnek:

```lua
function Config.Override.ServerSide.Functions.RemoveMoney(src, price)
    return false
end
```

Beklenen dönüş değeri:

```text
true  -> ödeme başarılı
false -> ödeme başarısız
```

---

# Server Bildirim Override Sistemi

Amaç:

```text
server-side bildirim sistemlerini değiştirmek
```

Örnek:

```lua
function Config.Override.ServerSide.Functions.SendNotify(src, message, ...)
    return false
end
```

Şunlar için kullanışlıdır:

* framework bildirimleri
* Discord log sistemleri
* admin sistemleri
* özel UI sistemleri

---

# Framework Ayarı

Framework davranışı şu yapı üzerinden değiştirilebilir:

```lua
Config.Override.ClientSide.Framework = true
```

Devre dışı bırakıldığında:

```text
geliştiricilerin doğrulama sistemlerini manuel yazması gerekir
```

---

# Evrensel Mimari

Override sistemleri bilinçli olarak framework bağımlı varsayımlardan kaçınır.

Bu yapı şu sistemlerle daha kolay entegrasyon sağlar:

```text
QBCore
ESX
standalone sistemler
özel framework sistemleri
```

---

# Önerilen Override İşleyişi

Önerilen entegrasyon süreci:

```text
1. Bildirim sistemlerini yapılandır
2. Para yönetimini yapılandır
3. Doğrulama sistemlerini yapılandır
4. Walkstyle sistemlerini yapılandır
5. Yetki sistemlerini yapılandır
```

---

# Güvenli Güncelleme Mantığı

Override sistemi güncelleme çakışmalarını azaltmak için geliştirilmiştir.

Geliştiricilerin mümkün olduğunca korunan mantıkları doğrudan düzenlememesi önerilir.

Bunun yerine:

```text
davranışları override sistemleri üzerinden değiştir
```

Bu yapı şunları geliştirir:

* güncelleme güvenliği
* uyumluluk
* sürdürülebilirlik

---

# Geliştirici Notları

XDEV bilinçli olarak temel etkileşim katmanlarını override sistemleri üzerinden erişilebilir hale getirir çünkü appearance sistemleri genellikle sunucuya özel davranışlar gerektirir.

Override mimarisi özellikle şunlar için tasarlanmıştır:

```text
sunucu özelleştirmeleri
framework değişimleri
uzun vadeli ölçeklenebilirlik
```

Core resource'u yeniden yazmadan çalışır.

