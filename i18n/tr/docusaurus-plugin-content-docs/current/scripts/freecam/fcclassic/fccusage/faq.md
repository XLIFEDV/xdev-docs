---
title: Sıkça Sorulan Sorular
sidebar_position: 4
---

# Sıkça Sorulan Sorular

Bu bölüm, Klasik Serbest Kamera ile ilgili yaygın sorunları ve kullanım sorularını kapsar.

---

## Serbest Kamera aktif olmuyor

Aşağıdakileri kontrol edin:

1. Aktivasyon yöntemi doğru yapılandırılmış mı?
   - `Config.System.action.command`
   - `Config.System.action.key`
   - `Config.System.action.hold`

2. Serbest Kamera zaten aktif mi?
   - Aktifken tekrar açmaya çalışmak engellenir.

3. Sistem kontrolleri açık mı?
   - `Config.System.checks.dead`
   - `Config.System.checks.vehicle`

4. Override mantığınız aktivasyonu engelliyor olabilir mi?

---

## Dead check hatası alıyorum

Eğer `Config.System.checks.dead = true` ise, oyuncu yaşam durumu kontrolünden geçmelidir.

Çözüm:

- Dead check’i devre dışı bırakın.
- DeadCheck override mantığınızı düzenleyin.

---

## Vehicle restriction hatası alıyorum

Eğer `Config.System.checks.vehicle = true` ise, araç durumu kontrol edilir.

Çözüm:

- Vehicle check’i kapatın.
- VehicleCheck override mantığınızı düzenleyin.

---

## Serbest Kamera açılıyor ama kamera hareket etmiyor

Olası sebepler:

- Hareket çarpanları çok düşük olabilir.
- Mesafe limiti hareketi kısıtlıyor olabilir.
- Tuş yapılandırması doğru ayarlanmamış olabilir.
- Başka bir script girdi sistemini engelliyor olabilir.

Kontrol edin:

- `Config.System.values.distance`
- `Config.System.multipliers.move`

---

## Zoom düzgün çalışmıyor

Kontrol edin:

- `Config.System.values.zoom.min`
- `Config.System.values.zoom.max`
- `Config.System.multipliers.zoom`

Minimum ve maksimum değerler birbirine çok yakınsa zoom aralığı kısıtlı hissedilir.

---

## Kamera her seferinde sıfırlanıyor

Kontrol edin:

```lua
Config.System.reset = true
````

Bu değer `true` ise, her aktivasyonda kamera ayarları sıfırlanır.

Önceki ayarları korumak için `false` yapın.

---

## Exportlar çalışmıyor

Aşağıdakilerin aktif olduğundan emin olun:

```lua
Config.Exports.openFreecam  = true
Config.Exports.closeFreecam = true
Config.Exports.getData      = true
```

Exportlar varsayılan olarak kapalıdır.

---

## Event’ler tetiklenmiyor

Kontrol edin:

```lua
Config.Events.ClientSide.system = {
    onStart = true,
    onClose = true
}
```

`false` ise event tetiklenmez.

---

## Klasik Serbest Kamera sürümde neden UI yok?

Klasik Serbest Kamera bilinçli olarak hafif tasarlanmıştır.

Amaç:

* Kararlılık
* Yönetim kullanımı
* Düşük sistem yükü

Arayüz ve sinematik özellikler için Advanced sürüme bakınız.