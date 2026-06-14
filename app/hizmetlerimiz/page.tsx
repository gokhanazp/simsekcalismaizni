import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { process, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Çalışma izni, ikamet izni ve şirket danışmanlığı hizmetlerimiz: ilk başvuru, uzatma, yabancı personel, ev hizmetleri, aile/öğrenci ikamet izni, şirket kuruluşu, SGK ve ticaret sicil işlemleri.",
  alternates: { canonical: "/hizmetlerimiz" },
};

type Category = {
  icon: IconName;
  title: string;
  desc: string;
  items: { label: string; href: string }[];
};

const categories: Category[] = [
  {
    icon: "briefcase",
    title: "Çalışma İzni Hizmetleri",
    desc: "Yabancı personelin yasal istihdamı için tüm çalışma izni süreçleri.",
    items: [
      { label: "İlk Çalışma İzni Başvurusu", href: "/calisma-izni" },
      { label: "Çalışma İzni Uzatma", href: "/calisma-izni" },
      { label: "Şirket Ortakları İçin Çalışma İzni", href: "/sirketler-icin/yabanci-ortak-calisma-izni" },
      { label: "Yabancı Personel Çalışma İzni", href: "/sirketler-icin/yabanci-personel-calisma-izni" },
      { label: "Ev Hizmetlerinde Çalışma İzni", href: "/ev-hizmetleri/ev-hizmetlerinde-calisma-izni" },
      { label: "Çalışma İzni İptal ve Revize İşlemleri", href: "/calisma-izni" },
    ],
  },
  {
    icon: "id",
    title: "İkamet İzni Hizmetleri",
    desc: "Türkiye'de yasal kalış için tüm ikamet izni başvuru ve uzatma işlemleri.",
    items: [
      { label: "Kısa Dönem İkamet İzni", href: "/ikamet-izni/kisa-donem-ikamet-izni" },
      { label: "Aile İkamet İzni", href: "/ikamet-izni/aile-ikamet-izni" },
      { label: "Öğrenci İkamet İzni", href: "/ikamet-izni/ogrenci-ikamet-izni" },
      { label: "Uzun Dönem İkamet İzni", href: "/ikamet-izni/uzun-donem-ikamet-izni" },
      { label: "İkamet Uzatma İşlemleri", href: "/ikamet-izni/ikamet-izni-uzatma" },
    ],
  },
  {
    icon: "building",
    title: "Şirket Danışmanlığı",
    desc: "Yabancı yatırımcılar için şirket kuruluşu ve kurumsal danışmanlık.",
    items: [
      { label: "Şirket Kuruluşu", href: "/sirketler-icin/sirket-kurulusu-yabanci-ortakli-sirketler" },
      { label: "Yabancı Ortaklı Şirket Kuruluşu", href: "/sirketler-icin/sirket-kurulusu-yabanci-ortakli-sirketler" },
      { label: "Vergi ve Muhasebe Danışmanlığı", href: "/sirketler-icin" },
      { label: "SGK İşlemleri", href: "/sirketler-icin/insan-kaynaklari-sgk-danismanligi" },
      { label: "Ticaret Sicil İşlemleri", href: "/sirketler-icin/sirket-kurulusu-yabanci-ortakli-sirketler" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        breadcrumb="Hizmetlerimiz"
        title="Tüm Danışmanlık Hizmetlerimiz"
        desc="Çalışma izni, ikamet izni ve şirket danışmanlığı süreçlerinin her aşamasında uzman kadromuzla yanınızdayız."
      />

      {/* Kategoriler */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
                  {/* Kategori başlığı */}
                  <div className="relative overflow-hidden bg-navy-900 p-7 text-white">
                    <div className="bg-grid absolute inset-0 opacity-30" />
                    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-500/20 blur-2xl" />
                    <div className="relative flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-navy-800 text-gold-400">
                        <Icon name={c.icon} className="h-6 w-6" />
                      </span>
                      <div>
                        <h2 className="font-display text-xl font-bold leading-tight">{c.title}</h2>
                      </div>
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-navy-300">{c.desc}</p>
                  </div>

                  {/* Hizmet listesi */}
                  <ul className="flex-1 divide-y divide-navy-50 p-2">
                    {c.items.map((it) => (
                      <li key={it.label}>
                        <Link
                          href={it.href}
                          className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-navy-50"
                        >
                          <span className="flex items-center gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                              <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                            </span>
                            <span className="text-sm font-medium text-navy-800">{it.label}</span>
                          </span>
                          <Icon name="arrow" className="h-4 w-4 shrink-0 text-navy-300 transition-all group-hover:translate-x-1 group-hover:text-steel-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Nasıl Çalışıyoruz?"
              title="Şeffaf ve Takip Edilebilir Süreç"
              desc="Her aşamada bilgilendirilirsiniz; bürokrasiyi biz üstleniyoruz."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-gold-gradient">{p.step}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                      <Icon name="check" className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-center text-white sm:px-14">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Hangi hizmete ihtiyacınız olduğundan{" "}
                <span className="text-gold-gradient">emin değil misiniz?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-300">
                Ücretsiz ön görüşmede durumunuzu değerlendirelim, size en doğru çözümü önerelim.
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
