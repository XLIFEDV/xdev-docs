---
title: UI Sistemi
sidebar_position: 2
---

# UI Sistemi

Freecam, kullanıcıların kamera davranışını ve görsel ayarları gerçek zamanlı olarak yönetmesini sağlayan tam entegre bir **UI kontrol sistemi** içerir.

UI, aşağıdaki sistemleri kontrol etmek için merkezi bir panel görevi görür:

- camera movement
- rotation ve zoom
- visual effects
- environment settings
- cinematic features

Tüm UI ayarları `Config.UI` tablosu içerisinde bulunur.

---

# UI Erişim Kontrolü

`Config.UI.access` tablosu, hangi UI özelliklerinin kullanılabilir olacağını belirler.

Her seçenek ayrı ayrı aktif veya pasif yapılabilir.

```lua
Config.UI.access = {
    take_photo = true,
    speed = true,
    rotate = true,
    shift = true,
    postfx = {
        effect = true,
        postfx = true
    },
    shake = true,
    dof = {
        near_dof = true,
        far_dof = true,
        dof_strength = true
    },
    time = true,
    weather = true,
    motionblur = true,
    cinema = true,
    nightvision = true,
    thermal = true,
    save_settings = true
}
````

Eğer `access` tablosu **false veya nil** ise, tüm UI sistemi devre dışı kalır.

---

# UI Seçenekleri

| Option        | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| take_photo    | Screenshot / fotoğraf çekme özelliğini aktif eder             |
| speed         | Kamera hareket hızını kontrol eder                            |
| rotate        | Kamera dönüş hassasiyetini kontrol eder                       |
| shift         | Geçici hız artışını aktif eder (Shift tuşu)                   |
| postfx        | Visual effects ve PostFX kontrollerini aktif eder             |
| shake         | Kamera shake kontrollerini aktif eder                         |
| dof           | Depth-of-field ayarlarını aktif eder                          |
| time          | Local time kontrolünü aktif eder                              |
| weather       | Local weather kontrolünü aktif eder                           |
| motionblur    | Motion blur efektini aktif eder                               |
| cinema        | Cinematic mode’u aktif eder                                   |
| nightvision   | Night vision özelliğini aktif eder                            |
| thermal       | Thermal vision özelliğini aktif eder                          |
| save_settings | Kamera ayarlarını kaydetme ve sıfırlama özelliğini aktif eder |

---

# PostFX Filtreleri

PostFX filtreleri kameraya sinematik görsel stiller uygular.

```lua
Config.UI.postfx = {
    "default",
    "MenuMGHeistIn",
    "MenuMGSelectionIn",
    "DrugsMichaelAliensFight",
    "HeistCelebPass",
    "BikerFilter",
    "Rampage",
    "MP_intro_logo"
}
```

Bu filtreler şunları etkiler:

* color grading
* lighting style
* cinematic tone

Tüm filtreler local olarak uygulanır.

---

# Kamera Efektleri

Camera effects, ek görsel filtreler sağlar.

```lua
Config.UI.effect = {
    "default",
    "cinema",
    "NG_filmic01",
    "NG_filmic02",
    "NG_filmic03",
    "NG_filmic04",
    "MP_Powerplay_blend",
    "MP_death_grade",
    "CAMERA_BW",
    "scanline_cam",
    "heliGunCam",
    "hud_def_blur",
    "spectator5",
    "underwater",
    "drug_flying_base"
}
```

Bu efektler farklı sinematik stilleri ve görsel atmosferleri simüle edebilir.

---

# Hava Durumu Kontrolü

UI üzerinden önceden tanımlı hava durumları seçilebilir.

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

Hava durumu değişiklikleri **local olarak uygulanır** ve diğer oyuncuları etkilemez.

---

# Zaman Kontrolü

UI üzerinden ortamın local zamanı değiştirilebilir.

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
```

Bu sayede ışık koşulları tamamen kontrol edilebilir.

---

# Kamera Shake Efektleri

Camera shake efektleri dinamik kamera hareketini simüle eder.

```lua
Config.UI.shake = {
    'HAND_SHAKE',
    'ROAD_VIBRATION_SHAKE',
    'DRUNK_SHAKE',
    'SKY_DIVING_SHAKE'
}
```

Bu efektler daha sinematik veya gerçekçi görüntüler oluşturmak için kullanılabilir.

---

# Özet

UI System, kamera ve görsel ayarları gerçek zamanlı kontrol etme imkanı sağlar.

UI üzerinden kullanıcılar:

* kamera davranışını ayarlayabilir
* visual effects kontrol edebilir
* environment ayarlarını değiştirebilir
* sinematik sahneler oluşturabilir

Bu sayede Freecam, gerçek zamanlı çalışan tam kapsamlı bir sinematik kontrol sistemi haline gelir.