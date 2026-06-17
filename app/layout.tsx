import type { Metadata, Viewport } from "next";
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
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Çalışma ve İkamet İzni Danışmanlığı`,
    description:
      "27 yıllık tecrübeyle çalışma ve ikamet izni süreçlerinde uçtan uca danışmanlık.",
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: site.url },
  // Google Search Console doğrulaması (HTML yöntemi kullanılırsa kodu buraya):
  // verification: { google: "GOOGLE_DOGRULAMA_KODU" },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "Şimşek Çalışma İzni Danışmanlık",
  description:
    "Türkiye'de çalışma izni ve ikamet izni danışmanlığı. 27 yıllık tecrübe.",
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/og.png`,
  telephone: "+905061240367",
  email: site.email,
  areaServed: { "@type": "Country", name: "Türkiye" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Faruk Nafiz Çamlıbel Cd, Avrupa 1 No:5, Tahtakale",
    addressLocality: "Avcılar",
    addressRegion: "İstanbul",
    postalCode: "34320",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "₺₺",
  knowsLanguage: ["tr", "en", "ar"],
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
