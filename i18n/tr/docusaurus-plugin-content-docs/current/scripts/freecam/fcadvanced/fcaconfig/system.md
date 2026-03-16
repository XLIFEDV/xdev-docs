---
title: Sistem Yapılandırması
sidebar_position: 1
---

# Sistem Yapılandırması

**Sistem Yapılandırması** bölümü, Gelişmiş Serbest Kamera'nın temel davranışını kontrol eder.

Bu ayarlar kamera sisteminin nasıl aktif olacağını, başlatıldığında nasıl davranacağını ve hareket ile zoom mekaniklerinin nasıl çalışacağını belirler.

Sistemle ilgili tüm ayarlar `Config.System` tablosu içerisinde bulunur.

---

# Aktivasyon Ayarları

Bu ayarlar Serbest Kamera sisteminin nasıl aktif edileceğini belirler.

```lua
Config.System.action = {
    command = "freecam",
    key = "V",
    hold = 2000
}
````

| Option  | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| command | string | Serbest Kamera'yı aktif etmek için kullanılan chat command |
| key     | string | Kamerayı aktif etmek için kullanılan klavye tuşu           |
| hold    | number | Tuşun basılı tutulması gereken süre (milliseconds)         |

Örnek:

```
/freecam
```

veya yapılandırılmış tuşa basılı tutularak kullanılabilir.

---

# Visibility Guard

Visibility Guard sistemi, kameranın oyuncu entity'sinin artık render edilmeyeceği konumlara gitmesini engeller.

```lua
Config.System.VisibilityGuard = true
```

Aktif olduğunda:

* camera movement doğrulanır
* kamera duvarların arkasına veya geometri içine gidemez
* oyuncu entity'si görünür kalmak zorundadır

Bu özellik kayıt veya ekran görüntüsü sırasında görsel tutarlılığı korumaya yardımcı olur.

---

# Reset Davranışı

Serbest Kamera aktif edildiğinde kamera ayarlarının sıfırlanıp sıfırlanmayacağını belirler.

```lua
Config.System.reset = false
```

| Value | Behavior                                                        |
| ----- | --------------------------------------------------------------- |
| true  | Serbest Kamera her aktif edildiğinde kamera ayarları sıfırlanır |
| false | Önceki kamera ayarları korunur                                  |

---

# Başlangıç Kamera Pozisyonu

Kameranın oyuncuya göre başlangıç offset konumunu belirler.

```lua
Config.System.firstposition = vec3(0.0, 1.5, 0.5)
```

| Axis | Description           |
| ---- | --------------------- |
| X    | Sağ / Sol offset      |
| Y    | İleri / Geri offset   |
| Z    | Yukarı / Aşağı offset |

Bu ayar Serbest Kamera başladığında kameranın nerede ortaya çıkacağını belirler.

---

# Kamera Animasyonu

Serbest Kamera açılırken veya kapatılırken kullanılan geçiş animasyonunun süresini belirler.

```lua
Config.System.cam_animation = 750
```

| Option        | Description                     |
| ------------- | ------------------------------- |
| cam_animation | Animasyon süresi (milliseconds) |

Daha yüksek değerler daha yumuşak geçişler oluşturur.

---

# Zoom Ayarları

Kameranın field-of-view (FOV) sınırlarını belirler.

```lua
Config.System.values.zoom.default = 90.0
Config.System.values.zoom.min = 10.0
Config.System.values.zoom.max = 120.0
```

| Option  | Description                      |
| ------- | -------------------------------- |
| default | Varsayılan FOV değeri            |
| min     | Minimum FOV (maksimum zoom-in)   |
| max     | Maksimum FOV (maksimum zoom-out) |

---

# Kamera Mesafe Limiti

Kameranın başlangıç anchor noktasından ne kadar uzaklaşabileceğini belirler.

```lua
Config.System.values.distance = 7.5
```

Bu ayar kameranın oyuncudan çok uzaklaşmasını engeller.

---

# Hareket Hızı Çarpanları

Bu ayarlar kamera hareket hızını kontrol eder.

```lua
Config.System.multipliers.move.slow = 0.005
Config.System.multipliers.move.fast = 0.1
```

| Option | Description             |
| ------ | ----------------------- |
| slow   | Varsayılan hareket hızı |
| fast   | Maksimum hareket hızı   |

---

# Dönüş Hızı

Kameranın mouse hareketlerine ne kadar hızlı tepki vereceğini belirler.

```lua
Config.System.multipliers.rotate.slow = 0.25
Config.System.multipliers.rotate.fast = 1.0
```

| Option | Description           |
| ------ | --------------------- |
| slow   | Varsayılan dönüş hızı |
| fast   | Maksimum dönüş hızı   |

---

# Zoom Hızı

Kameranın zoom değerinin ne kadar hızlı değişeceğini belirler.

```lua
Config.System.multipliers.zoom.slow = 0.25
Config.System.multipliers.zoom.fast = 1.0
```

| Option | Description          |
| ------ | -------------------- |
| slow   | Varsayılan zoom hızı |
| fast   | Maksimum zoom hızı   |

---

# Özet

**Sistem Yapılandırması**, Gelişmiş Serbest Kamera'nın temel davranışını kontrol eder. Bunlar arasında:

* camera activation
* camera limits
* movement speed
* zoom behavior
* camera positioning
* visibility protection

bulunur.

Bu ayarlar UI ve görsel kontrol sistemleri uygulanmadan önce kameranın temel davranışını belirler.