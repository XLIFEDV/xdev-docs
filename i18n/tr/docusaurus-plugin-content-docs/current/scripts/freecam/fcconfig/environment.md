---
title: Zaman & Hava Durumu Kontrolü
sidebar_position: 4
---

# Zaman & Hava Durumu Kontrolü

Freecam, kullanıcıların sahnenin zaman ve hava durumu koşullarını local olarak değiştirmesini sağlayan bir **environment control system** içerir.

Bu kontroller UI üzerinden erişilebilir ve sinematik kayıtlar veya screenshot’lar için ortam atmosferini ayarlamaya yardımcı olur.

Tüm değişiklikler **local olarak uygulanır** ve sunucuyu veya diğer oyuncuları etkilemez.

---

# Local Zaman Kontrolü

Time control sistemi, Freecam kullanılırken oyun içi zamanı override etmenizi sağlar.

Bu özellik, sinematik sahnelerde ışık koşullarını ayarlamak için kullanılır.

Zaman değerleri config içerisinde tanımlıdır:

```lua
Config.UI.time = {
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00'
}
````

Aktif edildiğinde, seçilen zaman sadece oyuncunun kamera görünümüne uygulanır.

Diğer oyuncular sunucunun varsayılan zamanını görmeye devam eder.

---

# Local Hava Durumu Kontrolü

Weather control sistemi, hava durumunu local olarak değiştirmenizi sağlar.

Bu sayede global sunucu ortamını değiştirmeden sahnenin atmosferi kontrol edilebilir.

```lua
Config.UI.weather = {
    'CLEAR',
    'EXTRASUNNY',
    'CLOUDS',
    'OVERCAST',
    'RAIN',
    'THUNDER',
    'SMOG',
    'FOGGY',
    'XMAS',
    'SNOW',
    'BLIZZARD',
    'NEUTRAL',
    'CLEARING'
}
```

Hava durumu değişiklikleri **sadece local oyuncuya uygulanır**.

Diğer oyuncular bu değişiklikleri görmez.

---

# Kullanım Alanları

Time ve weather kontrolü genellikle şu durumlarda kullanılır:

* cinematic recording
* sahne kompozisyonu
* screenshot alma
* ışık koşullarını ayarlama
* belirli atmosferler oluşturma

Örnekler:

* akşam saatleri ile **gün batımı sahneleri**
* **sisli ortamlar** ile atmosferik çekimler
* **kar sahneleri** ile kış temalı görseller

---

# Önemli Notlar

* Time ve weather override’ları **client-side çalışır**
* Global sunucu ortamını **etkilemez**
* Tamamen **görsel ve sinematik amaçlıdır**

---

# Özet

Environment control sistemi, sahnenin görsel atmosferini hızlıca ayarlamayı sağlar.

Local time ve weather override’ları sayesinde Freecam, normal oyun akışını etkilemeden esnek sinematik kurulumlar sunar.