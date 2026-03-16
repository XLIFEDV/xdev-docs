---
title: Görünürlük Kontrolü
sidebar_position: 5
---

## Overview

Görünürlük Kontrolü sistemi, kameranın oyuncunun artık render edilmeyeceği veya görünür olmayacağı konumlara hareket etmesini engeller.

Bu koruma, kameranın istemeden duvarların arkasına, geometri içine veya oyuncu varlığının oyun render sistemi tarafından görünmediği pozisyonlara gitmesini önler.

Bu sayede kayıt alırken, ekran görüntüsü çekerken veya sinematik kamera kullanırken görsel tutarlılık korunur.

---

## Configuration

```lua
Config.System.VisibilityGuard = true
````

### Description

| Option          | Type    | Default | Description                                                                                      |
| --------------- | ------- | ------- | ------------------------------------------------------------------------------------------------ |
| VisibilityGuard | boolean | true    | Kameranın oyuncunun render edilmediği veya görünür olmadığı konumlara hareket etmesini engeller. |

---

## Behavior

When enabled:

* Kamera hareketi yeni konum uygulanmadan önce doğrulanır
* Yeni kamera konumu oyuncu varlığını gizleyecekse hareket reddedilir
* Kameranın duvarların arkasına veya harita geometrisinin içine girmesi engellenir

When disabled:

* Kamera görünürlük kontrolü olmadan serbestçe hareket edebilir