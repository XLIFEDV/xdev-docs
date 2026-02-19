---
title: Konfigürasyon
sidebar_position: 1
---

# Klasik Serbest Kamera – Konfigürasyon

Klasik Serbest Kamera tamamen `config.lua` dosyası üzerinden kontrol edilir.

Aktivasyon mantığı, kamera limitleri, doğrulama kontrolleri ve entegrasyon ayarları dahil olmak üzere tüm sistem davranışı bu yapılandırma katmanında tanımlanır.

Bu tasarım sayesinde sistem:

- Hafif
- Öngörülebilir
- Bakımı kolay
- Mevcut sunuculara güvenli şekilde entegre edilebilir

---

## Konfigürasyon Yapısı

`config.lua` dosyası mantıksal bölümlere ayrılmıştır:

- Dil (Locale) ayarları
- Debug modu
- Sistem doğrulama kontrolleri
- Aktivasyon yapılandırması
- Kamera davranış ayarları
- Hareket ve dönüş hız çarpanları
- Override kancaları (hooks)
- Event ve export ayarları

Her bölüm bağımsız çalışır ancak birlikte Serbest Kamera sisteminin genel akışını oluşturur.

---

## Neler Yapılandırılabilir?

Klasik Serbest Kamera ile aşağıdaki alanları kontrol edebilirsiniz:

### • Aktivasyon Yöntemi
Serbest Kamera’ya şu yöntemlerden biriyle erişim sağlayabilirsiniz:
- Sohbet komutu
- Tuş ataması
- Basılı tutma mantığı

### • Kamera Reset Davranışı
Kamera değerlerinin her açılışta sıfırlanmasını veya önceki oturumdan korunmasını belirleyebilirsiniz.

### • Hareket ve Dönüş Limitleri
Aşağıdaki sınırları kontrol edebilirsiniz:
- Maksimum kamera mesafesi
- Minimum ve maksimum zoom (FOV)
- Hareket hız çarpanları
- Dönüş hız çarpanları
- Zoom hız çarpanları

### • Doğrulama Akışı
Şu kontrolleri açıp kapatabilirsiniz:
- Ölüm kontrolü
- Araç kontrolü
- Özel sunucu kontrolü

### • Entegrasyon Ayarları
Aşağıdakileri yapılandırabilirsiniz:
- Opsiyonel export’lar
- Opsiyonel client-side event’ler
- Özel davranışlar için override sistemleri

---

## Konfigürasyon Felsefesi

Klasik Serbest Kamera, konfigürasyon odaklı bir mimari ile tasarlanmıştır.

Script iç mantığını değiştirmek yerine:

- `config.lua` içerisindeki değerleri düzenlemeniz,
- İhtiyaç duyulan modülleri açıp kapatmanız,
- Gerekirse override kancalarını kullanmanız önerilir.

Bu yaklaşım, scriptin kararlı ve güncelleme güvenli kalmasını sağlar.
