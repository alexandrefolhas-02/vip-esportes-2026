import { depoimentos } from "@/data/depoimentos";
import { Quote } from "lucide-react";

export default function DepoimentosSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-tight">
            O que dizem sobre a VIP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {depoimentos.map((dep) => (
            <div
              key={dep.id}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-turquesa/30 mb-3" />
              <p className="text-foreground leading-relaxed italic">"{dep.texto}"</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-navy">{dep.nome}</p>
                <p className="text-sm text-muted-foreground">{dep.perfil}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
