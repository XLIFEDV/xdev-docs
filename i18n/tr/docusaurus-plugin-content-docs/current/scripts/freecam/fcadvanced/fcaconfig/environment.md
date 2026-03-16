---
title: Zaman ve Hava Durumu Kontrolü
sidebar_position: 4
---

# Zaman ve Hava Durumu Kontrolü

Gelişmiş Serbest Kamera, kullanıcıların sahnenin zamanını ve hava durumunu **yerel olarak değiştirmesine** olanak tanıyan bir **environment control sistemi** içerir.

Bu kontroller UI üzerinden erişilebilir ve içerik üreticilerin sinematik kayıtlar veya ekran görüntüleri için ortam atmosferini ayarlamasına yardımcı olmak amacıyla tasarlanmıştır.

Yapılan tüm değişiklikler **yerel olarak uygulanır** ve sunucuyu veya diğer oyuncuları etkilemez.

---

# Yerel Zaman Kontrolü

Zaman kontrol sistemi, kullanıcıların Freecam kullanırken oyun içi zamanı değiştirmesine olanak tanır.

Bu özellik özellikle sinematik sahnelerde ışık koşullarını ayarlamak için kullanışlıdır.

Zaman, configuration içerisinde tanımlanan hazır değerler arasından seçilebilir.

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

Aktif edildiğinde seçilen zaman yalnızca oyuncunun kamera görüntüsüne uygulanır.

Sunucudaki diğer oyuncular normal sunucu saatini görmeye devam eder.

---

# Yerel Hava Durumu Kontrolü

Hava durumu kontrol sistemi kullanıcıların hava koşullarını yerel olarak değiştirmesine olanak tanır.

Bu özellik sahnenin atmosferini kontrol etmek için kullanılır ve sunucunun global hava durumunu değiştirmez.

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

Hava durumu değişiklikleri **yalnızca yerel oyuncuya uygulanır**.

Diğer oyuncular bu değişiklikleri görmez.

---

# Kullanım Senaryoları

Zaman ve hava durumu kontrolü genellikle şu amaçlarla kullanılır:

* cinematic recordings
* scene composition
* screenshot capture
* controlling lighting conditions
* creating specific atmospheres

Örneğin:

* akşam saatleri kullanılarak **sunset sahneleri**
* atmosferik kayıtlar için **foggy ortamlar**
* kış temalı sahneler için **snow efektleri**

---

# Önemli Notlar

* Zaman ve hava durumu değişiklikleri **client-side** çalışır
* **Global server environment** üzerinde hiçbir etkisi yoktur
* Tamamen **visual ve cinematic kullanım** için tasarlanmıştır

---

# Özet

Environment control sistemi, içerik üreticilerin sahnenin görsel atmosferini hızlı bir şekilde ayarlamasını sağlar.

Yerel zaman ve hava durumu değişiklikleri sayesinde Gelişmiş Serbest Kamera, normal sunucu oynanışını etkilemeden esnek sinematik sahneler oluşturmayı mümkün kılar.