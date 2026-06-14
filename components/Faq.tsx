"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-navy-50"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy-900">{item.q}</span>
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-600 transition-transform duration-300 ${isOpen ? "rotate-180 bg-gold-500 text-navy-950" : ""}`}>
                <Icon name="chevron" className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-navy-500">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
