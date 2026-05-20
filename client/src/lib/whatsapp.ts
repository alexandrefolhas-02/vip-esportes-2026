// Utilitário de WhatsApp - VIP Esportes
import { WHATSAPP_NUMBER, whatsappMessages } from "@/data/whatsapp";

/**
 * Gera a URL do WhatsApp com mensagem personalizada
 */
export function getWhatsAppUrl(messageKey: string): string {
  const msg = whatsappMessages[messageKey];
  const text = msg ? msg.message : whatsappMessages.geral.message;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

/**
 * Gera URL do WhatsApp com mensagem customizada
 */
export function getWhatsAppUrlCustom(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}
