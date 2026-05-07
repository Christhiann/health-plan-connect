export const WHATSAPP_NUMBER = "5511999999999";
export const PHONE_DISPLAY = "(11) 99999-9999";
export const INSTAGRAM = "@consultor.saude";
export const LOCATION = "São Paulo, SP — Atendimento Nacional";
export const CONSULTANT_NAME = "Rafael Andrade";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
