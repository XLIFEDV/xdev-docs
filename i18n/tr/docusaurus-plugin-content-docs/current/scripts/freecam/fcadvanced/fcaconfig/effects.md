---
title: Kamera Efektleri / PostFX
sidebar_position: 5
---

# Kamera Efektleri & PostFX

Gelişmiş Serbest Kamera, kullanıcıların kameraya doğrudan sinematik filtreler uygulayabilmesini sağlayan bir **visual effects sistemi** içerir.

Bu efektler farklı color grading stilleri, kontrast ayarları ve sinematik görsel katmanlar uygulayarak sahnenin görsel görünümünü değiştirir.

Uygulanan tüm efektler **yerel olarak uygulanır** ve yalnızca kullanıcının kamerasını etkiler.

---

# Kamera Efektleri

Kamera efektleri, sahnenin nasıl render edildiğini değiştiren görsel filtreler uygular.

Bu filtreler farklı kamera stillerini, sinematik görünümleri veya çevresel görsel değişimleri simüle edebilir.

Mevcut efektler configuration içerisinde tanımlanır:

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
````

Bu efektler şunları değiştirebilir:

* color tone
* lighting balance
* cinematic style
* environmental atmosphere

---

# PostFX Filtreleri

PostFX filtreleri ek **post-processing visual effects** uygular.

Bu filtreler genellikle ışık geçişlerini, sahne tonunu veya sinematik sunumu değiştirir.

Mevcut PostFX filtreleri configuration içerisinde tanımlanır:

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

PostFX filtreleri şu tür görseller oluşturmak için kullanılabilir:

* cinematic transitions
* dramatic lighting styles
* stylized visual environments
* recording-ready visual scenes

---

# Efekt Kullanımı

Kamera efektleri ve PostFX filtreleri, Freecam aktifken UI üzerinden kontrol edilebilir.

Kullanıcılar sahnenin görsel sunumunu değiştirmek için efektler arasında hızlıca geçiş yapabilir.

Bu sayede içerik üreticiler configuration dosyalarını değiştirmeden farklı görsel stiller deneyebilir.

---

# Yerel Render

Gelişmiş Serbest Kamera üzerinden uygulanan tüm efektler **client-side** çalışır.

Bu şu anlama gelir:

* diğer oyuncular uygulanan efektleri görmez
* sunucu oynanışı etkilenmez
* efektler yalnızca sinematik ve görsel amaçlarla kullanılır

---

# Özet

Kamera Efektleri ve PostFX sistemi, içerik üreticilerin sahnelerin görsel görünümünü gerçek zamanlı olarak değiştirmesine olanak tanır.

Farklı filtreler ve efektler birleştirilerek kayıtlar, ekran görüntüleri veya sahne kompozisyonları için sinematik görseller oluşturulabilir.