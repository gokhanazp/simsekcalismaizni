import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3.5 pr-5 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
      aria-label="WhatsApp'tan ulaşın"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 group-hover:hidden" />
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-sm font-bold sm:block">WhatsApp'tan Ulaşın</span>
    </a>
  );
}
