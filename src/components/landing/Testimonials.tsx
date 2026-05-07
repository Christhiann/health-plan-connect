import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  { name: "Mariana S.", role: "Mãe de 2 filhos", text: "O Rafael me ajudou a economizar quase 30% comparando os planos. Atendimento humano e rápido!" },
  { name: "Carlos H.", role: "Empresário", text: "Suporte impecável. Resolveu tudo pelo WhatsApp, sem burocracia. Recomendo de olhos fechados." },
  { name: "Juliana P.", role: "Autônoma", text: "Encontrei um plano excelente que cabe no meu orçamento. Consultoria séria e transparente." },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-brand-soft/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Depoimentos</span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">Quem confia, recomenda</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-background p-7 shadow-card"
            >
              <Quote className="h-8 w-8 text-brand/40" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
