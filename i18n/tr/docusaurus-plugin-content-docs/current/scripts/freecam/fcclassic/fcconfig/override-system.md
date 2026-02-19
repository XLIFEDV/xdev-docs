---
title: Override Sistemi
sidebar_position: 5
---

# Override Sistemi

Klasik Serbest Kamera, Override Sistemi adı verilen modüler bir doğrulama katmanı içerir.

Bu sistem, çekirdek script dosyalarına müdahale etmeden belirli kontrolleri değiştirme veya genişletme imkanı sağlar.

---

## Amaç

Override Sistemi şu ihtiyaçlar için tasarlanmıştır:

- Framework uyumluluğu
- Özel doğrulama mantığı
- Kontrollü aktivasyon kuralları
- Özel bildirim (notify) yönetimi

Script iç dosyalarını düzenlemek yerine, override yapılandırması üzerinden kendi mantığınızı tanımlayabilirsiniz.

---

## Mevcut Override Kancaları

Klasik Serbest Kamera aşağıdaki client-side override fonksiyonlarını destekler:

### DeadCheck
Oyuncunun hayatta olup olmadığına göre Serbest Kamera’nın açılıp açılmayacağını belirler.

### VehicleCheck
Oyuncu araç içindeyken Serbest Kamera kullanımını kontrol eder.

### Check
Gelişmiş senaryolar için tamamen özel doğrulama kancasıdır.

### SendNotify
Aktivasyon engellendiğinde özel bildirim sistemi kullanmanıza imkan tanır.

---

## Override’ları Aktifleştirme

Override ayarları `config.lua` içinde kontrol edilir:

```lua
Config.Override.ClientSide.DeadCheck    = false
Config.Override.ClientSide.VehicleCheck = false
Config.Override.ClientSide.Check        = false
Config.Override.ClientSide.SendNotify   = false
````

Bir override’ı `true` yaptığınızda, sistem sizin özel implementasyonunuzu kullanır.

`false` olduğunda, script varsayılan iç doğrulama mantığını kullanır.

---

## Doğrulama Akışı

Serbest Kamera aktivasyonu istendiğinde:

1. DeadCheck çalışır (sistem kontrolü aktifse)
2. VehicleCheck çalışır (sistem kontrolü aktifse)
3. Check her zaman çalışır
4. Herhangi bir doğrulama engellerse, lokalize edilmiş sistem mesajı döndürülür

Serbest Kamera zaten aktifse, tekrar aktivasyon engellenir.

---

## Önerilen Kullanım

Güncelleme güvenliği için:

* Script iç mantığını değiştirmeyin
* Özel davranışları override sistemi üzerinden tanımlayın
* Doğrulama işlemlerini sade ve öngörülebilir tutun

Bu yaklaşım, sistemin kararlı ve gelecekteki güncellemelerle uyumlu kalmasını sağlar.