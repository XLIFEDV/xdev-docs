---
title: Görsel Kontroller
sidebar_position: 3
---

# Görsel Kontroller

Freecam, kameranın nasıl davrandığını ve sahnenin görsel olarak nasıl işlendiğini ayarlamaya olanak sağlayan birden fazla **görsel kamera kontrol sistemi** sunar.

Bu kontroller UI üzerinden erişilebilir ve `Config.UI.access` ayarları ile yapılandırılabilir.

Görsel kontroller, kayıt alırken veya screenshot çekerken **sinematik esneklik** sağlamak amacıyla tasarlanmıştır.

---

# Hareket Hızı

Movement speed ayarı, kameranın sahnede ne kadar hızlı hareket edeceğini belirler.

Bu değer, sistem yapılandırmasında tanımlanan movement multiplier’ları ile birlikte çalışır.

Hareket hızı şu alanları etkiler:

- ileri hareket
- geri hareket
- dikey hareket
- yatay hareket

Kamera aktifken UI üzerinden dinamik olarak değiştirilebilir.

---

# Dönüş Hızı

Rotation speed, kameranın mouse hareketlerine ne kadar hızlı tepki vereceğini belirler.

Yüksek değerler daha hızlı dönüş sağlarken, düşük değerler daha hassas ve sinematik kontrol sunar.

Bu ayar özellikle şu durumlar için kullanışlıdır:

- cinematic recording
- hassas kamera konumlandırma
- hızlı kamera hareketleri

---

# Shift Boost

Shift boost, **Shift tuşu** basılı tutulduğunda kamera hareket hızını geçici olarak artırır.

Bu sayede kullanıcılar movement speed ayarını kalıcı olarak değiştirmeden kamerayı hızlıca konumlandırabilir.

Kullanım senaryoları:

- kamerayı hızlıca yeniden konumlandırma
- farklı sahneler arasında geçiş
- kurulum sırasında hızlı hareket

---

# Depth of Field (DOF)

Depth of Field (DOF), kameranın **odak bulanıklığı (focus blur)** efekti oluşturmasını sağlar.

Bu sayede foreground ve background arasında sinematik bir ayrım oluşturulur.

DOF sistemi şu ayarları içerir:

- near focus distance
- far focus distance
- blur strength

Bu ayarlar sahnedeki ana objeyi vurgulamak için kullanılır.

---

# Motion Blur

Motion blur, kamera hızlı hareket ettiğinde oluşan bulanıklık efektini simüle eder.

Bu efekt, kamera geçişlerini daha akıcı göstererek sinematik kayıt kalitesini artırır.

Motion blur UI üzerinden açılıp kapatılabilir.

---

# Sinematik Mod

Cinema mode, kameranın davranışını sinematik kayıtlar için optimize eder.

Aktif edildiğinde kamera hareketleri daha yumuşak ve kontrollü hale gelir.

Genellikle şu durumlarda kullanılır:

- video kayıtları
- sinematik sahne çekimleri
- trailer veya tanıtım içerikleri

---

# Özet

Visual Controls, kullanıcıların kamera davranışını ve sinematik parametreleri gerçek zamanlı olarak ayarlamasını sağlar.

Bu kontroller sayesinde içerik üreticileri:

- cinematic recording yapabilir
- screenshot alabilir
- sahne kompozisyonu oluşturabilir
- görsel hikaye anlatımı geliştirebilir

Bu sistem, Freecam’i güçlü bir sinematik araç haline getirir.