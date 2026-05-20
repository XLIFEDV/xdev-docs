---
title: Mağaza Yapılandırması
sidebar_position: 8
---

# Mağaza Yapılandırması

Mağaza konumları şu dosya içerisinde yapılandırılır:

```text
shared/data/stores.lua
````

Bu sistem aşağıdaki etkileşim konumlarını kontrol eder:

* kıyafet mağazaları
* barber mağazaları
* cerrah konumları
* dövme mağazaları

---

# Mağaza Sistemi Mantığı

Mağaza sistemi şu yapıda tasarlanmıştır:

* hafif
* framework bağımsız
* kolay genişletilebilir
* birden fazla etkileşim sistemiyle uyumlu

Resource dahili olarak şunları yönetir:

* marker oluşturma
* etkileşim kontrolleri
* menü açma işlemleri
* mesafe doğrulama

---

# Mağaza Kategorileri

Desteklenen mağaza tipleri:

```text
clothing
barber
surgeon
tattoo
```

Her kategori birden fazla konum içerebilir.

---

# Temel Yapı

Örnek yapı:

```lua
Config.Stores = {
    clothing = {
        {
            coords = vector3(72.3, -1399.1, 29.3)
        }
    }
}
```

---

# Koordinatlar

Her mağaza koordinat gerektirir.

Örnek:

```lua
coords = vector3(x, y, z)
```

Bu koordinatlar şunları belirler:

* etkileşim pozisyonu
* marker pozisyonu
* menü aktivasyon alanı

---

# Birden Fazla Konum

Her kategori sınırsız konum destekler.

Örnek:

```lua
Config.Stores.clothing = {
    {
        coords = vector3(72.3, -1399.1, 29.3)
    },

    {
        coords = vector3(1693.2, 4822.1, 42.0)
    }
}
```

---

# Kıyafet Mağazaları

Kıyafet mağazaları şunlara erişim sağlar:

* kıyafet özelleştirme
* props
* aksesuarlar
* kombin sistemleri

Menü tipi:

```text
clothing
```

---

# Barber Mağazaları

Barber mağazaları şunlara erişim sağlar:

* saç
* sakal
* overlay sistemleri
* makyaj
* yüz overlay sistemleri

Menü tipi:

```text
barber
```

---

# Cerrah Mağazaları

Cerrah konumları şunlara erişim sağlar:

* yüz yapısı düzenleme
* head blend düzenleme
* yüz özellikleri
* göz özelleştirmeleri

Menü tipi:

```text
surgeon
```

---

# Dövme Mağazaları

Dövme konumları şunlara erişim sağlar:

* dövme kategorileri
* dövme önizlemeleri
* dövme opaklık düzenleme
* dövme kaydetme

Menü tipi:

```text
tattoo
```

---

# Marker Sistemi

Resource marker oluşturma işlemlerini dahili olarak yönetir.

Kullanılan implementasyona bağlı olarak mağazalar şunları gösterebilir:

* marker sistemleri
* 3D yazılar
* prompt sistemleri
* etkileşim ipuçları

Geliştiriciler isterse bu davranışı override edebilir.

---

# Mesafe Doğrulama

Resource menü açılmadan önce etkileşim mesafesini doğrular.

Amaç:

* uzaktan tetiklemeyi önlemek
* senkronizasyonu geliştirmek
* etkileşim tutarlılığını geliştirmek

---

# Framework Bağımsızlığı

Mağaza sistemi şu sistemleri zorunlu tutmaz:

* qb-target
* ox_target
* üçüncü taraf etkileşim sistemleri

Ancak geliştiriciler özel etkileşim sistemlerini manuel olarak entegre edebilir.

---

# Özel Etkileşim Sistemleri

Geliştiriciler şunları yapabilir:

* dahili marker sistemlerini devre dışı bırakmak
* etkileşim yönetimini değiştirmek
* target sistemlerini entegre etmek
* özel UI prompt sistemleri kullanmak

Override veya özel entegrasyon sistemleri üzerinden çalıştırılabilir.

---

# Önerilen İşleyiş

Önerilen kurulum:

```text
1. Mağaza pozisyonlarını yapılandır
2. Etkileşim mesafesini doğrula
3. Menü açılmasını doğrula
4. Ücret sistemini doğrula
5. Senkronizasyonu doğrula
```

---

# Geliştirici Notları

Mağaza sistemi bilinçli olarak framework bağımlı etkileşim mantıklarından kaçınır.

Bu yapı şunlarla daha kolay entegrasyon sağlar:

* standalone sunucular
* QBCore
* özel framework sistemleri
* target sistemleri
* özel etkileşim yöneticileri

```
```
