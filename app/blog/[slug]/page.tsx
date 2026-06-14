import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ButtonPrimary } from "@/components/ui";
import { formatDate, getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Başlık */}
      <section className="relative overflow-hidden bg-navy-900 pb-16 pt-36 text-white sm:pt-40">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-24 -top-10 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex items-center gap-2 text-sm text-navy-300">
            <Link href="/" className="hover:text-gold-300">Ana Sayfa</Link>
            <span className="text-gold-500">/</span>
            <Link href="/blog" className="hover:text-gold-300">Blog</Link>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-gold-400">
            <span>{post.category}</span>
            <span className="text-navy-500">•</span>
            <span className="text-navy-300">{formatDate(post.date)}</span>
            <span className="text-navy-500">•</span>
            <span className="text-navy-300">{post.readMin} dk okuma</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* İçerik */}
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="border-l-4 border-gold-400 pl-5 text-lg font-medium leading-relaxed text-navy-700">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-5">
            {post.content.map((b, i) => {
              if (b.type === "h2")
                return <h2 key={i} className="pt-4 font-display text-2xl font-semibold text-navy-900">{b.text}</h2>;
              if (b.type === "ul")
                return (
                  <ul key={i} className="space-y-2.5">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-navy-600">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                          <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              return <p key={i} className="leading-relaxed text-navy-600">{b.text}</p>;
            })}
          </div>

          {/* CTA kutusu */}
          <div className="mt-12 rounded-3xl border border-navy-100 bg-navy-50 p-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-navy-900">Sürecinizde yardıma mı ihtiyacınız var?</h3>
            <p className="mx-auto mt-2 max-w-md text-navy-500">
              Uzman kadromuzla başvurunuzu baştan sona yönetelim. Ücretsiz ön görüşme için ulaşın.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
            </div>
          </div>
        </div>
      </article>

      {/* İlgili yazılar */}
      <section className="border-t border-navy-100 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-display text-xl font-semibold text-navy-900">İlgili Yazılar</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-gold-600">{p.category}</div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-steel-600">
                  Oku <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
