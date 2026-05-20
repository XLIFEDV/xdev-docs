---
title: Kurulum
sidebar_position: 2
---

# Kurulum

Bu rehber, XDEV Appearance için tam kurulum sürecini açıklar.

Resource hem:

- sıfırdan kurulumları
- hali hazırda başka appearance sistemleri kullanan sunucuları

destekleyecek şekilde tasarlanmıştır.

---

# Gereksinimler

Gerekli bağımlılıklar:

- QBCore
- oxmysql
- ox_lib

Gerekli resource sıralaması:

```cfg
ensure oxmysql
ensure ox_lib
ensure qb-core
ensure xdev_appearance
````

---

# Resource Kurulumu

Resource'u sunucunuzun resources klasörüne yerleştirin:

```text
resources/[standalone]/xdev_appearance
```

Sunucu yapılandırmanıza resource'u ekleyin:

```cfg
ensure xdev_appearance
```

---

# SQL Kurulumu

Resource ile birlikte gelen SQL dosyasını içe aktarın.

SQL yapısı şunları destekler:

* sıfırdan kurulumlar
* mevcut Illenium veritabanları
* otomatik veritabanı genişletme sistemi

Kurulum sistemi gerekli olduğunda eksik sütunları otomatik olarak ekler.

Desteklenen genişletmeler:

* tattoo
* peddata
* active
* props
* components
* outfitId

---

# Önerilen Veritabanı Yapısı

Önerilen veritabanı karakter seti:

```text
utf8mb4
```

Önerilen depolama motoru:

```text
InnoDB
```

---

# Framework Yapılandırması

Resource varsayılan olarak QBCore için yapılandırılmıştır.

Uyumluluk event sistemleri şunlar için dahildir:

* qb-clothing
* illenium-appearance

Bu uyumluluk eventleri şu dosyada bulunur:

```text
escrow/client/compatibility.lua
```

---

# Ox Lib

Sistem dahili olarak ox_lib kullanır.

Resource başlamadan önce aşağıdaki satırın mevcut olduğundan emin olun:

```lua
@ox_lib/init.lua
```

Bu satır zaten fxmanifest içerisinde dahil edilmiştir.

---

# Escrow Yapısı

Resource kısmi escrow koruması kullanır.

Düzenlenebilir dosyalar:

```text
shared/*.lua
shared/language/*.lua
shared/data/*.lua
```

Korunan dosyalar:

```text
escrow/client/*
escrow/server/*
```

Bu yapı geliştiricilerin:

* config sistemlerini özelleştirmesine
* entegrasyon oluşturmasına
* sistemleri override etmesine
* dil dosyalarını düzenlemesine

izin verirken korunan dahili mantığın açığa çıkmasını engeller.

---

# İlk Başlatma

Resource başlatıldıktan sonra:

1. veritabanı tablolarının düzgün oluşturulduğunu doğrulayın
2. oxmysql hatası oluşmadığını doğrulayın
3. appearance menüsünün düzgün açıldığını doğrulayın
4. oyuncu skin verilerinin düzgün kaydedildiğini doğrulayın
5. dövme ve kombin sistemlerinin düzgün kaydedildiğini doğrulayın

---

# Önerilen Kontroller

Canlı kullanıma geçmeden önce şunları test edin:

* karakter oluşturma
* kıyafet kayıt/yükleme
* dövme kayıt/yükleme
* kombin kayıt/yükleme
* kombin paylaşım kodları
* reconnect sonrası veri kalıcılığı
* uyumluluk modu
* Illenium format modu
