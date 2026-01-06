---
title: System Settings
sidebar_position: 2
description: XDEV POS Device için genel sistem yapılandırma seçenekleri.
---

System Settings, POS Device’ın çalışma anındaki (runtime) davranışını belirleyen **genel** yapılandırma seçeneklerini içerir.

## Bu bölümde neler yer almalıdır?

System Settings aşağıdaki türde ayarlar için kullanılmalıdır:

- Ana özellikleri açıp kapatan **çekirdek anahtarlar**
- Global davranışı etkileyen **varsayılan ayarlar**
- **Güvenlik / doğrulama** davranışları  
  (UI ile ilgili olmayanlar)

## Önerilen yapı (ileride detaylı dokümantasyon için)

Bu sayfayı genişletirken, her bir ayar için aşağıdaki şablonu kullanmanız önerilir:

### Ayar adı
**Yol:** `Config.XYZ.OptionName`  
**Tür:** `boolean | number | string | table`  
**Varsayılan:** `true / false / ...`  
**Ne işe yarar:** kısa ve net açıklama  
**Örnek yapılandırma:**
```lua
Config.XYZ.OptionName = true
````

**Notlar / özel durumlar:**

* `false` olduğunda ne olur
* Değer hiç tanımlanmazsa ne olur
* Sunucu / istemci etkisi (varsa)