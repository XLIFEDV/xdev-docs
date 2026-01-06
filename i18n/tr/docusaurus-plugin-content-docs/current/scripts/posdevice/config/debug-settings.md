---
title: Hata Ayıklama Ayarları
sidebar_position: 3
---

Debug modunun ve başlangıç (startup) loglama davranışının kontrol edilmesini sağlar.

## Debug ne zaman açılmalıdır?

Aşağıdaki durumlarda debug modunu açmanız önerilir:

- Event’lerin doğru şekilde tetiklenip tetiklenmediğini doğrulamak
- Client / server durum geçişlerini kontrol etmek
- Bir oturumun neden açılmadığını veya kapanmadığını tespit etmek
- UI durum güncellemelerini takip etmek (payment / menu / history)

:::warning
Canlı (production) bir sunucuda ayrıntılı (verbose) debug modu açık bırakılırsa loglar aşırı derecede artabilir.  
Bu nedenle debug modunu yalnızca test sırasında ve geçici olarak etkinleştirmeniz önerilir.
:::
