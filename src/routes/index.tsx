import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Plans } from "@/components/landing/Plans";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BaseSaúde — Consultoria de Planos de Saúde | Cotação no WhatsApp" },
      { name: "description", content: "Encontre o plano de saúde ideal com a BaseSaúde. Bradesco Saúde, Amil e mais — atendimento especializado direto no WhatsApp." },
      { property: "og:title", content: "BaseSaúde — Planos de Saúde sob medida" },
      { property: "og:description", content: "Cotação gratuita e atendimento humano pelo WhatsApp." },
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
        <Plans />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
