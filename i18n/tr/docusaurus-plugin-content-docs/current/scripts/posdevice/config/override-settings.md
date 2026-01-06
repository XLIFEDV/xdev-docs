---
title: Üzerine yazma ayarları
sidebar_position: 5
description: İstemci (client) ve sunucu (server) tarafındaki kontroller için gelişmiş override ayarları.
---

Normal doğrulama (validation) kurallarını **bypass eden** veya **yeniden düzenleyen** gelişmiş anahtarlardır.

## Override ayarları neden vardır?

Override’lar aşağıdaki durumlarda kullanışlıdır:

- Sunucuda **özel framework davranışları** varsa (standart dışı kontroller)
- Belirli bir ortam için **katı bir kuralı geçici olarak devre dışı bırakmak** gerekiyorsa
- Özel koşullar gerektiren **harici script entegrasyonları** yapılıyorsa

## En iyi kullanım pratikleri

- Override ayarlarını **varsayılan olarak kapalı** tutun
- Güvenlik etkilerini **net ve açık şekilde belgeleyin**
- Global bypass yerine **hedefe yönelik override** kullanmayı tercih edin

:::danger
Override ayarları yanlış kullanıldığında güvenliği azaltabilir.
Hangi kontrollerin neden bypass edildiği mutlaka belgelenmelidir.
:::
