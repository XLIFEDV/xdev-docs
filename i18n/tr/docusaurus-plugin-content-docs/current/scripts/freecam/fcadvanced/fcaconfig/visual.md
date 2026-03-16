---
title: Görsel Kontroller
sidebar_position: 3
---

# Görsel Kontroller

Gelişmiş Serbest Kamera, kullanıcıların kameranın nasıl davranacağını ve sahnenin görsel olarak nasıl render edileceğini ayarlayabilmesini sağlayan birden fazla **görsel kamera kontrol sistemi** sunar.

Bu kontroller UI üzerinden erişilebilir ve `Config.UI.access` ayarları aracılığıyla yapılandırılabilir.

Görsel kontroller, kayıt alma veya ekran görüntüsü yakalama sırasında **sinematik esneklik** sağlamak için tasarlanmıştır.

---

# Hareket Hızı

Hareket hızı kontrolü, kullanıcıların kameranın sahne içerisinde ne kadar hızlı hareket edeceğini ayarlamasını sağlar.

Bu parametre, sistem yapılandırmasında tanımlanan movement multipliers ile birlikte çalışır.

Hareket hızı şu hareketleri etkiler:

- forward movement
- backward movement
- vertical movement
- lateral movement

Kamera aktifken UI üzerinden dinamik olarak ayarlanabilir.

---

# Dönüş Hızı

Dönüş hızı, kameranın mouse hareketlerine ne kadar hızlı tepki vereceğini belirler.

Daha yüksek değerler kameranın daha hızlı dönmesini sağlarken, daha düşük değerler daha hassas sinematik kontrol sunar.

Bu ayar şu durumlar arasında geçiş yaparken kullanışlıdır:

- cinematic recordings
- precise camera framing
- fast camera movement

---

# Shift Boost

Shift boost, **Shift tuşu basılı tutulduğunda** kamera hareket hızını geçici olarak artırır.

Bu özellik kullanıcıların hareket hızını kalıcı olarak değiştirmeden kamerayı hızlıca yeniden konumlandırmasını sağlar.

Yaygın kullanım senaryoları:

- kamerayı hızlıca yeniden konumlandırmak
- sahne içinde farklı noktalara hızlı geçiş yapmak
- sahne kurulumu sırasında kamera hareketini hızlandırmak

---

# Depth of Field (DOF)

Depth of Field, kameranın **focus blur** simülasyonu yapmasını sağlar ve ön plan ile arka plan arasında sinematik bir ayrım oluşturur.

DOF sistemi şu ayarların yapılmasına izin verir:

- near focus distance
- far focus distance
- blur strength

Bu ayarlar sahnedeki ana objeyi vurgulamak ve daha sinematik bir kompozisyon oluşturmak için kullanılır.

---

# Motion Blur

Motion blur, kamera hızlı hareket ettiğinde oluşan hareket bulanıklığını simüle eder.

Bu efekt, kamera geçişlerinin daha akıcı görünmesini sağlayarak sinematik kayıtların kalitesini artırabilir.

Motion blur UI üzerinden aktif veya pasif hale getirilebilir.

---

# Cinema Mode

Cinema mode, kameranın davranışını sinematik kayıtlar için daha uygun hale getirir.

Aktif edildiğinde kamera hareketleri daha yumuşak olur ve kontrollü sinematik çekimler için daha uygun bir yapı sağlar.

Bu mod genellikle şu durumlarda kullanılır:

- recording videos
- capturing cinematic scenes
- creating trailers or promotional content

---

# Özet

Görsel Kontroller, kullanıcıların kamera davranışını ve sinematik parametreleri gerçek zamanlı olarak ayarlamasını sağlar.

Bu kontroller içerik üreticilerin kamerayı farklı içerik türleri için ince ayar yapmasına yardımcı olur:

- cinematic recordings
- screenshots
- scene composition
- visual storytelling