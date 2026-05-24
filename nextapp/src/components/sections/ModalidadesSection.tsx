import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { modalidades } from "@/data/modalidades";
import { ArrowRight } from "lucide-react";

export default function ModalidadesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#000040] diagonal-top diagonal-bottom relative">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-1 bg-turquesa mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
            Escolha sua modalidade
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modalidades.map((mod) => (
            <div key={mod.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-turquesa/50 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={mod.imagem} alt={mod.nome} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-white uppercase">{mod.nome}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{mod.descricaoCurta}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <a href={getWhatsAppUrl(mod.whatsappKey)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.97] text-sm">
                    {mod.botaoTexto}
                  </a>
                  <Link href={`/modalidades/${mod.slug}`} className="inline-flex items-center justify-center gap-2 text-turquesa hover:text-white font-medium text-sm transition-colors">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
