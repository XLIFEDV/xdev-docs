---
title: SSS
description: XDEV ürünleri hakkında sıkça sorulan sorular
sidebar_position: 3
---

Bu sayfa **XDEV dokümantasyonu, scriptleri ve kullanımına** dair en sık sorulan soruları yanıtlar.

---

## Genel

### XDEV nedir?

XDEV (XDEVELOPMENT), yüksek kaliteli FiveM scriptleri ve sistemleri geliştirmeye odaklanan bir geliştirme markasıdır.  
Tüm ürünler performans, stabilite ve uzun vadeli sürdürülebilirlik göz önünde bulundurularak tasarlanır.

---

### Bu dokümantasyon kimler içindir?

Bu dokümantasyon aşağıdaki kullanıcılar için hazırlanmıştır:

- Sunucu sahipleri
- Geliştiriciler
- Teknik ekip üyeleri
- Script entegratörleri

Temel FiveM bilgisi önerilir.

---

## Dokümantasyon

### Dokümantasyon neden birçok bölüme ayrılmış?

Tek bir uzun README yerine dokümantasyonun daha küçük ve odaklı sayfalara bölünmesinin amaçları:

- Okunabilirliği artırmak
- Gezinmeyi kolaylaştırmak
- Yapıyı bozmadan ileride genişleyebilmek

Her bölüm tek bir konuya odaklanır.

---

### Bazı sayfalar neden çok sade görünüyor?

Dokümantasyon, görsellikten ziyade **netlik ve anlaşılabilirlik** odaklıdır.  
Sadece kullanım ve teknik anlayış için gerekli bilgiler yer alır.

---

## Scriptler & Kullanım

### POS Device’ı bazen neden açamıyorum?

Yaygın nedenler şunlardır:

- Zaten aktif bir oturumunun olması
- Hedef oyuncunun başka bir oturumda yer alması
- Hedef oyuncunun çevrimdışı olması
- Sistem tarafından geçersiz bir durum algılanması

Bu kontroller exploitleri ve UI senkronizasyon sorunlarını önlemek için uygulanır.

---

### Aynı anda birden fazla oyuncu POS Device kullanabilir mi?

Evet, **aynı oyuncuyu hedeflemedikleri sürece**.  
Her oturum birbirinden bağımsızdır ve ayrı ayrı doğrulanır.

---

### Client-side verileri kullanmak güvenli mi?

Client-side export’lar (örneğin cihaz durumu) **yalnızca bilgilendirme amaçlıdır**.  
Güvenlik açısından kritik tüm kontroller server-side olarak gerçekleştirilir.

---

## Yapılandırma

### Yapılandırma neden birden fazla dosya/sayfaya ayrılmış?

Yapılandırma seçenekleri amaçlarına göre gruplandırılmıştır:

- Sistem ayarları
- Debug seçenekleri
- UI yapılandırmaları
- Event tetikleyiciler

Bu yaklaşım dokümantasyonu daha temiz ve sürdürülebilir kılar.

---

### Her ayarı yapılandırmam gerekir mi?

Hayır.  
Varsayılan yapılandırma değerleri üretim ortamı için güvenlidir.  
Sadece ne yaptığını bildiğin ayarları değiştirmen önerilir.

---

## Destek

### Nereden destek alabilirim?

Destek veya hata bildirimi için:

- Discord sunucusuna katıl
- Destek kanallarını kullan
- Log’ları ve net hata adımlarını paylaş

---

### Yeni özellik talep edebilir miyim?

Evet, özellik talepleri değerlendirilebilir.  
Ancak uygulanması şu kriterlere bağlıdır:

- Uygulanabilirlik
- Performansa etkisi
- Bakım maliyeti

---

## Son Notlar

Dokümantasyon yaşayan bir yapıdır.  
Eksik veya belirsiz görülen konular gerektiğinde genişletilebilir.
