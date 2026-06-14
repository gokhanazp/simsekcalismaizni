import type { IconName } from "@/components/Icon";

export type ResidenceGroup = { title: string; items: string[] };
export type ResidenceNote = { title?: string; text: string };

export type ResidenceService = {
  slug: string;
  icon: IconName;
  title: string;
  navLabel: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  groups?: ResidenceGroup[];
  notes?: ResidenceNote[];
};

export const residenceServices: ResidenceService[] = [
  {
    slug: "ikamet-izni-nedir",
    icon: "id",
    title: "İkamet İzni Nedir?",
    navLabel: "İkamet İzni Nedir?",
    summary: "Yabancıların Türkiye'de yasal kalışı için Göç İdaresi tarafından verilen resmi izin belgesi.",
    metaDescription: "İkamet izni nedir, kimler almalıdır? Türkiye'de yasal kalış için Göç İdaresi Başkanlığı ikamet izni başvuru süreçleri hakkında bilmeniz gerekenler.",
    intro: [
      "İkamet izni, yabancı uyruklu kişilerin Türkiye'de yasal olarak kalabilmeleri için Göç İdaresi Başkanlığı tarafından verilen resmi izin belgesidir. Türkiye'de vize süresinden daha uzun süre kalmak isteyen yabancıların ikamet izni almaları gerekmektedir.",
      "Şimşek Danışmanlık olarak ikamet izni başvurularınızı eksiksiz hazırlıyor, randevu süreçlerinizi takip ediyor ve başvurunuzun sonuçlanmasına kadar yanınızda oluyoruz.",
    ],
  },
  {
    slug: "kisa-donem-ikamet-izni",
    icon: "calendar",
    title: "Kısa Dönem İkamet İzni",
    navLabel: "Kısa Dönem İkamet İzni",
    summary: "Taşınmaz sahibi, ticari bağlantısı olan veya uzun süre kalmak isteyen yabancılar için kısa dönem ikamet izni.",
    metaDescription: "Kısa dönem ikamet izni başvurusu: Türkiye'de ev sahibi, ticari faaliyet, turizm veya yatırım amaçlı kalan yabancılar için uygunluk, evrak ve başvuru danışmanlığı.",
    intro: [
      "Kısa dönem ikamet izni; Türkiye'de taşınmazı bulunanlar, ticari bağlantıları bulunanlar, turizm amaçlı kalanlar veya çeşitli nedenlerle uzun süre Türkiye'de yaşamak isteyen yabancılara verilmektedir.",
    ],
    groups: [
      {
        title: "Kimler Başvurabilir?",
        items: [
          "Türkiye'de ev sahibi olan yabancılar",
          "İş görüşmeleri için bulunan kişiler",
          "Ticari faaliyet yürütenler",
          "Turizm amacıyla uzun süre kalmak isteyenler",
          "Türkiye'de yatırım planlayan yabancılar",
        ],
      },
      {
        title: "Hizmetlerimiz",
        items: ["Uygunluk değerlendirmesi", "Evrak kontrolü", "Online başvuru", "Randevu planlaması", "Dosya takibi"],
      },
    ],
  },
  {
    slug: "aile-ikamet-izni",
    icon: "users",
    title: "Aile İkamet İzni",
    navLabel: "Aile İkamet İzni",
    summary: "Türk vatandaşlarının veya yasal yabancıların eş ve çocukları için aile ikamet izni başvuruları.",
    metaDescription: "Aile ikamet izni: Türk vatandaşının veya çalışma/ikamet izni sahibi yabancının eş ve çocukları için ikamet izni başvuru danışmanlığı.",
    intro: [
      "Türk vatandaşlarının veya Türkiye'de yasal olarak yaşayan yabancıların eşleri ve çocukları için düzenlenen ikamet izni türüdür.",
    ],
    groups: [
      {
        title: "Kimler Yararlanabilir?",
        items: [
          "Türk vatandaşının yabancı eşi",
          "Türk vatandaşının yabancı çocuğu",
          "Çalışma veya ikamet izni sahibi yabancıların aile bireyleri",
        ],
      },
      {
        title: "Sağladığı Avantajlar",
        items: [
          "Türkiye'de yasal ikamet",
          "Eğitim hizmetlerinden yararlanma",
          "Sağlık hizmetlerine erişim",
          "Uzun süreli yaşam planlaması",
        ],
      },
    ],
  },
  {
    slug: "ogrenci-ikamet-izni",
    icon: "doc",
    title: "Öğrenci İkamet İzni",
    navLabel: "Öğrenci İkamet İzni",
    summary: "Üniversite, yüksek lisans, doktora ve dil eğitimi alan yabancı öğrenciler için ikamet izni.",
    metaDescription: "Öğrenci ikamet izni başvurusu: üniversite, yüksek lisans, doktora ve dil eğitimi alan yabancı öğrenciler için ilk başvuru, evrak ve uzatma danışmanlığı.",
    intro: [
      "Türkiye'de üniversite, yüksek lisans, doktora veya diğer eğitim kurumlarında öğrenim görecek yabancı öğrenciler için düzenlenmektedir.",
    ],
    groups: [
      {
        title: "Kapsam",
        items: ["Üniversite öğrencileri", "Yüksek lisans öğrencileri", "Doktora öğrencileri", "Dil eğitimi alan öğrenciler"],
      },
      {
        title: "Danışmanlık Hizmetlerimiz",
        items: ["İlk başvuru işlemleri", "Evrak hazırlığı", "Göç İdaresi süreçleri", "Uzatma işlemleri"],
      },
    ],
  },
  {
    slug: "uzun-donem-ikamet-izni",
    icon: "shield",
    title: "Uzun Dönem İkamet İzni",
    navLabel: "Uzun Dönem İkamet İzni",
    summary: "Şartları sağlayan yabancılar için süresiz ikamet hakkı sunan uzun dönem ikamet izni.",
    metaDescription: "Uzun dönem ikamet izni: Türkiye'de kesintisiz ikamet eden yabancılar için süresiz oturum şartları, avantajları ve başvuru danışmanlığı.",
    intro: [
      "Türkiye'de uzun yıllardır yasal olarak yaşayan ve gerekli şartları sağlayan yabancılar için süresiz olarak verilen ikamet izni türüdür.",
    ],
    groups: [
      {
        title: "Şartlar",
        items: [
          "Uzun süre kesintisiz ikamet",
          "Kamu düzeni açısından engel bulunmaması",
          "Düzenli gelir durumunun bulunması",
          "Sosyal yardım bağımlılığının olmaması",
        ],
      },
      {
        title: "Avantajları",
        items: ["Süresiz oturum hakkı", "Uzatma zorunluluğunun olmaması", "Daha güçlü yasal statü"],
      },
    ],
  },
  {
    slug: "ikamet-izni-uzatma",
    icon: "refresh",
    title: "İkamet İzni Uzatma",
    navLabel: "İkamet İzni Uzatma",
    summary: "Mevcut ikamet izninizi süresi dolmadan, doğru zamanlama ile yeniliyoruz.",
    metaDescription: "İkamet izni uzatma (yenileme): başvuru zamanlaması, son 60 gün kuralı ve süreç yönetimi. Cezai yaptırımları önlemek için zamanında başvuru.",
    intro: [
      "Mevcut ikamet izni süresi dolmadan önce yapılan yenileme başvurularıdır.",
    ],
    notes: [
      {
        title: "Neden Önemlidir?",
        text: "İkamet izni süresinin sona ermesi durumunda yabancı kişi cezai yaptırımlarla karşılaşabilir ve ileride yapılacak başvurular olumsuz etkilenebilir.",
      },
      {
        title: "Ne Zaman Başvurulmalı?",
        text: "İzin bitim tarihinden 60 gün önce uzatma işlemlerine başlanması tavsiye edilmektedir.",
      },
    ],
  },
  {
    slug: "ikamet-izni-gerekli-evraklar",
    icon: "doc",
    title: "İkamet İzni İçin Gerekli Evraklar",
    navLabel: "İkamet İzni İçin Gerekli Evraklar",
    summary: "Başvuru türüne göre gereken belgeler; size özel evrak listesini biz hazırlıyoruz.",
    metaDescription: "İkamet izni için gerekli evraklar: pasaport, biyometrik fotoğraf, sağlık sigortası, adres ve mali yeterlilik belgeleri. Başvuruya özel evrak listesi.",
    intro: [
      "Başvuru türüne göre değişmekle birlikte genel olarak aşağıdaki belgeler talep edilmektedir:",
    ],
    groups: [
      {
        title: "Gerekli Belgeler",
        items: ["Pasaport", "Biyometrik fotoğraf", "Sağlık sigortası", "Adres bilgileri", "Mali yeterlilik beyanı", "Başvuru formu"],
      },
    ],
    notes: [
      { text: "Uzmanlarımız başvurunuza uygun evrak listesini özel olarak hazırlamaktadır." },
    ],
  },
  {
    slug: "adres-degisikligi-bildirim",
    icon: "map",
    title: "Adres Değişikliği ve Bildirim İşlemleri",
    navLabel: "Adres Değişikliği ve Bildirim İşlemleri",
    summary: "İkamet izni sahiplerinin adres değişikliği bildirimlerini zamanında ve eksiksiz takip ediyoruz.",
    metaDescription: "İkamet izni adres değişikliği ve bildirim işlemleri: adres güncellemelerinin ilgili kurumlara zamanında bildirilmesi ve profesyonel takibi.",
    intro: [
      "İkamet izni sahibi yabancıların adres değişikliği durumunda ilgili kurumlara bildirim yapmaları gerekmektedir.",
      "Adres değişikliklerinin zamanında bildirilmemesi ilerleyen süreçlerde sorun oluşturabilmektedir.",
      "Bu işlemler tarafımızca profesyonel olarak takip edilmektedir.",
    ],
  },
  {
    slug: "ikamet-izni-red-iptal",
    icon: "shield",
    title: "İkamet İzni Red ve İptal İşlemleri",
    navLabel: "İkamet İzni Red ve İptal İşlemleri",
    summary: "Reddedilen veya iptal edilen ikamet izinlerinde itiraz ve yeni başvuru süreçlerini planlıyoruz.",
    metaDescription: "İkamet izni red ve iptal işlemleri: ret/iptal nedenleri, itiraz süreçleri ve yeni başvuru planlaması için profesyonel danışmanlık.",
    intro: [
      "Başvurular çeşitli nedenlerle reddedilebilir veya mevcut ikamet izinleri iptal edilebilir.",
    ],
    groups: [
      {
        title: "En Sık Karşılaşılan Nedenler",
        items: ["Eksik evrak", "Yanlış beyan", "Adres problemleri", "Yasal şartların sağlanmaması"],
      },
      {
        title: "Çözüm Süreci",
        items: ["Ret kararının incelenmesi", "İtiraz süreçleri", "Yeni başvuru planlaması", "Hukuki danışmanlık yönlendirmesi"],
      },
    ],
  },
];

export function getResidenceService(slug: string) {
  return residenceServices.find((s) => s.slug === slug);
}
