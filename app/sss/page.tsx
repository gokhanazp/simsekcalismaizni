import type { Metadata } from "next";
import { Faq, type QA } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Çalışma izni ve ikamet izni hakkında sık sorulan sorular: süreç, uzatma, gerekli belgeler, yurt dışı başvuru, ret durumu, şirket şartları ve daha fazlası.",
  alternates: { canonical: "/sss" },
};

const faq: QA[] = [
  {
    q: "Çalışma İzni Kaç Günde Çıkar?",
    a: "Çalışma izni başvurularının sonuçlanma süresi başvurunun türüne, dosyanın eksiksiz hazırlanmasına ve Bakanlığın yoğunluğuna göre değişiklik göstermektedir. Genel olarak eksiksiz yapılan başvurular 15 ila 30 gün arasında sonuçlanmaktadır. Eksik evrak veya ek bilgi talep edilmesi durumunda süreç uzayabilmektedir. Şimşek Danışmanlık olarak başvurularınızı eksiksiz hazırlayarak sürecin mümkün olan en kısa sürede tamamlanmasını sağlıyoruz.",
  },
  {
    q: "Çalışma İzni Olmadan Çalışılabilir Mi?",
    a: "Hayır. Türkiye'de yabancı uyruklu kişilerin yasal olarak çalışabilmesi için çalışma iznine sahip olmaları gerekmektedir. Çalışma izni olmadan çalışılması durumunda hem çalışan hem de işveren idari para cezalarıyla karşılaşabilir. Ayrıca yabancı personelin sınır dışı edilmesi veya gelecekteki başvurularının olumsuz etkilenmesi söz konusu olabilir.",
  },
  {
    q: "Çalışma İzni Uzatma Ne Zaman Yapılmalıdır?",
    a: "Çalışma izni uzatma başvurusu, mevcut çalışma izninin bitiş tarihinden en erken 60 gün önce ve izin süresi dolmadan önce yapılmalıdır. Süresi geçen çalışma izinlerinde hak kayıpları yaşanabileceğinden başvuruların zamanında yapılması büyük önem taşımaktadır. Uzatma işlemlerinde mevcut çalışma durumu ve SGK kayıtları da değerlendirilmektedir.",
  },
  {
    q: "İkamet İzni Olmadan Çalışma İzni Alınabilir Mi?",
    a: "Başvurunun şekline göre değişmektedir. Türkiye içerisinde yapılan çalışma izni başvurularında yabancının geçerli bir ikamet iznine sahip olması gerekebilir. Ancak yurt dışından yapılan çalışma izni başvurularında kişi kendi ülkesindeki Türk Konsolosluğu üzerinden başvuru yaparak çalışma izni alabilmektedir. Durumunuza uygun başvuru yönteminin belirlenmesi için uzman desteği alınması tavsiye edilir.",
  },
  {
    q: "Yabancı Personel Çalıştırmak İçin Şirket Şartları Nelerdir?",
    a: "Yabancı personel çalıştırmak isteyen işverenlerin belirli kriterleri sağlaması gerekmektedir. Şirketin faaliyetinin aktif olması, belirli bir sermaye yapısına sahip bulunması ve genel kural olarak her yabancı çalışan için en az 5 Türk vatandaşının istihdam edilmesi gerekmektedir. Ancak ihracat yapan şirketler, belirli sektörler ve özel durumlar için farklı değerlendirmeler yapılabilmektedir. Şirketinizin uygunluğunu önceden analiz ederek doğru başvuru stratejisi oluşturuyoruz.",
  },
  {
    q: "Ev Hizmetlerinde Çalışma İzni Almak Zor Mudur?",
    a: "Doğru şartlar sağlandığında ev hizmetlerinde çalışma izni alınması mümkündür. Çocuk bakımı, yaşlı bakımı, hasta bakımı veya ev yardımcılığı gibi alanlarda çalışacak yabancı personeller için başvuru yapılabilmektedir. İşverenin ve yabancı çalışanın durumuna göre gerekli evraklar hazırlanarak başvuru süreci yürütülmektedir. Başvurunun eksiksiz hazırlanması onay sürecinde büyük önem taşımaktadır.",
  },
  {
    q: "Çalışma İzni Reddedilirse Ne Yapılmalıdır?",
    a: "Çalışma izni başvurusunun reddedilmesi sürecin tamamen sona erdiği anlamına gelmez. Ret gerekçesi incelenerek itiraz hakkı kullanılabilir veya eksiklikler giderildikten sonra yeni bir başvuru yapılabilir. Ret nedenleri genellikle eksik evrak, mevzuata uygun olmayan durumlar veya şirket kriterlerinin karşılanmamasından kaynaklanmaktadır. Uzman değerlendirmesi ile uygun çözüm yolu belirlenmektedir.",
  },
  {
    q: "Yurt Dışından Çalışma İzni Başvurusu Nasıl Yapılır?",
    a: "Türkiye dışında bulunan yabancı personeller için çalışma izni başvuruları kişinin bulunduğu ülkedeki Türk Konsolosluğu veya Büyükelçiliği aracılığıyla yapılmaktadır. Yabancı çalışan konsolosluk başvurusunu yaptıktan sonra işveren Türkiye'de gerekli işlemleri tamamlar. Başvuru Bakanlık tarafından değerlendirildikten sonra onay verilmesi halinde kişi çalışma vizesi ile Türkiye'ye giriş yaparak yasal olarak çalışmaya başlayabilir.",
  },
  {
    q: "Çalışma İzni İçin Hangi Belgeler Gereklidir?",
    a: "Çalışma izni başvurularında pasaport, biyometrik fotoğraf, iş sözleşmesi, şirket evrakları ve başvuru türüne göre değişen ek belgeler talep edilmektedir. Eksik veya hatalı belge sunulması sürecin uzamasına veya başvurunun reddedilmesine neden olabilir. Bu nedenle başvuru öncesinde evrakların uzman kontrolünden geçirilmesi önemlidir.",
  },
  {
    q: "Çalışma İzni Olan Yabancı Ailesini Türkiye'ye Getirebilir Mi?",
    a: "Çalışma iznine sahip yabancıların eş ve çocukları belirli şartların sağlanması halinde aile ikamet izni başvurusunda bulunabilmektedir. Aile bireylerinin Türkiye'de yasal olarak kalabilmesi için gerekli başvuru süreçleri ayrıca yürütülmektedir.",
  },
  {
    q: "Çalışma İzni Olan Kişi İş Değiştirebilir Mi?",
    a: "Çalışma izinleri belirli bir işveren ve işyeri için düzenlenmektedir. İşveren değişikliği yapılacaksa yeni işveren tarafından yeniden çalışma izni başvurusu yapılması gerekmektedir. Doğrudan iş değişikliği yapılması mevzuata aykırılık oluşturabilir.",
  },
  {
    q: "İkamet İzni ile Çalışma İzni Arasındaki Fark Nedir?",
    a: "İkamet izni yabancıların Türkiye'de yasal olarak ikamet etmesini sağlar. Çalışma izni ise yabancıya Türkiye'de çalışma hakkı tanır. Çalışma izni sahibi kişiler ayrıca ikamet izni almaksızın Türkiye'de yasal olarak ikamet edebilirler. Ancak yalnızca ikamet iznine sahip olmak çalışma hakkı vermez.",
  },
  {
    q: "Çalışma İzni Başvurularında Neden Şimşek Danışmanlık?",
    a: "27 yıllık tecrübemiz, güncel mevzuat bilgimiz ve yüzlerce başarılı dosya deneyimimiz ile çalışma izni ve ikamet izni süreçlerini profesyonel olarak yönetiyoruz. Başvuru öncesi uygunluk analizi yapıyor, evrak hazırlıklarını tamamlıyor ve süreç sonuçlanıncaya kadar dosyanızı yakından takip ediyoruz. Amacımız başvurularınızın hızlı, güvenilir ve sorunsuz şekilde sonuçlanmasını sağlamaktır.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Sık Sorulan Sorular"
        breadcrumb="Sık Sorulan Sorular"
        title="Aklınızdaki Tüm Soruların Yanıtı"
        desc="Çalışma izni ve ikamet izni süreçleri hakkında en çok merak edilen soruları sizin için yanıtladık."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="S.S.S."
              title="Çalışma ve İkamet İzni Hakkında Merak Edilenler"
              desc="Aradığınız yanıtı bulamadıysanız bize ulaşın; uzman kadromuz tüm sorularınızı yanıtlasın."
            />
          </Reveal>
          <div className="mt-12">
            <Faq items={faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-center text-white sm:px-14">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Sorunuzun yanıtını <span className="text-gold-gradient">bulamadınız mı?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-300">
                Uzman danışmanlarımız durumunuza özel tüm sorularınızı ücretsiz yanıtlasın.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
                <ButtonGhost href={site.whatsapp} light icon="whatsapp">WhatsApp'tan Yazın</ButtonGhost>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
