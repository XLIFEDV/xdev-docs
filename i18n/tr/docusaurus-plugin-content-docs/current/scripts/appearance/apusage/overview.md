---
title: Kullanım Genel Bakış
sidebar_position: 1
---

# Kullanım Genel Bakış

Bu bölüm, XDEV Appearance sisteminin gerçek oyun kullanımı sırasında nasıl davrandığını açıklar.

Yapılandırma bölümlerinin aksine bu kategori şunlara odaklanır:

- oyuncu işleyişleri
- menü davranışları
- senkronizasyon davranışları
- appearance yönetimi
- kombin kullanımı
- dövme işleyişleri
- önbellek sistemleri

---

# Desteklenen Menüler

XDEV Appearance birden fazla özel menü içerir.

Desteklenen menü kategorileri:

```text
Kıyafet Menüsü
Berber Menüsü
Cerrah Menüsü
Dövme Menüsü
Kombin Menüsü
````

Her menü bağımsız çalışırken dahili tarafta aynı appearance yapısını paylaşır.

---

# Freemode İşleyişi

Sistem temel olarak freemode modelleri üzerine tasarlanmıştır:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Bu modeller şunları destekler:

* tam özelleştirme
* overlay sistemleri
* dövmeler
* yüz düzenleme sistemi
* kıyafet sistemleri
* berber sistemleri

---

# Custom Ped İşleyişi

Custom/addon pedler de desteklenir.

Ped tipine bağlı olarak sistem şu yapıyı kullanabilir:

```text
peddata
```

appearance durumlarını yeniden oluşturmak için kullanılır.

---

# Appearance Senkronizasyonu

Sistem dahili olarak şunları senkronize eder:

```text
components
props
overlays
tattoos
peddata
headblend
face features
```

Bu yapı resource'un appearance verilerini aşağıdaki durumlarda yeniden oluşturmasını sağlar:

* reconnect işlemleri
* menü kapanışları
* ped değişimleri
* dövme yenilemeleri
* reload eventleri

---

# Kayıt İşleyişi

Oyuncu appearance değişikliklerini kaydettiğinde:

```text
1. Mevcut appearance toplanır
2. Gerekirse appearance dönüştürülür
3. Veritabanı verileri güncellenir
4. Appearance senkronizasyonu tetiklenir
5. Kayıt eventleri çalıştırılır
```

---

# İptal İşleyişi

Appearance değişiklikleri iptal edildiğinde:

```text
1. Önceki appearance geri yüklenir
2. Geçici değişiklikler silinir
3. Dövmeler yenilenir
4. Component'ler yeniden oluşturulur
```

Veritabanında hiçbir değişiklik uygulanmaz.

---

# Kombin İşleyişi

Kombin sistemi şunları destekler:

* kombin kaydetme
* kombin yükleme
* kombin silme
* kombin paylaşma
* kombin kod sistemleri

Sunucu yapısına bağlı olarak değişebilir.

---

# Dövme İşleyişi

Dövme sistemi şunları içerir:

```text
bölge filtreleme
opaklık kontrolü
overlay yeniden oluşturma
dövme yenileme
uyumluluk dönüştürme
```

Sistem senkronizasyon eventleri sırasında dövmeleri otomatik olarak yeniden oluşturur.

---

# Önbellek İşleyişi

Yüz önbellek sistemi oyuncuların şunları yapabilmesini sağlar:

* yüz yapısını kaydetme
* önceki yüz verilerini geri yükleme
* karakter kimliklerini tekrar kullanma
* yüz görünümünü koruma

Önbellek sistemi temel olarak şunları saklar:

```text
head blend
face features
head overlays
eye color
```

kıyafet verilerini etkilemeden çalışır.

---

# Uyumluluk İşleyişleri

XDEV Appearance şu sistemler için uyumluluk desteği sunar:

* qb-clothing
* illenium-appearance
* eski appearance sistemleri

Tüm işlemler dahili dönüştürücüler ve senkronizasyon katmanları üzerinden çalışır.

---

# UI Davranışı

UI sistemi şunları destekler:

* kategori değiştirme
* canlı önizleme
* dövme arama sistemi
* opaklık slider sistemleri
* component önizlemeleri
* kıyafet çıkarma sistemi
* bilgi panelleri

---

# Dahili Event İşleyişi

Sistem dahili olarak şu durumlarda event tetikler:

```text
menü açılışı
menü kapanışı
appearance kaydı
appearance iptali
ped değişimleri
skin yükleme
kombin kaydı
kombin silme
```

Bu eventler geliştiriciler tarafından entegrasyonlar için kullanılabilir.

---

# Evrensel Mimari

Sistem özellikle şu yapılarda kalacak şekilde tasarlanmıştır:

```text
framework bağımsız
modüler
override uyumlu
uyumluluk odaklı
```

Bu yapı mevcut sunuculara daha kolay entegrasyon sağlar.

---

# Önerilen Okuma Sırası

Önerilen kullanım dokümantasyonu sırası:

```text
1. Kıyafet Menüsü
2. Berber & Cerrah
3. Dövme Menüsü
4. Kombin Sistemi
5. Üniforma Sistemi
6. Yüz Önbelleği
```
