# DOCS SAYFASI OLUŞTURMA

- "*/docs*" klasörü içerisine girilmeli.
- Sayfanın alanına göre klasör seçilmeli.
  - "*scripts*"
  - "*vehicles*"
- Yeni klasör açılıp, isim olarak ID tabanlı isim girilmeli.
- Geçici süreliğine ise içerisine "*overview.md*" açılarak dosyanın boş kalmaması sağlanmalı.
- Dosya tamamlanacaksa içerisine açılan bütün dosyaların isimleri ID tabanlı olmalı.
  - "*.md*" dosyalarının isimleride ID tabanlı olması gerekmekte olup içerisine şu yazı eklenmeli:
  ```
  ---
  title: OVERVIEW TITLE
  sidebar_position: 1
  ---
  ```
- Sonrasında Category başlıkları ve Footer başlıkları düzenlenmeli.
  - Dosya konumları:
    ---
    | Dil    |   Tip    | Konum                                                 |
    | :----- | :------: | :---------------------------------------------------- |
    | **EN** | Category | `i18n/en/docusaurus-plugin-content-docs/current.json` |
    | **EN** |  Footer  | `i18n/en/docusaurus-theme-classic/footer.json`        |
  - Category düzenleme:
    ---
    ````json
    "sidebar.tutorialSidebar.category.CHANGE_ID":{
      "message":"CHANGE_TEXT"
    }
    ````
    | ID | Açıklama |
    | :- | :- |
    | **CHANGE_ID** | Klasör adı |
    | **CHANGE_TEXT** | Görünmesi istenilen yazı |
  - Footer düzenleme:
    ---
    ````json
    "link.item.label.CHANGE_ID":{
      "message":"CHANGE_TEXT"
    }
    ````
    | ID | Açıklama |
    | :- | :- |
    | **CHANGE_ID** | Klasör adı |
    | **CHANGE_TEXT** | Görünmesi istenilen yazı |

# DOCS SAYFASI TÜRKÇELEŞTİRME
- "*/docs*" İçerisindeki türkçeleştirme yapılacak klasör bulunmalı ve kopyalanmalı.
- "*/i18n/tr/docusaurus-plugin-content-docs/current/TARGET_ID*" klasörüne gidilmeli ve içerisine yapıştırılmalı.
  - "**TARGET_ID**": Sayfanın alanı hangisi ise o alan seçilmeli.
- Yapıştırılan dosyaların içerisinde yer alan "*.md*" dosyaları türkçeleştirilmeli.
- Sonrasında Category başlıkları ve Footer başlıkları düzenlenmeli.
  - Dosya konumları:
    ---
    | Dil    |   Tip    | Konum                                                 |
    | :----- | :------: | :---------------------------------------------------- |
    | **TR** | Category | `i18n/tr/docusaurus-plugin-content-docs/current.json` |
    | **TR** |  Footer  | `i18n/tr/docusaurus-theme-classic/footer.json`        |
  - Category düzenleme:
    ---
    ````json
    "sidebar.tutorialSidebar.category.CHANGE_ID":{
      "message":"CHANGE_TEXT"
    }
    ````
    | ID | Açıklama |
    | :- | :- |
    | **CHANGE_ID** | Klasör adı |
    | **CHANGE_TEXT** | Görünmesi istenilen yazı |
  - Footer düzenleme:
    ---
    ````json
    "link.item.label.CHANGE_ID":{
      "message":"CHANGE_TEXT"
    }
    ````
    | ID | Açıklama |
    | :- | :- |
    | **CHANGE_ID** | Klasör adı |
    | **CHANGE_TEXT** | Görünmesi istenilen yazı |