---
title: Kurulum
description: POSDEVICE scriptinin kurulumu ve yapılandırılması
sidebar_position: 1
---

## Kurulum

Bu sayfa, **POSDEVICE** scriptinin sunucunuza doğru şekilde nasıl kurulacağını açıklar.

Yapılandırma veya çalışma zamanı (runtime) sorunları yaşamamak için her adımı dikkatlice takip ettiğinizden emin olun.

---

## Gereksinimler

POSDEVICE kurulumu yapmadan önce sunucunuzun aşağıdaki gereksinimleri karşıladığından emin olun:

- Çalışır durumda bir FiveM sunucusu
- Desteklenen bir framework (kurulumunuza bağlı olarak QB / ESX)
- `qb-target` veya uyumlu bir hedefleme sistemi (opsiyonel ancak önerilir)
- Server ve client dosyalarına erişim yetkisi

---

## Resource Kurulumu

1. Resource’u sunucunuzun `resources` klasörüne yerleştirin:

```text
resources/
└─ [xdev]/
   └─ xdev_posdevice/
````

2. Klasör adının **birebir** bu şekilde olduğundan emin olun.
   Dokümantasyonda özellikle belirtilmedikçe resource adını değiştirmeyin.

---

## Server Yapılandırması

Resource’u `server.cfg` dosyanıza ekleyin:

```cfg
ensure xdev_posdevice
```

Scriptin, bağımlılıklarından **sonra** başlatıldığından emin olun.

---

## Bağımlılıklar

Eğer `qb-target` kullanıyorsanız, POSDEVICE’ten önce başlatıldığından emin olun:

```cfg
ensure qb-target
ensure xdev_posdevice
```

Farklı bir hedefleme sistemi kullanılıyorsa, entegrasyon manuel olarak yapılmalıdır.

---

## İlk Çalıştırma

Resource’u ekledikten sonra:

1. Sunucuyu yeniden başlatın
2. Server konsolunu hata veya uyarılar için kontrol edin
3. Resource’un sorunsuz şekilde başlatıldığını doğrulayın

Script başlatılamazsa aşağıdakileri kontrol edin:

* Klasör yapısı
* Bağımlılıkların başlatılma sırası
* Yapılandırma dosyaları

---

## Doğrulama

Kurulumun başarılı olduğunu doğrulamak için:

* Sunucuya giriş yapın
* POS Device’ı yapılandırılmış yöntemle tetikleyin
* Arayüzün doğru şekilde açıldığını kontrol edin
* Konsolda herhangi bir hata olmadığından emin olun

---

## Yaygın Kurulum Hataları

* Resource klasörünün yeniden adlandırılması
* Scriptin bağımlılıklarından önce başlatılması
* Gerekli framework export’larının eksik olması
* Dosyalar düzenlendikten sonra sunucunun yeniden başlatılmaması

---

## Sonraki Adımlar

Kurulumdan sonra aşağıdaki bölümlerle devam edebilirsiniz:

* Yapılandırma
* Kullanım
* Entegrasyonlar (`qb-target`, özel sistemler)

Bu konular ayrı sayfalarda detaylı olarak dokümante edilmiştir.
