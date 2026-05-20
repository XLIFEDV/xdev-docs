---
title: UI Yapılandırması
sidebar_position: 3
---

# UI Yapılandırması

UI ile ilgili ayarlar şu dosya üzerinden kontrol edilir:

```text
shared/config.lua
````

UI sistemi şu yapılar üzerine tasarlanmıştır:

* klavye odaklı kullanım
* düşük bağımlılık kullanımı
* geliştirici özelleştirmeleri
* modüler etkileşim yönetimi

---

# UI Yapısı

Ana UI yapılandırması:

```lua
Config.UI = {}
```

Bu bölüm şunları kontrol eder:

* hotkey sistemleri
* etkileşim gecikmeleri
* yardımcı araç işlemleri
* bilgi panelleri
* kıyafet etkileşim sistemleri

---

# Hotkey Gecikmesi

Yapılandırma:

```lua
Config.UI.HotkeyDelay = 500
```

Menü açıldıktan sonra UI hotkey sistemlerinin aktif olacağı gecikmeyi (milisaniye cinsinden) belirler.

Amaç:

* yanlışlıkla tuş basımlarını önlemek
* basılı tutulan tuşların anında işlem yapmasını önlemek
* menü kararlılığını geliştirmek

---

# Fener Sistemi

Yapılandırma:

```lua
Config.UI.EnableFlashlight = true
```

Appearance menüsü içerisindeki fener yardımcı butonunu aktif eder.

Bu yapı oyuncuların karakter özelleştirirken karanlık alanları aydınlatmasını sağlar.

---

# Eller Yukarı Sistemi

Yapılandırma:

```lua
Config.UI.EnableHandsUp = true
```

Menü içerisindeki eller yukarı işlemini aktif eder.

Şunlar için kullanışlıdır:

* torso kıyafetlerini kontrol etmek
* aksesuarları kontrol etmek
* yan detayları görüntülemek

---

# Bilgi Paneli

Yapılandırma:

```lua
Config.UI.EnableInfoPanel = true
```

Dahili bilgi/yardım panelini kontrol eder.

Panel şunları içerebilir:

* hotkey bilgileri
* etkileşim açıklamaları
* menü kullanım ipuçları
* geliştirici tarafından eklenen açıklamalar

---

# Clothes-Off Sistemi

Yapılandırma:

```lua
Config.UI.EnableClothesOff = true
```

Kıyafet çıkarma sistemini aktif eder.

Bu yapı oyuncuların:

* kıyafet parçalarını çıkarmasını
* fallback kıyafetlerini önizlemesini
* component sistemlerini geçici olarak gizlemesini

sağlar.

Sistem şu dosya içerisinde yapılandırılmış fallback kıyafet değerlerini kullanır:

```text
shared/data/outfits.lua
```

---

# Menü Mimarisi

UI sistemi dahili olarak sistemleri birden fazla menü grubuna ayırır.

Örnekler:

* clothing
* barber
* surgeon
* tattoos
* outfits
* accessories

Her bölüm bağımsız çalışır.

---

# NUI Yapısı

UI dosyaları şu klasör içerisinde bulunur:

```text
ui/
```

Ana dosyalar:

```text
ui/index.html
ui/css/style.css
ui/javascript/main.js
```

---

# HTML Yapısı

Ana arayüz container yapısı:

```html
<div class="appearances">
    <div class="buttons"></div>
    <div class="appearance"></div>
</div>
```

Arayüz JavaScript kullanılarak menü elemanlarını dinamik şekilde oluşturur.

---

# Karakter Alanı

UI sistemi etkileşimli bir vücut alanı sistemi içerir.

Örnek:

```html
<div id="character_area" class="character_area">
```

Bu sistem şunlar için kullanılır:

* vücut bölgesi seçimi
* kamera odaklama
* hızlı gezinme

---

# Soru / Onay Sistemi

UI sistemi dahili bir onay sistemi içerir.

Şunlar için kullanılır:

* kayıt onayları
* iptal onayları
* önbellek onayları
* silme onayları

Örnek işleyiş:

```text
Apply
Cancel
Delete
Confirm
```

---

# Önbellek Onay UI Sistemi

Yüz önbellek sistemi özel bir onay penceresi kullanır.

Desteklenen işlemler:

* kayıtlı veriyi uygulama
* iptal etme
* kayıtlı önbelleği silme

Bu sistem locale dosyaları üzerinden tamamen çevrilebilir yapıdadır.

---

# Dil Desteği

UI sistemi çoklu dil desteğini şu yapı üzerinden sağlar:

```text
shared/language/*
```

Desteklenen diller:

* Türkçe
* İngilizce
* İspanyolca
* Almanca
* Fransızca
* Rusça

---

# Klavye Kullanımı

UI sistemi temel olarak klavye kullanımı için tasarlanmıştır.

Örnekler:

* enter
* backspace
* yön tuşları ile gezinme
* hotkey işlemleri

Hotkey gecikme sistemi özellikle klavye kararlılığını geliştirmek için bulunur.

---

# Stil Yapısı

Ana UI stil yapısı şu dosya içerisinde bulunur:

```text
ui/css/style.css
```

Geliştiriciler şunları özelleştirebilir:

* renkler
* layout yapısı
* boşluk sistemleri
* geçiş animasyonları
* glow efektleri
* panel konumları

---

# JavaScript Mantığı

Ana UI davranışı şu dosya üzerinden kontrol edilir:

```text
ui/javascript/main.js
```

Şunları içerir:

* menü oluşturma sistemi
* buton yönetimi
* NUI callback sistemleri
* animasyonlar
* etkileşim mantığı

---

# Önerilen Özelleştirme İşleyişi

Önerilen düzenleme sırası:

```text
1. config.lua
2. dil dosyaları
3. style.css
4. main.js
```

Gerekli olmadıkça korunan gameplay mantığını düzenlemekten kaçının.