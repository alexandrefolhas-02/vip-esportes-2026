import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl("geral")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-200 active:scale-[0.95] hover:scale-[1.05]"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
