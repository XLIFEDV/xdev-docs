---
title: Debug Ayarları
sidebar_position: 3
description: Debug modu ve başlangıç loglama yapılandırması.
---

Debug Ayarları, debug modunun ve başlangıç (startup) loglama davranışının kontrol edilmesini sağlar.

## Debug ne zaman açılmalıdır?

Aşağıdaki durumlarda debug modunu açmanız önerilir:

- Event’lerin doğru şekilde tetiklenip tetiklenmediğini doğrulamak
- Client / server durum geçişlerini kontrol etmek
- Bir oturumun neden açılmadığını veya kapanmadığını tespit etmek
- UI durum güncellemelerini takip etmek (payment / menu / history)

## Bu sayfada belgelenmesi önerilen ayarlar

Dokümantasyonda yer verebileceğiniz örnek debug ayarları:

- `Config.Debug.Enabled`
- `Config.Debug.LogStartup`
- `Config.Debug.VerboseEvents`
- `Config.Debug.PrintStateChanges`

> Bu ayarlar henüz mevcut olmasa bile, sisteminiz geliştikçe eklemek için bu sayfa ideal bir referans noktasıdır.

:::warning
Canlı (production) bir sunucuda ayrıntılı (verbose) debug modu açık bırakılırsa loglar aşırı derecede artabilir.  
Bu nedenle debug modunu yalnızca test sırasında ve geçici olarak etkinleştirmeniz önerilir.
:::
