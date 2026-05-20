---
title: Genel Bakış
sidebar_position: 1
---

# XDEV Appearance

XDEV Appearance, FiveM sunucuları için geliştirilmiş tamamen özelleştirilebilir ve framework uyumlu bir appearance sistemidir.

Sistem; modüler mimari, override desteği ve esnek veri yönetimi yapısı üzerine tasarlanmıştır.  
Hem standalone kullanımını hem de Illenium Appearance gibi mevcut appearance sistemleriyle uyumluluk süreçlerini destekler.

---

# Ana Özellikler

- Kıyafet sistemi
- Berber sistemi
- Cerrah / yüz düzenleme sistemi
- Dövme sistemi
- Kombin sistemi
- Kıyafet odaları
- Üniforma sistemi
- Yüz önbellek sistemi
- Ped destek sistemi
- Ters kıyafet eşleme sistemi
- Çoklu dil desteği
- Tam override mimarisi
- Framework uyumluluk desteği
- Illenium uyumlu format desteği
- Geliştirici event sistemi
- Export sistemi
- Özel fiyatlandırma sistemi

---

# Mimari

Resource birden fazla katmana ayrılmıştır:

```text
shared/     → Yapılandırmalar, dil dosyaları, ortak veriler
client/     → Oynanış mantığı, UI yönetimi, ped yönetimi
server/     → Veritabanı yönetimi, dönüştürmeler, kayıt/yükleme mantığı
ui/         → NUI arayüzü
````

Sistem, geliştiricilerin core resource'u düzenlemeden dahili mantıkları değiştirebilmesi için tasarlanmıştır.

Çoğu sistem şu yapılar üzerinden override edilebilir:

* override fonksiyonları
* event hook sistemleri
* export'lar
* yapılandırma dosyaları

---

# Uyumluluk Mantığı

XDEV Appearance dahili olarak kendi appearance yapısını kullanır.

Ancak sistem şunları yapabilir:

* Illenium uyumlu verileri okuyabilir
* harici appearance formatlarını dönüştürebilir
* mevcut veritabanlarını genişletebilir
* tam veritabanı sıfırlaması zorlamadan çalışmaya devam edebilir

Bu sayede sunucular, mevcut oyuncu verilerini kalıcı olarak bozmadan sistemler arasında geçiş yapabilir.

---

# Desteklenen Sistemler

Resource temel olarak şu sistemler için geliştirilmiştir:

* QBCore
* oxmysql
* ox_lib

Ancak çoğu sistem override yapıları üzerinden uyarlanabilir.

---

# UI Sistemi

Arayüz özellikle şu amaçlar doğrultusunda geliştirilmiştir:

* yüksek özelleştirilebilirlik
* düşük bağımlılık kullanımı
* klavye odaklı gezinme
* geliştirici esnekliği

UI davranışlarının çoğu yapılandırılabilir veya değiştirilebilir yapıdadır.

---

# Geliştirici Odağı

Bu resource son kullanıcıdan çok sunucu geliştiricileri hedef alınarak geliştirilmiştir.

Dokümantasyon özellikle şu konular üzerine yoğunlaşır:

* yapılandırma
* entegrasyonlar
* override sistemleri
* veri yönetimi
* dahili işleyiş süreçleri
* uyumluluk sistemleri
