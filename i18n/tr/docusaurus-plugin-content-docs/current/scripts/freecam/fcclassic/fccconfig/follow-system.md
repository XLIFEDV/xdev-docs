---
title: Takip Sistemi
sidebar_position: 4
---

# Takip Sistemi

Klasik Serbest Kamera, oyuncuya bağlı bir kamera davranışı kullanır.

Bu, Serbest Kamera aktif olduğu sürece kameranın oyuncu ile dinamik olarak bağlantılı kaldığı anlamına gelir.

---

## Davranış Şekli

Serbest Kamera etkinleştirildiğinde:

- Kamera, oyuncu ile sabit bir konumsal ilişkiyi korur.
- Oyuncu hareket ettiğinde kamera da birlikte hareket eder.
- Kamera dünyadan kopmaz veya bağımsız şekilde uzaklaşmaz.
- Konumsal tutarlılık her zaman korunur.

Bu yapı, Serbest Kamera’nın öngörülebilir ve kontrollü çalışmasını sağlar.

---

## Bu Tasarımın Amacı

Klasik sürüm şu prensiplerle tasarlanmıştır:

- Hafif yapı
- Güvenilir davranış
- Yönetim ve moderasyon kullanımına uygunluk
- Yapılandırılmış sunuculara kolay entegrasyon

Tamamen serbest ve oyuncudan kopuk bir kamera, konumsal kararsızlık veya istenmeyen davranışlara yol açabilir.  
Takip sistemi bu riskleri önlemek amacıyla oyuncu ile konumsal hizalamayı korur.

---

## Limitler Dahilinde Hareket

Kamera oyuncuya bağlı çalışsa da, yapılandırılmış sınırlar dahilinde konum değişimine izin verir.

Sistem şunları garanti eder:

- Maksimum mesafe sınırlarının korunması
- Hareket tutarlılığı
- Tepkisel ve kontrollü kamera davranışı

---

## Tasarım Felsefesi

Takip sistemi şu önceliklere dayanır:

- Stabilite
- Kontrol
- Güvenlik
- Öngörülebilir davranış

Klasik sürümde bu sistem varsayılan olarak her zaman aktiftir ve konfigürasyon üzerinden devre dışı bırakılamaz.
