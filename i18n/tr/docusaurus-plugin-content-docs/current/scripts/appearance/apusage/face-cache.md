---
title: Yüz Önbelleği
sidebar_position: 7
---

# Yüz Önbelleği

Yüz önbellek sistemi, oyuncuların yüz kimlik verilerini kıyafetlerden ayrı şekilde kaydedip geri yüklemesini sağlar.

Bu sistem şunlar için tasarlanmıştır:

- kimlik koruma
- hızlı karakter yeniden oluşturma
- roleplay tutarlılığı
- appearance kurtarma
- yalnızca yüz senkronizasyonu

---

# Sistem Amacı

Kombin sistemlerinin aksine yüz önbellek sistemi şunları saklar:

```text
head blend
face features
head overlays
eye color
hair
````

kıyafet verilerini saklamadan çalışır.

Bu yapı oyuncuların:

* kombinleri özgürce değiştirmesini
* yüz kimliğini korumasını
* appearance yapısını daha sonra geri yüklemesini

sağlar.

---

# Önbellek İşleyişi

Tipik işleyiş:

```text
1. Mevcut yüz verisini kaydet
2. Appearance/kıyafet değiştir
3. Daha sonra kayıtlı yüz verisini geri yükle
```

---

# Kaydedilen Önbellek Verileri

Yüz önbellek sistemi temel olarak şunları saklar:

```text
headBlend
faceFeatures
headOverlays
eyeColor
hair
```

Örnek yapı:

```lua
{
    headBlend = {},
    faceFeatures = {},
    headOverlays = {},
    eyeColor = 0,
    hair = {}
}
```

---

# Hariç Tutulan Veriler

Önbellek sistemi bilinçli olarak şunları saklamaz:

```text
components
props
tattoos
outfits
```

Amaç:

* kıyafetlerin üzerine yazılmasını önlemek
* kombin esnekliğini korumak
* kimlik verilerini kıyafetlerden ayırmak

---

# Önbellek Uygulama İşleyişi

Önbellek verisi uygulandığında:

```text
1. Mevcut appearance okunur
2. Yüz önbellek verisi birleştirilir
3. Yüz appearance yeniden oluşturması çalıştırılır
4. Appearance senkronizasyonu yenilenir
```

Yalnızca kimlik ile ilgili veriler değiştirilir.

---

# Önbellek Onay Sistemi

UI sistemi kayıtlı yüz verisi uygulanmadan önce özel bir onay sistemi içerir.

Örnek yapılandırma:

```lua
cache_confirm = {
    title = "Apply Saved Face Data",
    description = "Saved facial data will replace the current face appearance.",
    confirm = "Confirm",
    cancel = "Cancel",
    delete = "Delete Saved Data"
}
```

---

# Önbellek Uyarı Davranışı

Sistem bilinçli olarak oyuncuları kayıtlı yüz verisi uygulanmadan önce uyarır.

Sebep:

```text
yüz verisi değiştirildikten sonra tekrar düzenlenene kadar kalıcı olur
```

Bu yapı yanlışlıkla kimlik verisinin üzerine yazılmasını engeller.

---

# Önbellek Silme İşleyişi

Oyuncular kayıtlı yüz verilerini kalıcı olarak silebilir.

Silme işleyişi:

```text
1. Onay penceresi açılır
2. Kayıtlı veri silinir
3. Yüz önbellek durumu sıfırlanır
```

---

# Önbellek Senkronizasyonu

Önbellek verisi uygulandığında:

```text
head blend yenilenir
face overlay sistemleri yenilenir
face feature sistemleri yenilenir
saç sistemi yenilenir
```

Bu yapı appearance tutarlılığını korur:

* reconnect işlemleri
* reload işlemleri
* ped yeniden oluşturma işlemleri
* appearance senkronizasyonu

sonrasında görünümün düzgün kalmasını sağlar.

---

# Saç Desteği

Saç verileri yüz önbellek sistemi içerisinde saklanır.

Desteklenen değerler:

```text
style
texture
color
highlight
```

Amaç:

* kimliği korumak
* saç stilini korumak
* appearance tutarlılığını geri yüklemek

---

# Overlay Desteği

Önbellek sistemi şu overlay sistemlerini destekler:

```text
beard
eyebrows
makeup
lipstick
blush
moles
```

Şunlar dahil:

```text
style
opacity
color
```

overlay tipine bağlı olarak değişebilir.

---

# Freemode Gereksinimi

Tam önbellek desteği freemode modelleri gerektirir:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Custom/addon pedler aşağıdaki sistemleri tam desteklemeyebilir:

* overlay sistemleri
* blend verileri
* yüz morph sistemleri
* göz renkleri

---

# Dahili Karşılaştırma Sistemi

Önbellek sistemi kayıt işleminden önce appearance değerlerini dahili olarak karşılaştırabilir.

Tipik karşılaştırma hedefleri:

```text
item
texture
mix
color
opacity
```

Amaç:

* gereksiz kayıt işlemlerini önlemek
* tekrar eden önbellek güncellemelerini azaltmak
* senkronizasyon mantığını geliştirmek

---

# Önerilen Kullanım

Önerilen oyuncu işleyişi:

```text
1. Yüz appearance yapısını tamamla
2. Yüz önbelleğini kaydet
3. Kıyafet/kombinleri özgürce değiştir
4. Gerektiğinde kimliği geri yükle
```

---

# Roleplay Kullanımı

Yaygın RP kullanım alanları:

```text
undercover karakterler
kimlik geri yükleme
berber kurtarma sistemi
karakter presetleri
çoklu kombin roleplay yapıları
```

---

# Geliştirici Notları

Birçok appearance sisteminin aksine XDEV bilinçli olarak şunları birbirinden ayırır:

```text
kimlik verileri
kıyafet verileri
dövme verileri
peddata
```

Bu mimari şunları geliştirir:

* modülerlik
* yeniden oluşturma güvenilirliği
* senkronizasyon tutarlılığı
* uyumluluk süreçleri
