---
title: Walkstyle Entegrasyonu
sidebar_position: 4
---

# Walkstyle Entegrasyonu

XDEV Appearance override sistemi üzerinden opsiyonel walkstyle entegrasyonu desteği sunar.

Bu yapı geliştiricilerin:

- walkstyle kaydetmesini
- walkstyle geri yüklemesini
- hareket stillerini senkronize etmesini
- emote sistemlerini entegre etmesini
- harici walkstyle sistemlerini değiştirmesini

sağlar.

Tüm bunlar korunan dosyaları düzenlemeden yapılabilir.

---

# Sistem Mantığı

Walkstyle sistemi bilinçli olarak opsiyonel tasarlanmıştır.

Amaç:

```text
framework bağımsızlığı
özel entegrasyonlar
harici emote desteği
standalone uyumluluğu
````

Resource dahili olarak herhangi bir walkstyle sistemini zorunlu tutmaz.

---

# Override Fonksiyonu

Walkstyle yönetimi şu yapı üzerinden kontrol edilir:

```lua
Config.Override.ClientSide.Functions.Walkstyle()
```

Şu dosya içerisinde bulunur:

```text
shared/client.lua
```

---

# Varsayılan Yapı

Varsayılan override:

```lua
function Config.Override.ClientSide.Functions.Walkstyle()

end
```

Geliştiricilerin kendi mantığını yazması beklenir.

---

# Beklenen Davranış

Override sistemi iki davranışı destekleyecek şekilde tasarlanmıştır:

```text
1. Mevcut walkstyle değerini almak
2. Kaydedilmiş walkstyle değerini uygulamak
```

---

# Mevcut Walkstyle Verisini Alma

Fonksiyon parametresiz çağrıldığında şunu döndürmelidir:

```text
mevcut walkstyle adı
```

Örnek:

```lua
function Config.Override.ClientSide.Functions.Walkstyle()
    return "move_m@casual@a"
end
```

---

# Walkstyle Uygulama

Fonksiyona bir değer gönderildiğinde walkstyle geri yüklenmelidir.

Örnek:

```lua
function Config.Override.ClientSide.Functions.Walkstyle(style)
    RequestAnimSet(style)

    while not HasAnimSetLoaded(style) do
        Wait(0)
    end

    SetPedMovementClipset(PlayerPedId(), style, 1.0)
end
```

---

# Tam Örnek

Örnek birleşik işleyiş:

```lua
local CurrentWalkstyle = "move_m@casual@a"

function Config.Override.ClientSide.Functions.Walkstyle(style)
    if not style then
        return CurrentWalkstyle
    end

    CurrentWalkstyle = style

    RequestAnimSet(style)

    while not HasAnimSetLoaded(style) do
        Wait(0)
    end

    SetPedMovementClipset(PlayerPedId(), style, 1.0)
end
```

---

# Kayıt İşleyişi

Entegre edildiğinde walkstyle verileri şu işlemler sırasında kaydedilebilir:

```text
appearance kaydı
kombin kaydı
önbellek kaydı
ped senkronizasyonu
```

kullanılan yapıya bağlı olarak değişebilir.

---

# Geri Yükleme İşleyişi

Walkstyle verileri şu işlemlerden sonra geri yüklenebilir:

```text
ped yeniden yükleme
appearance yeniden yükleme
menü kapatma
resource yeniden başlatma
```

Amaç karakter kimliğini korumaktır.

---

# RPEmotes Uyumluluğu

Override sistemi özellikle:

```text
RPEmotes
```

ve benzeri animasyon resource'larıyla çalışacak şekilde tasarlanmıştır.

Geliştiriciler mevcut export yapılarını doğrudan override içerisine bağlayabilir.

---

# Örnek RPEmotes Entegrasyonu

Örnek:

```lua
function Config.Override.ClientSide.Functions.Walkstyle(style)
    if not style then
        return exports["rpemotes"]:getWalk()
    end

    exports["rpemotes"]:setWalk(style)
end
```

---

# Özel Sistemler

Geliştiriciler ayrıca şunları da entegre edebilir:

```text
özel emote sistemleri
animasyon frameworkleri
hareket sistemleri
karakter kimlik sistemleri
```

Aynı override yapısı üzerinden çalıştırılabilir.

---

# Freemode ve Custom Pedler

Walkstyle sistemleri genel olarak şu yapılarda çalışır:

```text
freemode pedler
custom pedler
```

Ancak bazı custom pedler animasyon uyumluluğuna bağlı olarak farklı davranabilir.

---

# Senkronizasyon Notları

Resource dahili olarak walkstyle kaydetme sistemini bilinçli şekilde hardcode kullanmaz.

Amaç:

```text
çakışmaları önlemek
uyumluluğu korumak
özel işleyişleri desteklemek
```

Geliştiriciler implementasyon üzerinde tam kontrol sahibi olur.

---

# Önerilen Kullanım

Önerilen kullanım alanları:

```text
kimlik sistemleri
RP sunucuları
kalıcı karakter davranışları
emote entegrasyonları
```

---

# Geliştirici Notları

Birçok appearance sistemi hareket kimliğini tamamen görmezden gelir.

XDEV walkstyle entegrasyonunu override sistemi üzerinden sunarak şunları destekler:

```text
tam karakter kimlik işleyişleri
```

Herhangi bir harici bağımlılığı zorunlu tutmadan çalışır.
