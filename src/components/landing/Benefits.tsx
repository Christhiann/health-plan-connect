import { motion } from "framer-motion";
import { Globe2, HeartHandshake, Users, Headphones } from "lucide-react";

const benefits = [
  { icon: Globe2, title: "Atendimento nacional", desc: "Hospitais e clínicas em todo o Brasil." },
  { icon: HeartHandshake, title: "Cobertura ampla", desc: "Consultas, exames, cirurgias e mais." },
  { icon: Users, title: "Individual e familiar", desc: "Planos para cada perfil e momento de vida." },
  { icon: Headphones, title: "Suporte personalizado", desc: "Acompanhamento direto com o consultor." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand">Por que escolher</span>
        <h2 className="mt-2 text-3xl font-bold md:text-5xl">Vantagens que fazem a diferença</h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-3xl border border-border bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-brand-foreground transition-transform group-hover:scale-110">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
