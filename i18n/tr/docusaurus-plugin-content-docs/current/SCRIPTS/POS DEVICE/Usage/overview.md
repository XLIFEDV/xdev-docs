---
title: Usage Overview
description: POSDEVICE sisteminin pratikte nasıl kullanıldığı
sidebar_position: 1
---

# POSDEVICE Kullanımı

Bu doküman, POS Device sisteminin gerçek kullanım senaryolarında nasıl davrandığını açıklar.

---

## Roller

### Operatör

Operatör, ödemeyi başlatan oyuncudur.

Sorumluluklar:

- POS Device’ı açar
- Ödeme tutarını girer
- İşlemi onaylar veya iptal eder

Kısıtlamalar:

- Aynı anda birden fazla oturum açamaz
- Zaten bir oturumda olan oyuncuları hedefleyemez

---

### Müşteri

Müşteri, ödeme talebini alan oyuncudur.

Sorumluluklar:

- Ödeme talebini inceler
- Talebi kabul eder veya reddeder

Kısıtlamalar:

- Birden fazla operatör tarafından hedeflenemez
- Aynı anda başka bir POS oturumu başlatamaz

---

## Tipik Ödeme Akışı

1. Operatör POS Device’ı açar
2. Operatör yakındaki bir oyuncuyu hedefler
3. Sistem uygunluk kontrollerini yapar
4. Müşteri ödeme talebini alır
5. Müşteri talebi kabul eder veya reddeder
6. İşlem sonucu geri döndürülür
7. Oturum kapatılır

Doğrulama (validation) başarısız olursa, işlem sessizce iptal edilir.

---

## Oturum Güvenliği Kuralları

Sistem aşağıdaki kuralları katı şekilde uygular:

- Bir oyuncu aynı anda hem operatör hem müşteri olamaz
- Yinelenen (duplicate) oturumlar engellenir
- Bağlantı kopması durumunda oturumlar otomatik olarak kapatılır
- Geçersiz UI durumları server-side olarak engellenir
