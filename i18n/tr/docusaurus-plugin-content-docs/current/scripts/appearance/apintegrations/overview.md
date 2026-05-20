---
title: Entegrasyonlar Genel Bakış
sidebar_position: 0
---

# Entegrasyonlar Genel Bakış

Bu bölüm, XDEV Appearance sisteminin şunlarla nasıl entegre çalıştığını açıklar:

- framework sistemleri
- appearance sistemleri
- animasyon sistemleri
- eski resource sistemleri
- senkronizasyon işleyişleri

Resource bilinçli olarak framework bağımlı değil, modüler ve uyumluluk odaklı şekilde tasarlanmıştır.

---

# Entegrasyon Mantığı

XDEV Appearance şu yapıları birbirinden ayırır:

```text
appearance mantığı
framework mantığı
UI mantığı
veritabanı mantığı
````

Bu mimari şunları kolaylaştırır:

* geçiş süreçleri
* uyumluluk
* bakım süreçleri
* özel entegrasyonlar

---

# Desteklenen Entegrasyonlar

Mevcut dokümante edilmiş entegrasyonlar:

```text
QBCore
Illenium Appearance
Walkstyle Sistemleri
Eski Appearance Resource'ları
```

---

# QBCore Entegrasyonu

Dahili QBCore uyumluluğu şunları içerir:

```text
komut sistemleri
yetki sistemleri
meslek sistemleri
çete sistemleri
oyuncu verileri
```

Sistem büyük düzenlemeler gerektirmeden doğrudan QBCore ile çalışabilir.

---

# Illenium Uyumluluğu

Resource şu yapılar için uyumluluk işleyişlerini destekler:

```text
appearance dönüştürme
dövme yeniden oluşturma
event uyumluluğu
veritabanı genişletme
```

Bu yapı Illenium Appearance geçiş süreçlerini kolaylaştırır.

---

# Walkstyle Entegrasyonu

Opsiyonel walkstyle override sistemi şunları destekler:

```text
RPEmotes
özel animasyon sistemleri
hareket senkronizasyonu
```

Override sistemi üzerinden çalışır.

---

# Eski Resource Uyumluluğu

Uyumluluk katmanları aşağıdaki eski sistemleri desteklemek için bulunur:

```text
qb-clothing
eski appearance yapıları
özel framework sistemleri
```

Şunlar üzerinden çalışır:

* dönüştürücüler
* event köprüleri
* senkronizasyon işleyişleri

---

# Event Entegrasyonu

Resource yapılandırılabilir event sistemlerini şu yapı üzerinden sunar:

```lua
sendEvent()
```

Bu yapı harici sistemlerin korunan dosyaları düzenlemeden güvenli şekilde entegre olmasını sağlar.

---

# Override Entegrasyonu

Geliştiriciler override sistemleri üzerinden aşağıdaki dahili davranışları değiştirebilir:

```text
bildirim sistemleri
ödeme sistemleri
walkstyle sistemleri
yetki kontrolleri
doğrulama sistemleri
```

Bu yapı neredeyse her sunucu mimarisiyle entegrasyon sağlar.

---

# Veritabanı Entegrasyonu

SQL yapısı şunları destekler:

```text
sıfırdan kurulumlar
eski veritabanları
geçiş işleyişleri
sütun genişletme sistemi
```

Bu yapı eski appearance sistemlerinden geçişleri kolaylaştırır.

---

# Senkronizasyon Mantığı

XDEV Appearance özellikle şunlara odaklanır:

```text
yeniden oluşturma
senkronizasyon
dönüştürme
uyumluluk
```

Önbelleğe alınmış appearance durumlarına tamamen bağımlı kalmadan çalışır.

Amaç:

* desync problemlerini azaltmak
* dövme kararlılığını artırmak
* ped yeniden oluşturmayı geliştirmek
* geçiş süreçlerini desteklemek

---

# Modüler Tasarım

Entegrasyon sistemi mümkün olduğunca hardcode varsayımlardan kaçınacak şekilde tasarlanmıştır.

Bu yapı şu sistemlerin daha iyi desteklenmesini sağlar:

```text
standalone sunucular
özel framework sistemleri
yoğun şekilde düzenlenmiş sunucular
büyük RP altyapıları
```

---

# Önerilen Okuma Sırası

Önerilen entegrasyon dokümantasyonu sırası:

```text
1. Uyumluluk
2. QBCore
3. Illenium Formatı
4. Walkstyle
```

---

# Geliştirici Notları

Birçok appearance sisteminin aksine XDEV en başından yalnızca standalone bir kıyafet resource'u olarak değil, bir uyumluluk katmanı olarak tasarlanmıştır.

Bu yaklaşım şunları geliştirir:

```text
geçiş güvenliği
resource esnekliği
framework bağımsızlığı
uzun vadeli sürdürülebilirlik
```
