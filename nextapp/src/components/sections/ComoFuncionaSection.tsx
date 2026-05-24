import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Target, MapPin, MessageCircle, Calendar } from "lucide-react";

const passos = [
  { numero: "01", titulo: "Escolha a modalidade", descricao: "Beach Tennis, Vôlei, Vôlei de Praia ou Equipe de Competição.", icon: Target },
  { numero: "02", titulo: "Escolha a unidade", descricao: "Encontre a unidade mais próxima de você.", icon: MapPin },
  { numero: "03", titulo: "Fale pelo WhatsApp", descricao: "Converse com nossa equipe de forma rápida e prática.", icon: MessageCircle },
  { numero: "04", titulo: "Venha para a aula", descricao: "Receba os horários e faça sua aula experimental.", icon: Calendar },
];

export default function ComoFuncionaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#000040] diagonal-top relative">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-1 bg-turquesa mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
            Agendar sua aula experimental é simples
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {passos.map((passo) => (
            <div key={passo.numero} className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-turquesa/20 flex items-center justify-center mx-auto mb-4">
                <passo.icon className="w-7 h-7 text-turquesa" />
              </div>
              <span className="font-heading text-4xl font-bold text-turquesa/30">{passo.numero}</span>
              <h3 className="font-heading text-lg font-semibold text-white mt-2">{passo.titulo}</h3>
              <p className="mt-2 text-sm text-white/60">{passo.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={getWhatsAppUrl("geral")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg">
            Agendar minha aula experimental
          </a>
        </div>
      </div>
    </section>
  );
}
