---
title: Görünürlük Kontrolü
sidebar_position: 5
---

## Genel Bakış

Görünürlük Kontrolü sistemi, kameranın oyuncunun artık render edilmeyeceği veya görünür olmayacağı konumlara hareket etmesini engeller.

Bu koruma, kameranın istemeden duvarların arkasına, geometri içine veya oyuncu varlığının oyun render sistemi tarafından görünmediği pozisyonlara gitmesini önler.

Bu sayede kayıt alırken, ekran görüntüsü çekerken veya sinematik kamera kullanırken görsel tutarlılık korunur.

---

## Yapılandırma

```lua
Config.System.VisibilityGuard = true
````

### Açıklama

| Seçenek         | Tip     | Varsayılan | Açıklama                                                                                         |
| --------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------ |
| VisibilityGuard | boolean | true       | Kameranın oyuncunun render edilmediği veya görünür olmadığı konumlara hareket etmesini engeller. |

---

## Davranış

Etkin olduğunda:

* Kamera hareketi yeni konum uygulanmadan önce doğrulanır
* Yeni kamera konumu oyuncu varlığını gizleyecekse hareket reddedilir
* Kameranın duvarların arkasına veya harita geometrisinin içine girmesi engellenir

Devre dışı olduğunda:

* Kamera görünürlük kontrolü olmadan serbestçe hareket edebilir