---
title: Kontroller
sidebar_position: 2
---

# Kontroller

Klasik Serbest Kamera grafiksel bir arayüz olmadan çalışır.

Ekran üzerinde panel veya görsel yönlendirme bulunmaz.  
Kullanıcıların yapılandırılmış kontrol düzenini bilmesi beklenir.

---

## Aktivasyon

Serbest Kamera, sunucu yapılandırmasına bağlı olarak şu yöntemlerle aktif edilebilir:

- Sohbet komutu
- Tuş ataması
- Basılı tutma mantığı

Bu davranış aşağıdaki ayar üzerinden belirlenir:

```lua
Config.System.action
````

---

## Kamera Hareketi

Serbest Kamera aktifken:

* Normal oyun kontrolleri devre dışı bırakılır.
* Hareket girdileri kamera kontrolüne yönlendirilir.
* Kamera, yapılandırılmış limitler dahilinde hareket edebilir.

Hareket hızı şu değerlere bağlıdır:

* Yavaş hareket çarpanı
* Hızlı hareket çarpanı (genellikle bir modifier tuş ile)

Bu değerler `config.lua` dosyasında ayarlanabilir.

---

## Kamera Döndürme

Kamera döndürme işlemi mouse hareketi ile yapılır.

Dönüş hızı şu çarpanlara bağlıdır:

* Yavaş dönüş çarpanı
* Hızlı dönüş çarpanı

Bu değerler konfigürasyon üzerinden değiştirilebilir.

---

## Zoom Kontrolü

Zoom işlemi kamera görüş açısının (FOV) değiştirilmesiyle gerçekleştirilir.

Zoom davranışı şu limitlere bağlıdır:

* Minimum zoom sınırı
* Maksimum zoom sınırı
* Zoom hız çarpanları

---

## Devre Dışı Bırakma

Serbest Kamera, yapılandırılmış çıkış kontrolü kullanılarak kapatılabilir.

Kapatıldığında:

* Kamera kontrolü normal oyun akışına döner.
* Girdi kısıtlamaları kaldırılır.

---

## Önemli Notlar

* Klasik Serbest Kamera görsel geri bildirim sunmaz.
* Kontrollerin bilinmesi kullanıcı sorumluluğundadır.
* Gerekirse sunucu yöneticileri ayrı bir kontrol rehberi paylaşabilir.

Arayüz destekli gelişmiş kontrol özellikleri için Advanced sürümüne bakınız.