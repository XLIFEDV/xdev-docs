---
title: Kurulum
sidebar_position: 2
---

# Kurulum

Bu rehber, **Freecam** sistemini FiveM sunucunuza nasıl kuracağınızı açıklar.

Kurulum süreci, çoğu FiveM ortamında kullanılan standart resource kurulum yapısını takip eder.

---

# Gereksinimler

Freecam kurulumu öncesinde aşağıdaki gereksinimlerin karşılandığından emin olun:

- Çalışır durumda bir **FiveM server**
- Temel resource yönetimi bilgisi
- Sunucu dosyalarına erişim

Freecam varsayılan olarak framework bağımsızdır ancak override sistemi kullanılarak mevcut sistemlere entegre edilebilir.

---

# Resource Kurulumu

1. Resource dosyalarını indirin.

2. Resource'u sunucunuzun resource klasörüne çıkartın:

```

resources/[scripts]/xdev_freecam

```

3. Klasör adının doğru resource ismi ile eşleştiğinden emin olun.

4. `server.cfg` dosyanızı açın ve resource'u ekleyin:

```

ensure xdev_freecam

```

5. Sunucunuzu yeniden başlatın.

---

# Yapılandırma

Kurulumdan sonra ana configuration dosyasını açın:

```

shared/config.lua

```

Bu dosya aşağıdaki sistem ayarlarını içerir:

- camera behavior
- UI configuration
- visual controls
- environment control
- PostFX and camera effects
- save and reset settings

Her configuration bölümü **Configuration** dokümantasyonunda detaylı olarak açıklanmıştır.

---

# Opsiyonel Entegrasyonlar

Freecam, override sistemi sayesinde gelişmiş entegrasyonları destekler.

Aşağıdaki sistemlerle entegre edebilirsiniz:

- framework notification systems
- screenshot tools
- custom camera logic
- player-based permissions

Detaylı bilgi için **Overrides** bölümüne bakabilirsiniz.

---

# Kurulum Doğrulama

Sunucuyu başlattıktan sonra aşağıdakileri kontrol edin:

- resource hatasız şekilde başlıyor mu
- aktivasyon komutu veya tuşu çalışıyor mu
- Freecam aktif edildiğinde UI görünüyor mu

Tüm kontroller başarılıysa Freecam düzgün şekilde kurulmuştur.

---

# Sonraki Adımlar

Kurulumdan sonra şu bölümlere geçebilirsiniz:

- **Configuration → System Configuration**
- **Configuration → UI System**
- **Usage → Photo System**

Bu bölümler Freecam sistemini nasıl yapılandıracağınızı ve kullanacağınızı açıklar.