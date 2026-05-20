---
title: Dövme Menüsü
sidebar_position: 4
---

# Dövme Menüsü

Dövme menüsü, XDEV Appearance içerisindeki tüm dövme işlemlerini yönetir.

Bu sistem şunları destekler:

- dövme önizleme sistemi
- dövme opaklığı
- dövme kategorileri
- dövme arama sistemi
- dövme senkronizasyonu
- dövme yeniden oluşturma sistemi

---

# Freemode Gereksinimi

Dövme sistemi freemode modellerini gerektirir:

```text
mp_m_freemode_01
mp_f_freemode_01
````

Custom/addon pedler GTA overlay dövmelerini düzgün desteklemeyebilir.

---

# Dövme Bölgeleri

Desteklenen dövme bölgeleri:

```text
ZONE_HEAD
ZONE_TORSO
ZONE_LEFT_ARM
ZONE_RIGHT_ARM
ZONE_LEFT_LEG
ZONE_RIGHT_LEG
```

Bu bölgeler şunlar için kullanılır:

* filtreleme
* organizasyon
* yeniden oluşturma işlemleri
* senkronizasyon

---

# Dövme Kategorileri

UI sistemi dövmeleri otomatik olarak bölgelere göre gruplar.

Örnek işleyiş:

```text
1. Bölge seç
2. Dövmeleri görüntüle
3. Dövmeyi önizle
4. Opaklığı ayarla
5. Appearance kaydet
```

---

# Canlı Önizleme Sistemi

Dövme önizlemeleri seçim sırasında anlık olarak uygulanır.

Sistem dahili olarak:

```text
1. Overlay sistemlerini temizler
2. Aktif dövmeleri yeniden oluşturur
3. Önizleme dövmesini uygular
4. Opaklığı günceller
```

Bu yapı doğru gerçek zamanlı önizleme sağlar.

---

# Dövme Arama Sistemi

Dövme menüsü bir arama/filtreleme sistemi içerir.

Desteklenen arama hedefleri:

```text
label
name
```

Örnek:

```text
Pirate Skull
TAT_BB_021
```

Bu yapı büyük dövme koleksiyonlarında gezinmeyi kolaylaştırır.

---

# Opaklık Desteği

Dövme sistemi ayarlanabilir opaklık desteği sunar.

Dahili aralık:

```text
0.0 -> 1.0
```

UI sistemleri dahili olarak:

```text
0 -> 100
```

gösterebilir ve değerleri otomatik olarak normalize eder.

---

# Dövme Kayıt Yapısı

Kaydedilmiş dövme örneği:

```lua
tattoos = {
    ZONE_HEAD = {
        {
            name = "TAT_BB_021",
            opacity = 0.4
        }
    }
}
```

---

# Dahili Dövme İşleyişi

Dövmeler uygulandığında:

```text
1. Mevcut overlay sistemleri temizlenir
2. Kaydedilmiş dövmeler yeniden oluşturulur
3. Dövme hash değerleri çözülür
4. Overlay sistemleri uygulanır
5. Opaklık değerleri senkronize edilir
```

---

# Dövme Yenileme Sistemi

Resource tam kapsamlı bir dövme yenileme sistemi içerir.

Bu sistem şunlardan sonra kullanılır:

```text
ped yeniden yüklemeleri
appearance kayıtları
ped değişimleri
menü kapatmaları
reconnect işlemleri
```

Amaç:

* overlay kaybını önlemek
* desync problemlerini önlemek
* dövme durumlarını geri yüklemek

---

# Kayıt İşleyişi

Dövmeler kaydedildiğinde:

```text
1. Dövme durumu toplanır
2. Opaklık değerleri normalize edilir
3. Dövme yapısı senkronize edilir
4. Veritabanı kaydı tetiklenir
```

---

# İptal İşleyişi

Değişiklikler iptal edildiğinde:

```text
önceki dövme durumu geri yüklenir
```

Şunlar dahil:

* aktif dövmeler
* opaklık değerleri
* bölge verileri

---

# Uyumluluk Desteği

Dövme sistemi şu yapılar için uyumluluk süreçlerini destekler:

* Illenium Appearance
* eski dövme yapıları
* basitleştirilmiş dövme formatları

Tüm işlemler dahili dönüştürücüler üzerinden çalışır.

---

# Illenium Uyumlu Yapı

Örnek uyumlu yapı:

```lua
{
    collection = "mpbeach_overlays",
    name = "TAT_BB_021",
    label = "Pirate Skull",
    zone = "ZONE_HEAD",
    hashMale = "MP_Bea_M_Head_000",
    hashFemale = "",
    opacity = 0.6
}
```

---

# XDEV Dahili Yapısı

XDEV dahili tarafta dövmeleri daha basitleştirilmiş yapılar üzerinden de yeniden oluşturabilir.

Örnek:

```lua
{
    value = "TAT_BB_021",
    opacity = 35
}
```

Bu yapı senkronizasyon aşamasına bağlı olarak değişebilir.

---

# Senkronizasyon Notları

Sistem özellikle şu yapıları birbirinden ayırır:

```text
skin
tattoo
peddata
```

Bu mimari şu durumlarda dövme yeniden oluşturma güvenilirliğini artırır:

* model değişimleri
* reconnect işlemleri
* menü yeniden oluşturma işlemleri
* uyumluluk dönüştürmeleri

---

# Yaygın Desync Sebepleri

Tipik dövme desync sebepleri:

```text
freemode olmayan pedler
overlay temizleme işlemleri
eksik yeniden oluşturma işlemleri
harici appearance sistemleri
önbelleğe alınmış appearance durumları
```

Yenileme sistemi özellikle bu problemleri azaltmak için geliştirilmiştir.

---

# Önerilen İşleyiş

Önerilen oyuncu işleyişi:

```text
1. Dövme menüsünü aç
2. Bölge seç
3. Dövme ara/seç
4. Opaklığı ayarla
5. Dövmeyi önizle
6. Kaydet veya iptal et
```

---

# Geliştirici Notları

Birçok dövme sisteminin aksine XDEV, dövmeleri kıyafet senkronizasyonundan bağımsız şekilde yeniden oluşturur.

Amaç:

```text
daha iyi overlay kararlılığı
daha temiz yeniden oluşturma mantığı
uyumluluk desteği
ped senkronizasyon güvenilirliği
```