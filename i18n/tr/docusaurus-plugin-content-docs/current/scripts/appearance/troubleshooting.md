---
title: Sorun Giderme
sidebar_position: 99
---

# Sorun Giderme

Bu bölüm; yaygın problemleri, senkronizasyon sorunlarını, geçiş problemlerini ve hata ayıklama süreçlerini kapsar.

XDEV Appearance sistemi modüler ve uyumluluk odaklı olacak şekilde tasarlanmıştır, ancak görünüm sistemleri doğal olarak birçok farklı parçadan oluşur:

- pedler
- overlay sistemleri
- dövmeler
- kıyafetler
- senkronizasyon
- framework entegrasyonları

---

# Dövmeler Görünmüyor

## Problem

```text
Dövmeler düzgün kaydediliyor ancak ped üzerinde görünmüyor.
````

---

## Yaygın Sebepler

Tipik nedenler:

```text
freemode olmayan ped kullanımı
overlay yeniden oluşturma hatası
appearance önbellek çakışması
harici appearance resource çakışması
```

---

## Önerilen Kontroller

Şunları doğrulayın:

```text
model == mp_m_freemode_01
model == mp_f_freemode_01
```

çünkü GTA dövme sistemi yalnızca freemode pedlerde düzgün çalışır.

---

## Yenileme Süreci

Resource içerisinde dahili dövme yeniden oluşturma sistemleri bulunmaktadır.

Dövmeler aşağıdaki işlemlerden sonra kayboluyorsa:

```text
menü kapatma
ped yeniden yükleme
resource yeniden başlatma
```

yenileme mantığının düzgün çalıştığını doğrulayın.

---

# Harici Menüler Sonrası Dövmeler Kayboluyor

## Problem

```text
Harici appearance menüleri dövmeleri siliyor veya üzerine yazıyor.
```

---

## Sebep

Bazı appearance resource'ları appearance durumlarını önbelleğe alır ve menü kapandıktan sonra mevcut overlay verilerini üzerine yazar.

Bu durum özellikle şuralarda yaygındır:

```text
appearance yeniden oluşturma işlemleri
önbelleğe alınmış menü durumları
eski senkronizasyon sistemleri
```

---

## Öneri

Şunları kullanın:

```text
yeniden yükleme süreçleri
dövme yeniden oluşturma işlemleri
appearance senkronizasyonu
```

harici menü etkileşimlerinden sonra çalıştırılmalıdır.

---

# Prop'lar Yüklenmiyor

## Problem

```text
Şapka, gözlük, saat veya aksesuarlar kayboluyor.
```

---

## Yaygın Sebepler

Tipik nedenler:

```text
geçersiz drawable değeri
geçersiz texture değeri
custom ped uyumsuzluğu
prop temizleme işlemi
```

---

## Hata Ayıklama

Şunu doğrulayın:

```lua
drawable ~= -1
```

bilerek prop kaldırılmıyorsa.

---

# Component'ler Uygulanmıyor

## Problem

```text
Kıyafet değişiklikleri kaydediliyor ancak görünmüyor.
```

---

## Yaygın Sebepler

Tipik nedenler:

```text
geçersiz drawable değeri
geçersiz texture değeri
custom ped uyumsuzluğu
component uyuşmazlığı
```

---

## Önerilen Doğrulama

Şunları doğrulayın:

```text
drawable mevcut
texture mevcut
ped component destekliyor
```

değerler uygulanmadan önce.

---

# Custom Ped Problemleri

## Problem

```text
Addon/custom pedler hatalı davranıyor.
```

---

## Sebep

Custom pedler aşağıdaki sistemleri desteklemeyebilir:

```text
overlay sistemleri
face blend sistemi
prop sistemleri
component sistemleri
dövme sistemleri
```

freemode pedler gibi çalışmayabilirler.

---

## Öneri

Addon/custom ped senkronizasyon süreçleri için:

```text
peddata
```

kullanın.

---

# Overlay Problemleri

## Problem

```text
Makyaj, allık, ruj veya sakal renkleri hatalı görünüyor.
```

---

## Sebep

Farklı GTA overlay sistemleri kendi içerisinde farklı renk paletleri kullanır.

Örnek:

```text
palette 1
palette 2
```

Bazı overlay sistemleri palette davranışına bağlı olarak farklı görünebilir.

---

# Benler / Çiller Renk Kullanmıyor

## Açıklama

Ben ve çil sistemleri genellikle aşağıdaki saç tipi renk paletlerini kullanmaz:

```text
sakal
kaş
makyaj
```

Genellikle yalnızca:

```text
stil
opaklık
```

değerleri önemlidir.

---

# Appearance Kaydedilmiyor

## Problem

```text
Değişiklikler önizlemede düzgün görünüyor ancak yeniden bağlanınca kayboluyor.
```

---

## Yaygın Sebepler

Tipik nedenler:

```text
veritabanı kayıt hatası
geçersiz JSON
SQL uyuşmazlığı
dönüştürme hatası
```

---

## Önerilen Kontroller

Şunları doğrulayın:

```text
playerskins tablosu
JSON encode işlemleri
SQL sütunları
converter mantığı
```

---

# SQL Hataları

## Problem

```text
oxmysql sorgu hataları
geçersiz syntax
```

---

## Yaygın Sebep

Tablolar veya JSON yapıları beklenen formatla uyuşmuyor olabilir.

Örnek problem:

```text
Lua tablosunun JSON encode edilmeden doğrudan SQL'e gönderilmesi
```

---

## Önerilen Çözüm

Yapısal verileri kaydetmeden önce her zaman encode edin:

```lua
json.encode(data)
```

---

# Restart Sonrası Appearance Sıfırlanıyor

## Problem

```text
Oyuncu appearance verisi reconnect veya resource restart sonrası sıfırlanıyor.
```

---

## Yaygın Sebepler

Tipik nedenler:

```text
eksik senkronizasyon
yeniden yükleme çakışması
harici appearance resource kullanımı
geçersiz kayıt yapısı
```

---

## Önerilen Süreç

Şunları doğrulayın:

```text
skin düzgün kaydediliyor
dövmeler düzgün yeniden oluşturuluyor
ped yeniden yükleme tetikleniyor
appearance senkronizasyonu çalışıyor
```

---

# Komutlar Çalışmıyor

## Problem

```text
Komutlar çalışmıyor.
```

---

## Önerilen Kontroller

Şunları doğrulayın:

```text
QBCore kurulu
yetki geçerli
komut aktif
```

şu yapı içerisinde:

```lua
Config.System.commands
```

---

# Menü Tuşları Takılı Kalıyor

## Problem

```text
Menü açıldıktan sonra Enter tuşu veya hotkey'ler istemsiz şekilde tetikleniyor.
```

---

## Sebep

UI odak değişimi sırasında tuşlar hala basılı kabul ediliyor olabilir.

---

## Önerilen Çözüm

Yapılandırılabilir gecikmeleri kullanın:

```lua
Config.UI.HotkeyDelay
```

ve etkileşim kabul edilmeden önce tuş bırakılma durumlarını doğrulayın.

---

# Dövme Opaklığı Hatalı Görünüyor

## Problem

```text
Opaklık değerleri çok güçlü veya çok zayıf görünüyor.
```

---

## Sebep

Bazı sistemler:

```text
0 -> 100
```

kullanırken bazıları:

```text
0.0 -> 1.0
```

kullanır.

Resource, yeniden oluşturma süreçlerinde bu değerleri dahili olarak normalize eder.

---

# Geçiş Problemleri

## Problem

```text
Eski appearance sistemleri XDEV Appearance ile çakışıyor.
```

---

## Önerilen Geçiş Süreci

Önerilen işlem sırası:

```text
1. Eski reload sistemlerini kapat
2. Eski dövme rebuild sistemlerini kapat
3. SQL yapısını doğrula
4. Uyumluluk eventlerini doğrula
5. Senkronizasyonu test et
```

---

# Hata Ayıklama Önerisi

Appearance problemlerini test ederken:

```text
önce freemode test et
harici resource olmadan test et
senkronizasyonu ayrı test et
```

addon/custom ped davranışlarını test etmeden önce bunları doğrulayın.

---

# Geliştirici Notları

Appearance sistemleri ciddi şekilde şu faktörlerden etkilenir:

```text
ped limitasyonları
GTA native sistemleri
harici resource'lar
önbelleğe alınmış durumlar
```

Çoğu görsel hata veritabanı probleminden değil, senkronizasyon problemlerinden kaynaklanır.

---

# Son Notlar

XDEV Appearance sistemi özellikle şu yapılar etrafında tasarlanmıştır:

```text
modülerlik
uyumluluk
yeniden oluşturma güvenilirliği
dönüştürme desteği
```

böylece büyük roleplay sunucularında uzun vadeli appearance senkronizasyon problemleri azaltılmış olur.
