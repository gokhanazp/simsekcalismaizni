export const site = {
  name: "Şimşek Danışmanlık",
  shortName: "Şimşek",
  tagline: "Türkiye'de Yasal Çalışmanın En Doğru Yolu",
  experienceYears: 27,
  phone: "0506 124 03 67",
  phoneHref: "tel:+905061240367",
  whatsapp: "https://wa.me/905061240367",
  email: "info@simsekcalismaizni.com",
  address: "Avrupa 1 No:5 Şimşek Mali Müşavirlik Ofisi, Tahtakale, Faruk Nafiz Çamlıbel Cd, 34320 Avcılar/İstanbul",
  url: "https://simsekcalismaizni.com",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Çalışma İzni",
    href: "/calisma-izni",
    children: [
      { label: "Çalışma İzni Nasıl Alınır?", href: "/calisma-izni" },
      { label: "Yabancı Personel Çalışma İzni", href: "/sirketler-icin/yabanci-personel-calisma-izni" },
      { label: "Şirket Ortakları İçin Çalışma İzni", href: "/sirketler-icin/yabanci-ortak-calisma-izni" },
      { label: "Ev Hizmetlerinde Çalışma İzni", href: "/ev-hizmetleri/ev-hizmetlerinde-calisma-izni" },
      { label: "Sık Sorulan Sorular", href: "/calisma-izni#sss" },
    ],
  },
  {
    label: "İkamet İzni",
    href: "/ikamet-izni",
    children: [
      { label: "İkamet İzni Nedir?", href: "/ikamet-izni/ikamet-izni-nedir" },
      { label: "Kısa Dönem İkamet İzni", href: "/ikamet-izni/kisa-donem-ikamet-izni" },
      { label: "Aile İkamet İzni", href: "/ikamet-izni/aile-ikamet-izni" },
      { label: "Öğrenci İkamet İzni", href: "/ikamet-izni/ogrenci-ikamet-izni" },
      { label: "Uzun Dönem İkamet İzni", href: "/ikamet-izni/uzun-donem-ikamet-izni" },
      { label: "İkamet İzni Uzatma", href: "/ikamet-izni/ikamet-izni-uzatma" },
      { label: "Gerekli Evraklar", href: "/ikamet-izni/ikamet-izni-gerekli-evraklar" },
      { label: "Adres Değişikliği ve Bildirim", href: "/ikamet-izni/adres-degisikligi-bildirim" },
      { label: "Red ve İptal İşlemleri", href: "/ikamet-izni/ikamet-izni-red-iptal" },
      { label: "Sık Sorulan Sorular", href: "/ikamet-izni#sss" },
    ],
  },
  {
    label: "Şirketler İçin",
    href: "/sirketler-icin",
    children: [
      { label: "Yabancı Personel Çalışma İzni", href: "/sirketler-icin/yabanci-personel-calisma-izni" },
      { label: "Yabancı Ortaklar İçin Çalışma İzni", href: "/sirketler-icin/yabanci-ortak-calisma-izni" },
      { label: "Şirket Uygunluk Analizi", href: "/sirketler-icin/sirket-uygunluk-analizi" },
      { label: "Çalışma İzni Uzatma İşlemleri", href: "/sirketler-icin/calisma-izni-uzatma-islemleri" },
      { label: "İnsan Kaynakları ve SGK Danışmanlığı", href: "/sirketler-icin/insan-kaynaklari-sgk-danismanligi" },
      { label: "Şirket Kuruluşu ve Yabancı Ortaklı Şirketler", href: "/sirketler-icin/sirket-kurulusu-yabanci-ortakli-sirketler" },
      { label: "İkamet ve Çalışma İzni Birlikte Yönetimi", href: "/sirketler-icin/ikamet-ve-calisma-izni-yonetimi" },
      { label: "Yatırımcı ve Yönetici Çalışma İzinleri", href: "/sirketler-icin/yatirimci-yonetici-calisma-izinleri" },
      { label: "Sık Sorulan Sorular", href: "/sirketler-icin#sss" },
    ],
  },
  {
    label: "Ev Hizmetleri",
    href: "/ev-hizmetleri",
    children: [
      { label: "Ev Hizmetlerinde Çalışma İzni", href: "/ev-hizmetleri/ev-hizmetlerinde-calisma-izni" },
      { label: "Yabancı Çocuk Bakıcısı Çalışma İzni", href: "/ev-hizmetleri/yabanci-cocuk-bakicisi-calisma-izni" },
      { label: "Yabancı Yaşlı Bakıcısı Çalışma İzni", href: "/ev-hizmetleri/yabanci-yasli-bakicisi-calisma-izni" },
      { label: "Yabancı Hasta Bakıcısı Çalışma İzni", href: "/ev-hizmetleri/yabanci-hasta-bakicisi-calisma-izni" },
      { label: "Yabancı Ev Yardımcısı Çalışma İzni", href: "/ev-hizmetleri/yabanci-ev-yardimcisi-calisma-izni" },
      { label: "Çalışma İzni Şartları", href: "/ev-hizmetleri/ev-hizmetlerinde-calisma-izni-sartlari" },
      { label: "Gerekli Evraklar", href: "/ev-hizmetleri/gerekli-evraklar" },
      { label: "Başvuru Süreci", href: "/ev-hizmetleri/basvuru-sureci" },
      { label: "Çalışma İzni Uzatma İşlemleri", href: "/ev-hizmetleri/calisma-izni-uzatma-islemleri" },
      { label: "Sık Sorulan Sorular", href: "/ev-hizmetleri#sss" },
    ],
  },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Referanslarımız", href: "/referanslarimiz" },
];

/** Üst bar bağlantıları (ana menünün üstündeki ince şerit) */
export const topNav: { label: string; href: string }[] = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "S.S.S.", href: "/sss" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/bize-ulasin" },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  desc: string;
};

export const services: Service[] = [
  {
    slug: "calisma-izni-basvurusu",
    icon: "briefcase",
    title: "Çalışma İzni Başvurusu",
    short: "İlk başvuru, yurt içi ve yurt dışı süreçleri.",
    desc: "Türkiye'de yasal çalışmak isteyen yabancı uyruklu personel için ilk başvuru, yurt içi ve yurt dışı çalışma izni süreçlerinin tamamını uçtan uca yönetiyoruz.",
  },
  {
    slug: "calisma-izni-uzatma",
    icon: "refresh",
    title: "Çalışma İzni Uzatma",
    short: "Süre uzatma başvurularını zamanında yönetiyoruz.",
    desc: "Mevcut çalışma izninizin süresi dolmadan, eksiksiz evrak ve doğru zamanlama ile uzatma başvurularınızı titizlikle takip ediyoruz.",
  },
  {
    slug: "ev-hizmetleri-calisma-izni",
    icon: "home",
    title: "Ev Hizmetlerinde Çalışma İzni",
    short: "Evde çalışan yabancı personel için çalışma izni.",
    desc: "Bakıcı, temizlikçi ve ev hizmetlerinde çalışan yabancı personeliniz için yasal çalışma izni süreçlerini hızlı ve sorunsuz tamamlıyoruz.",
  },
  {
    slug: "sirketler-icin-calisma-izni",
    icon: "building",
    title: "Şirketler İçin Çalışma İzni",
    short: "Yabancı personel istihdamında tam danışmanlık.",
    desc: "Şirketlerin yabancı uyruklu personel istihdamı için gerekli tüm başvuru, evrak ve mevzuat danışmanlığını kurumsal ölçekte sunuyoruz.",
  },
  {
    slug: "ikamet-izni-basvurusu",
    icon: "id",
    title: "İkamet İzni Başvurusu",
    short: "İkamet izni başvuru, uzatma ve diğer işlemler.",
    desc: "Kısa dönem, aile ve öğrenci ikamet izni başvuruları ile uzatma işlemlerinizde uzman kadromuzla yanınızdayız.",
  },
  {
    slug: "yurt-disi-basvuru",
    icon: "globe",
    title: "Yurt Dışı Başvuru",
    short: "Türkiye dışındaki personeller için başvuru.",
    desc: "Türkiye'de henüz bulunmayan yabancı personeller için yurt dışı temsilcilikler üzerinden çalışma izni başvurularını yönetiyoruz.",
  },
];

export const stats = [
  { value: "27", suffix: "+", label: "Yıllık Tecrübe" },
  { value: "5.000", suffix: "+", label: "Başarılı Başvuru" },
  { value: "98", suffix: "%", label: "Onay Oranı" },
  { value: "40", suffix: "+", label: "Hizmet Verilen Ülke" },
];

export const process = [
  {
    step: "01",
    title: "Ücretsiz Ön Görüşme",
    desc: "Durumunuzu dinliyor, en doğru izin türünü ve yol haritasını sizin için belirliyoruz.",
  },
  {
    step: "02",
    title: "Evrak Hazırlığı",
    desc: "Gerekli tüm belgeleri eksiksiz listeliyor, hazırlık sürecinde adım adım yönlendiriyoruz.",
  },
  {
    step: "03",
    title: "Başvuru & Takip",
    desc: "Başvurunuzu resmi kanallardan yapıyor, sürecin her aşamasını sizin adınıza takip ediyoruz.",
  },
  {
    step: "04",
    title: "Sonuç & Teslim",
    desc: "İzniniz onaylandığında belgelerinizi teslim ediyor, sonraki adımlar için yanınızda oluyoruz.",
  },
];
