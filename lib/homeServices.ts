import type { IconName } from "@/components/Icon";

export type HSGroup = { title: string; items: string[] };
export type HSStep = { title: string; text: string };
export type HSNote = { title?: string; text: string };

export type HomeService = {
  slug: string;
  icon: IconName;
  title: string;
  navLabel: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  groups?: HSGroup[];
  steps?: HSStep[];
  notes?: HSNote[];
};

export const homeServices: HomeService[] = [
  {
    slug: "ev-hizmetlerinde-calisma-izni",
    icon: "home",
    title: "Ev Hizmetlerinde Çalışma İzni",
    navLabel: "Ev Hizmetlerinde Çalışma İzni",
    summary: "Yabancı bakıcı veya ev yardımcısı çalıştırmak isteyenler için çalışma izni süreçlerini uçtan uca yönetiyoruz.",
    metaDescription: "Ev hizmetlerinde çalışma izni: yabancı çocuk, yaşlı, hasta bakıcısı ve ev yardımcısı istihdamı için uygunluk, evrak, SGK ve Bakanlık başvurularında danışmanlık.",
    intro: [
      "Türkiye'de yabancı uyruklu çocuk bakıcısı, yaşlı bakıcısı, hasta bakıcısı veya ev yardımcısı çalıştırmak isteyen kişiler için çalışma izni alınması zorunludur.",
      "Şimşek Danışmanlık olarak başvuru öncesi uygunluk değerlendirmesi, evrak hazırlığı, SGK işlemleri ve Bakanlık başvurularının tamamını profesyonel olarak yürütüyoruz.",
    ],
  },
  {
    slug: "yabanci-cocuk-bakicisi-calisma-izni",
    icon: "users",
    title: "Yabancı Çocuk Bakıcısı Çalışma İzni",
    navLabel: "Yabancı Çocuk Bakıcısı Çalışma İzni",
    summary: "Çalışan ebeveynler için yabancı çocuk bakıcısı istihdamına yönelik çalışma izni başvuruları.",
    metaDescription: "Yabancı çocuk bakıcısı çalışma izni: çalışan ebeveynler ve tek ebeveynli aileler için uygunluk, evrak, SGK ve başvuru takibi danışmanlığı.",
    intro: [
      "Çalışan ebeveynlerin çocuk bakımı için yabancı bakıcı çalıştırabilmeleri amacıyla yapılan çalışma izni başvurularıdır.",
    ],
    groups: [
      {
        title: "Kimler Başvurabilir?",
        items: ["Çalışan anne ve baba", "Tek ebeveynli aileler", "Özel bakım ihtiyacı bulunan çocuk sahibi aileler"],
      },
      {
        title: "Hizmetlerimiz",
        items: ["Uygunluk kontrolü", "Evrak hazırlığı", "Online başvuru", "Dosya takibi", "SGK işlemleri"],
      },
    ],
  },
  {
    slug: "yabanci-yasli-bakicisi-calisma-izni",
    icon: "user",
    title: "Yabancı Yaşlı Bakıcısı Çalışma İzni",
    navLabel: "Yabancı Yaşlı Bakıcısı Çalışma İzni",
    summary: "Günlük yaşamında desteğe ihtiyaç duyan yaşlılar için yabancı bakıcı istihdamı çalışma izni.",
    metaDescription: "Yabancı yaşlı bakıcısı çalışma izni: refakat, ilaç ve bakım takibi gibi hizmetler için yabancı bakıcı istihdamında başvuru ve evrak danışmanlığı.",
    intro: [
      "İleri yaşta bulunan ve günlük yaşamında desteğe ihtiyaç duyan kişiler için yabancı bakıcı istihdamına yönelik çalışma izni işlemleridir.",
    ],
    groups: [
      {
        title: "Kapsam",
        items: [
          "Yaşlı bireylerin günlük ihtiyaçlarının karşılanması",
          "Refakat hizmetleri",
          "İlaç ve bakım takibi",
          "Ev içi destek hizmetleri",
        ],
      },
    ],
    notes: [
      {
        title: "Başvuru Süreci",
        text: "İşverenin ve bakıcının durumuna göre gerekli belgeler hazırlanır ve başvuru süreci başlatılır.",
      },
    ],
  },
  {
    slug: "yabanci-hasta-bakicisi-calisma-izni",
    icon: "shield",
    title: "Yabancı Hasta Bakıcısı Çalışma İzni",
    navLabel: "Yabancı Hasta Bakıcısı Çalışma İzni",
    summary: "Sürekli bakım gerektiren bireyler için yabancı hasta bakıcısı istihdamına yönelik çalışma izni.",
    metaDescription: "Yabancı hasta bakıcısı çalışma izni: sürekli bakım gerektiren, engelli veya kronik hastalığı olan bireyler için yabancı bakıcı istihdamı danışmanlığı.",
    intro: [
      "Sürekli bakım gerektiren veya sağlık sorunları nedeniyle desteğe ihtiyaç duyan bireyler için yabancı hasta bakıcısı çalıştırılmasına yönelik çalışma izni hizmetidir.",
    ],
    groups: [
      {
        title: "Kimler Yararlanabilir?",
        items: [
          "Sürekli bakım ihtiyacı bulunan kişiler",
          "Engelli bireyler",
          "Kronik rahatsızlığı bulunan hastalar",
          "Ameliyat sonrası bakım ihtiyacı olan kişiler",
        ],
      },
      {
        title: "Sağladığımız Hizmetler",
        items: ["Dosya hazırlığı", "Gerekli raporların kontrolü", "Bakanlık başvuruları", "Süreç takibi"],
      },
    ],
  },
  {
    slug: "yabanci-ev-yardimcisi-calisma-izni",
    icon: "home",
    title: "Yabancı Ev Yardımcısı Çalışma İzni",
    navLabel: "Yabancı Ev Yardımcısı Çalışma İzni",
    summary: "Ev işlerinde destek için yabancı personel çalıştırmak isteyen aileler için çalışma izni.",
    metaDescription: "Yabancı ev yardımcısı çalışma izni: temizlik, yemek ve günlük ev işleri için yabancı personel istihdamında başvuru, evrak ve SGK danışmanlığı.",
    intro: [
      "Ev işlerinde destek amacıyla yabancı personel çalıştırmak isteyen aileler için sunulan çalışma izni hizmetidir.",
    ],
    groups: [
      {
        title: "Kapsam",
        items: ["Temizlik hizmetleri", "Ev düzeni ve günlük işler", "Yemek hazırlığı", "Genel ev desteği"],
      },
      {
        title: "Danışmanlık Hizmetlerimiz",
        items: ["Başvuru değerlendirmesi", "Evrak hazırlığı", "SGK işlemleri", "Bakanlık süreçleri"],
      },
    ],
  },
  {
    slug: "ev-hizmetlerinde-calisma-izni-sartlari",
    icon: "doc",
    title: "Ev Hizmetlerinde Çalışma İzni Şartları",
    navLabel: "Ev Hizmetlerinde Çalışma İzni Şartları",
    summary: "İşveren ve yabancı çalışan açısından sağlanması gereken temel şartlar.",
    metaDescription: "Ev hizmetlerinde çalışma izni şartları: işverenin gelir düzeyi, yabancının geçerli pasaportu, mevzuata uygunluk ve eksiksiz evrak gereklilikleri.",
    intro: [
      "Ev hizmetlerinde çalışma izni başvurularında işveren ve yabancı çalışan açısından belirli şartların sağlanması gerekmektedir.",
    ],
    groups: [
      {
        title: "Genel Şartlar",
        items: [
          "İşverenin yeterli gelir düzeyine sahip olması",
          "Yabancının geçerli pasaportunun bulunması",
          "Başvurunun mevzuata uygun olması",
          "Gerekli belgelerin eksiksiz hazırlanması",
        ],
      },
    ],
    notes: [{ text: "Her dosya kendi özel durumuna göre ayrıca değerlendirilmektedir." }],
  },
  {
    slug: "gerekli-evraklar",
    icon: "doc",
    title: "Gerekli Evraklar",
    navLabel: "Gerekli Evraklar",
    summary: "Ev hizmetleri çalışma izni başvurusunda işveren ve yabancı personelden istenen belgeler.",
    metaDescription: "Ev hizmetlerinde çalışma izni için gerekli evraklar: işverenden kimlik, ikametgah ve gelir belgeleri; yabancı personelden pasaport ve biyometrik fotoğraf.",
    intro: [
      "Başvuru türüne göre değişmekle birlikte genel olarak aşağıdaki belgeler talep edilmektedir:",
    ],
    groups: [
      {
        title: "İşverenden",
        items: ["Kimlik fotokopisi", "İkametgah belgesi", "Gelir durumunu gösteren belgeler", "SGK hizmet dökümü (gerektiğinde)"],
      },
      {
        title: "Yabancı Personelden",
        items: ["Pasaport", "Biyometrik fotoğraf", "İletişim bilgileri", "Mevcut ikamet bilgileri (varsa)"],
      },
    ],
  },
  {
    slug: "basvuru-sureci",
    icon: "clock",
    title: "Başvuru Süreci",
    navLabel: "Başvuru Süreci",
    summary: "Ön değerlendirmeden onaya kadar ev hizmetleri çalışma izni başvuru adımları.",
    metaDescription: "Ev hizmetlerinde çalışma izni başvuru süreci: ön değerlendirme, evrak hazırlığı, online başvuru, Bakanlık değerlendirmesi ve SGK işlemleri adımları.",
    intro: [
      "Ev hizmetlerinde çalışma izni başvurusu, aşağıdaki adımlar izlenerek eksiksiz şekilde tamamlanır.",
    ],
    steps: [
      { title: "Ön Değerlendirme", text: "Dosya uygunluğu kontrol edilir." },
      { title: "Evrak Hazırlığı", text: "Gerekli belgeler eksiksiz şekilde hazırlanır." },
      { title: "Online Başvuru", text: "Çalışma ve Sosyal Güvenlik Bakanlığı sistemine giriş yapılır." },
      { title: "Değerlendirme Süreci", text: "Bakanlık inceleme ve kontrol işlemlerini gerçekleştirir." },
      { title: "Onay ve SGK İşlemleri", text: "Çalışma izni onaylandıktan sonra gerekli SGK işlemleri tamamlanır." },
    ],
  },
  {
    slug: "calisma-izni-uzatma-islemleri",
    icon: "refresh",
    title: "Çalışma İzni Uzatma İşlemleri",
    navLabel: "Çalışma İzni Uzatma İşlemleri",
    summary: "Ev hizmetlerinde çalışan yabancı personelin izin uzatma başvurularını zamanında yönetiyoruz.",
    metaDescription: "Ev hizmetlerinde çalışma izni uzatma işlemleri: yasal çalışma hakkının ve sigortalılığın kesintisiz sürmesi için zamanında yenileme başvuruları.",
    intro: [
      "Mevcut çalışma izninin süresi dolmadan önce uzatma başvurusu yapılmalıdır.",
    ],
    groups: [
      {
        title: "Avantajları",
        items: ["Yasal çalışma hakkının devamı", "Kesintisiz sigortalılık", "İkamet hakkının korunması"],
      },
    ],
    notes: [{ text: "Başvuruların izin bitim tarihinden önce yapılması önemlidir." }],
  },
];

export function getHomeService(slug: string) {
  return homeServices.find((s) => s.slug === slug);
}
