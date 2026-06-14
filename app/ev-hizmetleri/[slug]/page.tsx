import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary } from "@/components/ui";
import { getHomeService, homeServices } from "@/lib/homeServices";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return homeServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getHomeService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/ev-hizmetleri/${s.slug}` },
    openGraph: { title: `${s.title} | ${site.name}`, description: s.metaDescription, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getHomeService(slug);
  if (!s) notFound();

  const related = homeServices.filter((x) => x.slug !== s.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    description: s.metaDescription,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "TR",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Başlık */}
      <section className="relative overflow-hidden bg-navy-900 pb-16 pt-36 text-white sm:pt-40">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-24 -top-10 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-steel-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-navy-300">
            <Link href="/" className="hover:text-gold-300">Ana Sayfa</Link>
            <span className="text-gold-500">/</span>
            <Link href="/ev-hizmetleri" className="hover:text-gold-300">Ev Hizmetleri</Link>
            <span className="text-gold-500">/</span>
            <span className="text-white">{s.title}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold-500/30 bg-navy-800 text-gold-400">
              <Icon name={s.icon} className="h-7 w-7" />
            </span>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {s.title}
            </h1>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {s.intro.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "border-l-4 border-gold-400 pl-5 text-lg font-medium leading-relaxed text-navy-700" : "leading-relaxed text-navy-600"}
              >
                {p}
              </p>
            ))}
          </div>

          {s.groups && (
            <div className={`mt-10 grid gap-5 ${s.groups.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {s.groups.map((g) => (
                <Reveal key={g.title}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:p-7">
                    <h2 className="font-display text-lg font-semibold text-navy-900">{g.title}</h2>
                    <ul className="mt-4 space-y-2.5">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm text-navy-700">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {s.steps && (
            <div className="mt-10 space-y-4">
              {s.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <div className="flex items-start gap-5 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft sm:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-display text-lg font-bold text-gold-400">
                      {i + 1}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold text-navy-900">{step.title}</h2>
                      <p className="mt-1 leading-relaxed text-navy-600">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {s.notes && (
            <div className="mt-8 space-y-4">
              {s.notes.map((n, i) => (
                <div key={i} className="rounded-2xl border-l-4 border-gold-400 bg-navy-50 p-6">
                  {n.title && (
                    <h2 className="mb-1.5 font-display text-lg font-semibold text-navy-900">{n.title}</h2>
                  )}
                  <p className="leading-relaxed text-navy-600">{n.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA kutusu */}
          <div className="mt-12 rounded-3xl bg-navy-50 p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-navy-900">Bu konuda destek mi istiyorsunuz?</h2>
            <p className="mx-auto mt-2 max-w-md text-navy-500">
              Uzman kadromuzla sürecinizi baştan sona yönetelim. Ücretsiz ön görüşme için ulaşın.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
              <ButtonGhost href={site.whatsapp} icon="whatsapp">WhatsApp'tan Yazın</ButtonGhost>
            </div>
          </div>
        </div>
      </section>

      {/* İlgili hizmetler */}
      <section className="border-t border-navy-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-display text-xl font-semibold text-navy-900">İlgili Ev Hizmetleri Konuları</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/ev-hizmetleri/${r.slug}`}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-navy-900">{r.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-steel-600">
                  İncele <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
