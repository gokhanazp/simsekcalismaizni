"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export type NavSection = { id: string; label: string };

export function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-28">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
          İçindekiler
        </div>
        <ul className="space-y-0.5 border-l border-navy-100">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`group -ml-px flex items-center gap-2 border-l-2 py-2 pl-4 text-sm transition-colors ${
                    isActive
                      ? "border-gold-500 font-semibold text-navy-900"
                      : "border-transparent text-navy-500 hover:border-navy-200 hover:text-navy-800"
                  }`}
                >
                  <Icon
                    name="arrow"
                    className={`h-3.5 w-3.5 shrink-0 transition-all ${
                      isActive ? "text-gold-500 opacity-100" : "-translate-x-1 text-navy-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
