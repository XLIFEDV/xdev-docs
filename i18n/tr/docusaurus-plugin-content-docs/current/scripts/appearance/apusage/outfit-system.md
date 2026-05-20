---
title: Kombin Sistemi
sidebar_position: 5
---

# Kombin Sistemi

Kombin sistemi oyuncuların:

- kombin kaydetmesini
- kombin yüklemesini
- kombin silmesini
- kombin önizlemesini
- kombin paylaşmasını
- appearance durumlarını senkronize etmesini

sağlar.

Sistem tam appearance kayıtlarından bağımsız çalışır.

---

# Kombin Amacı

Kombinler şunları saklamak için tasarlanmıştır:

```text
clothing
props
accessories
````

şunları değiştirmeden çalışır:

```text
face features
head blend
hair
overlays
tattoos
```

Bu yapı oyuncuların karakter kimlik verilerini koruyarak kıyafet değiştirmesini sağlar.

---

# Kaydedilen Kombin Verileri

Kombinler dahili olarak şunları saklar:

```text
components
props
model
```

Örnek veritabanı alanları:

```text
props
components
```

şu tablo içerisinde bulunur:

```text
player_outfits
```

---

# Kombin İşleyişi

Tipik işleyiş:

```text
1. Kombin menüsünü aç
2. Kombin kaydet
3. Daha sonra kombin yükle
4. Gerekirse kombin sil
```

---

# Kombin Kaydetme

Bir kombin kaydedildiğinde:

```text
1. Mevcut kıyafet durumu toplanır
2. Component'ler ayrıştırılır
3. Prop'lar ayrıştırılır
4. Kombin verisi kaydedilir
5. Kayıt eventi tetiklenir
```

---

# Kombin Yükleme

Bir kombin yüklendiğinde:

```text
1. Kombin verisi alınır
2. Component'ler yeniden oluşturulur
3. Prop'lar yeniden oluşturulur
4. Appearance senkronizasyonu çalıştırılır
```

Sistem ped appearance yapısını otomatik olarak yeniler.

---

# Kombin Silme

Oyuncular kombinleri doğrudan UI üzerinden silebilir.

Silme işleyişi:

```text
1. Onay penceresi açılır
2. Kombin kaydı kaldırılır
3. Silme eventi tetiklenir
```

---

# Kombin Onay UI Sistemi

Resource dahili onay pencereleri içerir.

Örnek:

```lua
delete_confirm = {
    title = "DANGER!",
    description = "Saved outfit will be deleted permanently.",
    confirm = "Delete",
    cancel = "Cancel"
}
```

---

# Kombin ID Yapısı

Her kombin benzersiz bir kimlik içerir.

Örnek alan:

```text
outfitId
```

Bu yapı şunları sağlar:

* kombin paylaşımı
* harici sistemler
* senkronizasyon
* kod sistemleri

---

# Kombin Kodları

Opsiyonel kombin kod desteği şu tablo üzerinden sağlanır:

```text
player_outfit_codes
```

Bu yapı şunlar için kullanılabilir:

* kombin paylaşımı
* topluluk presetleri
* içe aktarma sistemleri
* harici kombin sistemleri

sunucu yapısına bağlı olarak değişebilir.

---

# Freemode Desteği

Tam kombin uyumluluğu şu modellerde önerilir:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Bu modeller GTA kıyafet sisteminin tamamını destekler.

---

# Custom Ped Desteği

Custom/addon ped desteği şu yapıya bağlıdır:

```text
peddata
```

Bazı addon pedler aşağıdaki sistemleri tam desteklemeyebilir:

* component sistemleri
* prop sistemleri
* kıyafet yeniden oluşturma işlemleri

ped yapısına bağlı olarak değişebilir.

---

# Kombin Senkronizasyonu

Sistem kombin yüklendikten sonra dahili olarak şunları senkronize eder:

```text
components
props
peddata
```

Amaç:

* desync problemlerini azaltmak
* appearance yapısını yeniden oluşturmak
* kıyafet durumlarını yenilemek

---

# Kombin Eventleri

Resource kombin ile ilgili eventler sağlar.

Örnekler:

```lua
sendEvent('system:OnOutfitSave')
sendEvent('system:OnOutfitDelete')
```

Şunlar için kullanışlıdır:

* log sistemleri
* gardırop sistemleri
* Discord entegrasyonları
* harici senkronizasyon sistemleri

---

# Kombin Limitleri

Kombin limitleri sunucu mantığına bağlı olarak harici şekilde kontrol edilebilir.

Örnekler:

```text
VIP kısıtlamaları
meslek tabanlı limitler
veritabanı limitleri
özel monetizasyon sistemleri
```

---

# Evrensel Yapı

Kombin sistemi özellikle hafif bir yapı kullanır.

Amaç:

```text
uyumluluk
kolay geçiş süreçleri
framework bağımsızlığı
basit senkronizasyon
```

---

# Önerilen İşleyiş

Önerilen oyuncu işleyişi:

```text
1. Appearance özelleştir
2. Kombin kaydet
3. Gerektiğinde yükle
4. Kullanılmayan kombinleri sil
```

---

# Geliştirici Notları

Tam appearance kayıtlarının aksine kombinler bilinçli olarak şunları saklamaz:

```text
head blend
face features
hair
tattoos
```

Bu yapı kıyafet değişimleri sırasında karakter kimliğinin üzerine yazılmasını engeller.
