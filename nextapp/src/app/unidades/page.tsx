import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight } from "lucide-react";
import { unidades } from "@/data/unidades";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Unidades | VIP Esportes",
  description: "Conheça todas as unidades da VIP Esportes no Rio de Janeiro. Praias, escolas, clubes e condomínios com aulas de Beach Tennis, Vôlei e Vôlei de Praia.",
  keywords: ["unidades vip esportes", "locais aulas", "quadras rio de janeiro", "beach tennis recreio", "vôlei barra"],
};

export default function UnidadesPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Nossas Unidades
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Praias, escolas, clubes e condomínios — encontre a unidade VIP mais próxima de você.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {unidades.map((uni) => (
              <div key={uni.id} className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-turquesa/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-heading text-xl font-bold text-navy">{uni.nome}</h2>
                  <MapPin className="w-5 h-5 text-turquesa shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{uni.local}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {uni.modalidades.map((mod) => (
                    <span key={mod} className="text-xs bg-turquesa/10 text-turquesa px-2 py-0.5 rounded-full font-medium">{mod}</span>
                  ))}
                  {uni.tipos.map((tipo) => (
                    <span key={tipo} className="text-xs bg-navy/10 text-navy px-2 py-0.5 rounded-full font-medium">{tipo}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={getWhatsAppUrl(uni.whatsappKey)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-turquesa hover:bg-turquesa-dark text-white font-medium px-4 py-2 rounded-lg transition-all text-sm active:scale-[0.97]">
                    {uni.botaoTexto}
                  </a>
                  <Link href={`/unidades/${uni.id}`} className="text-turquesa hover:text-navy text-sm font-medium flex items-center gap-1 transition-colors">
                    Detalhes <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
