import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
      href={waLink("Olá! Gostaria de mais informações sobre os planos de saúde.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
