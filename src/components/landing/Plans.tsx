import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { plans, operators, type Operator } from "@/data/plans";
import { waLink } from "@/lib/whatsapp";

export function Plans() {
  const [filter, setFilter] = useState<Operator>("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? plans : plans.filter((p) => p.company === filter)),
    [filter],
  );

  return (
    <section id="planos" className="bg-brand-soft/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Planos disponíveis
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">
            Escolha a operadora ideal para você
          </h2>
          <p className="mt-4 text-muted-foreground">
            Filtre por operadora e fale direto com um consultor pelo WhatsApp.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {operators.map((op) => {
            const active = filter === op;
            return (
              <button
                key={op}
                onClick={() => setFilter(op)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all md:px-5 md:py-2.5 ${
                  active
                    ? "border-transparent gradient-brand text-brand-foreground shadow-card"
                    : "border-border bg-background text-foreground hover:border-brand/40"
                }`}
              >
                {op}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((plan, i) => (
              <motion.div
                key={`${plan.company}-${plan.plan}`}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`relative flex flex-col rounded-3xl border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-elegant ${
                  plan.highlight ? "border-brand shadow-elegant" : "border-border shadow-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full gradient-brand px-3 py-1 text-[11px] font-semibold text-brand-foreground">
                    <Sparkles className="h-3 w-3" /> Premium
                  </span>
                )}
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {plan.company}
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-tight">{plan.plan}</h3>
                <p className="mt-4 text-base font-semibold text-brand">{plan.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-health" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
