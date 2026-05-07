import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";
import { waLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-soft" />
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-health/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Consultoria especializada e gratuita
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            O plano de saúde <span className="text-gradient">ideal</span> para você e sua família
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Compare as melhores operadoras do mercado com um consultor humano. Atendimento personalizado, sem custo, e direto pelo WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink("Olá! Gostaria de receber uma cotação de plano de saúde.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-elegant transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Ver planos
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-health" /> +500 famílias atendidas</div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-medium text-foreground">4.9/5</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] gradient-brand opacity-20 blur-2xl" />
          <img
            src={heroImg}
            alt="Família feliz protegida pelo plano de saúde"
            width={1280}
            height={1280}
            className="aspect-square w-full rounded-[2rem] object-cover shadow-elegant"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-card sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-health/15 text-health">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Cobertura nacional</p>
                <p className="text-xs text-muted-foreground">Mais de 3.000 hospitais</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
