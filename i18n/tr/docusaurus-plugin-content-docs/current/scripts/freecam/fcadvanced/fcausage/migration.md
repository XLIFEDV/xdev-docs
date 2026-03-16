---
title: Geçiş / Entegrasyon Notları
sidebar_position: 3
---

# Geçiş / Entegrasyon Notları

Gelişmiş Serbest Kamera, **Klasik Serbest Kamera'nın temel mimarisi ile tamamen uyumlu olacak şekilde** tasarlanmıştır.

Gelişmiş Serbest Kamera doğrudan Klasik Serbest Kamera altyapısı üzerine inşa edildiği için mevcut entegrasyonları taşımak genellikle oldukça kolaydır.

Çoğu configuration ayarı ve geliştirici iş akışı büyük değişiklikler gerektirmeden yeniden kullanılabilir.

---

# Klasik Serbest Kamera'dan Geçiş

Eğer halihazırda **Klasik Serbest Kamera** kullanıyorsanız, Gelişmiş Serbest Kamera'ya geçiş genellikle yalnızca birkaç küçük ayar gerektirir.

Temel kamera sistemi aynı kaldığı için:

- base movement behavior aynıdır
- core configuration yapısı korunur
- developer override sistemleri çalışmaya devam eder

Çoğu durumda geçiş işlemi yalnızca resource'u değiştirip gerekli configuration ayarlarını güncellemekten ibarettir.

---

# Configuration Uyumluluğu

Klasik Serbest Kamera'da kullanılan birçok configuration değeri Gelişmiş Serbest Kamera içerisinde de bulunmaktadır.

Bunlar şunları içerir:

- camera movement parameters
- zoom configuration
- distance limits
- camera activation settings
- override systems

Gelişmiş Serbest Kamera ayrıca şu sistemlerle ilgili yeni configuration bölümleri içerir:

- UI systems
- visual controls
- environment control
- PostFX ve camera effects
- settings persistence

Bu ek seçenekler **opsiyoneldir** ve temel kamera işleyişini etkilemez.

---

# Mevcut Sistemlerle Entegrasyon

Gelişmiş Serbest Kamera, override mimarisi sayesinde mevcut sunucu sistemleri ile entegre edilebilir.

Yaygın entegrasyon örnekleri:

- framework notifications
- screenshot tools
- custom camera logic
- player permission systems

Override sistemi geliştiricilerin core resource dosyasını değiştirmeden Gelişmiş Serbest Kamera'yı mevcut altyapılarına bağlamasına olanak tanır.

---

# Önerilen Geçiş Adımları

Klasik Serbest Kamera'dan geçiş yaparken şu adımlar önerilir:

1. Gelişmiş Serbest Kamera resource'unu kurun.
2. Yeni configuration bölümlerini inceleyin.
3. Mevcut override ve entegrasyonları kontrol edin.
4. Gerekliyse ek UI veya görsel özellikleri aktif edin.

Bu adımlar sistemin sunucu ortamınızda doğru şekilde çalışmasını sağlar.

---

# Uyumluluk Dikkat Noktaları

Gelişmiş Serbest Kamera çoğu sunucu yapısıyla uyumlu olacak şekilde hafif bir yapı ile tasarlanmıştır.

Yine de entegrasyon sırasında geliştiricilerin şu noktaları kontrol etmesi önerilir:

- framework compatibility
- notification integrations
- screenshot systems
- custom camera overrides

Kamerayı kendi sunucu ortamınızda test etmek sorunsuz bir geçiş sağlayacaktır.

---

# Özet

Gelişmiş Serbest Kamera, Klasik Serbest Kamera'nın temel mimarisini değiştirmeden işlevselliğini genişletir.

Bu tasarım sayesinde geçiş süreci oldukça kolaydır ve mevcut entegrasyonlar korunurken ek sinematik özelliklere erişim sağlanır.