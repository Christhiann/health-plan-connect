import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function Quote() {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. ${form.note ? `Detalhes: ${form.note}` : "Gostaria de uma cotação gratuita."}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section id="cotacao" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 gradient-brand opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_40%)] opacity-10" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-foreground"
        >
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold backdrop-blur">
            100% gratuito · sem compromisso
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Solicite sua cotação gratuita agora mesmo
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Em poucos minutos você recebe um comparativo personalizado com os melhores planos para o seu perfil.
          </p>
          <a
            href={waLink("Olá! Gostaria de uma cotação gratuita de plano de saúde.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Prefiro ir direto ao WhatsApp
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="rounded-3xl bg-background p-6 shadow-elegant md:p-8"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Nome completo</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">WhatsApp</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: maskPhone(e.target.value) })}
                inputMode="tel"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Mensagem (opcional)</label>
              <textarea
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                placeholder="Quantas pessoas, idade, cidade..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.01]"
            >
              <Send className="h-4 w-4" /> Enviar e abrir WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
