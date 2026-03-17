---
title: Ayarları Kaydet & Sıfırla
sidebar_position: 6
---

# Ayarları Kaydet & Sıfırla

Freecam, kullanıcıların kamera yapılandırmalarını kaydetmesine ve tekrar yüklemesine olanak sağlayan bir **settings persistence system** içerir.

Bu özellik, birden fazla kayıt oturumu arasında tutarlı kamera ayarları kullanılmasını sağlar.

Aktif edildiğinde, kullanıcılar mevcut kamera ayarlarını saklayabilir ve daha sonra geri yükleyebilir.

---

# Sistemi Aktif Etme

Ayar sistemi UI üzerinden kontrol edilir.

```lua
Config.UI.access.save_settings = true
````

| Value | Behavior                                                      |
| ----- | ------------------------------------------------------------- |
| true  | Kamera ayarlarını kaydetme ve sıfırlama özelliğini aktif eder |
| false | Ayar sistemi devre dışı kalır                                 |

Bu özellik kapalıysa, kaydetme ve sıfırlama işlemleri kullanılamaz.

---

# Kamera Ayarlarını Kaydetme

Sistem aktif olduğunda kullanıcılar mevcut kamera ayarlarını kaydedebilir.

Kaydedilen veriler şunları içerebilir:

* movement speed
* rotation speed
* zoom ayarları
* visual effects
* depth of field değerleri
* camera shake ayarları
* environment override’ları

Bu sayede tercih edilen sinematik ayarlar hızlıca geri yüklenebilir.

---

# Kamera Ayarlarını Sıfırlama

Reset seçeneği tüm kamera ayarlarını varsayılan değerlerine döndürür.

Sıfırlama işlemi:

* kaydedilmiş değerleri siler
* config varsayılanlarını geri yükler
* UI ayarlarını sıfırlar

Bu özellik farklı sinematik kurulumlar arasında geçiş yaparken kullanışlıdır.

---

# Kullanım Akışı (Workflow)

Tipik kullanım akışı:

1. UI üzerinden kamera ayarlarını düzenle
2. Visual effects ve environment ayarlarını yapılandır
3. Ayarları kaydet
4. Daha sonra farklı bir oturumda geri yükle

Bu akış kurulum süresini azaltır ve tutarlılık sağlar.

---

# Ne Zaman Kullanılmalı?

Ayar kaydetme özelliği şu durumlarda oldukça faydalıdır:

* birden fazla sahne kaydı alırken
* tutarlı sinematik kamera ayarları kullanırken
* aynı görsel ayarlarla birden fazla screenshot alırken
* önceden hazırlanmış kayıt ortamları oluştururken

---

# Özet

Save & Reset sistemi, kamera ayarlarının saklanmasını ve tekrar kullanılmasını sağlar.

Bu özellik workflow verimliliğini artırır ve Freecam’i tekrarlı sinematik kullanım için daha pratik hale getirir.