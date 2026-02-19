---
title: Konfigürasyon Genel Bakış
sidebar_position: 1
---

# Konfigürasyon Genel Bakış

Bu bölüm, Freecam Classic tarafından kullanılan tüm konfigürasyon modüllerini açıklar.

Freecam Classic tamamen konfigürasyon odaklı bir yapıya sahiptir.  
Tüm sistem davranışı `config.lua` dosyasında tanımlanır.

Script iç dosyalarını düzenlemenize gerek yoktur.

---

## Konfigürasyon Kategorileri

Yapılandırma aşağıdaki mantıksal bölümlere ayrılmıştır:

- Sistem davranışı
- Aktivasyon kuralları
- Kamera limitleri
- Hareket ve dönüş hız çarpanları
- Doğrulama kontrolleri
- Override kancaları
- Event ve export ayarları

Her modül, Freecam yaşam döngüsünün belirli bir bölümünü kontrol eder.

---

## Temel Tasarım Yaklaşımı

Freecam Classic şu prensipler üzerine tasarlanmıştır:

- Kontrollü aktivasyon
- Öngörülebilir kamera davranışı
- Modüler doğrulama sistemi
- Güvenli entegrasyon
- Güncelleme uyumlu mimari

Sunucu sahiplerinin script iç mantığını değiştirmek yerine konfigürasyon değerlerini düzenlemesi önerilir.

---

## Bu Bölümde Öğrenecekleriniz

Bu konfigürasyon bölümünde şunları öğreneceksiniz:

- Aktivasyonun nasıl yapılandırıldığı
- Kamera limitlerinin nasıl belirlendiği
- Hareket hızlarının nasıl kontrol edildiği
- Doğrulama kontrollerinin nasıl çalıştığı
- Export ve event’lerin nasıl aktifleştirileceği
- Override sistemi ile davranışın nasıl genişletileceği

Bu sayede Freecam Classic üzerinde tam kontrol sağlarken sistem kararlılığı korunur.
