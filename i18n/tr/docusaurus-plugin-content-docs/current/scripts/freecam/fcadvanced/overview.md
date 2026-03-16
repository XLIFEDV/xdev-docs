---
title: Genel Bakış
sidebar_position: 1
---

# Gelişmiş Serbest Kamera

Gelişmiş Serbest Kamera, **Klasik Serbest Kamera** çekirdeği üzerine inşa edilmiş genişletilmiş bir sinematik kamera sistemidir.

Entegre bir UI aracılığıyla geliştiricilerin ve içerik üreticilerinin kamera davranışını, sahne görsellerini ve sinematik efektleri doğrudan kontrol edebilmesini sağlayan tam bir **görsel kontrol katmanı** ekleyerek temel serbest kamera işlevselliğini genişletir.

Klasik Serbest Kamera hafif ve geliştirici dostu bir serbest kamera sistemi sunmaya odaklanırken, **Gelişmiş Serbest Kamera bunu kayıt alma, ekran görüntüsü oluşturma ve sahne düzenleme için tasarlanmış tam bir sinematik araç setine dönüştürür**.

---

# Temel Konsept

Gelişmiş Serbest Kamera, Klasik Serbest Kamera ile aynı **çekirdek kamera mimarisini** korur ancak görsel kontrol ve sahne yönetimi için tasarlanmış birçok yeni sistem ekler.

Bu sistem geliştiricilerin şu alanları kontrol etmesine olanak tanır:

- camera movement parameters
- visual scene settings
- cinematic effects
- environmental conditions
- camera behavior and UI interactions

Bu sistemlerin tamamı yapılandırılabilir ve mevcut sunucu ortamlarına entegre edilebilir.

---

# Klasik Serbest Kamera ile İlişkisi

Gelişmiş Serbest Kamera tamamen ayrı bir kamera sistemi değildir.

Bunun yerine **Klasik Serbest Kamera çekirdeği üzerine inşa edilmiştir**, yani:

- temel kamera mantığı aynı kalır
- configuration yapısı tanıdık kalır
- mevcut entegrasyonlar çalışmaya devam eder
- Klasik Serbest Kamera kullanan geliştiriciler Gelişmiş Serbest Kamera'ya kolayca geçiş yapabilir

Gelişmiş Serbest Kamera yalnızca **temel sistemin yeteneklerini genişletir**.

---

# Temel Özellikler

## Entegre UI Kontrol Paneli

Gelişmiş Serbest Kamera, kullanıcıların kamera parametrelerini ve görsel ayarları gerçek zamanlı olarak değiştirebilmesini sağlayan tamamen entegre bir UI sistemi sunar.

Bu sistem aşağıdaki kontrolleri içerir:

- camera movement speed
- rotation sensitivity
- zoom behavior
- cinematic visual options

---

## Görsel Sahne Kontrolü

Sistem sahnenin **yerel görsel özelleştirmesini** yapabilmenizi sağlar. Buna şunlar dahildir:

- time control
- weather control
- motion blur
- camera shake
- depth of field
- cinematic mode

Tüm görsel değişiklikler **yerel olarak uygulanır**, yani sunucudaki diğer oyuncuları etkilemez.

---

## Kamera Efektleri & PostFX

Gelişmiş Serbest Kamera, doğrudan kameraya uygulanabilen birçok **görsel filtre ve sinematik efekt** destekler.

Bu efektler şu amaçlarla kullanılabilir:

- sahnenin ışıklandırmasını ve atmosferini geliştirmek
- sinematik color grading oluşturmak
- film tarzı görseller simüle etmek
- ekran görüntüsü veya kayıt için sahne hazırlamak

---

## Kalıcı Ayarlar

Kamera yapılandırmaları isteğe bağlı olarak **kaydedilebilir ve yeniden yüklenebilir**.

Bu özellik içerik üreticilerin:

- kamera kurulumlarını tekrar kullanmasını
- tutarlı sinematik sahneler oluşturmasını
- tekrar eden kayıtlar için hazırlık süresini azaltmasını

sağlar.

---

## Geliştirici Dostu Mimari

Gelişmiş Serbest Kamera, Klasik Serbest Kamera'da bulunan aynı **override mimarisini** kullanmaya devam eder.

Geliştiriciler aşağıdaki sistemleri override edebilir:

- camera logic
- notifications
- screenshot capture
- visual effects behavior

Bu yapı sistemin özel framework'lere veya mevcut sunucu altyapılarına kolayca entegre edilmesini sağlar.

---

# Kimler İçin?

Gelişmiş Serbest Kamera aşağıdaki kullanım senaryoları için tasarlanmıştır:

- **içerik üreticileri**
- **sinematik kayıtlar**
- **ekran görüntüsü oluşturma**
- **sahne düzenleme**
- **görsel kamera araçlarına ihtiyaç duyan geliştiriciler**

Eğer basit bir serbest kameradan daha fazlasına ihtiyaç duyuyor ve **tam bir sinematik kontrol sistemi** arıyorsanız, Gelişmiş Serbest Kamera gerekli araçları sunar.