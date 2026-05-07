import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const plans = [
  {
    name: "Essencial",
    desc: "Perfeito para quem busca proteção básica com excelente custo-benefício.",
    price: "A partir de R$ 189/mês",
    benefits: ["Consultas e exames", "Pronto-socorro 24h", "Rede regional", "Sem coparticipação"],
    highlight: false,
  },
  {
    name: "Família+",
    desc: "Cobertura completa para toda a família com rede ampla e nacional.",
    price: "A partir de R$ 389/mês",
    benefits: ["Cobertura nacional", "Internação e cirurgias", "Maternidade incluída", "Telemedicina 24/7"],
    highlight: true,
  },
  {
    name: "Premium",
    desc: "Top de linha com hospitais referência e atendimento exclusivo.",
    price: "A partir de R$ 749/mês",
    benefits: ["Hospitais premium", "Apartamento privativo", "Reembolso ampliado", "Atendimento internacional"],
    highlight: false,
  },
];

export function Plans() {
  return (
    <section id="planos" className="bg-brand-soft/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Planos disponíveis</span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">Escolha o plano que cabe no seu momento</h2>
          <p className="mt-4 text-muted-foreground">Comparativo justo e transparente entre as principais operadoras.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl border bg-background p-8 transition-all hover:-translate-y-1 ${
                plan.highlight ? "border-brand shadow-elegant" : "border-border shadow-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-brand px-4 py-1 text-xs font-semibold text-brand-foreground">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              <p className="mt-6 text-lg font-semibold text-brand">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-health" /> {b}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Olá, tenho interesse no plano ${plan.name}. Gostaria de mais informações.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.highlight ? "gradient-brand text-brand-foreground" : "bg-foreground text-background"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> Tenho interesse
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-brand/30 bg-background p-8 text-center"
        >
          <h3 className="text-xl font-semibold">Quer ver mais opções?</h3>
          <p className="text-sm text-muted-foreground">Receba o catálogo completo com todas as operadoras parceiras.</p>
          <a
            href={waLink("Olá! Gostaria de receber o catálogo completo de planos de saúde.")}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white shadow-card transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Ver mais planos no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
