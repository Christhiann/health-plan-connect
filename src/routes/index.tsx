import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Plans } from "@/components/landing/Plans";
import { Benefits } from "@/components/landing/Benefits";
import { Quote } from "@/components/landing/Quote";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaúdeCerta — Consultoria de Planos de Saúde | Cotação Gratuita" },
      { name: "description", content: "Consultoria especializada em planos de saúde. Compare as melhores operadoras, receba uma cotação gratuita e fale direto pelo WhatsApp." },
      { property: "og:title", content: "SaúdeCerta — Consultoria de Planos de Saúde" },
      { property: "og:description", content: "Cotação gratuita, atendimento humano e os melhores planos para você e sua família." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Plans />
        <Benefits />
        <Quote />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
