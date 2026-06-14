import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { formatDate, posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Çalışma ve İkamet İzni Rehberleri",
  description:
    "Çalışma izni, ikamet izni ve yabancı personel istihdamı hakkında güncel rehberler, ipuçları ve mevzuat bilgileri.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        breadcrumb="Blog"
        title="Çalışma ve İkamet İzni Rehberleri"
        desc="Süreçleri daha iyi anlamanız için hazırladığımız güncel rehberler, ipuçları ve mevzuat bilgileri."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Öne çıkan */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition-all hover:shadow-lift lg:grid-cols-2"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-navy-900 p-10">
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl" />
                <Icon name="doc" className="relative h-24 w-24 text-gold-400/80" />
                <span className="absolute left-6 top-6 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-navy-950">
                  Öne Çıkan
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  <span>{featured.category}</span>
                  <span className="text-navy-300">•</span>
                  <span className="text-navy-400">{formatDate(featured.date)}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-navy-900 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-navy-500">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold text-steel-600">
                  Yazıyı Oku
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Diğer yazılar */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-lift"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-600">
                    <span>{p.category}</span>
                    <span className="text-navy-300">•</span>
                    <span className="text-navy-400">{p.readMin} dk okuma</span>
                  </div>
                  <h3 className="mt-3 flex-1 font-display text-xl font-semibold leading-snug text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-navy-50 pt-4">
                    <span className="text-xs text-navy-400">{formatDate(p.date)}</span>
                    <Icon name="arrow" className="h-4 w-4 text-steel-600 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
