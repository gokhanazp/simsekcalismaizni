# Şimşek Danışmanlık — Kurumsal Web Sitesi

Çalışma izni & ikamet izni danışmanlığı için profesyonel, premium kurumsal web sitesi.
**Next.js 15 (App Router) + Tailwind CSS v4 + statik export** ile geliştirildi, **Cloudflare Pages** üzerinde yayınlanmak üzere hazırlandı.

## Teknolojiler
- **Next.js 15** — App Router, statik export (`output: "export"`)
- **Tailwind CSS v4** — özel marka tasarım sistemi (lacivert + altın)
- **Fontlar** — Fraunces (başlık) + Plus Jakarta Sans (gövde)
- **SEO** — metadata API, sitemap.xml, robots.txt, JSON-LD structured data

## Komutlar
```bash
npm install        # bağımlılıkları kur
npm run dev        # geliştirme sunucusu → http://localhost:3000
npm run build      # statik siteyi üret → /out
npm run preview    # /out klasörünü Cloudflare ortamında önizle (wrangler)
npm run deploy     # build + Cloudflare Pages'e yükle
```

## Cloudflare Pages'e Yayınlama

### Yöntem 1 — Git ile (önerilen)
1. Projeyi bir GitHub/GitLab deposuna gönderin.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Derleme ayarları:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. **Save and Deploy**. Her `git push` otomatik yayınlanır.

### Yöntem 2 — Doğrudan yükleme (Wrangler CLI)
```bash
npm run build
npx wrangler pages deploy ./out --project-name=simsek-danismanlik
```

## Proje Yapısı
```
app/
  layout.tsx              # kök layout: fontlar, header, footer, SEO
  page.tsx                # Ana Sayfa
  calisma-izni/           # Çalışma İzni
  ikamet-izni/            # İkamet İzni
  hizmetlerimiz/          # Hizmetlerimiz
  referanslarimiz/        # Referanslarımız
  bize-ulasin/            # Bize Ulaşın (iletişim formu)
  blog/                   # Blog liste + [slug] detay
  sitemap.ts, robots.ts   # SEO
components/               # Header, Footer, Icon, Reveal, ui, Faq, ContactForm
lib/
  site.ts                 # site bilgileri, menü, hizmetler, istatistikler
  blog.ts                 # blog yazıları (içerik buradan eklenir)
public/images/            # logo ve görseller
```

## İçerik Güncelleme
- **İletişim / telefon / menü:** `lib/site.ts`
- **Blog yazısı eklemek:** `lib/blog.ts` içindeki `posts` dizisine yeni nesne ekleyin.
- **Hizmetler:** `lib/site.ts` → `services`

> **Not:** İletişim formu, gönderildiğinde bilgileri WhatsApp üzerinden iletir (sunucu gerektirmez).
> İleride form verisini e-postaya düşürmek isterseniz Cloudflare Pages Functions veya Formspree entegre edilebilir.
