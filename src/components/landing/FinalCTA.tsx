import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section id="cotacao" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 gradient-brand opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_45%)] opacity-15" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,white_0%,transparent_40%)] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 text-center text-brand-foreground md:px-8"
      >
        <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold backdrop-blur">
          100% gratuito · sem compromisso
        </span>
        <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
          Receba uma cotação personalizada em poucos minutos
        </h2>
        <p className="mt-4 text-base opacity-90 md:text-lg">
          Atendimento humano e especializado direto pelo WhatsApp. Sem formulários longos, sem espera.
        </p>
        <a
          href={waLink("Olá! Quero uma cotação personalizada de plano de saúde com a BaseSaúde.")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-brand shadow-elegant transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" /> Falar agora no WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
