import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type QA } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { homeServices } from "@/lib/homeServices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ev Hizmetlerinde Çalışma İzni Danışmanlığı",
  description:
    "Yabancı çocuk, yaşlı, hasta bakıcısı ve ev yardımcısı için ev hizmetlerinde çalışma izni başvuruları, şartlar, gerekli evraklar, başvuru süreci ve uzatma işlemlerinde danışmanlık.",
  alternates: { canonical: "/ev-hizmetleri" },
};

const faq: QA[] = [
  { q: "Ev hizmetlerinde çalışma izni almak zor mudur?", a: "Gerekli şartlar sağlandığında başvuru yapılabilmektedir. Dosyanın doğru hazırlanması süreci kolaylaştırmaktadır." },
  { q: "Çocuk bakıcısı için çalışma izni alınabilir mi?", a: "Evet. Mevzuata uygun şartlar sağlanıyorsa yabancı çocuk bakıcısı için çalışma izni alınabilmektedir." },
  { q: "Yaşlı bakıcısı için sağlık raporu gerekir mi?", a: "Başvurunun niteliğine göre bazı durumlarda sağlık durumunu gösteren belgeler talep edilebilmektedir." },
  { q: "Ev hizmetlerinde çalışan yabancı sigortalı olmak zorunda mıdır?", a: "Evet. Çalışma izni onaylandıktan sonra yasal SGK işlemlerinin yapılması zorunludur." },
  { q: "Ev hizmetlerinde çalışma izni kaç günde çıkar?", a: "Dosyanın durumuna göre değişmekle birlikte başvurular genellikle 15-30 gün arasında sonuçlanmaktadır." },
  { q: "Turist vizesi ile gelen kişi için çalışma izni alınabilir mi?", a: "Yabancının mevcut statüsüne göre değerlendirme yapılmaktadır. Her dosya özel olarak incelenmelidir." },
  { q: "Çalışma izni olan bakıcı Türkiye'de yasal olarak ikamet edebilir mi?", a: "Evet. Geçerli çalışma izni bulunan yabancılar ayrıca ikamet izni almaksızın Türkiye'de yasal olarak kalabilmektedir." },
  { q: "Bakıcı değişikliği yapılırsa ne olur?", a: "Yeni yabancı personel için yeniden çalışma izni süreci yürütülmesi gerekmektedir." },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ev Hizmetleri"
        breadcrumb="Ev Hizmetleri"
        title="Ev Hizmetlerinde Çalışma İzni Danışmanlığı"
        desc="Yabancı çocuk, yaşlı, hasta bakıcısı ve ev yardımcısı istihdamında uygunluk, evrak, SGK ve Bakanlık süreçlerini uçtan uca yönetiyoruz."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Ev Hizmetleri Çözümlerimiz"
              title="Hangi Konuda Destek Arıyorsunuz?"
              desc="Aşağıdaki başlıklardan dilediğinize tıklayarak detaylı bilgi alabilirsiniz."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/ev-hizmetleri/${s.slug}`}
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

      <section id="sss" className="scroll-mt-28 bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Sıkça Sorulan Sorular" title="Ev Hizmetleri Hakkında Merak Edilenler" />
          </Reveal>
          <div className="mt-12">
            <Faq items={faq} />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-center text-white sm:px-14">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Evinizdeki bakım sürecini <span className="text-gold-gradient">yasal güvenceye alalım.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-300">
                {site.experienceYears} yıllık tecrübemizle başvurudan SGK işlemlerine kadar yanınızdayız.
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
