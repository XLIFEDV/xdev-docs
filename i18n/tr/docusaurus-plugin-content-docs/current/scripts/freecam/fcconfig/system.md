---
title: Sistem Yapılandırması
sidebar_position: 1
---

# Sistem Yapılandırması

**System Configuration** bölümü Freecam sisteminin temel davranışını belirler.

Bu ayarlar kameranın nasıl aktif edileceğini, kullanım sırasında nasıl davranacağını ve movement, rotation ile zoom sistemlerinin nasıl çalışacağını kontrol eder.

Tüm sistem ayarları `Config.System` tablosu içerisinde bulunur.

---

# Aktivasyon Ayarları

Bu ayarlar Freecam’in nasıl aktif edileceğini belirler.

```lua
Config.System.action = {
    command = "freecam",
    key = "V",
    hold = 2000
}
````

| Option  | Type   | Description                                       |
| ------- | ------ | ------------------------------------------------- |
| command | string | Freecam’i aktif etmek için kullanılan chat komutu |
| key     | string | Kamerayı aktif etmek için kullanılan tuş          |
| hold    | number | Tuşun basılı tutulması gereken süre (ms)          |

Örnek kullanım:

```
/freecam
```

veya belirlenen tuşa basılı tutarak aktif edilebilir.

---

# Visibility Guard

Visibility Guard sistemi, kamera kullanılırken oyuncu entity’sinin görünür kalmasını sağlar.

```lua
Config.System.VisibilityGuard = true
```

Aktif olduğunda:

* camera movement doğrulanır
* kamera duvarların arkasına veya objelerin içine geçemez
* oyuncu görünür mesafe içerisinde kalmak zorundadır

Bu sistem hatalı kamera pozisyonlarını engeller ve görsel tutarlılığı artırır.

---

# Reset Davranışı

Freecam aktif edildiğinde kamera ayarlarının sıfırlanıp sıfırlanmayacağını belirler.

```lua
Config.System.reset = false
```

| Value | Behavior                                   |
| ----- | ------------------------------------------ |
| true  | Freecam her açıldığında ayarlar sıfırlanır |
| false | Önceki kamera ayarları korunur             |

---

# Başlangıç Kamera Pozisyonu

Kameranın oyuncuya göre başlangıç offset değerini belirler.

```lua
Config.System.firstposition = vec3(0.0, 1.5, 0.5)
```

| Axis | Description           |
| ---- | --------------------- |
| X    | Sağ / Sol offset      |
| Y    | İleri / Geri offset   |
| Z    | Yukarı / Aşağı offset |

Bu değer Freecam başlatıldığında kameranın nerede konumlanacağını belirler.

---

# Başlangıç Kamera Odağı

Freecam aktif edildiğinde kameranın otomatik olarak oyuncunun ped'ine odaklanıp odaklanmayacağını belirler.

```lua
Config.System.FocusOnPlayerStart = false
```

### Davranış

* `true` → Kamera başlangıçta oyuncunun ped'ine odaklanır
* `false` → Kamera serbest modda başlar, oyuncuya odaklanmaz

### Açıklama

Bu ayar, Freecam açıldığında kameranın başlangıç davranışını kontrol eder.

`true` olarak ayarlandığında, kamera açılışta otomatik olarak oyuncunun ped'ine hizalanır ve odaklanır.
`false` olarak ayarlandığında ise kamera doğrudan serbest modda başlar ve kullanıcıya anında manuel kontrol sağlar.

Bu ayar, kameranın kontrollü bir başlangıç mı yoksa tamamen serbest bir başlangıç mı yapacağını belirlemek için kullanılır.

---

# Kamera Animasyonu

Freecam açılıp kapanırken kullanılan geçiş süresini kontrol eder.

```lua
Config.System.cam_animation = 750
```

| Option        | Description               |
| ------------- | ------------------------- |
| cam_animation | Geçiş süresi (milisaniye) |

Daha yüksek değerler daha yumuşak geçiş sağlar.

---

# Zoom Ayarları

Kameranın field-of-view (FOV) davranışını belirler.

```lua
Config.System.values.zoom.default = 90.0
Config.System.values.zoom.min = 10.0
Config.System.values.zoom.max = 120.0
```

| Option  | Description                     |
| ------- | ------------------------------- |
| default | Varsayılan FOV değeri           |
| min     | Minimum FOV (maksimum zoom-in)  |
| max     | Maximum FOV (maksimum zoom-out) |

---

# Kamera Mesafe Limiti

Kameranın başlangıç noktasından ne kadar uzaklaşabileceğini belirler.

```lua
Config.System.values.distance = 7.5
```

Bu ayar kameranın oyuncudan çok uzaklaşmasını engeller.

---

# Hareket Hızı Çarpanları

Kamera hareket hızını kontrol eder.

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

Kameranın dönüş hassasiyetini belirler.

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

Zoom değişiminin ne kadar hızlı gerçekleşeceğini belirler.

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

System Configuration, Freecam’in temel davranışını belirler:

* activation system
* movement ve rotation mantığı
* zoom davranışı
* kamera limitleri
* başlangıç pozisyonu
* visibility kontrolü

Bu ayarlar UI ve görsel kontrol sistemlerinden önce kamera sisteminin temelini oluşturur.