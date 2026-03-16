---
title: Arayüz Sistemi
sidebar_position: 2
---

# Arayüz Sistemi

Gelişmiş Serbest Kamera, kullanıcıların kamera davranışını ve görsel ayarları kamerayı kullanırken doğrudan değiştirebilmesini sağlayan tamamen entegre bir **UI kontrol sistemi** sunar.

UI, kamera parametrelerini, görsel efektleri ve çevresel ayarları yönetmek için ana kontrol paneli görevi görür.

UI ile ilgili tüm yapılandırmalar `Config.UI` tablosu içerisinde bulunur.

---

# UI Erişim Kontrolü

`Config.UI.access` tablosu, UI üzerinde hangi özelliklerin kullanılabilir olacağını kontrol eder.

Her seçenek ayrı ayrı aktif veya pasif hale getirilebilir.

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

Eğer `access` tablosu **false veya nil** olursa, tüm UI sistemi devre dışı bırakılır.

---

# UI Seçenekleri

| Option        | Description                                                |
| ------------- | ---------------------------------------------------------- |
| take_photo    | Screenshot / photo özelliğini aktif eder                   |
| speed         | Kamera hareket hızının ayarlanmasına izin verir            |
| rotate        | Kamera dönüş hassasiyetinin ayarlanmasına izin verir       |
| shift         | Shift tuşu basılı tutulduğunda geçici hız artışı sağlar    |
| postfx        | Görsel efekt kontrollerini aktif eder                      |
| shake         | Kamera sallama kontrollerini aktif eder                    |
| dof           | Depth-of-field ayarlarını aktif eder                       |
| time          | Yerel zaman kontrolünü aktif eder                          |
| weather       | Yerel hava durumu kontrolünü aktif eder                    |
| motionblur    | Motion blur efektini aktif eder                            |
| cinema        | Sinematik modu aktif eder                                  |
| nightvision   | Gece görüşünü aktif eder                                   |
| thermal       | Termal görüşü aktif eder                                   |
| save_settings | Kamera ayarlarının kaydedilmesini ve sıfırlanmasını sağlar |

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

Bu filtreler şunları etkileyebilir:

* color grading
* lighting style
* cinematic tone

Filtreler **yerel olarak uygulanır** ve yalnızca kullanıcının kamerasını etkiler.

---

# Kamera Efektleri

Kamera efektleri ek görsel filtreler uygular.

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

Bu efektler farklı sinematik stilleri veya çevresel görselleri simüle edebilir.

---

# Hava Durumu Kontrolü

UI üzerinden önceden tanımlanmış hava durumları seçilebilir.

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

Hava durumu değişiklikleri **yerel olarak uygulanır** ve diğer oyuncuları etkilemez.

---

# Zaman Kontrolü

UI aracılığıyla ortamın yerel zamanı değiştirilebilir.

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

Bu özellik içerik üreticilerin kayıt veya ekran görüntüsü alırken ışık koşullarını kontrol etmesine olanak tanır.

---

# Kamera Sallama Efektleri

Kamera shake efektleri elde taşınan kamera hareketini simüle eder.

```lua
Config.UI.shake = {
    'HAND_SHAKE',
    'ROAD_VIBRATION_SHAKE',
    'DRUNK_SHAKE',
    'SKY_DIVING_SHAKE'
}
```

Bu efektler daha dinamik veya sinematik kayıtlar oluşturmak için kullanılabilir.

---

# Özet

**UI System**, kullanıcıların kamera ve görsel kontrollerine gerçek zamanlı olarak erişmesini sağlar ve configuration dosyalarını değiştirmeden sinematik parametreleri ayarlamalarına olanak tanır.

Bu arayüz sayesinde kullanıcılar:

* camera movement settings
* visual effects
* environmental settings
* cinematic features

üzerinde kontrol sahibi olur.

Bu da Gelişmiş Serbest Kamera'yı temel Klasik Serbest Kamera sistemine kıyasla çok daha güçlü hale getirir.