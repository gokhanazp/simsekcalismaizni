import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type QA } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { companyServices } from "@/lib/companyServices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Şirketler İçin Çalışma İzni ve Kurumsal Danışmanlık",
  description:
    "Şirketler için yabancı personel çalışma izni, yabancı ortak izinleri, şirket uygunluk analizi, İK & SGK danışmanlığı, şirket kuruluşu ve yatırımcı/yönetici izinlerinde uçtan uca kurumsal danışmanlık.",
  alternates: { canonical: "/sirketler-icin" },
};

const faq: QA[] = [
  { q: "Şirketler yabancı personel çalıştırabilir mi?", a: "Evet. Mevzuatta belirtilen şartları sağlayan şirketler yabancı personel istihdam edebilir." },
  { q: "Her yabancı çalışan için 5 Türk personel şartı var mı?", a: "Genel kural olarak uygulanmakla birlikte sektör, yatırım miktarı ve şirket özelliklerine göre istisnalar bulunabilmektedir." },
  { q: "Yabancı ortak çalışma izni almak zorunda mıdır?", a: "Şirket içerisinde aktif görev alacak yabancı ortakların çoğu durumda çalışma izni alması gerekmektedir." },
  { q: "Çalışma izni başvurusu reddedilirse ne olur?", a: "Ret gerekçesi incelenerek itiraz veya yeni başvuru süreci planlanabilir." },
  { q: "İhracat yapan şirketlerde çalışma izni almak daha kolay mıdır?", a: "İhracat hacmi, döviz girdisi ve şirket faaliyetleri Bakanlık değerlendirmesinde olumlu unsurlar arasında yer alabilmektedir." },
  { q: "Şirket kuruluşu ile birlikte çalışma izni alınabilir mi?", a: "Uygun şartlar sağlandığında şirket kuruluşu ve çalışma izni süreçleri birlikte planlanabilmektedir." },
  { q: "Yabancı personelin ailesi de Türkiye'ye gelebilir mi?", a: "Gerekli şartların sağlanması halinde aile ikamet izni başvuruları yapılabilmektedir." },
  { q: "Çalışma izni olan yabancı başka şirkette çalışabilir mi?", a: "Hayır. Çalışma izinleri belirli işveren ve görev için düzenlenmektedir. İşveren değişikliğinde yeni başvuru yapılması gerekir." },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Şirketler İçin"
        breadcrumb="Şirketler İçin"
        title="Şirketler İçin Çalışma İzni ve Kurumsal Danışmanlık"
        desc="Yabancı personel istihdamından şirket kuruluşuna, SGK danışmanlığından yatırımcı izinlerine kadar kurumsal süreçlerinizi uçtan uca yönetiyoruz."
      />

      {/* Hizmet kartları */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Kurumsal Hizmetlerimiz"
              title="Şirketinizin İhtiyacına Özel Çözümler"
              desc="Aşağıdaki başlıklardan dilediğinize tıklayarak detaylı bilgi alabilirsiniz."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/sirketler-icin/${s.slug}`}
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
            <SectionHeading eyebrow="Sıkça Sorulan Sorular" title="Şirketlerin En Çok Sorduğu Sorular" />
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
                Şirketinizin sürecini <span className="text-gold-gradient">birlikte planlayalım.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-300">
                {site.experienceYears} yıllık kurumsal tecrübemizle başvurudan SGK süreçlerine kadar yanınızdayız.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonPrimary href="/bize-ulasin">Ücretsiz Kurumsal Görüşme</ButtonPrimary>
                <ButtonGhost href={site.whatsapp} light icon="whatsapp">WhatsApp'tan Yazın</ButtonGhost>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
