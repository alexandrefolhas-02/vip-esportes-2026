import { useEffect } from "react";
import { Link } from "wouter";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { updateMetaTags } from "@/lib/seo";
import { Medal, Star, Users, Heart, Target, ArrowLeft } from "lucide-react";

const valores = [
  { icon: Target, titulo: "Excelência técnica", descricao: "Metodologia desenvolvida por quem viveu o alto rendimento olímpico." },
  { icon: Users, titulo: "Formação em equipe", descricao: "O vôlei ensina cooperação, respeito e responsabilidade coletiva." },
  { icon: Heart, titulo: "Formação humana", descricao: "Mais do que atletas, formamos pessoas com valores e caráter." },
  { icon: Star, titulo: "Confiança e superação", descricao: "Cada aluno é incentivado a superar seus próprios limites." },
];

const conquistas = [
  { ano: "2008", evento: "Jogos Olímpicos de Pequim", resultado: "Medalha de Ouro", descricao: "Seleção Brasileira Feminina de Vôlei" },
  { ano: "2012", evento: "Jogos Olímpicos de Londres", resultado: "Medalha de Ouro", descricao: "Seleção Brasileira Feminina de Vôlei" },
];

export default function EscolaVoleiPaulaPequenoPage() {
  useEffect(() => {
    updateMetaTags({
      title: "Escola de Vôlei Paula Pequeno | VIP Esportes",
      description: "A metodologia olímpica de Paula Pequeno, bicampeã olímpica, para crianças, adolescentes e jovens atletas no Rio de Janeiro. Vôlei e Vôlei de Praia.",
      keywords: "escola de vôlei paula pequeno, vôlei rio de janeiro, bicampeã olímpica, vôlei crianças, metodologia vôlei",
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative bg-[#000040] overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/paula-pequeno/paula-hero.jpg"
            alt="Paula Pequeno"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-indoor-aWVCWSzP5C8vcFoWP2AYvj.webp";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040] via-[#000040]/70 to-[#000040]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000040]/60 to-transparent" />
        </div>

        <div className="relative container pb-20 lg:pb-28 pt-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>

          {/* Olympic badge */}
          <div className="flex items-center gap-2 mb-4">
            <Medal className="w-5 h-5 text-yellow-400" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-yellow-400">
              Bicampeã Olímpica · Pequim 2008 · Londres 2012
            </span>
          </div>

          {/* Brand */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-16 bg-turquesa rounded-full" />
            <div>
              <p className="text-turquesa text-sm font-bold tracking-[0.2em] uppercase mb-1">Escola de Vôlei</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-none">
                Paula Pequeno
              </h1>
            </div>
          </div>

          <p className="text-white/80 text-lg lg:text-xl max-w-2xl leading-relaxed mb-8">
            A metodologia de quem venceu nos maiores palcos do voleibol mundial — agora formando crianças, adolescentes e jovens atletas no Rio de Janeiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppUrl("escolaVoleiPaulaPequeno")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97]"
            >
              Quero matricular meu filho
            </a>
            <a
              href="#sobre-a-escola"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-turquesa text-white hover:text-turquesa font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Conhecer a metodologia
            </a>
          </div>
        </div>
      </section>

      {/* Conquistas olímpicas */}
      <section className="py-16 bg-navy">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {conquistas.map((c) => (
              <div key={c.ano} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center shrink-0">
                  <Medal className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-yellow-400 text-xs font-bold tracking-[0.1em] uppercase mb-1">{c.resultado}</p>
                  <p className="text-white font-heading text-lg font-bold leading-tight">{c.evento}</p>
                  <p className="text-white/60 text-sm mt-1">{c.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio / Sobre Paula */}
      <section id="sobre-a-escola" className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/paula-pequeno/paula-2.jpg"
                  alt="Paula Pequeno em ação"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-indoor-aWVCWSzP5C8vcFoWP2AYvj.webp";
                  }}
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/paula-pequeno/paula-3.jpg"
                  alt="Paula Pequeno"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-praia-4ncAvwedaXsKxWhHRbRgxr.webp";
                  }}
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/paula-pequeno/paula-4.jpg"
                  alt="Paula Pequeno treinando"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/equipe-competicao-n26yrzQgbzWktBFXaPUXV7.webp";
                  }}
                />
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div className="w-16 h-1 bg-turquesa mb-6" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy uppercase tracking-tight mb-6">
                Quem é Paula Pequeno
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Paula Pequeno é uma das maiores atletas da história do voleibol brasileiro. Bicampeã olímpica com a Seleção Brasileira Feminina de Vôlei, conquistou as medalhas de ouro nos Jogos Olímpicos de Pequim 2008 e Londres 2012, tornando-se referência mundial pela sua técnica, potência, liderança e espírito competitivo.
                </p>
                <p>
                  Reconhecida como uma das grandes ponteiras passadoras do voleibol, Paula construiu uma carreira marcada por títulos, superação e excelência dentro das quadras. Sua trajetória inspira atletas de diferentes gerações e representa valores fundamentais do esporte: disciplina, dedicação, trabalho em equipe, respeito e busca constante pela evolução.
                </p>
                <p>
                  À frente da Escola de Vôlei Paula Pequeno, a bicampeã olímpica leva sua experiência de alto rendimento para a formação de crianças, adolescentes e jovens atletas, oferecendo uma metodologia que une aprendizado técnico, desenvolvimento esportivo e formação humana.
                </p>
                <p className="font-semibold text-navy">
                  Mais do que ensinar voleibol, a Escola de Vôlei Paula Pequeno tem como missão formar pessoas por meio do esporte, estimulando confiança, responsabilidade, amizade, saúde e paixão pelo vôlei.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Pilares */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="w-16 h-1 bg-turquesa mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy uppercase tracking-tight">
              Os pilares da nossa escola
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Uma metodologia construída com a experiência de quem conquistou o topo do voleibol mundial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-lg bg-turquesa/10 flex items-center justify-center mb-4 group-hover:bg-turquesa/20 transition-colors">
                  <v.icon className="w-6 h-6 text-turquesa" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{v.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="w-16 h-1 bg-turquesa mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy uppercase tracking-tight">
              Nossas modalidades
            </h2>
            <p className="mt-4 text-muted-foreground">
              Vôlei indoor e Vôlei de Praia com a metodologia Paula Pequeno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/modalidades/volei" className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-indoor-aWVCWSzP5C8vcFoWP2AYvj.webp"
                  alt="Vôlei"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy uppercase mb-2">Vôlei</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Aulas de vôlei indoor para crianças e adolescentes em escolas, clubes e unidades parceiras, com formação técnica e socioeducativa.
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-turquesa font-semibold">
                  Ver detalhes <ArrowLeft className="w-3 h-3 rotate-180" />
                </span>
              </div>
            </Link>

            <Link href="/modalidades/volei-de-praia" className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-praia-4ncAvwedaXsKxWhHRbRgxr.webp"
                  alt="Vôlei de Praia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy uppercase mb-2">Vôlei de Praia</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Treinos na areia para desenvolvimento técnico, condicionamento e qualidade de vida — para adolescentes e adultos.
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-turquesa font-semibold">
                  Ver detalhes <ArrowLeft className="w-3 h-3 rotate-180" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-28 bg-[#000040]">
        <div className="container text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Medal className="w-5 h-5 text-yellow-400" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-yellow-400">
              Metodologia olímpica
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            Seu filho no vôlei<br />
            <span className="text-turquesa">com quem entende de campeões</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Fale com nossa equipe pelo WhatsApp e saiba tudo sobre turmas, horários e unidades da Escola de Vôlei Paula Pequeno.
          </p>
          <a
            href={getWhatsAppUrl("escolaVoleiPaulaPequeno")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
