---
title: Kamera Efektleri / PostFX
sidebar_position: 5
---

# Kamera Efektleri & PostFX

Freecam, kullanıcıların kameraya doğrudan sinematik filtreler uygulamasını sağlayan bir **visual effects system** içerir.

Bu efektler sahnenin görsel görünümünü; color grading, contrast ayarları ve sinematik overlay’ler ile değiştirir.

Tüm efektler **local olarak uygulanır** ve sadece kullanıcının kamerasını etkiler.

---

# Kamera Efektleri

Camera effects, sahnenin nasıl render edileceğini değiştiren görsel filtreler uygular.

Bu filtreler farklı kamera stillerini, sinematik görünümleri ve çevresel efektleri simüle edebilir.

Kullanılabilir efektler config içerisinde tanımlıdır:

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

Bu efektler şunları etkileyebilir:

* color tone
* lighting balance
* cinematic style
* environmental atmosphere

---

# PostFX Filtreleri

PostFX filtreleri ek **post-processing görsel efektleri** uygular.

Bu filtreler genellikle sahne tonu, ışık geçişleri ve sinematik sunumu ayarlamak için kullanılır.

Kullanılabilir PostFX filtreleri:

```lua id="k1e9sx"
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

PostFX ile şunlar oluşturulabilir:

* cinematic transitions
* dramatik ışık stilleri
* stilize edilmiş ortamlar
* kayıt için hazır görseller

---

# Efekt Kullanımı

Camera effects ve PostFX filtreleri, Freecam aktifken UI üzerinden kontrol edilebilir.

Kullanıcılar farklı efektler arasında anında geçiş yaparak sahnenin görsel stilini değiştirebilir.

Bu sayede config dosyalarını değiştirmeden hızlı denemeler yapılabilir.

---

# Local Rendering

Freecam içerisindeki tüm görsel efektler **client-side çalışır**.

Bu şu anlama gelir:

* diğer oyuncular uygulanan efektleri görmez
* sunucu gameplay’i etkilenmez
* efektler tamamen görsel ve sinematik amaçlıdır

---

# Özet

Camera Effects ve PostFX sistemi, sahnelerin görsel görünümünü gerçek zamanlı olarak kontrol etmeyi sağlar.

Farklı filtre ve efekt kombinasyonları ile kullanıcılar:

* cinematic recording yapabilir
* screenshot alabilir
* sahne kompozisyonu oluşturabilir

Bu sistem, Freecam’i güçlü bir sinematik görsel araç haline getirir.