---
title: Credit Card UI System
sidebar_position: 4
description: Müşteri ekranında hangi kredi kartı tasarımının gösterileceğini kontrol eder.
---

Credit Card UI System, müşteri ekranında görüntülenecek **kredi kartı tasarımını** kontrol eder.

## Yapılandırma

### Birden fazla kart tasarımı (rastgele seçim)

Bir tablo (table) içerisinde birden fazla değer tanımlarsanız, sistem POS cihazı **her açıldığında** bu tasarımlardan birini **rastgele** seçer.

```lua
Config.UI.CreditCards = {
  "blue",
  "purple",
  "dark"
}
````

**Davranış**

* Her açılışta → tek bir tasarım rastgele seçilir
* Arayüze çeşitlilik ve daha sürükleyici bir deneyim kazandırır

## Rastgele seçimi devre dışı bırakma

Eğer **sabit bir kart tasarımı** kullanmak istiyorsanız iki seçeneğiniz vardır:

### Seçenek A — Tek bir değeri tablo içinde tutmak

```lua
Config.UI.CreditCards = { "blue" }
```

### Seçenek B — Tek bir değeri doğrudan atamak

```lua
Config.UI.CreditCards = "blue"
```

**Notlar**

* Her iki yöntemde de her zaman **aynı kart tasarımı** görüntülenir.
* Sistem, değerin **tablo mu yoksa tekil bir değer mi** olduğunu otomatik olarak algılar.

```