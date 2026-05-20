---
title: Üniforma Sistemi
sidebar_position: 6
---

# Üniforma Sistemi

Üniforma sistemi sunucuların:

- iş üniformaları
- çete üniformaları
- fraksiyon kombinleri
- departman kıyafetleri
- kısıtlanmış kombin presetleri

sunabilmesini sağlar.

Tüm sistem kıyafet odaları ve yapılandırılmış kombin grupları üzerinden çalışır.

---

# Sistem Amacı

Sistem özellikle şu roleplay odaklı yapılar için tasarlanmıştır:

```text
polis departmanları
EMS
mekanikler
çeteler
organizasyonlar
güvenlik fraksiyonları
````

Üniformalar, kişisel kayıtlı kombinlerden ayrı şekilde yönetilir.

---

# Üniforma İşleyişi

Tipik işleyiş:

```text
1. Kıyafet odasına gir
2. Üniforma listesini aç
3. Üniforma seç
4. Kombin uygulanır
5. Appearance senkronize edilir
```

---

# Kıyafet Odası Entegrasyonu

Üniformalar şu dosya üzerinden yüklenir:

```text
shared/data/clothing_rooms.lua
```

Sistem aşağıdakileri doğrular:

* oyuncu cinsiyeti
* oyuncu mesleği
* oyuncu çetesi
* oyuncu rütbesi
* oda erişimi

ve ardından üniforma kullanımına izin verir.

---

# Kombin Kaynağı

Üniformalar şu dosya içerisinde tanımlanır:

```text
shared/data/outfits.lua
```

Örnek yapı:

```lua
Config.Outfits = {
    ['police'] = {
        ['male'] = {
            [0] = {
                {
                    outfitLabel = 'Cadet Uniform',
                    outfitData = {}
                }
            }
        }
    }
}
```

---

# Rütbe Desteği

Üniformalar rütbe tabanlı yapıları destekler.

Örnek:

```lua
[0] = { ... }
[1] = { ... }
[2] = { ... }
```

Bu yapı şunları sağlar:

* rütbe üniformaları
* ilerleme sistemleri
* departman hiyerarşi kıyafetleri

---

# Cinsiyet Desteği

Üniformalar aşağıdaki yapılar için ayrı yapılandırmaları destekler:

```text
male
female
```

Her cinsiyet tamamen farklı kıyafet değerleri kullanabilir.

---

# Parçalı Üniformalar

Üniformaların tüm kıyafet kategorilerini içermesi gerekmez.

Örnek:

```lua
outfitData = {
    ['vest'] = {item = 10, texture = 0}
}
```

Yalnızca belirtilen kategoriler değiştirilir.

Şunlar için kullanışlıdır:

* taktik yelekler
* montlar
* aksesuarlar
* roleplay ekipmanları

---

# Prop Yönetimi

Prop sistemleri component sistemlerinden ayrı yönetilir.

Örnek:

```lua
['hat'] = {item = -1, texture = 0}
```

Şu kullanım:

```lua
item = -1
```

prop'u tamamen kaldırır.

---

# Senkronizasyon İşleyişi

Üniforma uygulandığında:

```text
1. Mevcut appearance okunur
2. Üniforma değerleri birleştirilir
3. Component'ler yeniden oluşturulur
4. Prop'lar yeniden oluşturulur
5. Appearance yenilemesi çalıştırılır
```

Bu yapı gereksiz appearance sıfırlamalarını engeller.

---

# Appearance Koruması

Üniforma sistemi bilinçli olarak şunları değiştirmekten kaçınır:

```text
head blend
yüz özellikleri
dövmeler
saç
```

özellikle yapılandırılmadığı sürece.

Bu sayede oyuncular üniforma değiştirirken karakter kimliklerini koruyabilir.

---

# Clothes-Off Uyumluluğu

Üniforma sistemi clothes-off sistemiyle doğrudan entegre çalışır.

Fallback durumları şu yapıları kullanabilir:

```text
kombin fallback değerleri
```

ve yapılandırılmış kombin verileri üzerinden çalışır.

---

# Kısıtlı Erişim

Üniformalar şu yapılar kullanılarak sınırlandırılabilir:

```lua
requiredJob
isGang
gender
```

Örnekler:

```lua
requiredJob = 'police'
```

veya:

```lua
requiredJob = 'ballas',
isGang = true
```

---

# Herkese Açık Üniforma Odaları

Eğer:

```lua
requiredJob = nil
```

olarak ayarlanırsa kıyafet odası herkese açık hale gelir.

Herhangi bir erişim kısıtlaması uygulanmaz.

---

# Önerilen Kullanım Alanları

Önerilen kullanım alanları:

```text
polis
ambulans
mekanikler
çeteler
güvenlik
staff üniformaları
```

---

# Dahili Event Sistemleri

Üniforma uygulama işlemleri dahili olarak senkronizasyon eventlerini tetikleyebilir.

Şunlar için kullanışlıdır:

* log sistemleri
* inventory sistemleri
* silah sistemleri
* duty sistemleri

sunucu yapısına bağlı olarak kullanılabilir.

---

# Framework Bağımsızlığı

Üniforma sistemi dahili tarafta özellikle framework bağımlı mantıklardan kaçınır.

Amaç:

```text
daha kolay entegrasyonlar
özel yetki sistemleri
çete desteği
standalone uyumluluğu
```

---

# Önerilen İşleyiş

Önerilen kurulum süreci:

```text
1. Kıyafet odası oluştur
2. Kısıtlamaları yapılandır
3. Kombin gruplarını yapılandır
4. Rütbeleri yapılandır
5. Senkronizasyonu test et
```

---

# Geliştirici Notları

Birçok appearance sisteminin aksine XDEV şu yapıları birbirinden ayırır:

```text
üniforma mantığı
kombin mantığı
appearance mantığı
```

Bu mimari şunları geliştirir:

* senkronizasyon güvenilirliği
* modülerlik
* uyumluluk desteği
* entegrasyon esnekliği