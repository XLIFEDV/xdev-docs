---
title: Export Sistemleri
sidebar_position: 3
---

# Export Sistemleri

XDEV Appearance, harici entegrasyonları dahili resource mantığına doğrudan erişim gerektirmeden kolaylaştırmak için birden fazla export sistemi sunar.

Export sistemi şunlar için tasarlanmıştır:

- harici resource sistemleri
- framework köprüleri
- admin sistemleri
- özelleştirme araçları
- senkronizasyon işleyişleri
- modüler entegrasyonlar

---

# Export Mantığı

Birçok appearance sistemi işlevleri dahili event veya callback yapılarına sıkı şekilde bağlar.

XDEV bunun yerine tekrar kullanılabilir export sistemleri sunarak şunları geliştirir:

```text
modülerlik
uyumluluk
sürdürülebilirlik
geliştirici esnekliği
````

---

# Export Mimarisi

Export sistemleri şunları sağlamak için tasarlanmıştır:

```text
güvenli erişim
harici entegrasyonlar
resource iletişimi
appearance kontrolü
```

Korunan dosyaları düzenlemeden çalışır.

---

# startPlayerCustomization

Amaç:

```text
ilk karakter oluşturma işleyişini açmak
```

Örnek:

```lua
exports('startPlayerCustomization', function()

end)
```

---

# Kullanım Örneği

Örnek kullanım:

```lua
exports['xdev_appearance']:startPlayerCustomization()
```

---

# Dahili İşleyiş

Export dahili olarak şunları yapar:

```text
freemode modelini yükler
cinsiyeti algılar
appearance menüsünü açar
ilk karakter oluşturma durumunu başlatır
```

---

# Tipik Kullanım Alanları

Yaygın kullanım alanları:

```text
çoklu karakter sistemleri
spawn seçim sistemleri
kimlik sistemleri
kayıt sistemleri
```

---

# İlk Karakter Desteği

Export özellikle şunları desteklemek için geliştirilmiştir:

```text
ilk spawn işleyişleri
yeni oyuncu oluşturma
kimlik başlatma işlemleri
```

Doğrudan event erişimi gerektirmeden çalışır.

---

# Uyumluluk Desteği

Export doğal şekilde şu sistemlerle entegre çalışır:

```text
QBCore
özel multicharacter sistemleri
eski karakter sistemleri
```

Sunucu implementasyonuna bağlı olarak değişebilir.

---

# Event Uyumluluğu

Export sistemleri dahili olarak şunları tetikleyebilir:

```text
menü eventleri
ped senkronizasyonu
appearance yeniden oluşturma
```

Dahili event sistemi üzerinden çalışır.

---

# Ped Başlatma Sistemi

Export otomatik olarak şu modellerin yönetimini sağlar:

```text
mp_m_freemode_01
mp_f_freemode_01
```

Oyuncu cinsiyetine göre seçim yapılır.

---

# Resource Güvenliği

Export sistemleri bilinçli olarak doğrudan dahili yapıları dışarı açmaz.

Amaç:

```text
daha güvenli entegrasyonlar
güncelleme kararlılığı
daha az bağımlılık çakışması
```

---

# Önerilen Kullanım

Önerilen kullanım alanları:

```text
harici spawn sistemleri
kimlik kayıt sistemleri
yeni oyuncu onboarding sistemleri
```

---

# Gelecek Genişletmeleri

Export sistemi bilinçli olarak gelecekte genişletilebilecek şekilde tasarlanmıştır.

Potansiyel harici entegrasyonlar:

```text
appearance verisi alma
kombin yükleme
dövme yeniden oluşturma
önbellek yönetimi
ped senkronizasyonu
```

Sunucu ihtiyaçlarına bağlı olarak genişletilebilir.

---

# Entegrasyon Mantığı

XDEV export sistemleri bilinçli olarak şu yapılarda kalır:

```text
hafif
modüler
framework bağımsız
```

Amaç resource'lar arası iletişimi kolaylaştırmaktır.

---

# Geliştirici Notları

Mümkün olduğunda export sistemleri şu yöntemlere tercih edilmelidir:

```text
doğrudan event spoof işlemleri
dahili durum düzenlemeleri
korunan dosya değişiklikleri
```

Bu yapı şunları geliştirir:

* güncelleme uyumluluğu
* resource kararlılığı
* sürdürülebilirlik