import { ButtonGhost, ButtonPrimary } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-900 px-4 text-center text-white">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-lg">
        <div className="font-display text-7xl font-bold text-gold-gradient sm:text-8xl">404</div>
        <h1 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">Sayfa Bulunamadı</h1>
        <p className="mt-3 text-navy-300">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönebilir ya da bizimle iletişime geçebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonPrimary href="/">Ana Sayfaya Dön</ButtonPrimary>
          <ButtonGhost href="/bize-ulasin" light>Bize Ulaşın</ButtonGhost>
        </div>
      </div>
    </section>
  );
}
