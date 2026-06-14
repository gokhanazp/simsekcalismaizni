export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMin: number;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "calisma-izni-basvurusu-nasil-yapilir",
    title: "Çalışma İzni Başvurusu Nasıl Yapılır? Adım Adım Rehber",
    excerpt:
      "Türkiye'de çalışma izni başvurusunun aşamalarını, gerekli belgeleri ve dikkat edilmesi gereken noktaları adım adım açıklıyoruz.",
    category: "Çalışma İzni",
    date: "2026-05-20",
    readMin: 6,
    content: [
      { type: "p", text: "Türkiye'de yasal olarak çalışmak isteyen yabancı uyruklu kişilerin çalışma izni alması gerekir. Süreç, doğru planlandığında sorunsuz ilerler; ancak eksik evrak veya yanlış başvuru türü gecikmelere yol açabilir." },
      { type: "h2", text: "1. Doğru İzin Türünün Belirlenmesi" },
      { type: "p", text: "İlk adım, başvuru profilinize uygun çalışma izni türünü belirlemektir. Süreli, süresiz ve bağımsız çalışma izni gibi farklı türler bulunur. Yanlış türde başvuru, sürecin baştan yapılmasına neden olabilir." },
      { type: "h2", text: "2. Gerekli Belgelerin Hazırlanması" },
      { type: "p", text: "Başvuru için temel olarak şu belgeler gerekir:" },
      { type: "ul", items: [
        "Pasaport fotokopisi",
        "Biyometrik fotoğraf",
        "İş sözleşmesi veya iş teklifi",
        "Diploma / mezuniyet belgesi",
        "İşveren şirkete ait belgeler",
      ]},
      { type: "h2", text: "3. Başvurunun Yapılması" },
      { type: "p", text: "Başvuru, Türkiye içinden ikamet izniyle veya yurt dışından ilgili temsilcilik üzerinden yapılabilir. Her iki yolda da süreç dikkatli takip edilmelidir." },
      { type: "h2", text: "4. Süreç Takibi ve Sonuç" },
      { type: "p", text: "Başvuru değerlendirme sürecinde ek belge talep edilebilir. Bu nedenle başvuru sonrası takip kritik önem taşır. Profesyonel danışmanlık, bu aşamada zaman ve hata kaybını önler." },
      { type: "p", text: "Şimşek Danışmanlık olarak tüm bu süreci sizin adınıza uçtan uca yönetiyoruz. Ücretsiz ön görüşme için bizimle iletişime geçebilirsiniz." },
    ],
  },
  {
    slug: "ikamet-izni-turleri",
    title: "İkamet İzni Türleri ve Hangisi Size Uygun?",
    excerpt:
      "Kısa dönem, aile ve öğrenci ikamet izni arasındaki farkları ve hangi durumda hangi başvurunun yapılması gerektiğini açıklıyoruz.",
    category: "İkamet İzni",
    date: "2026-04-28",
    readMin: 5,
    content: [
      { type: "p", text: "Türkiye'de ikamet izni, kalış amacınıza göre farklılık gösterir. Doğru izin türünü seçmek, başvurunuzun olumlu sonuçlanması açısından belirleyicidir." },
      { type: "h2", text: "Kısa Dönem İkamet İzni" },
      { type: "p", text: "Turistik, ticari veya kısa süreli kalış amaçlı en yaygın izin türüdür. Çoğu yabancı uyruklu için ilk ikamet izni bu kapsamda alınır." },
      { type: "h2", text: "Aile İkamet İzni" },
      { type: "p", text: "Türk vatandaşı veya geçerli izinli yabancıların eş ve çocuklarının ikamet edebilmesi için verilen izin türüdür." },
      { type: "h2", text: "Öğrenci İkamet İzni" },
      { type: "p", text: "Türkiye'de örgün eğitim gören yabancı öğrenciler için düzenlenir ve öğrenim süresine bağlıdır." },
      { type: "p", text: "Hangi iznin size uygun olduğundan emin değilseniz, ücretsiz ön görüşmemizde durumunuzu değerlendirip doğru yolu birlikte belirleyebiliriz." },
    ],
  },
  {
    slug: "calisma-izni-uzatma-dikkat-edilmesi-gerekenler",
    title: "Çalışma İzni Uzatmada Dikkat Edilmesi Gerekenler",
    excerpt:
      "Çalışma izni uzatma başvurusunun zamanlaması, gerekli belgeler ve sık yapılan hatalar hakkında bilmeniz gerekenler.",
    category: "Çalışma İzni",
    date: "2026-03-15",
    readMin: 4,
    content: [
      { type: "p", text: "Çalışma izni uzatma, ilk başvuru kadar önemli ve zamanlamaya duyarlı bir süreçtir. Sürenin kaçırılması, izin türünüzü kaybetmenize neden olabilir." },
      { type: "h2", text: "Zamanlama Kritiktir" },
      { type: "p", text: "Uzatma başvurusu, izin süresi dolmadan mevzuatın öngördüğü süre içinde yapılmalıdır. Erken planlama her zaman avantaj sağlar." },
      { type: "h2", text: "Sık Yapılan Hatalar" },
      { type: "ul", items: [
        "Başvuruyu son güne bırakmak",
        "Güncel olmayan belgelerle başvurmak",
        "Değişen mevzuat şartlarını gözden kaçırmak",
      ]},
      { type: "p", text: "Şimşek Danışmanlık olarak izin sürenizi sizin adınıza takip ediyor, uzatma sürecini zamanında ve eksiksiz yönetiyoruz." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
