import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonPrimary, PageHero, SectionHeading } from "@/components/ui";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "27 yıllık tecrübemizle binlerce başarılı çalışma ve ikamet izni başvurusu. Müşterilerimizin deneyimleri ve referanslarımız.",
  alternates: { canonical: "/referanslarimiz" },
};

const testimonials = [
  { name: "Ahmed M.", role: "Yazılım Mühendisi", country: "Mısır", text: "Çalışma izni başvurum baştan sona sorunsuz ilerledi. Her aşamada bilgilendirildim, çok profesyonel bir ekip. Tüm evrak sürecini onlar yönetti." },
  { name: "Layla K.", role: "İK Müdürü", country: "Lübnan", text: "Şirketimizde yabancı personel istihdamında tüm süreci onlar yönetti. Kurumsal ve güvenilir; toplu başvurularda gerçekten işlerini kolaylaştırdılar." },
  { name: "Daniel R.", role: "Akademisyen", country: "Almanya", text: "İkamet iznimi zamanında uzattılar. Evrak konusunda hiç zorlanmadım. İşini bilen, hızlı ve ilgili bir danışmanlık." },
  { name: "Maria S.", role: "Restoran İşletmecisi", country: "Rusya", text: "Türkiye'de iş kurma ve çalışma izni sürecimde baştan sona destek aldım. Sorularıma her zaman hızlı yanıt verdiler." },
  { name: "John P.", role: "Mühendis", country: "İngiltere", text: "Yurt dışından başvuru yaptım ve her şey uzaktan, sorunsuz halledildi. Süreç boyunca tek bir belirsizlik yaşamadım." },
  { name: "Fatima A.", role: "Öğrenci", country: "Fas", text: "Öğrenci ikamet iznim için başvurdum, çok hızlı ve ilgili davrandılar. Genç biri olarak süreci hiç stresli geçirmedim." },
  { name: "Olena T.", role: "Grafik Tasarımcı", country: "Ukrayna", text: "Kısa dönem ikamet iznimi sorunsuz aldım. Randevudan evrak hazırlığına kadar her şeyi benim adıma takip ettiler, hiç yorulmadım." },
  { name: "Mohammed A.", role: "İnşaat Proje Müdürü", country: "Ürdün", text: "Şirketimizin yabancı mühendis kadrosu için çalışma izinlerini onlar düzenledi. Mevzuata tam hâkimler, tek bir başvurumuz bile geri dönmedi." },
  { name: "Elif Y.", role: "İşveren (Çocuk Bakıcısı)", country: "Türkiye", text: "Yabancı çocuk bakıcımız için çalışma izni aldık. SGK ve evrak işlerinin hepsini hallettiler; biz hiç uğraşmadık." },
  { name: "Hassan R.", role: "Doktor", country: "Suriye", text: "Çalışma iznim reddedilmişti, onların yönlendirmesiyle eksikleri tamamlayıp yeniden başvurduk ve onaylandı. Gerçekten kurtarıcı oldular." },
  { name: "Wei L.", role: "İthalat-İhracat", country: "Çin", text: "Türkiye'de yabancı ortaklı şirket kurdum. Şirket kuruluşu ve çalışma iznini birlikte planladılar, süreç beklediğimden hızlı ilerledi." },
  { name: "Priya S.", role: "Yazılım Geliştirici", country: "Hindistan", text: "Çalışma izni uzatmamı zamanında yaptılar, hiçbir hak kaybı yaşamadım. İletişimleri çok hızlı, her sorumu aynı gün yanıtladılar." },
  { name: "Ahmad N.", role: "Yatırımcı", country: "Irak", text: "Şirket ortağı olarak çalışma izni sürecim özel bir durumdu. Dosyamı titizlikle değerlendirip doğru stratejiyle sonuçlandırdılar." },
  { name: "Sofia M.", role: "Üniversite Öğrencisi", country: "İtalya", text: "Öğrenci ikamet iznimde okul ve Göç İdaresi süreçlerini benim için koordine ettiler. Yabancı bir öğrenci için büyük rahatlık." },
  { name: "Omar F.", role: "Aile İkamet İzni", country: "Mısır", text: "Eşim ve çocuklarım için aile ikamet izni başvurusunu yaptılar. Tüm aileyi ilgilendiren süreçte çok sabırlı ve özenliydiler." },
  { name: "Kateryna B.", role: "İşveren (Ev Yardımcısı)", country: "Türkiye", text: "Evimizde çalışan yabancı personel için izin sürecini sıfırdan yönettiler. Şartları önceden analiz etmeleri çok işimize yaradı." },
  { name: "James W.", role: "Emekli", country: "İngiltere", text: "Uzun dönem ikamet iznim için başvurdum. Şartları net açıkladılar, gereksiz hiçbir evrakla uğraştırmadılar. Çok memnunum." },
  { name: "Nadia H.", role: "İK Uzmanı", country: "Fas", text: "Farklı ülkelerden gelen personelimiz için toplu çalışma izni başvurusu yaptık. Kurumsal bir firmaya yakışır bir takip ve raporlama sundular." },
  { name: "Ali R.", role: "İşveren (Hasta Bakıcısı)", country: "Türkiye", text: "Babamın bakımı için yabancı hasta bakıcısı çalıştırıyoruz. Çalışma izni ve SGK işlemlerini eksiksiz yürüttüler, içimiz rahat." },
  { name: "Elena V.", role: "Turizm Danışmanı", country: "Rusya", text: "Türkiye'de uzun süre kalmak için kısa dönem ikamet iznimi aldılar. Süreç şeffaftı, her adımda nerede olduğumuzu bildim." },
];

const sectors = [
  "Teknoloji & Yazılım", "Üretim & Sanayi", "Eğitim & Akademi", "Sağlık",
  "Turizm & Otelcilik", "İnşaat", "Lojistik", "Hizmet Sektörü",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Referanslarımız"
        breadcrumb="Referanslarımız"
        title="Binlerce Kişi ve Şirket Bize Güvendi"
        desc="27 yıllık tecrübemizle bireysel başvurulardan kurumsal istihdam projelerine kadar pek çok sürece imza attık."
      />

      {/* İstatistik */}
      <section className="border-b border-navy-100 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">
                <span className="text-gold-gradient">{s.value}</span>{s.suffix}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-navy-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Yorumlar */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Müşteri Deneyimleri" title="Müşterilerimiz Ne Diyor?" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <Icon name="quote" className="h-9 w-9 text-gold-300" />
                    <div className="flex gap-0.5 text-gold-400">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Icon key={k} name="star" className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-navy-700">"{t.text}"</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-50 pt-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display font-bold text-gold-400">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <div className="font-bold text-navy-900">{t.name}</div>
                      <div className="text-sm text-navy-400">{t.role} · {t.country}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}

            {/* "Siz de burada olun" CTA kartı */}
            <Reveal delay={(testimonials.length % 3) * 90}>
              <Link
                href="/bize-ulasin"
                className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-7 text-center text-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="bg-grid absolute inset-0 opacity-25" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/25 blur-2xl" />
                <div className="relative">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-navy-800 text-gold-400">
                    <Icon name="spark" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">Siz de burada olun</h3>
                  <p className="mt-3 leading-relaxed text-navy-300">
                    Başarı hikâyenizi birlikte yazalım. Çalışma ve ikamet izni süreciniz için hemen bizimle iletişime geçin.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-bold text-navy-950 transition-colors group-hover:bg-gold-400">
                    Bizimle İletişime Geçin
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sektörler */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Çalıştığımız Sektörler" title="Geniş Bir Yelpazede Hizmet" desc="Farklı sektörlerden bireysel ve kurumsal müşterilerimize danışmanlık veriyoruz." />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {sectors.map((s, i) => (
              <Reveal key={s} delay={(i % 4) * 60}>
                <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 shadow-soft">
                  <Icon name="check" className="h-4 w-4 text-gold-500" strokeWidth={2.5} />
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Bir sonraki başarı hikayesi <span className="text-gold-gradient">sizinki olsun.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-500">
            Başvurunuzu güvenilir ellere bırakın. Ücretsiz ön görüşme için hemen ulaşın.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonPrimary href="/bize-ulasin">Ücretsiz Danışmanlık Alın</ButtonPrimary>
          </div>
        </div>
      </section>
    </>
  );
}
