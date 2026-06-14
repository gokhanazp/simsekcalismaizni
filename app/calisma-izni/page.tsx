import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type QA } from "@/components/Faq";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çalışma İzni Danışmanlığı — Türkiye'de Çalışma İzni Nasıl Alınır?",
  description:
    "Türkiye'de çalışma izni nasıl alınır? Başvuru aşamaları, gerekli evraklar, değerlendirme süreci ve çalışma izni kartı. Yabancı personel istihdamında 27 yıllık tecrübe.",
  alternates: { canonical: "/calisma-izni" },
};

type Step = { title: string; body: string[]; list?: string[]; listOutro?: string };

const steps: Step[] = [
  {
    title: "İşveren ile Çalışma İlişkisinin Kurulması",
    body: [
      "Çalışma izni başvurularında ilk aşama, yabancı personelin Türkiye'de faaliyet gösteren bir işveren tarafından istihdam edilmesidir. Başvuruların büyük bölümü işveren tarafından gerçekleştirilmekte olup, yabancı personel ve işveren birlikte süreci yürütmektedir.",
    ],
  },
  {
    title: "Gerekli Evrakların Hazırlanması",
    body: [
      "Başvuru için talep edilen belgeler; yabancının vatandaşlığına, mevcut ikamet durumuna, çalışacağı pozisyona ve sektörüne göre değişiklik gösterebilir. Bu nedenle başvuru öncesinde güncel evrak listesinin kontrol edilmesi önemlidir.",
      "Genel olarak;",
    ],
    list: [
      "Pasaport ve kimlik bilgileri",
      "Biyometrik fotoğraf",
      "Diploma veya mesleki yeterlilik belgeleri (gerekli hallerde)",
      "İş sözleşmesi",
      "Şirket evrakları",
    ],
    listOutro: "gibi belgeler talep edilebilmektedir.",
  },
  {
    title: "Çalışma İzni Başvurusunun Yapılması",
    body: [
      "En az 6 ay süreli geçerli ikamet izni bulunan yabancılar için başvurular Türkiye içerisinden yapılabilmektedir.",
      "Geçerli ikamet izni bulunmayan veya yurt dışında bulunan yabancılar ise ilk başvurularını ikamet ettikleri ülkedeki Türk Konsolosluğu aracılığıyla gerçekleştirmektedir.",
      "Başvuru süreci, Çalışma ve Sosyal Güvenlik Bakanlığı sistemi üzerinden elektronik ortamda yürütülmektedir.",
    ],
  },
  {
    title: "Değerlendirme Süreci",
    body: [
      "Başvuru dosyası ilgili kurumlar tarafından mevzuat kapsamında incelenir. İşyerinin yasal şartları taşıyıp taşımadığı, yabancı personelin görev tanımı ve başvuru kriterlerinin uygunluğu değerlendirilir.",
      "Eksik belge bulunması halinde ek bilgi veya belge talep edilebilir.",
    ],
  },
  {
    title: "Onay ve Çalışma İzni Kartının Düzenlenmesi",
    body: [
      "Başvurunun olumlu sonuçlanması halinde ilgili harç ve değerli kağıt bedelleri yatırılır. Ödeme işlemlerinin tamamlanmasının ardından çalışma izni kartı düzenlenerek PTT aracılığıyla işveren adresine gönderilir.",
      "Çalışma izni kartı, yabancı kişinin Türkiye'de yasal olarak çalışmasına olanak sağladığı gibi, geçerlilik süresi boyunca ikamet hakkı da tanımaktadır.",
    ],
  },
];

const relatedServices: { icon: IconName; title: string; desc: string; href: string }[] = [
  {
    icon: "users",
    title: "Yabancı Personel Çalışma İzni",
    desc: "Şirketlerin yabancı uyruklu personel istihdamı için uçtan uca başvuru yönetimi.",
    href: "/sirketler-icin/yabanci-personel-calisma-izni",
  },
  {
    icon: "briefcase",
    title: "Şirket Ortakları İçin Çalışma İzni",
    desc: "Şirkette ortak olan yabancıların aktif görev alabilmesi için çalışma izni.",
    href: "/sirketler-icin/yabanci-ortak-calisma-izni",
  },
  {
    icon: "home",
    title: "Ev Hizmetlerinde Çalışma İzni",
    desc: "Yabancı bakıcı ve ev yardımcısı istihdamı için çalışma izni süreçleri.",
    href: "/ev-hizmetleri/ev-hizmetlerinde-calisma-izni",
  },
];

const faq: QA[] = [
  { q: "Çalışma izni başvurusu ne kadar sürer?", a: "Başvuru türüne ve evrakların eksiksizliğine göre değişmekle birlikte, genellikle birkaç hafta içinde sonuçlanır. Süreç boyunca durumu sizin adınıza takip ederiz." },
  { q: "Yurt dışındayken çalışma izni başvurusu yapabilir miyim?", a: "Evet. Geçerli ikamet izni bulunmayan veya yurt dışında olan yabancılar ilk başvurularını ikamet ettikleri ülkedeki Türk Konsolosluğu aracılığıyla yapabilir; tüm süreci uçtan uca yönetiyoruz." },
  { q: "Çalışma izni ile ikamet izni aynı şey mi?", a: "Çalışma izni kartı, geçerlilik süresi boyunca aynı zamanda ikamet hakkı da tanır. Ancak başvuru süreçleri ve şartları farklıdır; profilinize uygun doğru yolu ön görüşmede netleştiriyoruz." },
  { q: "Türkiye içinden başvuru için hangi şart aranır?", a: "En az 6 ay süreli geçerli ikamet izni bulunan yabancılar için başvurular Türkiye içerisinden yapılabilmektedir." },
  { q: "İzin uzatma başvurusunu ne zaman yapmalıyım?", a: "İzin süresi dolmadan önce, mevzuatın öngördüğü süre içinde yapılması gerekir. Zamanlamayı sizin için takip ediyoruz." },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Türkiye'de Çalışma İzni Nasıl Alınır?",
  description:
    "Türkiye'de yabancı uyruklu kişiler için çalışma izni başvuru adımları.",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body.join(" "),
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <PageHero
        eyebrow="Çalışma İzni"
        breadcrumb="Çalışma İzni"
        title="Türkiye'de Çalışma İzni Danışmanlığı"
        desc="İlk başvurudan kart teslimine kadar, yabancı personelin yasal istihdam sürecini uçtan uca yönetiyoruz."
      />

      {/* Rehber */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Türkiye'de Çalışma İzni Nasıl Alınır?
            </h2>
            <p className="mt-5 border-l-4 border-gold-400 pl-5 text-lg font-medium leading-relaxed text-navy-700">
              Türkiye'de yasal olarak çalışmak isteyen yabancı uyruklu kişilerin çalışma izni alması zorunludur.
              Çalışma izni, yabancıların Türkiye'de belirli bir işveren nezdinde yasal olarak çalışabilmelerini
              sağlayan resmi bir izin belgesidir. Başvuru süreci yabancının mevcut statüsüne, ikamet durumuna,
              çalışacağı sektöre ve vatandaşlığına göre farklılık gösterebilir.
            </p>
          </Reveal>

          {/* Adımlar */}
          <div className="mt-10 space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:p-7">
                  <div className="flex items-start gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-display text-lg font-bold text-gold-400">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold text-navy-900 sm:text-xl">{step.title}</h3>
                      <div className="mt-3 space-y-3">
                        {step.body.map((p, k) => (
                          <p key={k} className="leading-relaxed text-navy-600">{p}</p>
                        ))}
                      </div>
                      {step.list && (
                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {step.list.map((it) => (
                            <li key={it} className="flex items-start gap-3 text-sm text-navy-700">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                              </span>
                              {it}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.listOutro && <p className="mt-3 leading-relaxed text-navy-600">{step.listOutro}</p>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Neden profesyonel takip */}
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
              <div className="relative">
                <h3 className="font-display text-2xl font-bold">
                  Sürecin Profesyonel Takibi <span className="text-gold-gradient">Neden Önemlidir?</span>
                </h3>
                <p className="mt-4 leading-relaxed text-navy-300">
                  Çalışma izni başvuruları işverenler tarafından doğrudan yapılabilmektedir. Ancak mevzuatın sık
                  güncellenmesi, evrak süreçleri ve teknik başvuru aşamaları nedeniyle hatalı veya eksik başvurular
                  zaman kaybına ve ret kararlarına neden olabilmektedir.
                </p>
                <p className="mt-4 leading-relaxed text-navy-300">
                  Şimşek Danışmanlık olarak {site.experienceYears} yıllık tecrübemizle çalışma izni, ikamet izni ve
                  yabancı personel istihdam süreçlerinde başvuru öncesinden kart teslimine kadar tüm aşamalarda
                  danışmanlık hizmeti sunuyoruz.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
                  <ButtonGhost href={site.whatsapp} light icon="whatsapp">WhatsApp'tan Yazın</ButtonGhost>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* İlgili hizmetler */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Çalışma İzni Hizmetlerimiz"
              title="İhtiyacınıza Uygun Çalışma İzni Çözümü"
              desc="Profilinize uygun başlığı seçerek detaylı bilgi alabilirsiniz."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-lift"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-navy-900">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-steel-600">
                    Detaylı Bilgi
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Sıkça Sorulan Sorular" title="Çalışma İzni Hakkında Merak Edilenler" />
          </Reveal>
          <div className="mt-12">
            <Faq items={faq} />
          </div>
        </div>
      </section>
    </>
  );
}
