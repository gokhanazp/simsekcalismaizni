"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

const services = [
  "Çalışma İzni Başvurusu",
  "Çalışma İzni Uzatma",
  "İkamet İzni Başvurusu",
  "Şirketler İçin Danışmanlık",
  "Ev Hizmetlerinde Çalışma İzni",
  "Diğer",
];

const inputCls =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `Merhaba, danışmanlık talebim:\n\n` +
      `Ad Soyad: ${f.get("name")}\n` +
      `Telefon: ${f.get("phone")}\n` +
      `Hizmet: ${f.get("service")}\n` +
      `Mesaj: ${f.get("message")}`;
    setSent(true);
    window.open(`${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-700">Ad Soyad</label>
          <input id="name" name="name" required placeholder="Adınız ve soyadınız" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-700">Telefon</label>
          <input id="phone" name="phone" type="tel" required placeholder="05XX XXX XX XX" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-700">İlgilendiğiniz Hizmet</label>
        <select id="service" name="service" className={inputCls} defaultValue={services[0]}>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-700">Mesajınız</label>
        <textarea id="message" name="message" rows={4} placeholder="Durumunuzu kısaca anlatın..." className={inputCls} />
      </div>
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 font-bold text-navy-950 shadow-soft transition-all hover:bg-gold-400 hover:shadow-gold"
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        {sent ? "WhatsApp Açılıyor..." : "Talebi Gönder"}
      </button>
      <p className="text-center text-xs text-navy-400">
        Gönder'e tıkladığınızda bilgileriniz WhatsApp üzerinden iletilir. Genellikle aynı gün dönüş yapıyoruz.
      </p>
    </form>
  );
}
