---
title: History System
sidebar_position: 4
description: İşlem geçmişinin nasıl kaydedildiği, erişildiği ve görüntülendiği.
---

History System, işlem geçmişinin nasıl yönetildiğini ve nasıl erişildiğini tanımlar.

## Bir geçmiş (history) sisteminde tipik konular

Bu dokümantasyonu genişletirken aşağıdaki konular mutlaka ele alınmalıdır:

- **Ne saklanıyor**  
  (ödeme tutarı, citizenid / müşteri ID, tarih, durum vb.)

- **Nerede saklanıyor**  
  (sunucu belleği, veritabanı, harici entegrasyonlar)

- **Kimler erişebilir**  
  (sadece operatör mü? yetkili personel mi? müşteri de görebilir mi?)

- **Arayüzün (UI) ne beklediği**  
  (veri yapısı + zorunlu alanlar)

## Önerilen “geçmiş verisi” yapısı (örnek)

UI tarafının beklediği veri yapısı net bir şekilde belgelenmelidir.  
Örnek bir veri formatı aşağıdaki gibidir:

```lua
local historyItem = {
  payment_amount = 100,
  citizenid = "ABC123",
  date = "2026-01-05 12:30:00",
  status = "approved" -- opsiyonel
}
