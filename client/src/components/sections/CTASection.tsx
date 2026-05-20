import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#000040] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-turquesa/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-turquesa/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-1 bg-turquesa mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
            Pronto para começar?
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Fale agora com nossa equipe e agende uma aula experimental na unidade ideal para você.
          </p>
          <a
            href={getWhatsAppUrl("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-turquesa hover:bg-turquesa-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 active:scale-[0.97] text-xl mt-10 shadow-lg shadow-turquesa/20"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
