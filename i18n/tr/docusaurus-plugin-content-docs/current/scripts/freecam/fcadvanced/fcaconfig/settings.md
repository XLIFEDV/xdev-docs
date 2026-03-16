---
title: Ayarları Kaydet & Sıfırla
sidebar_position: 6
---

# Ayarları Kaydet & Sıfırla

Gelişmiş Serbest Kamera, kullanıcıların kamera yapılandırmalarını kaydedip tekrar yükleyebilmesini sağlayan bir **settings persistence sistemi** içerir.

Bu özellik, içerik üreticilerin birden fazla kayıt oturumu boyunca aynı kamera ayarlarını koruyabilmesine yardımcı olur.

Aktif edildiğinde kullanıcılar mevcut kamera yapılandırmasını kaydedebilir ve daha sonra tekrar yükleyebilir.

---

# Sistemi Aktifleştirme

Ayar sistemi UI configuration üzerinden aktif veya pasif hale getirilebilir.

```lua
Config.UI.access.save_settings = true
````

| Value | Behavior                                                       |
| ----- | -------------------------------------------------------------- |
| true  | Kamera ayarlarının kaydedilmesini ve sıfırlanmasını aktif eder |
| false | Ayar sistemi devre dışı bırakılır                              |

Bu seçenek kapatıldığında tüm save ve reset özellikleri kullanılamaz.

---

# Kamera Ayarlarını Kaydetme

Kaydetme sistemi aktif olduğunda kullanıcılar mevcut kamera yapılandırmalarını saklayabilir.

Kaydedilen ayarlar şunları içerebilir:

* movement speed
* rotation speed
* zoom settings
* visual effects
* depth of field values
* camera shake parameters
* environment overrides

Bu sayede kullanıcılar tercih ettikleri sinematik kamera ayarlarını hızlı bir şekilde tekrar yükleyebilir.

---

# Kamera Ayarlarını Sıfırlama

Reset seçeneği kamera yapılandırmasını varsayılan değerlere geri döndürür.

Ayarları sıfırlamak:

* daha önce kaydedilmiş değerleri kaldırır
* varsayılan configuration değerlerini geri yükler
* UI parametrelerini sıfırlar

Bu özellik farklı sinematik ayarlar arasında geçiş yapılırken oldukça kullanışlıdır.

---

# Örnek Kullanım Akışı

Ayar sisteminin tipik kullanım süreci:

1. Kamera ayarlarını UI üzerinden değiştirin.
2. Efektleri, environment ayarlarını ve hareket davranışını yapılandırın.
3. Yapılandırmayı kaydedin.
4. Yeni bir kayıt oturumu başlatırken ayarları tekrar yükleyin.

Bu yöntem içerik üreticilerin hızlı bir şekilde aynı sinematik sahneleri hazırlamasına yardımcı olur.

---

# Kaydedilmiş Ayarların Kullanımı

Kamera ayarlarını kaydetmek şu durumlarda faydalıdır:

* birden fazla sahne kaydı alırken
* tutarlı sinematik kamera ayarları kullanırken
* aynı görsel ayarlarla birden fazla screenshot alırken
* önceden hazırlanmış kayıt ortamları oluştururken

---

# Özet

Save & Reset Settings sistemi kullanıcıların kamera yapılandırmalarını saklamasına ve farklı oturumlarda tekrar kullanmasına olanak tanır.

Bu özellik kullanım kolaylığını artırır ve Gelişmiş Serbest Kamera ile çalışırken sinematik iş akışını önemli ölçüde hızlandırır.