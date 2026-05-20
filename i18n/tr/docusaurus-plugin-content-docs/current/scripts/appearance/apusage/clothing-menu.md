---
title: Kıyafet Menüsü
sidebar_position: 2
---

# Kıyafet Menüsü

Kıyafet menüsü, XDEV Appearance sisteminin ana appearance arayüzüdür.

Bu menü şunları yönetir:

- kıyafet component sistemleri
- prop sistemleri
- aksesuarlar
- kıyafet önizlemeleri
- clothes-off etkileşimleri
- kombin kaydetme
- kombin yükleme

---

# Menü Kategorileri

Desteklenen kıyafet kategorileri:

```text
mask
arms
t-shirt
torso2
vest
pants
shoes
accessory
bag
decals
````

Desteklenen prop kategorileri:

```text
hat
glass
ear
watch
bracelet
```

---

# Component İşleyişi

Her kıyafet kategorisi şunları destekler:

```text
drawable seçimi
texture seçimi
canlı önizleme
kayıt senkronizasyonu
```

Değişiklikler önizleme sırasında anlık olarak uygulanır.

---

# Canlı Önizleme Sistemi

Kıyafet menüsü gerçek zamanlı önizleme sistemi kullanır.

Oyuncu aşağıdaki değerleri değiştirdiğinde:

```text
item
texture
```

sistem ped appearance yapısını anında günceller.

Bu yapı şunları sağlar:

* daha hızlı özelleştirme
* daha iyi kıyafet inceleme sistemi
* daha akıcı kullanım deneyimi

---

# Texture Yönetimi

Her drawable birden fazla texture içerebilir.

Örnek işleyiş:

```text
1. Drawable seç
2. Texture seç
3. Değişiklikleri önizle
4. Appearance kaydet
```

Texture limitleri dahili olarak otomatik doğrulanır.

---

# Clothes-Off Sistemi

Menü geçici kıyafet çıkarma sistemini destekler.

Çıkarılabilir kategoriler:

```text
torso
pants
props
accessories
```

Sistem kıyafetleri şu dosyada yapılandırılmış fallback değerleriyle değiştirir:

```text
shared/data/outfits.lua
```

---

# Kayıt İşleyişi

Oyuncu değişiklikleri onayladığında:

```text
1. Appearance durumu toplanır
2. Component'ler senkronize edilir
3. Prop'lar senkronize edilir
4. Gerekirse dövmeler yenilenir
5. Veritabanı kaydı tetiklenir
```

---

# İptal İşleyişi

Oyuncu değişiklikleri iptal ederse:

```text
1. Önceki appearance geri yüklenir
2. Geçici değişiklikler silinir
3. Önizleme durumu kaldırılır
```

Veritabanında hiçbir değişiklik uygulanmaz.

---

# Kombin Entegrasyonu

Kıyafet menüsü doğrudan şu sistemlerle entegre çalışır:

* kombin kaydetme
* kombin yükleme
* kombin silme
* kombin kod sistemleri

sunucu yapılandırmasına bağlı olarak değişebilir.

---

# Kıyafet Senkronizasyonu

Sistem dahili olarak şunları senkronize eder:

```text
components
props
peddata
```

Bu yapı şu durumlarda tutarlılığı artırır:

* reconnect işlemleri
* reload işlemleri
* menü kapanışları
* ped değişimleri

---

# Freemode Desteği

Tam kıyafet desteği şu modellerde mevcuttur:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Bu modeller GTA kıyafet sisteminin tamamını destekler.

---

# Custom Ped Desteği

Addon/custom pedler kısmi olarak desteklenir.

Ped yapısına bağlı olarak:

* bazı component'ler mevcut olmayabilir
* bazı prop'lar uygulanamayabilir
* peddata senkronizasyonu gerekebilir

---

# UI Özellikleri

Kıyafet menüsü şunları destekler:

```text
canlı önizleme
kategori değiştirme
component filtreleme
texture düzenleme
clothes-off etkileşimleri
bilgi panelleri
```

---

# Bilgi Paneli

Opsiyonel UI bilgi panelleri şunları gösterebilir:

* kontroller
* kategori detayları
* etkileşim ipuçları
* önizleme açıklamaları

Şu yapı üzerinden kontrol edilir:

```lua
Config.UI.EnableInfoPanel
```

---

# Hotkey Desteği

Kıyafet menüsü yapılandırılabilir hotkey desteği sunar.

İlgili yapılandırma:

```lua
Config.UI.HotkeyDelay
```

Bu yapı şunları önlemeye yardımcı olur:

* yanlışlıkla yapılan girişler
* takılı kalan tuş durumları
* menü spam problemleri

---

# Fener Desteği

Opsiyonel fener entegrasyonu:

```lua
Config.UI.EnableFlashlight
```

Şunlar için kullanışlıdır:

* karanlık ortamlar
* kıyafet incelemeleri
* roleplay durumları

---

# Eller Yukarı Desteği

Opsiyonel eller yukarı entegrasyonu:

```lua
Config.UI.EnableHandsUp
```

Şunlar için kullanışlıdır:

* roleplay etkileşimleri
* polis aramaları
* inceleme sistemleri

---

# Dahili Doğrulama

Kıyafet menüsü dahili olarak şunları doğrular:

```text
drawable limitleri
texture limitleri
ped uyumluluğu
component mevcutluğu
```

Amaç bozuk appearance durumlarını azaltmaktır.

---

# Önerilen İşleyiş

Önerilen oyuncu işleyişi:

```text
1. Kıyafet menüsünü aç
2. Kategori seç
3. Drawable ayarla
4. Texture ayarla
5. Appearance önizle
6. Kaydet veya iptal et
```

---

# Geliştirici Notları

Kıyafet menüsü şu yapılarda kalacak şekilde tasarlanmıştır:

```text
modüler
framework bağımsız
uyumluluk dostu
override güvenli
```

Bu yapı farklı sunucular arasında entegrasyon esnekliğini artırır.
