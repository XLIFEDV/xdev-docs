---
title: Kurulum
sidebar_position: 3
---

# Kurulum

Bu rehber, **Gelişmiş Serbest Kamera** sisteminin FiveM sunucunuza nasıl kurulacağını açıklar.

Kurulum süreci oldukça basittir ve çoğu FiveM ortamında kullanılan standart resource kurulum yöntemini takip eder.

---

# Gereksinimler

Gelişmiş Serbest Kamera'yı kurmadan önce aşağıdaki gereksinimlerin karşılandığından emin olun:

- Çalışan bir **FiveM server**
- Temel düzeyde resource yönetimi bilgisi
- Sunucu dosyalarınıza erişim

Yapılandırmanıza bağlı olarak sistem, override sistemi aracılığıyla framework veya diğer resource'lar ile de entegre olabilir.

---

# Resource Kurulumu

1. Resource dosyalarını indirin.

2. Resource'u sunucunuzdaki resource klasörüne çıkarın:

```

resources/[scripts]/xdev_advancedfreecam

```

3. Klasör adının beklenen resource adı ile aynı olduğundan emin olun.

4. `server.cfg` dosyanızı açın ve resource'u ekleyin:

```

ensure xdev_advancedfreecam

```

5. Sunucunuzu yeniden başlatın.

---

# Configuration

Kurulum tamamlandıktan sonra configuration dosyasını açın:

```

shared/config.lua

```

Bu dosya aşağıdaki sistem ayarlarını içerir:

- camera behavior
- UI configuration
- visual controls
- environment control
- effects and PostFX
- save/reset settings

Her configuration bölümü **Configuration** dokümantasyonunda detaylı olarak açıklanmıştır.

---

# Opsiyonel Entegrasyonlar

Gelişmiş Serbest Kamera, override sistemi sayesinde ek entegrasyonları destekler.

Geliştiriciler sistemi şu yapılarla entegre edebilir:

- framework notification systems
- screenshot tools
- custom camera logic
- custom UI integrations

Bu entegrasyonlar hakkında daha fazla bilgi **Advanced Overrides** bölümünde bulunmaktadır.

---

# Kurulumun Doğrulanması

Sunucu başlatıldıktan sonra aşağıdaki kontrolleri yapın:

- resource'un hatasız yüklenmesi
- freecam command veya activation key'in çalışması
- kamera sistemi aktif edildiğinde UI'ın görünmesi

Eğer her şey doğru çalışıyorsa Gelişmiş Serbest Kamera başarıyla kurulmuş demektir.

---

# Sonraki Adımlar

Kurulum tamamlandıktan sonra aşağıdaki bölümlere geçebilirsiniz:

- **Configuration → System Configuration**
- **Configuration → UI System**
- **Usage → Advanced Features**

Bu bölümler Gelişmiş Serbest Kamera sisteminin nasıl yapılandırılacağını ve nasıl kullanılacağını açıklar.