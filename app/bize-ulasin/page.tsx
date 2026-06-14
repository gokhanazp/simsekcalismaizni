import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bize Ulaşın",
  description:
    "Çalışma izni ve ikamet izni süreçleriniz için ücretsiz ön görüşme. Telefon, WhatsApp veya iletişim formu ile bize ulaşın.",
  alternates: { canonical: "/bize-ulasin" },
};

const channels = [
  { icon: "phone", title: "Telefon", value: site.phone, href: site.phoneHref, note: "Hafta içi 09:00 - 18:00" },
  { icon: "whatsapp", title: "WhatsApp", value: "Hemen Yazın", href: site.whatsapp, note: "Genellikle aynı gün dönüş" },
  { icon: "mail", title: "E-posta", value: site.email, href: `mailto:${site.email}`, note: "Detaylı talepleriniz için" },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Bize Ulaşın"
        breadcrumb="Bize Ulaşın"
        title="Ücretsiz Ön Görüşme İçin İletişime Geçin"
        desc="Durumunuzu dinleyelim, size en doğru izin türünü ve yol haritasını ücretsiz olarak sunalım."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
          {/* Sol: kanallar */}
          <div>
            <Reveal>
              <span className="eyebrow text-gold-600"><span className="h-px w-6 bg-current opacity-60" />İletişim Kanalları</span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900">Size En Uygun Yoldan Ulaşın</h2>
              <p className="mt-4 leading-relaxed text-navy-500">
                Aşağıdaki kanallardan bize ulaşabilir veya formu doldurarak talebinizi iletebilirsiniz.
                Uzman danışmanlarımız en kısa sürede size dönüş yapacaktır.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lift"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-navy-400">{c.title}</div>
                      <div className="font-display text-lg font-semibold text-navy-900">{c.value}</div>
                      <div className="text-xs text-navy-400">{c.note}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-navy-50 p-5">
                <Icon name="map" className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                <div>
                  <div className="font-semibold text-navy-900">Adres</div>
                  <p className="text-sm text-navy-500">{site.address}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sağ: form */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-lift sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-navy-900">Danışmanlık Talep Formu</h2>
              <p className="mt-2 text-sm text-navy-500">Formu doldurun, size hızlıca dönüş yapalım.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
