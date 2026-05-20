import { useEffect } from "react";
import { Link } from "wouter";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLeft, Check, Building, GraduationCap, Home } from "lucide-react";

const beneficios = [
  "Metodologia própria e comprovada",
  "Professores qualificados e treinados",
  "Gestão profissional do projeto esportivo",
  "Relatórios de evolução dos alunos",
  "Material esportivo incluso",
  "Flexibilidade de horários",
  "Comunicação direta com pais e coordenação",
  "Eventos e campeonatos internos",
];

const tiposParcerias = [
  {
    icon: GraduationCap,
    titulo: "Escolas",
    descricao: "Aulas de vôlei e beach tennis como atividade extracurricular ou dentro da grade escolar. Formação esportiva completa para seus alunos.",
  },
  {
    icon: Building,
    titulo: "Clubes",
    descricao: "Programas esportivos para sócios com turmas organizadas por idade e nível. Gestão completa das atividades esportivas.",
  },
  {
    icon: Home,
    titulo: "Condomínios",
    descricao: "Aulas de beach tennis e vôlei de praia nas quadras do condomínio. Conveniência e qualidade para os moradores.",
  },
];

export default function ParaEscolasClubesCondominios() {
  useEffect(() => {
    document.title = "Para Escolas, Clubes e Condomínios | VIP Esportes";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#000040] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-turquesa/5 skew-x-[-12deg] translate-x-1/4" />
        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight max-w-4xl">
            Leve a metodologia VIP Esportes para sua escola, clube ou condomínio
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            Desenvolvemos projetos esportivos personalizados para instituições que desejam oferecer aulas de qualidade, com metodologia, equipe técnica e gestão profissional.
          </p>
          <a
            href={getWhatsAppUrl("escolasClubes")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg mt-8"
          >
            Quero levar a VIP para minha estrutura
          </a>
        </div>
      </section>

      {/* Tipos de parceria */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy uppercase mb-10">Tipos de parceria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiposParcerias.map((tipo) => (
              <div key={tipo.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-turquesa/30 transition-all">
                <tipo.icon className="w-10 h-10 text-turquesa mb-4" />
                <h3 className="font-heading text-xl font-bold text-navy">{tipo.titulo}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{tipo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy uppercase mb-10">O que oferecemos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {beneficios.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-turquesa/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-turquesa" />
                </div>
                <span className="text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#000040]">
        <div className="container text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white uppercase mb-4">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-white/70 mb-8">Entre em contato e saiba como podemos ajudar sua instituição.</p>
          <a
            href={getWhatsAppUrl("escolasClubes")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg"
          >
            Quero levar a VIP para minha estrutura
          </a>
        </div>
      </section>
    </div>
  );
}
