import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Şimşek Danışmanlık: 27 yıllık tecrübeyle çalışma izni, ikamet izni ve yabancı personel danışmanlığı. Binlerce başarılı başvuru, uzman kadro ve şeffaf hizmet anlayışı.",
  alternates: { canonical: "/hakkimizda" },
};

const reasons: { icon: IconName; title: string }[] = [
  { icon: "star", title: "27 Yıllık Sektör Tecrübesi" },
  { icon: "users", title: "Uzman Danışman Kadro" },
  { icon: "check", title: "Binlerce Başarılı Başvuru" },
  { icon: "doc", title: "Güncel Mevzuat Takibi" },
  { icon: "clock", title: "Hızlı İletişim ve Süreç Yönetimi" },
  { icon: "shield", title: "Şeffaf Hizmet Anlayışı" },
  { icon: "whatsapp", title: "WhatsApp Destek Hattı" },
  { icon: "building", title: "Kurumsal Çözüm Ortaklığı" },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        breadcrumb="Hakkımızda"
        title="27 Yıllık Tecrübe ile Güvenilir Danışmanlık"
        desc="Çalışma izni, ikamet izni ve yabancı personel danışmanlığı alanlarında uzun yıllardır yanınızdayız."
      />

      {/* Hikaye */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <Reveal>
            <Eyebrow>Şimşek Çalışma İzni Danışmanlık</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Güvenilir, şeffaf ve <span className="text-gold-gradient">sonuç odaklı danışmanlık.</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-navy-600">
              <p className="text-lg">
                Şimşek Çalışma İzni Danışmanlık olarak, yabancıların Türkiye'de yasal çalışma ve ikamet
                süreçlerinde profesyonel danışmanlık hizmeti sunuyoruz.
              </p>
              <p>
                27 yılı aşkın mesleki tecrübemiz ve mevzuata hâkimiyetimizle; çalışma izni başvuruları,
                ikamet izni işlemleri, ev hizmetleri personel başvuruları, şirketler için yabancı personel
                izinleri ve başvuru sonrası takip süreçlerinde müşterilerimize güvenilir, şeffaf ve sonuç
                odaklı destek sağlıyoruz.
              </p>
              <p>
                Başvuru sürecinin her aşamasında gerekli evrakların hazırlanması, sistem başvurularının
                yapılması, eksikliklerin giderilmesi ve kurumlarla olan yazışmaların takibi tarafımızca
                titizlikle yürütülmektedir.
              </p>
              <p>
                Amacımız; kişi ve firmaların mevzuata uygun, doğru ve hızlı şekilde işlem yapmasını sağlamak,
                başvuru sürecinde oluşabilecek zaman kaybı ve hataların önüne geçmektir.
              </p>
              <p className="font-semibold text-navy-800">
                Şimşek Çalışma İzni Danışmanlık olarak, güvenilir hizmet anlayışıyla yanınızdayız.
              </p>
            </div>
            <div className="mt-8">
              <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
            </div>
          </Reveal>

          {/* İstatistik kartları */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border border-navy-100 bg-white p-7 text-center shadow-soft ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
                >
                  <div className="font-display text-4xl font-extrabold text-navy-900">
                    <span className="text-gold-gradient">{s.value}</span>{s.suffix}
                  </div>
                  <div className="mt-2 text-sm font-medium text-navy-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Neden Biz?"
              title="Bizi Tercih Etmeniz İçin 8 Neden"
              desc="Güvenilir, hızlı ve şeffaf bir danışmanlık deneyimi sunuyoruz."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={r.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold leading-snug text-navy-900">{r.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Sürecinizi <span className="text-gold-gradient">güvenilir ellere</span> bırakın.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-500">
            {site.experienceYears} yıllık tecrübemizle başvurunuzu baştan sona yönetelim. Ücretsiz ön görüşme için ulaşın.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonPrimary href="/bize-ulasin">Bize Ulaşın</ButtonPrimary>
            <ButtonGhost href={site.whatsapp} icon="whatsapp">WhatsApp'tan Yazın</ButtonGhost>
          </div>
        </div>
      </section>
    </>
  );
}
