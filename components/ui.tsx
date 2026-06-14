import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/* Bölüm üstü etiketi */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`eyebrow ${light ? "text-gold-400" : "text-gold-600"}`}>
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

/* Ortalanmış bölüm başlığı */
export function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-navy-300" : "text-navy-500"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  icon?: IconName;
  external?: boolean;
};

export function ButtonPrimary({ href, children, icon = "arrow", external }: BtnProps) {
  const cls =
    "group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 font-bold text-navy-950 shadow-soft transition-all hover:bg-gold-400 hover:shadow-gold";
  const inner = (
    <>
      {children}
      <Icon name={icon} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </>
  );
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

export function ButtonGhost({ href, children, icon = "arrow", light = false }: BtnProps & { light?: boolean }) {
  const cls = light
    ? "group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white/10"
    : "group inline-flex items-center justify-center gap-2.5 rounded-full border border-navy-200 px-7 py-3.5 font-bold text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-50";
  return (
    <Link href={href} className={cls}>
      {children}
      <Icon name={icon} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/* İç sayfa üst başlığı (lacivert hero) */
export function PageHero({
  eyebrow,
  title,
  desc,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-36 text-white sm:pt-40">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-24 -top-10 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-steel-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-5 flex items-center gap-2 text-sm text-navy-300">
          <Link href="/" className="hover:text-gold-300">Ana Sayfa</Link>
          <span className="text-gold-500">/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-300">{desc}</p>
      </div>
    </section>
  );
}
