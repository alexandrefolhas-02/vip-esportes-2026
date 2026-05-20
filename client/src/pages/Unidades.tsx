import { useState, useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { unidades, type Modalidade, type TipoLocal } from "@/data/unidades";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type FilterType = "all" | Modalidade | TipoLocal;

const filters: { label: string; value: FilterType }[] = [
  { label: "Todas", value: "all" },
  { label: "Beach Tennis", value: "Beach Tennis" },
  { label: "Vôlei", value: "Vôlei" },
  { label: "Vôlei de Praia", value: "Vôlei de Praia" },
  { label: "Competição", value: "Equipe de Competição" },
  { label: "Praia", value: "Praia" },
  { label: "Escola", value: "Escola" },
  { label: "Clube", value: "Clube" },
  { label: "Condomínio", value: "Condomínio" },
];

export default function UnidadesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  useEffect(() => {
    document.title = "Unidades | VIP Esportes";
    window.scrollTo(0, 0);
  }, []);

  const filteredUnidades = unidades.filter((u) => {
    if (activeFilter === "all") return true;
    return (
      u.modalidades.includes(activeFilter as Modalidade) ||
      u.tipos.includes(activeFilter as TipoLocal)
    );
  });

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Nossas Unidades
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Encontre a unidade VIP Esportes mais próxima de você. Estamos em praias, escolas, clubes e condomínios no Rio de Janeiro.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-turquesa text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-turquesa/10 hover:text-turquesa"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredUnidades.map((uni) => (
              <div
                key={uni.id}
                className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-turquesa/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-xl font-bold text-navy">{uni.nome}</h3>
                  <MapPin className="w-5 h-5 text-turquesa shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{uni.local}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {uni.modalidades.map((mod) => (
                    <span key={mod} className="text-xs bg-turquesa/10 text-turquesa px-2 py-0.5 rounded-full font-medium">
                      {mod}
                    </span>
                  ))}
                  {uni.tipos.map((tipo) => (
                    <span key={tipo} className="text-xs bg-navy/10 text-navy px-2 py-0.5 rounded-full font-medium">
                      {tipo}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={getWhatsAppUrl(uni.whatsappKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-turquesa hover:bg-turquesa-dark text-white font-medium px-4 py-2 rounded-lg transition-all text-sm active:scale-[0.97]"
                  >
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
