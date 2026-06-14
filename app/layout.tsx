import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Çalışma ve İkamet İzni Danışmanlığı`,
    template: `%s | ${site.name}`,
  },
  description:
    "Türkiye'de çalışma izni ve ikamet izni başvurularında 27 yıllık tecrübe. Yabancı uyruklu personel ve şirketler için uçtan uca, güvenilir ve hızlı danışmanlık.",
  keywords: [
    "çalışma izni", "ikamet izni", "çalışma izni başvurusu", "yabancı çalışma izni",
    "çalışma izni danışmanlık", "ikamet izni başvurusu", "çalışma izni uzatma", "Türkiye çalışma izni",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Çalışma ve İkamet İzni Danışmanlığı`,
    description:
      "27 yıllık tecrübeyle çalışma ve ikamet izni süreçlerinde uçtan uca danışmanlık.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Türkiye'de çalışma izni ve ikamet izni danışmanlığı. 27 yıllık tecrübe.",
  url: site.url,
  telephone: "+905061240367",
  email: site.email,
  areaServed: "TR",
  address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
  priceRange: "₺₺",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={jakarta.variable}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
