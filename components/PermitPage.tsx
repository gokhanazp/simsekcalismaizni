import { Faq, type QA } from "@/components/Faq";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export type PermitBlock = {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
  points: string[];
};

export type PermitData = {
  eyebrow: string;
  breadcrumb: string;
  title: string;
  intro: string;
  blocks: PermitBlock[];
  docsTitle: string;
  docs: string[];
  faq: QA[];
};

export function PermitPage({ data }: { data: PermitData }) {
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} desc={data.intro} breadcrumb={data.breadcrumb} />

      {/* Bloklar */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {data.blocks.map((b, i) => (
            <Reveal key={b.id} id={b.id} as="article">
              <div className="grid scroll-mt-28 gap-8 rounded-3xl border border-navy-100 bg-white p-7 shadow-soft sm:p-10 lg:grid-cols-[auto_1fr] lg:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                  <Icon name={b.icon} className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-navy-900">{b.title}</h2>
                  <p className="mt-3 max-w-3xl leading-relaxed text-navy-500">{b.desc}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                          <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        <span className="text-sm text-navy-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gerekli belgeler */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Hazırlık" title={data.docsTitle} desc="Başvuru sürecinde sizden talep edilebilecek temel belgeler. Tam liste, profilinize göre ön görüşmede netleştirilir." />
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {data.docs.map((d, i) => (
              <Reveal key={d} delay={(i % 2) * 80}>
                <div className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                    <Icon name="doc" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy-700">{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Sıkça Sorulan Sorular" title="Aklınızdaki Soruların Yanıtı" />
          </Reveal>
          <div className="mt-12">
            <Faq items={data.faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-white">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Sürecinizi <span className="text-gold-gradient">uzmanlara</span> bırakın.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-300">
            {site.experienceYears} yıllık tecrübemizle başvurunuzu baştan sona yönetelim. Ücretsiz ön görüşme için hemen ulaşın.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık</ButtonPrimary>
            <ButtonGhost href={site.whatsapp} light icon="whatsapp">WhatsApp'tan Yazın</ButtonGhost>
          </div>
        </div>
      </section>
    </>
  );
}
