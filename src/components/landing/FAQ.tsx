import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como funciona a contratação?", a: "Após a cotação, eu te explico todas as opções, envio as propostas formais e te acompanho em todo o processo de adesão — 100% digital e sem custos extras." },
  { q: "O que é o período de carência?", a: "Carência é o tempo mínimo após a contratação para começar a usar determinados procedimentos. Cada plano possui prazos específicos que serão detalhados antes da contratação." },
  { q: "Os planos têm cobertura nacional?", a: "Sim, a maioria dos planos oferece cobertura nacional. Existem também opções regionais com mensalidades mais acessíveis, ideais para quem usa mais localmente." },
  { q: "Como funciona o suporte após contratar?", a: "Você continua tendo meu suporte direto pelo WhatsApp para tirar dúvidas, resolver pendências com a operadora e fazer ajustes quando necessário." },
  { q: "Posso incluir dependentes depois?", a: "Sim! É possível incluir cônjuge, filhos e outros dependentes a qualquer momento, conforme as regras de cada operadora." },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-brand">Perguntas frequentes</span>
        <h2 className="mt-2 text-3xl font-bold md:text-5xl">Tire suas dúvidas</h2>
      </motion.div>
      <Accordion type="single" collapsible className="mt-12 w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
