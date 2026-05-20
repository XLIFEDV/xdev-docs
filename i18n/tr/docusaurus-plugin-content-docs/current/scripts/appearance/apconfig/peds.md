---
title: Ped Yapılandırması
sidebar_position: 7
---

# Ped Yapılandırması

XDEV Appearance şunları destekler:

- freemode pedler
- addon/custom pedler

Sistem standart yalnızca freemode işleyişlerinin ötesinde çalışacak şekilde tasarlanmıştır.

---

# Ped Veri Dosyası

Ped tanımları şu dosya içerisinde bulunur:

```text
shared/data/peds.lua
````

Bu dosya şunları kontrol eder:

* ped etiketleri
* ped modelleri
* ped kategorileri
* ped kullanılabilirliği

---

# Desteklenen Ped Tipleri

---

# Freemode Pedler

Varsayılan GTA freemode modelleri:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Şunları destekler:

* tam kıyafet düzenleme
* overlay sistemleri
* dövmeler
* barber sistemleri
* yüz düzenleme
* component değiştirme

---

# Custom / Addon Pedler

Addon pedler de kullanılabilir.

Örnekler:

```text
ig_bankman
s_m_y_swat_01
custompedname
```

Custom pedler büyük ölçüde şu yapıya bağlı çalışır:

```lua
peddata
```

Senkronizasyon işlemleri için kullanılır.

---

# Ped Data Sistemi

Birçok appearance sisteminin aksine XDEV ek ped bilgilerini ayrı şekilde saklar.

Veritabanı alanı:

```text
peddata
```

Amaç:

* addon ped appearance verisini korumak
* özel component sistemlerini desteklemek
* freemode olmayan yapıları senkronize etmek
* custom ped durumlarını yeniden oluşturmak

---

# Freemode Kontrolü

Resource dahili olarak şu kontrolü yapar:

```lua
IsFreemodeModel(model)
```

Sonuca bağlı olarak davranış değişir.

---

# Freemode İşleyişi

Model freemode ise:

```text
- kıyafet sistemi aktif olur
- overlay sistemleri aktif olur
- dövme sistemi aktif olur
- barber sistemi aktif olur
- yüz düzenleme sistemi aktif olur
```

---

# Custom Ped İşleyişi

Model freemode DEĞİLSE:

```text
- peddata senkronizasyonu kullanılır
- custom appearance yeniden oluşturma sistemi kullanılır
- fallback component mantığı kullanılır
```

Bazı sistemler ped yapısına bağlı olarak sınırlı çalışabilir.

---

# Appearance Senkronizasyonu

Ped değiştirildiğinde sistem appearance verilerini otomatik olarak yeniden oluşturur.

Dahili senkronizasyon şunları içerir:

* components
* props
* tattoos
* peddata
* overlays
* fallback appearance durumları

---

# Ped Değişim Eventi

Sistem bir ped değişim eventi sunar.

Örnek:

```lua
sendEvent('system:OnPedChanged')
```

Şunlar için kullanışlıdır:

* özel entegrasyonlar
* framework senkronizasyonu
* inventory sistemleri
* silah sistemleri
* animasyon sistemleri

---

# Uyumluluk Notları

Freemode pedler en yüksek uyumluluğu sağlar.

Custom pedler şunları gerektirebilir:

* özel kıyafet mapping sistemleri
* peddata düzenlemeleri
* manuel senkronizasyon
* ek entegrasyon mantıkları

Sunucu yapısına bağlı olarak değişebilir.

---

# Önerilen Kullanım

Tam özellik desteği için önerilen modeller:

```text
mp_m_freemode_01
mp_f_freemode_01
```

RP/event/custom kullanım için önerilen yapı:

```text
addon/custom pedler
```

peddata desteği aktif şekilde kullanılmalıdır.

---

# Admin Ped Desteği

Resource dahili bir ped komut sistemi içerir.

Örnek:

```text
/giveped
```

Bu yapı yöneticilerin şunları yapmasını sağlar:

* ped atamak
* ped uyumluluğunu test etmek
* geçici ped durumları uygulamak

---

# Geliştirici Notları

Birçok appearance sistemi yalnızca freemode işleyişlerini destekler.

XDEV Appearance bilinçli olarak şu yapıları birbirinden ayırır:

```text
skin
tattoo
peddata
```

Amaç custom ped uyumluluğunu geliştirmektir.

Bu mimari sistemin ped geçişleri sırasında appearance verilerini daha güvenli şekilde yeniden oluşturmasını sağlar.

