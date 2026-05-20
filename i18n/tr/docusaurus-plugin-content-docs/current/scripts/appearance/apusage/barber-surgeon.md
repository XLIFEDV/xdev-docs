---
title: Berber & Cerrah
sidebar_position: 3
---

# Berber & Cerrah

Berber ve cerrah sistemleri, XDEV Appearance içerisindeki tüm yüz özelleştirme işlemlerini yönetir.

Bu sistemler kıyafet sistemlerinden ayrı çalışır ve tamamen şunlara odaklanır:

- yüz özelleştirme
- overlay sistemleri
- yüz yapısı
- saç sistemi
- makyaj sistemi
- göz özelleştirme

---

# Berber Menüsü

Berber menüsü görsel overlay sistemlerini ve kozmetik appearance yapısını yönetir.

Desteklenen kategoriler:

```text
hair
beard
eyebrows
makeup
lipstick
blush
moles
blemishes
sunDamage
complexion
ageing
chestHair
bodyBlemishes
````

---

# Cerrah Menüsü

Cerrah menüsü yapısal yüz verilerini yönetir.

Desteklenen kategoriler:

```text
head blend
face features
eye color
```

---

# Saç Sistemi

Saç sistemi şunları destekler:

```text
hair style
hair texture
primary color
highlight color
```

Kaydedilen yapı örneği:

```lua
hair = {
    style = 0,
    texture = 0,
    color = 0,
    highlight = 0
}
```

---

# Overlay Sistemi

Head overlay sistemleri dahili olarak şunları kullanır:

```text
style
opacity
color
secondColor
```

Örnek:

```lua
makeUp = {
    style = 5,
    opacity = 0.8,
    color = 1,
    secondColor = 0
}
```

---

# Overlay Opaklığı

Desteklenen overlay sistemleri şu opaklık aralığını kullanır:

```text
0.0 -> 1.0
```

UI sistemi dahili olarak yüzde değerlerini normalize edebilir.

---

# Overlay Renkleri

Bazı overlay sistemleri renk paletlerini destekler.

Renk destekleyen overlay sistemleri:

```text
beard
eyebrows
makeup
lipstick
blush
```

---

# Overlay Palet Notları

Farklı GTA overlay sistemleri farklı dahili paletler kullanır.

Örnek:

```text
Palette 1
Palette 2
```

Bazı overlay sistemleri seçilen palet davranışına bağlı olarak farklı renkler üretebilir.

---

# Benler / Çiller

Ben ve çil sistemleri saç renk paletlerini kullanmaz.

Genellikle desteklenen değerler:

```text
style
opacity
```

Renk davranışı kullanılan yapıya göre değişebilir.

---

# Makyaj Sistemi

Makyaj sistemi şunları destekler:

```text
style
opacity
color
```

Gerçekçi appearance geçişleri için opaklık desteği önemlidir.

---

# Ruj Sistemi

Ruj sistemi şunları destekler:

```text
style
opacity
color
```

Ruj renkleri dahili olarak GTA overlay paletlerini kullanır.

---

# Allık Sistemi

Allık sistemi şunları destekler:

```text
style
opacity
color
```

Palet davranışına bağlı olarak bazı renkler beklenen önizlemeden farklı görünebilir.

---

# Sakal Sistemi

Sakal sistemi şunları destekler:

```text
style
opacity
color
```

Sakal renkleri dahili olarak GTA saç paletlerini kullanır.

---

# Head Blend Sistemi

Head blend sistemi yüz genetiğini kontrol eder.

Kaydedilen yapı örneği:

```lua
headBlend = {
    shapeFirst = 0,
    shapeSecond = 0,
    skinFirst = 0,
    skinSecond = 0,
    shapeMix = 0.0,
    skinMix = 0.0
}
```

---

# Face Features

Face feature sistemi detaylı yüz şekillendirmesini destekler.

Desteklenen kategoriler:

```text
nose
jaw
chin
cheeks
eyes
neck
lips
eyebrows
```

Her değer dahili olarak normalize edilir.

---

# Göz Rengi

Cerrah menüsü göz rengi seçimini destekler.

Örnek:

```lua
eyeColor = 0
```

---

# Önbellek Entegrasyonu

Berber ve cerrah sistemleri doğrudan:

```text
face cache system
```

ile entegre çalışır.

Bu yapı oyuncuların:

* yüz yapılarını kaydetmesini
* yüz appearance yapısını geri yüklemesini
* kimlik presetlerini tekrar kullanmasını

sağlar.

Kıyafet verileri etkilenmez.

---

# Kayıt İşleyişi

Kaydetme işlemi sırasında:

```text
1. Overlay verileri toplanır
2. Face feature verileri toplanır
3. Head blend verileri toplanır
4. Appearance senkronize edilir
5. Veritabanı kaydı tetiklenir
```

---

# İptal İşleyişi

İptal edildiğinde:

```text
önceki yüz appearance yapısı geri yüklenir
```

Şunlar dahil:

* overlay sistemleri
* face feature verileri
* saç sistemi
* göz rengi
* head blend sistemi

---

# Freemode Gereksinimi

Tam berber/cerrah desteği freemode modelleri gerektirir:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Custom pedler aşağıdaki sistemleri düzgün desteklemeyebilir:

* overlay sistemleri
* blend verileri
* yüz morph sistemi
* göz rengi sistemi

---

# Dahili Senkronizasyon

Sistem dahili olarak şunları senkronize eder:

```text
head overlays
face features
head blend
eye color
hair
```

Amaç reload ve reconnect işlemlerinden sonra tutarlılığı artırmaktır.

---

# Önerilen İşleyiş

Önerilen işleyiş:

```text
1. Berber/cerrah menüsünü aç
2. Overlay sistemlerini düzenle
3. Yüz yapısını düzenle
4. Appearance önizle
5. Kaydet veya iptal et
```

---

# Geliştirici Notları

Birçok appearance sisteminin aksine XDEV dahili tarafta yüz sistemlerini kıyafet sistemlerinden ayırır.

Amaç:

```text
daha iyi senkronizasyon
daha temiz yeniden oluşturma işleyişleri
önbellek desteği
uyumluluk desteği
```