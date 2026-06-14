import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type QA } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { residenceServices } from "@/lib/residenceServices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İkamet İzni Danışmanlığı",
  description:
    "Türkiye'de kısa dönem, aile, öğrenci ve uzun dönem ikamet izni başvuruları, uzatma, gerekli evraklar, adres değişikliği ve red/iptal işlemlerinde uzman danışmanlık.",
  alternates: { canonical: "/ikamet-izni" },
};

const faq: QA[] = [
  { q: "İkamet izni kaç günde çıkar?", a: "Başvuruların sonuçlanma süresi dosyanın durumuna göre değişmekle birlikte ortalama 30 ila 90 gün arasında sonuçlanmaktadır." },
  { q: "İkamet izni olmadan Türkiye'de kalınabilir mi?", a: "Vize veya yasal kalış süresi sona erdikten sonra ikamet izni olmadan Türkiye'de kalınamaz." },
  { q: "İkamet izni ile çalışabilir miyim?", a: "Hayır. İkamet izni çalışma hakkı sağlamaz. Çalışabilmek için ayrıca çalışma izni alınması gerekir." },
  { q: "İkamet izni reddedilirse ne yapılır?", a: "Ret gerekçesi incelenerek itiraz edilebilir veya eksiklikler giderilerek yeni başvuru yapılabilir." },
  { q: "İkamet izni uzatma ne zaman yapılmalıdır?", a: "Mevcut izin süresi sona ermeden önce, tercihen son 60 gün içerisinde başvuru yapılmalıdır." },
  { q: "İkamet izni için sağlık sigortası zorunlu mudur?", a: "Başvuru türüne göre değişmekle birlikte çoğu ikamet izni başvurusunda sağlık sigortası zorunludur." },
  { q: "İkamet izni ile ev satın alınabilir mi?", a: "Evet. İkamet izni sahibi yabancılar yasal şartları sağlamaları halinde Türkiye'de taşınmaz edinebilirler." },
  { q: "Çalışma izni olan kişinin ayrıca ikamet izni alması gerekir mi?", a: "Geçerli çalışma iznine sahip yabancılar ayrıca ikamet izni almaksızın Türkiye'de yasal olarak ikamet edebilirler." },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="İkamet İzni"
        breadcrumb="İkamet İzni"
        title="Türkiye'de İkamet İzni Danışmanlığı"
        desc="Kısa dönem, aile, öğrenci ve uzun dönem ikamet izni başvurularından uzatma, evrak ve red/iptal işlemlerine kadar tüm süreçlerde yanınızdayız."
      />

      {/* Hizmet kartları */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="İkamet İzni Hizmetlerimiz"
              title="Hangi Konuda Destek Arıyorsunuz?"
              desc="Aşağıdaki başlıklardan dilediğinize tıklayarak detaylı bilgi alabilirsiniz."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {residenceServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/ikamet-izni/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-lift"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 font-display text-xl font-semibold leading-snug text-navy-900">{s.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{s.summary}</p>
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
      <section id="sss" className="scroll-mt-28 bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Sıkça Sorulan Sorular" title="İkamet İzni Hakkında Merak Edilenler" />
          </Reveal>
          <div className="mt-12">
            <Faq items={faq} />
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
                İkamet izni sürecinizi <span className="text-gold-gradient">birlikte yönetelim.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-300">
                {site.experienceYears} yıllık tecrübemizle başvurudan sonuca kadar yanınızdayız.
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
