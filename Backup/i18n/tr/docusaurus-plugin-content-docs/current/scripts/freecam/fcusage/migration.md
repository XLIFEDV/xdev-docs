---
title: Entegrasyon Notları
sidebar_position: 3
---

# Entegrasyon Notları

Freecam, farklı sunucu ortamlarına **modüler, esnek ve kolay entegre edilebilir** olacak şekilde tasarlanmıştır.

Belirli bir framework’e bağlı değildir ve override sistemi sayesinde mevcut sistemlerle uyumlu hale getirilebilir.

---

# Framework Uyumluluğu

Freecam, doğrudan değişiklik gerektirmeden çoğu FiveM framework ile çalışabilir.

Yaygın entegrasyonlar:

- QBCore  
- ESX  
- standalone kurulumlar  

Framework’e özel davranışlar override sistemi ile yönetilebilir.

---

# Bildirim Sistemleri

Varsayılan notification sistemi client-side override ile değiştirilebilir.

Bu sayede şu sistemlerle entegrasyon sağlanabilir:

- framework notification sistemleri  
- UI kütüphaneleri  
- custom notification sistemleri  

Örnek:

```lua
function Config.Override.ClientSide.Functions.SendNotify(message)
    -- custom notification logic
end
````

---

# Screenshot Entegrasyonu

Freecam, harici screenshot sistemleri ile entegre edilebilir.

Varsayılan capture logic’i değiştirerek şu sistemlerle çalıştırabilirsiniz:

* screenshot-basic
* server-side capture sistemleri
* external API’ler
* custom image servisleri

Örnek:

```lua
function Config.Override.ClientSide.Functions.TakePhoto()
    -- custom screenshot logic
end
```

---

# Veri Kalıcılığı (Data Persistence)

Kamera ayarları server-side custom logic ile saklanabilir.

Bu sayede şu sistemlerle entegrasyon yapılabilir:

* player database sistemleri
* framework player data yapıları
* custom storage sistemleri

Örnek:

```lua
function Config.Override.ServerSide.Functions.SaveSettings(src, settings)
    -- custom save logic
end
```

---

# Yetki Sistemleri

Freecam, erişim kontrolü için permission sistemleri ile entegre edilebilir.

Override kullanarak:

* belirli job’lara özel kullanım
* role veya grup bazlı erişim
* admin-only kontrol sistemleri

gibi kısıtlamalar uygulanabilir.

Bu sayede Freecam kontrollü sunucu ortamlarına kolayca uyarlanır.

---

# En İyi Kullanım Pratikleri

Freecam entegrasyonu yaparken:

* core dosyaları değiştirmek yerine override kullanın
* entegrasyon logic’ini modüler tutun
* tüm sistemleri sunucu ortamında test edin
* mevcut scriptlerle uyumluluğu kontrol edin

Bu yaklaşım çakışmaları önler ve güncellemeleri kolaylaştırır.

---

# Özet

Freecam, farklı sunucu yapılarına sorunsuz şekilde entegre olacak şekilde tasarlanmıştır.

Override sistemi ve modüler yapısı sayesinde, basit standalone kurulumlardan kompleks framework tabanlı sunuculara kadar geniş bir kullanım alanına uyarlanabilir.