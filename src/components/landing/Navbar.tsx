import { motion } from "framer-motion";
import { HeartPulse, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#planos", label: "Planos" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand text-brand-foreground">
            <HeartPulse className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">SaúdeCerta</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink("Olá! Gostaria de uma cotação de plano de saúde.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Fale conosco</span>
        </a>
      </div>
    </motion.header>
  );
}
