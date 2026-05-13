import { HeartPulse, Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import { PHONE_DISPLAY, INSTAGRAM, LOCATION, BRAND_NAME, waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand">
              <HeartPulse className="h-5 w-5 text-brand-foreground" />
            </div>
            <span className="font-display text-lg font-bold">{BRAND_NAME}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-70">
            Consultoria especializada em planos de saúde. Atendimento humano, transparente e direto pelo WhatsApp.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</li>
            <li><a href={waLink("Olá!")} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80"><MessageCircle className="h-4 w-4" /> WhatsApp direto</a></li>
            <li className="flex items-center gap-3"><Instagram className="h-4 w-4" /> {INSTAGRAM}</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> {LOCATION}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60">Atendimento</h4>
          <p className="mt-4 text-sm opacity-80">Segunda a sábado<br/>08h às 20h</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {BRAND_NAME} · Consultoria de planos de saúde
      </div>
    </footer>
  );
}
