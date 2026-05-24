import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Crosshair, Shield, Smile, TrendingUp, Users, Heart, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Metodologia | VIP Esportes",
  description: "Conheça a metodologia VIP Esportes: técnica, disciplina, diversão, evolução, socialização e qualidade de vida. A forma de ensinar que faz a diferença.",
  keywords: ["metodologia esportiva vip", "ensino esporte rio de janeiro", "formação esportiva crianças"],
};

const pilares = [
  { icon: Crosshair, titulo: "Técnica", descricao: "Ensino técnico estruturado e progressivo, respeitando o nível de cada aluno e promovendo evolução constante com fundamentos sólidos." },
  { icon: Shield, titulo: "Disciplina", descricao: "Valores como pontualidade, respeito, comprometimento e responsabilidade são trabalhados em cada aula." },
  { icon: Smile, titulo: "Diversão", descricao: "Aprender com prazer é fundamental. Nossas aulas são dinâmicas, lúdicas e motivadoras para todas as idades." },
  { icon: TrendingUp, titulo: "Evolução", descricao: "Acompanhamento do progresso individual, com metas claras e feedback constante para cada aluno." },
  { icon: Users, titulo: "Socialização", descricao: "O esporte como ferramenta de integração social, construção de amizades e trabalho em equipe." },
  { icon: Heart, titulo: "Qualidade de vida", descricao: "Promoção da saúde física e mental através da prática esportiva regular e orientada." },
];

export default function MetodologiaPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">Nossa Metodologia</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            A metodologia VIP une ensino técnico, diversão, disciplina, socialização e desenvolvimento humano.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy uppercase mb-10">Os 6 pilares da metodologia VIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilares.map((pilar) => (
              <div key={pilar.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-turquesa/30 transition-all duration-300">
                <pilar.icon className="w-10 h-10 text-turquesa mb-4" />
                <h3 className="font-heading text-xl font-bold text-navy">{pilar.titulo}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{pilar.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-navy uppercase mb-6">O que nos diferencia</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>Na VIP Esportes, acreditamos que o esporte vai muito além da técnica. Nossa metodologia foi desenvolvida para formar pessoas completas, usando o esporte como ferramenta de transformação.</p>
              <p>Cada professor é treinado para aplicar nossa metodologia de forma consistente, garantindo que todos os alunos tenham a mesma qualidade de ensino, independente da unidade ou modalidade escolhida.</p>
              <p>Trabalhamos com turmas reduzidas, organizadas por idade e nível técnico, para que cada aluno receba atenção individualizada e evolua no seu próprio ritmo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#000040]">
        <div className="container text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white uppercase mb-4">Experimente nossa metodologia</h2>
          <p className="text-white/70 mb-8">Agende uma aula experimental e veja na prática como ensinamos.</p>
          <a href={getWhatsAppUrl("geral")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg">
            Agendar aula experimental
          </a>
        </div>
      </section>
    </div>
  );
}
