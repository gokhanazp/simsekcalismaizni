import Image from "next/image";
import Link from "next/link";
import { navItems, services, site, topNav } from "@/lib/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-steel-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* İletişim bandı */}
        <div className="border-b border-white/10 py-10">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-10">
            <div className="bg-grid absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow text-gold-400">
                  <span className="h-px w-6 bg-current opacity-60" />
                  Hemen Bize Ulaşın
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Türkiye'deki Çalışma ve İkamet Süreçlerinizi{" "}
                  <span className="text-gold-gradient">Uzmanlara Bırakın</span>
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-navy-300">
                  Çalışma izni, ikamet izni, yabancı personel istihdamı ve ev hizmetleri çalışma
                  izinleri konusunda uzman danışmanlarımızdan destek alın.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-3.5 font-bold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-[1.02]"
                >
                  <Icon name="whatsapp" className="h-6 w-6" />
                  WhatsApp Destek Hattı
                </a>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-white">{site.phone}</span>
                    <span className="block text-xs text-navy-300">Hemen arayın</span>
                  </span>
                </a>
                <Link
                  href="/bize-ulasin"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-gold-500/40 px-5 py-3 font-bold text-gold-300 transition-colors hover:bg-gold-500 hover:text-navy-950"
                >
                  Ücretsiz Ön Değerlendirme Alın
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sütunlar */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Image
              src="/images/logo-trans.png"
              alt={site.name}
              width={570}
              height={152}
              className="h-14 w-auto invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300">
              {site.experienceYears} yıllık tecrübemizle Türkiye'de çalışma ve ikamet izni
              süreçlerinde yabancı uyruklu personel ve şirketlere uçtan uca danışmanlık veriyoruz.
            </p>
            <div className="mt-6 flex gap-3">
              {(["star", "shield", "spark"] as const).map((n) => (
                <span key={n} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gold-400">
                  <Icon name={n} className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Kurumsal</h4>
            <ul className="space-y-3 text-sm">
              {[...navItems, ...topNav].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-navy-300 transition-colors hover:text-gold-300">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Hizmetler</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/hizmetlerimiz" className="text-navy-300 transition-colors hover:text-gold-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="map" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt şerit */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-navy-400 sm:flex-row">
          <p>© {site.experienceYears && new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <p>
            Güvenilir · Hızlı · Profesyonel — <span className="text-gold-400">{site.experienceYears} Yıllık Tecrübe</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
