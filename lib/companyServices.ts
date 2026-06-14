import type { IconName } from "@/components/Icon";

export type CompanyGroup = { title: string; items: string[] };

export type CompanyService = {
  slug: string;
  icon: IconName;
  title: string;
  navLabel: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  groups?: CompanyGroup[];
  outro?: { title?: string; text: string };
};

export const companyServices: CompanyService[] = [
  {
    slug: "yabanci-personel-calisma-izni",
    icon: "users",
    title: "Yabancı Personel Çalışma İzni",
    navLabel: "Yabancı Personel Çalışma İzni",
    summary: "Şirketinizde yabancı uyruklu personel istihdamı için ilk başvuru, uzatma ve değişiklik işlemlerini uçtan uca yönetiyoruz.",
    metaDescription: "Şirketler için yabancı personel çalışma izni başvurusu, yurt içi ve yurt dışı başvurular, uzatma, işveren ve görev değişikliği işlemlerinde uçtan uca danışmanlık.",
    intro: [
      "Türkiye'de faaliyet gösteren şirketlerin yabancı uyruklu personel istihdam edebilmesi için Çalışma ve Sosyal Güvenlik Bakanlığı tarafından çalışma izni alınması gerekmektedir. Çalışma izni, hem yabancı çalışanın yasal olarak çalışabilmesini hem de işverenin mevzuata uygun istihdam yürütmesini güvence altına alır.",
      "Şimşek Danışmanlık olarak yabancı personel istihdam süreçlerinin tamamını; ön değerlendirmeden başvuru dosyasının hazırlanmasına, Bakanlık takibinden sonuçlandırmaya kadar mevzuata uygun şekilde yönetiyoruz. Böylece şirketiniz operasyonel yüke girmeden doğru ve hızlı bir başvuru süreci yürütülür.",
      "İlk başvuru, yurt içi ve yurt dışı başvurular ile uzatma, işveren değişikliği ve görev değişikliği gibi tüm işlem türlerinde uçtan uca destek sağlıyoruz.",
    ],
    groups: [
      {
        title: "Hizmet Kapsamımız",
        items: [
          "İlk çalışma izni başvuruları",
          "Yurt içi başvurular",
          "Yurt dışı başvurular",
          "Çalışma izni uzatmaları",
          "İşveren değişikliği işlemleri",
          "Görev değişikliği işlemleri",
        ],
      },
    ],
  },
  {
    slug: "yabanci-ortak-calisma-izni",
    icon: "briefcase",
    title: "Yabancı Ortaklar İçin Çalışma İzni",
    navLabel: "Yabancı Ortaklar İçin Çalışma İzni",
    summary: "Şirkette ortak olan yabancıların aktif görev alabilmesi için gerekli çalışma izni başvurularını hazırlıyoruz.",
    metaDescription: "Türkiye'de şirket ortağı olan yabancılar için çalışma izni: limited ortakları, anonim şirket yönetim kurulu üyeleri, müdürler ve yatırımcılar için başvuru danışmanlığı.",
    intro: [
      "Türkiye'de kurulu bir şirkette ortak olan yabancı uyruklu kişilerin, şirket faaliyetlerinde aktif görev alabilmeleri için birçok durumda çalışma izni almaları gerekir. Ortaklık sıfatı tek başına çalışma hakkı doğurmaz; aktif yönetim ve icra görevleri için izin alınması gerekebilir.",
      "Limited şirket ortakları, anonim şirket yönetim kurulu üyeleri, şirket müdürleri ve yatırımcılar bu kapsamda başvuru yapabilir. Her başvuru, şirketin yapısı ve ortağın üstleneceği göreve göre ayrı değerlendirilir.",
      "Şimşek Danışmanlık olarak şirket uygunluk incelemesinden başvuru dosyasının hazırlanmasına ve Bakanlık süreç takibine kadar tüm aşamaları yönetiyoruz.",
    ],
    groups: [
      {
        title: "Kimler Başvurabilir?",
        items: [
          "Limited şirket ortakları",
          "Anonim şirket yönetim kurulu üyeleri",
          "Şirket müdürleri",
          "Yatırımcılar",
        ],
      },
      {
        title: "Sağladığımız Hizmetler",
        items: [
          "Şirket uygunluk incelemesi",
          "Başvuru dosyası hazırlığı",
          "Bakanlık süreç takibi",
          "Uzatma işlemleri",
        ],
      },
    ],
  },
  {
    slug: "sirket-uygunluk-analizi",
    icon: "doc",
    title: "Şirket Uygunluk Analizi",
    navLabel: "Şirket Uygunluk Analizi",
    summary: "Başvuru öncesinde şirketinizin mevzuata uygunluğunu değerlendirip riskleri önceden gideriyoruz.",
    metaDescription: "Çalışma izni başvurusu öncesi şirket uygunluk analizi: sermaye, Türk personel sayısı, SGK, vergi kayıtları, faaliyet alanı ve ihracat performansı değerlendirmesi.",
    intro: [
      "Çalışma izni başvurusunun olumlu sonuçlanması, büyük ölçüde şirketin mevzuatta öngörülen kriterleri karşılamasına bağlıdır. Bu nedenle başvuru öncesinde şirketin uygunluğunun detaylı şekilde değerlendirilmesi büyük önem taşımaktadır.",
      "Analiz kapsamında şirket sermayesi, mevcut Türk personel sayısı, SGK ve vergi kayıtları, faaliyet alanı ve ihracat performansı gibi unsurlar incelenir. Eksik veya riskli noktalar başvuru öncesinde tespit edilerek giderilir.",
    ],
    groups: [
      {
        title: "İncelenen Konular",
        items: [
          "Şirket sermayesi",
          "Türk personel sayısı",
          "SGK durumu",
          "Vergi kayıtları",
          "Faaliyet alanı",
          "İhracat performansı",
        ],
      },
    ],
    outro: {
      text: "Başvuru öncesinde yapılacak analiz sayesinde zaman ve maliyet kayıplarının önüne geçilmektedir.",
    },
  },
  {
    slug: "calisma-izni-uzatma-islemleri",
    icon: "refresh",
    title: "Çalışma İzni Uzatma İşlemleri",
    navLabel: "Çalışma İzni Uzatma İşlemleri",
    summary: "Mevcut çalışma izinlerini süresi dolmadan, doğru zamanlama ile uzatıyoruz.",
    metaDescription: "Şirketler için çalışma izni uzatma işlemleri: izin sürelerinin takibi, evrak güncelleme, başvuru hazırlığı ve Bakanlık süreçlerinin zamanında yönetimi.",
    intro: [
      "Çalışma izinleri belirli bir süre için düzenlenir ve süre dolmadan uzatma başvurusunun yapılması gerekmektedir. Süresi içinde yapılmayan başvurular, yabancının çalışma hakkını ve SGK sürekliliğini riske atabilir.",
      "Şimşek Danışmanlık olarak izin sürelerinizi takip ediyor, güncel mevzuata uygun şekilde uzatma başvurularınızı zamanında hazırlayıp sonuçlandırıyoruz.",
    ],
    groups: [
      {
        title: "Avantajları",
        items: [
          "Yasal çalışma hakkının devamı",
          "İş gücü kaybının önlenmesi",
          "SGK sürekliliğinin korunması",
        ],
      },
      {
        title: "Süreç",
        items: ["Evrak güncelleme", "Başvuru hazırlığı", "Bakanlık işlemleri", "Sonuç takibi"],
      },
    ],
  },
  {
    slug: "insan-kaynaklari-sgk-danismanligi",
    icon: "shield",
    title: "İnsan Kaynakları ve SGK Danışmanlığı",
    navLabel: "İnsan Kaynakları ve SGK Danışmanlığı",
    summary: "Yabancı personelin işe girişinden ayrılışına kadar tüm SGK ve özlük süreçlerini yönetiyoruz.",
    metaDescription: "Yabancı personel istihdam eden işletmeler için İK ve SGK danışmanlığı: SGK giriş işlemleri, bordrolama, özlük dosyaları ve çalışma izni sonrası yükümlülükler.",
    intro: [
      "Yabancı çalışan istihdam eden işletmelerde, çalışma izninin alınması sürecin yalnızca başlangıcıdır. İzin sonrası SGK, bordro ve özlük yükümlülüklerinin doğru yönetilmesi, hem yasal uyum hem de olası cezaların önlenmesi açısından önemlidir.",
      "İnsan kaynakları ve SGK danışmanlığı hizmetimizle, yabancı personelin işe girişinden ayrılışına kadar tüm idari süreçleri işletmeniz adına doğru ve eksiksiz şekilde yürütüyoruz.",
    ],
    groups: [
      {
        title: "Hizmetlerimiz",
        items: [
          "SGK giriş işlemleri",
          "Bordrolama desteği",
          "Personel özlük dosyaları",
          "Çalışma izni sonrası yükümlülükler",
          "İşten ayrılış süreçleri",
        ],
      },
    ],
  },
  {
    slug: "sirket-kurulusu-yabanci-ortakli-sirketler",
    icon: "building",
    title: "Şirket Kuruluşu ve Yabancı Ortaklı Şirketler",
    navLabel: "Şirket Kuruluşu ve Yabancı Ortaklı Şirketler",
    summary: "Türkiye'de yatırım yapacak yabancılar için şirket kuruluş işlemlerini baştan sona yürütüyoruz.",
    metaDescription: "Yabancılar için Türkiye'de şirket kuruluşu: limited ve anonim şirket kuruluşu, yabancı ortak giriş işlemleri, vergi dairesi, ticaret sicili ve faaliyet izinleri.",
    intro: [
      "Türkiye'de yatırım yapmak isteyen yabancı gerçek ve tüzel kişiler için şirket kuruluş süreçlerini baştan sona yürütüyoruz. Doğru şirket türünün seçimi, ortaklık yapısının kurgulanması ve resmi işlemlerin eksiksiz tamamlanması yatırımın sağlam bir zeminde başlamasını sağlar.",
      "Limited ve anonim şirket kuruluşundan yabancı ortak giriş işlemlerine, vergi dairesi ve ticaret sicili işlemlerinden faaliyet izinlerine kadar tüm adımlarda yanınızdayız.",
    ],
    groups: [
      {
        title: "Hizmetlerimiz",
        items: [
          "Limited şirket kuruluşu",
          "Anonim şirket kuruluşu",
          "Yabancı ortak giriş işlemleri",
          "Vergi dairesi işlemleri",
          "Ticaret sicili işlemleri",
          "Faaliyet izinleri",
        ],
      },
    ],
  },
  {
    slug: "ikamet-ve-calisma-izni-yonetimi",
    icon: "id",
    title: "İkamet ve Çalışma İzni Birlikte Yönetimi",
    navLabel: "İkamet ve Çalışma İzni Birlikte Yönetimi",
    summary: "Çalışma ve ikamet süreçlerini tek elden, koordineli şekilde yöneterek yasal sürekliliği koruyoruz.",
    metaDescription: "Yabancı çalışanlar için ikamet ve çalışma izni süreçlerinin birlikte yönetimi: ikamet izinleri, uzatma, adres kaydı, çalışma izni ve aile ikamet izinleri.",
    intro: [
      "Yabancı çalışanların Türkiye'deki yasal statüsü, çalışma ve ikamet süreçlerinin birbiriyle uyumlu yürütülmesini gerektirir. Bu iki sürecin ayrı ayrı ve koordinasyonsuz yönetilmesi gecikmelere ve hak kayıplarına yol açabilir.",
      "Şimşek Danışmanlık olarak çalışma izni ile ikamet izni süreçlerini tek elden, koordineli biçimde yöneterek çalışanınızın ve ailesinin yasal sürekliliğini güvence altına alıyoruz.",
    ],
    groups: [
      {
        title: "Sağlanan Hizmetler",
        items: [
          "İkamet izinleri",
          "İkamet uzatma işlemleri",
          "Adres kayıt işlemleri",
          "Çalışma izni süreçleri",
          "Aile ikamet izinleri",
        ],
      },
    ],
  },
  {
    slug: "yatirimci-yonetici-calisma-izinleri",
    icon: "spark",
    title: "Yatırımcı ve Yönetici Çalışma İzinleri",
    navLabel: "Yatırımcı ve Yönetici Çalışma İzinleri",
    summary: "Yatırımcı ve üst düzey yönetici profillerine özel, dosya bazlı çalışma izni çözümleri sunuyoruz.",
    metaDescription: "Türkiye'de yatırımcı ve yönetici çalışma izinleri: şirket yöneticileri, genel müdürler, bölge müdürleri ve yatırımcılar için dosya bazlı özel başvuru danışmanlığı.",
    intro: [
      "Türkiye'de yatırım yapan veya üst düzey yönetici pozisyonunda görev alan yabancılar için çalışma izni süreçleri, standart başvurulardan farklı dinamikler içerir. Bu profillerde şirketin yapısı, yatırımın niteliği ve yabancının görevi belirleyici olur.",
      "Şirket yöneticileri, genel müdürler, bölge müdürleri, üst düzey yöneticiler ve yatırımcılar için her dosyayı özel olarak değerlendirip en uygun başvuru stratejisini belirliyoruz.",
    ],
    groups: [
      {
        title: "Kapsam",
        items: [
          "Şirket yöneticileri",
          "Genel müdürler",
          "Yatırımcılar",
          "Bölge müdürleri",
          "Üst düzey yöneticiler",
        ],
      },
    ],
    outro: {
      title: "Süreç Yönetimi",
      text: "Her dosya şirket yapısı ve yabancının pozisyonu dikkate alınarak özel olarak değerlendirilmektedir.",
    },
  },
];

export function getCompanyService(slug: string) {
  return companyServices.find((s) => s.slug === slug);
}
