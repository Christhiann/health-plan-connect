import { motion } from "framer-motion";
import { CheckCircle2, Award, Headphones, Scale } from "lucide-react";
import consultantImg from "@/assets/consultant.jpg";
import { CONSULTANT_NAME } from "@/lib/whatsapp";

const perks = [
  { icon: Headphones, title: "Atendimento personalizado", desc: "Consultoria 1:1 do início ao fim." },
  { icon: Scale, title: "Comparação de planos", desc: "Encontre o melhor custo-benefício." },
  { icon: Award, title: "10+ anos de experiência", desc: "Especialista em saúde suplementar." },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={consultantImg}
            alt={`${CONSULTANT_NAME}, consultor de planos de saúde`}
            width={768}
            height={896}
            loading="lazy"
            className="w-full max-w-md rounded-3xl object-cover shadow-elegant"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Sobre o consultor</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{CONSULTANT_NAME}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Consultor certificado em saúde suplementar, dedicado a encontrar o plano perfeito para o seu perfil e orçamento. Trabalho com as principais operadoras do Brasil e ofereço suporte completo, antes e depois da contratação.
          </p>
          <ul className="mt-8 space-y-4">
            {perks.map((p) => (
              <li key={p.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-health" /> Credenciado pela SUSEP & ANS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
