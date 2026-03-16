---
title: Klasik Serbest Kamera ile Farkları
sidebar_position: 2
---

# Klasik Serbest Kamera ile Farkları

Gelişmiş Serbest Kamera, **Klasik Serbest Kamera** çekirdeği üzerine inşa edilmiştir.  
Klasik Serbest Kamera hafif ve geliştirici dostu bir serbest kamera sistemi sunmaya odaklanırken, Gelişmiş Serbest Kamera bu temeli **görsel kontrol sistemleri ve sinematik özellikler** ekleyerek genişletir.

Her iki sistem de aynı **çekirdek kamera mimarisini** paylaşır, ancak Gelişmiş Serbest Kamera kayıt alma, ekran görüntüsü oluşturma ve sinematik sahne üretimi için tasarlanmış ek katmanlar içerir.

---

# Temel Farklar

**Klasik Serbest Kamera** ile **Gelişmiş Serbest Kamera** arasındaki temel farklar görsel kontrol ve kullanıcı etkileşimi ile ilgilidir.

| Feature | Classic Freecam | Advanced Freecam |
|-------|------|------|
| Core Freecam Movement | ✔ | ✔ |
| Camera Rotation & Zoom | ✔ | ✔ |
| Visibility Guard | ✔ | ✔ |
| UI Control Panel | ❌ | ✔ |
| Visual Scene Controls | ❌ | ✔ |
| Time Control | ❌ | ✔ |
| Weather Control | ❌ | ✔ |
| Camera Effects | ❌ | ✔ |
| PostFX Filters | ❌ | ✔ |
| Depth of Field | ❌ | ✔ |
| Camera Shake | ❌ | ✔ |
| Motion Blur | ❌ | ✔ |
| Screenshot / Photo System | ❌ | ✔ |
| Save & Reset Settings | ❌ | ✔ |

---

# UI Entegrasyonu

Klasik Serbest Kamera temel olarak **kontroller ve configuration üzerinden** çalışır.

Gelişmiş Serbest Kamera ise kullanıcıların kamera ve sahne parametrelerini gerçek zamanlı olarak değiştirebilmesini sağlayan **tam entegre bir UI sistemi** sunar.

Bu UI sistemi aşağıdaki ayarlara erişim sağlar:

- movement settings  
- rotation speed  
- zoom behavior  
- visual effects  
- environmental controls  

---

# Görsel Sahne Sistemleri

Gelişmiş Serbest Kamera, **sinematik sahne kontrolü** için tasarlanmış birçok yeni sistem içerir:

- local time control
- local weather control
- camera shake effects
- motion blur
- depth of field
- cinematic mode

Bu sistemler **yerel olarak uygulanır** ve sunucunun genel ortamını etkilemez.

---

# Post Processing Efektleri

Gelişmiş Serbest Kamera, sahnenin görsel görünümünü değiştirmeyi sağlayan **PostFX ve camera effects** sistemlerini içerir.

Bu efektler şu amaçlarla kullanılabilir:

- sinematik ışıklandırma oluşturmak
- film tarzı görseller elde etmek
- atmosferik sahneler oluşturmak
- kayıt ve ekran görüntülerini geliştirmek

---

# Kalıcı Kamera Ayarları

Klasik Serbest Kamera'dan farklı olarak Gelişmiş Serbest Kamera, kamera ayarlarının **kaydedilmesine ve yeniden yüklenmesine** izin verir.

Bu özellik içerik üreticilerin her kamera açılışında ayarları yeniden yapılandırmasına gerek kalmadan belirli kamera kurulumlarını tekrar kullanmasını sağlar.

---

# Geliştirici Entegrasyonu

Gelişmiş Serbest Kamera, Klasik Serbest Kamera'da kullanılan aynı **override mimarisini** korur.

Geliştiriciler aşağıdaki sistemleri override edebilir:

- camera actions
- notifications
- visual systems
- screenshot handling

Bu yapı sayesinde Gelişmiş Serbest Kamera, **çekirdek kaynağı değiştirmeden** özel framework'lere ve sunucu ortamlarına kolayca entegre edilebilir.

---

# Özet

Klasik Serbest Kamera **temel kamera işlevselliğini** sağlar.

Gelişmiş Serbest Kamera ise bu çekirdek yapının üzerine **sinematik araçlar, görsel kontrol sistemleri ve UI tabanlı configuration** ekleyerek sistemi tam bir **sahne oluşturma ve kayıt aracı setine** dönüştürür.