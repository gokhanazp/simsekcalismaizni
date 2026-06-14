"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site, topNav } from "@/lib/site";
import { Icon } from "./Icon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ÜST BAR */}
      <div className="hidden bg-navy-950 text-navy-200 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-wide text-navy-300">
            <span className="text-gold-400">★</span> Güvenilir · Hızlı · Profesyonel — {site.experienceYears} Yıllık Tecrübe
          </p>
          <div className="flex items-center divide-x divide-white/10 text-xs font-semibold">
            {topNav.map((t) => (
              <Link key={t.href} href={t.href} className="px-3 text-navy-200 transition-colors hover:text-gold-300">
                {t.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-1.5 pl-3 text-gold-300 transition-colors hover:text-gold-200">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ANA BAR */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_1px_0_0_rgba(11,31,58,0.08),0_8px_30px_-12px_rgba(11,31,58,0.18)]"
            : "border-b border-navy-100"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label={site.name}>
            <Image
              src="/images/logo-trans.png"
              alt={site.name}
              width={570}
              height={152}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Masaüstü menü */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.01em] text-navy-700 transition-colors hover:text-navy-900"
                >
                  {item.label}
                  {item.children && (
                    <Icon name="chevron" className="h-3 w-3 text-navy-400 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(11,31,58,0.25)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-navy-50"
                        >
                          <span className="block text-[0.9rem] font-semibold text-navy-800">{c.label}</span>
                          {c.desc && <span className="block text-[0.78rem] text-navy-400">{c.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sağ: CTA + mobil buton */}
          <div className="flex items-center gap-3">
            <Link
              href="/bize-ulasin"
              className="group hidden items-center gap-2 whitespace-nowrap rounded-full bg-gold-500 px-5 py-2.5 text-[0.82rem] font-bold text-navy-950 shadow-soft transition-all hover:bg-gold-400 hover:shadow-gold lg:flex"
            >
              Ücretsiz Danışmanlık
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-200 text-navy-800 lg:hidden"
              aria-label="Menü"
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ */}
      <div className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[74px] bg-navy-950/40 backdrop-blur-sm transition-opacity md:top-[114px] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`fixed inset-x-0 top-[74px] max-h-[calc(100vh-74px)] origin-top overflow-y-auto border-t border-navy-100 bg-white px-4 pb-8 pt-2 shadow-lift transition-all duration-300 md:top-[114px] md:max-h-[calc(100vh-114px)] ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-navy-50">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex-1 py-3.5 text-base font-semibold text-navy-800"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setOpenSub((p) => (p === item.href ? null : item.href))}
                    className="p-3 text-gold-500"
                    aria-label="Alt menü"
                  >
                    <Icon name="chevron" className={`h-5 w-5 transition-transform ${openSub === item.href ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              {item.children && openSub === item.href && (
                <div className="pb-3 pl-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-[0.92rem] text-navy-600 hover:bg-navy-50"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Üst bar bağlantıları mobilde burada */}
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 border-b border-navy-50 pb-3">
            {topNav.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold text-navy-800"
              >
                {t.label}
              </Link>
            ))}
          </div>

          <a
            href={site.phoneHref}
            className="mt-5 flex items-center justify-center gap-2.5 rounded-full bg-navy-900 px-5 py-3.5 text-base font-bold text-white"
          >
            <Icon name="phone" className="h-5 w-5 text-gold-400" />
            {site.phone}
          </a>
          <Link
            href="/bize-ulasin"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-base font-bold text-navy-950"
          >
            Ücretsiz Danışmanlık
          </Link>
        </nav>
      </div>
    </header>
  );
}
