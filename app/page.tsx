import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonGhost, ButtonPrimary, Eyebrow, SectionHeading } from "@/components/ui";
import { process, services, site, stats } from "@/lib/site";

const trustFeatures = [
  { icon: "user", title: "Uzman Kadro", desc: "Alanında deneyimli uzman danışmanlık" },
  { icon: "clock", title: "Hızlı İşlem", desc: "Evrak takibi ve hızlı başvuru süreçleri" },
  { icon: "shield", title: "Güvenilir Hizmet", desc: "Yasal mevzuata uygun %100 güvenilir hizmet" },
  { icon: "doc", title: "Sonuç Odaklı", desc: "Başvurularınızın takibini titizlikle yapıyoruz" },
] as const;

const whyUs = [
  { icon: "spark", title: "Uçtan Uca Yönetim", desc: "İlk görüşmeden belgelerin teslimine kadar tüm süreci sizin adınıza yürütüyoruz." },
  { icon: "shield", title: "Yasal Güvence", desc: "Güncel mevzuata tam uyumlu, şeffaf ve eksiksiz başvuru süreci." },
  { icon: "clock", title: "Zaman Kazandırır", desc: "Karmaşık bürokrasiyle siz uğraşmayın; biz hızlı ve doğru ilerletelim." },
  { icon: "users", title: "Kişiye Özel Çözüm", desc: "Her başvuru profilini ayrı değerlendirir, en doğru izin türünü öneririz." },
] as const;

const testimonials = [
  { name: "Ahmed M.", role: "Yazılım Mühendisi", text: "Çalışma izni başvurum baştan sona sorunsuz ilerledi. Her aşamada bilgilendirildim, çok profesyonel bir ekip." },
  { name: "Layla K.", role: "Şirket İK Müdürü", text: "Yabancı personel istihdamımızda tüm süreci onlar yönetti. Kurumsal ve güvenilir, kesinlikle tavsiye ederim." },
  { name: "Daniel R.", role: "Akademisyen", text: "İkamet iznimi zamanında uzattılar. Evrak konusunda hiç zorlanmadım, gerçekten işini bilen bir danışmanlık." },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-white pt-[74px] md:pt-[114px]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-white" />

        {/* Sağ kavisli lacivert panel (lg+) */}
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
          <div className="relative h-full w-full overflow-hidden rounded-bl-[34%] rounded-tl-[34%] bg-navy-900 shadow-[-30px_0_60px_-30px_rgba(11,31,58,0.4)]">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(78,130,196,0.55),transparent_60%)]" />
            <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-steel-500/20 blur-3xl" />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-24 lg:px-8">
          {/* Sol metin */}
          <div className="animate-fade-up">
            <Eyebrow>Güvenilir · Hızlı · Profesyonel</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]">
              Türkiye'de Yasal{" "}
              <span className="text-gold-gradient">Çalışmanın</span>{" "}
              En Doğru Yolu
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-500">
              Çalışma izni ve ikamet izni başvurularınızda uzman kadromuzla yanınızdayız.
              Süreci sizin için yönetiyor, zaman kazandırıyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
              <ButtonGhost href="/hizmetlerimiz">Hizmetlerimiz</ButtonGhost>
            </div>

            {/* mini istatistik */}
            <div className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-navy-100 pt-7">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold text-navy-900">
                    {s.value}<span className="text-gold-500">{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs text-navy-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ görsel — logo + yüzen rozetler */}
          <div className="relative flex items-center justify-center py-4">
            <div className="animate-float relative w-full max-w-[400px]">
              <Image
                src="/images/logo-mark.png"
                alt={site.name}
                width={520}
                height={520}
                priority
                className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
            {/* yüzen rozet: başvuru sayısı */}
            <div className="absolute right-0 top-2 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:block lg:right-2">
              <div className="font-display text-xl font-extrabold text-gold-300">5.000<span className="text-sm">+</span></div>
              <div className="text-[0.65rem] uppercase tracking-wider text-navy-100">Başarılı Başvuru</div>
            </div>
            {/* yüzen rozet: onay */}
            <div className="absolute -bottom-1 left-0 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:flex lg:left-0">
              <Icon name="check" className="h-5 w-5 text-gold-400" strokeWidth={2.5} />
              <span className="text-sm font-semibold">%98 Onay Oranı</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GÜVEN ŞERİDİ — taşan lacivert kart ============ */}
      <section className="relative z-20 -mt-10 bg-white sm:-mt-14 lg:-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 shadow-[0_24px_60px_-20px_rgba(11,31,58,0.5)]">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {trustFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className={`flex items-center gap-4 px-6 py-7 lg:px-7 ${i > 0 ? "border-t border-white/10 sm:border-t-0 lg:border-l lg:border-white/10" : ""} ${i === 2 ? "sm:border-t sm:border-white/10 lg:border-t-0" : ""} ${i === 1 || i === 3 ? "sm:border-l sm:border-white/10" : ""}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-navy-800 text-gold-400">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-bold text-white">{f.title}</div>
                    <div className="mt-0.5 text-sm leading-snug text-navy-300">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HİZMETLER ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Hizmetlerimiz"
              title="Çalışma ve İkamet İzni Süreçlerinde Yanınızdayız"
              desc="İhtiyacınıza özel çözümlerimizle, yasal süreçleri kolay ve hızlı yönetiyoruz."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  href="/hizmetlerimiz"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-lift"
                >
                  <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-100/60 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 shadow-soft transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={s.icon as never} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{s.short}</p>
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

      {/* ============ İSTATİSTİK BANDI ============ */}
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display text-4xl font-bold sm:text-5xl">
                <span className="text-gold-gradient">{s.value}</span>
                <span className="text-gold-400">{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-navy-300">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ NEDEN BİZ ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <Eyebrow>Neden Şimşek Danışmanlık?</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Bürokrasiyi biz üstlenelim,{" "}
              <span className="text-gold-gradient">siz işinize odaklanın.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-500">
              {site.experienceYears} yıllık tecrübemizle binlerce başarılı başvuruya imza attık.
              Çalışma ve ikamet izni süreçlerinde size en doğru, en hızlı ve en güvenilir yolu sunuyoruz.
            </p>
            <div className="mt-8">
              <ButtonPrimary href="/bize-ulasin">Hemen Başlayalım</ButtonPrimary>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SÜREÇ ============ */}
      <section className="relative bg-navy-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Nasıl Çalışıyoruz?"
              title="4 Adımda Sorunsuz Başvuru Süreci"
              desc="Şeffaf, takip edilebilir ve sizin adınıza yönetilen bir süreç."
            />
          </Reveal>
          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent lg:block" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100} className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-gold-300 bg-white font-display text-2xl font-bold text-navy-900 shadow-soft">
                    {p.step}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REFERANSLAR / YORUMLAR ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Referanslarımız"
              title="Müşterilerimiz Ne Diyor?"
              desc="Binlerce kişi ve şirket, süreçlerini bize emanet etti."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
                  <Icon name="quote" className="h-9 w-9 text-gold-300" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-navy-700">"{t.text}"</blockquote>
                  <div className="mt-5 flex gap-0.5 text-gold-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Icon key={k} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <figcaption className="mt-4 border-t border-navy-50 pt-4">
                    <div className="font-bold text-navy-900">{t.name}</div>
                    <div className="text-sm text-navy-400">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonGhost href="/referanslarimiz">Tüm Referanslarımız</ButtonGhost>
          </div>
        </div>
      </section>

      {/* ============ SON CTA ============ */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow light>Ücretsiz Ön Görüşme</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Çalışma veya ikamet izni sürecinizi{" "}
              <span className="text-gold-gradient">bugün başlatın.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-navy-300">
              Uzman danışmanlarımız sizi arasın, en doğru yol haritasını birlikte belirleyelim.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ButtonPrimary href={site.whatsapp} icon="whatsapp" external>WhatsApp'tan Yazın</ButtonPrimary>
              <ButtonGhost href="/bize-ulasin" light icon="phone">İletişim Formu</ButtonGhost>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
