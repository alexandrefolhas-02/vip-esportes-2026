import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { getModalidadeBySlug } from "@/data/modalidades";
import { getUnidadeById } from "@/data/unidades";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import NotFound from "./NotFound";

export default function ModalidadePage() {
  const { slug } = useParams<{ slug: string }>();
  const modalidade = getModalidadeBySlug(slug || "");

  useEffect(() => {
    if (modalidade) {
      document.title = `${modalidade.nome} | VIP Esportes`;
    }
    window.scrollTo(0, 0);
  }, [modalidade]);

  if (!modalidade) return <NotFound />;

  const unidadesData = modalidade.unidadesIds
    .map((id) => getUnidadeById(id))
    .filter(Boolean);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={modalidade.imagem} alt={modalidade.nome} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000040]/90 via-[#000040]/80 to-[#000040]/60" />
        </div>
        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            {modalidade.nome}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            {modalidade.descricaoCurta}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy uppercase mb-4">Sobre a modalidade</h2>
              <p className="text-foreground leading-relaxed">{modalidade.descricaoCompleta}</p>

              <h3 className="font-heading text-xl font-bold text-navy uppercase mt-8 mb-3">Para quem é indicada</h3>
              <p className="text-muted-foreground leading-relaxed">{modalidade.paraQuem}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-navy uppercase mb-4">Benefícios</h3>
              <ul className="space-y-3">
                {modalidade.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-turquesa/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-turquesa" />
                    </div>
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy uppercase mb-8">
            Unidades disponíveis para {modalidade.nome}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {unidadesData.map((uni) => uni && (
              <div key={uni.id} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-turquesa/30 transition-all">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-turquesa shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">{uni.nome}</h3>
                    <p className="text-sm text-muted-foreground">{uni.local}</p>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl(uni.whatsappKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-turquesa hover:bg-turquesa-dark text-white font-medium px-4 py-2 rounded-lg transition-all text-sm mt-3 active:scale-[0.97]"
                >
                  {uni.botaoTexto}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#000040]">
        <div className="container text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white uppercase mb-4">
            Agende sua aula experimental de {modalidade.nome}
          </h2>
          <p className="text-white/70 mb-8">Fale com nossa equipe e comece agora.</p>
          <a
            href={getWhatsAppUrl(modalidade.whatsappKey)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg"
          >
            {modalidade.botaoTexto}
          </a>
        </div>
      </section>
    </div>
  );
}
