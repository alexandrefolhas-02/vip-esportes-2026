import { useEffect } from "react";
import { Link } from "wouter";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLeft, Target, Eye, Heart } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";
import { seoPages } from "@/data/seo";

export default function Sobre() {
  useEffect(() => {
    updateMetaTags(seoPages.sobre);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            A VIP Esportes
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            Uma escola de excelência esportiva que desenvolve alunos dentro e fora das quadras desde o Rio de Janeiro para o mundo.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-navy uppercase mb-6">Quem somos</h2>
            <div className="space-y-4 text-foreground leading-relaxed text-lg">
              <p>
                A VIP Esportes é uma escola de esportes no Rio de Janeiro especializada em Beach Tennis, Vôlei, Vôlei de Praia e formação esportiva para crianças, adolescentes e adultos.
              </p>
              <p>
                Com metodologia própria e professores qualificados, atuamos em praias, escolas, clubes e condomínios, levando esporte de qualidade para diferentes públicos e regiões da cidade.
              </p>
              <p>
                Acreditamos que o esporte é uma ferramenta poderosa de desenvolvimento humano. Por isso, nossas aulas vão além da técnica — trabalhamos disciplina, socialização, superação e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <Target className="w-10 h-10 text-turquesa mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy">Missão</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Desenvolver pessoas através do esporte, oferecendo aulas de excelência com metodologia própria e ambiente acolhedor.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <Eye className="w-10 h-10 text-turquesa mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy">Visão</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Ser referência em ensino esportivo no Rio de Janeiro, reconhecida pela qualidade, inovação e impacto positivo na vida dos alunos.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <Heart className="w-10 h-10 text-turquesa mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy">Valores</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Excelência, respeito, evolução, trabalho em equipe, diversão e compromisso com o desenvolvimento integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#000040]">
        <div className="container text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white uppercase mb-4">
            Faça parte da VIP Esportes
          </h2>
          <p className="text-white/70 mb-8">Agende sua aula experimental e conheça nossa metodologia na prática.</p>
          <a
            href={getWhatsAppUrl("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg"
          >
            Agendar aula experimental
          </a>
        </div>
      </section>
    </div>
  );
}
