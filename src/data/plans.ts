export type Plan = {
  company: "Bradesco Saúde" | "Amil";
  plan: string;
  price: string;
  features: string[];
  highlight?: boolean;
  whatsappMessage: string;
};

export const operators = ["Todos", "Bradesco Saúde", "Amil"] as const;
export type Operator = (typeof operators)[number];

export const plans: Plan[] = [
  {
    company: "Bradesco Saúde",
    plan: "Nacional Plus",
    price: "A partir de R$ 289/mês",
    features: [
      "Cobertura nacional",
      "Rede premium de hospitais",
      "Reembolso disponível",
      "Telemedicina inclusa",
    ],
    whatsappMessage:
      "Olá, tenho interesse no plano Nacional Plus da Bradesco Saúde.",
  },
  {
    company: "Bradesco Saúde",
    plan: "Premium",
    price: "A partir de R$ 749/mês",
    features: [
      "Hospitais top de linha",
      "Apartamento privativo",
      "Reembolso ampliado",
      "Atendimento internacional",
    ],
    highlight: true,
    whatsappMessage:
      "Olá, tenho interesse no plano Premium da Bradesco Saúde.",
  },
  {
    company: "Amil",
    plan: "Amil Bronze",
    price: "A partir de R$ 199/mês",
    features: [
      "Cobertura regional",
      "Consultas e exames",
      "Pronto-socorro 24h",
      "Sem coparticipação",
    ],
    whatsappMessage: "Olá, tenho interesse no plano Amil Bronze.",
  },
  {
    company: "Amil",
    plan: "Amil Prata",
    price: "A partir de R$ 289/mês",
    features: [
      "Rede ampliada",
      "Internação e cirurgias",
      "Maternidade incluída",
      "Telemedicina 24/7",
    ],
    whatsappMessage: "Olá, tenho interesse no plano Amil Prata.",
  },
  {
    company: "Amil",
    plan: "Amil Ouro",
    price: "A partir de R$ 459/mês",
    features: [
      "Cobertura nacional",
      "Rede premium",
      "Reembolso disponível",
      "Atendimento prioritário",
    ],
    highlight: true,
    whatsappMessage: "Olá, tenho interesse no plano Amil Ouro.",
  },
  {
    company: "Amil",
    plan: "Amil Black",
    price: "A partir de R$ 899/mês",
    features: [
      "Hospitais referência",
      "Apartamento privativo",
      "Reembolso máximo",
      "Concierge médico",
    ],
    whatsappMessage: "Olá, tenho interesse no plano Amil Black.",
  },
];
