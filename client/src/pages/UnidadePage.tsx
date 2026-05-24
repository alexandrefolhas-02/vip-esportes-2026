import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { getUnidadeById } from "@/data/unidades";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLeft, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";
import NotFound from "./NotFound";

export default function UnidadePage() {
  const { id } = useParams<{ id: string }>();
  const unidade = getUnidadeById(id || "");

  useEffect(() => {
    if (unidade) {
      updateMetaTags({
        title: `${unidade.nome} | Unidades VIP Esportes`,
        description: unidade.descricao,
        keywords: `${unidade.nome.toLowerCase()}, unidade vip esportes, aulas ${unidade.modalidades.map(m => m.toLowerCase()).join(', ')}`,
        image: unidade.imagens?.[0]
      });
    }
    window.scrollTo(0, 0);
  }, [unidade]);

  if (!unidade) return <NotFound />;

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <Link href="/unidades" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar às unidades
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            {unidade.nome}
          </h1>
          {unidade.destaque && (
            <span className="inline-block mt-3 text-sm font-bold bg-turquesa text-white px-4 py-1.5 rounded-full uppercase tracking-wide">
              {unidade.destaque}
            </span>
          )}
          <div className="flex items-center gap-2 mt-4">
            <MapPin className="w-5 h-5 text-turquesa" />
            <span className="text-lg text-white/80">{unidade.local}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {unidade.modalidades.map((mod) => (
              <span key={mod} className="text-sm bg-turquesa/20 text-turquesa px-3 py-1 rounded-full font-medium">
                {mod}
              </span>
            ))}
            {unidade.tipos.map((tipo) => (
              <span key={tipo} className="text-sm bg-white/10 text-white/80 px-3 py-1 rounded-full font-medium">
                {tipo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-navy uppercase mb-4">Sobre a unidade</h2>
              <p className="text-foreground leading-relaxed text-lg">{unidade.descricao}</p>

              <h3 className="font-heading text-xl font-bold text-navy uppercase mt-8 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-turquesa" /> Público indicado
              </h3>
              <p className="text-muted-foreground leading-relaxed">{unidade.publicoIndicado}</p>

              <h3 className="font-heading text-xl font-bold text-navy uppercase mt-8 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-turquesa" /> Horários
              </h3>
              {unidade.categorias && (
                <p className="text-sm text-turquesa font-semibold mb-2">{unidade.categorias}</p>
              )}
              <ul className="space-y-2">
                {unidade.horarios.map((h) => (
                  <li key={h} className="text-foreground bg-gray-50 px-4 py-2 rounded-lg">{h}</li>
                ))}
              </ul>
              {unidade.observacao && (
                <p className={`mt-3 text-sm font-semibold px-4 py-2 rounded-lg ${unidade.observacaoDestaque ? "bg-turquesa/10 text-turquesa border border-turquesa/30" : "bg-gray-100 text-gray-600"}`}>
                  {unidade.observacao}
                </p>
              )}

              {/* Fotos */}
              {unidade.imagens && unidade.imagens.length > 0 && (
                <>
                  <h3 className="font-heading text-xl font-bold text-navy uppercase mt-8 mb-3">Fotos da Unidade</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {unidade.imagens.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={img}
                          alt={`Foto ${i + 1} da Unidade ${unidade.nome}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 sticky top-28">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Agende sua aula</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fale com nossa equipe pelo WhatsApp e agende sua aula experimental nesta unidade.
                </p>
                <a
                  href={getWhatsAppUrl(unidade.whatsappKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.97]"
                >
                  {unidade.botaoTexto}
                </a>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-navy mb-2">Modalidades nesta unidade:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {unidade.modalidades.map((mod) => (
                      <span key={mod} className="text-xs bg-turquesa/10 text-turquesa px-2 py-0.5 rounded-full font-medium">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  {unidade.endereco && (
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{unidade.endereco}</p>
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unidade.endereco || unidade.local + " Rio de Janeiro")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-turquesa hover:text-navy font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Como chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
