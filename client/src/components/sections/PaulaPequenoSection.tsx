import { Link } from "wouter";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Medal, ArrowRight } from "lucide-react";

export default function PaulaPequenoSection() {
  return (
    <section className="py-0 bg-[#000040] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="h-72 lg:h-full lg:absolute lg:inset-0 overflow-hidden">
              <img
                src="/images/paula-pequeno/paula-principal.jpg"
                alt="Paula Pequeno – Bicampeã Olímpica"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-indoor-aWVCWSzP5C8vcFoWP2AYvj.webp";
                }}
              />
              {/* Gradient overlay fading right on desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#000040] hidden lg:block" />
              {/* Gradient overlay fading bottom on mobile */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000040] lg:hidden" />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 py-16 lg:py-20 flex flex-col justify-center lg:pl-10 xl:pl-16">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <Medal className="w-5 h-5 text-yellow-400" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-yellow-400">
                Bicampeã Olímpica · Pequim 2008 · Londres 2012
              </span>
            </div>

            {/* Logo placeholder / brand line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-turquesa" />
              <div>
                <p className="text-turquesa text-xs font-bold tracking-[0.2em] uppercase">Escola de Vôlei</p>
                <p className="text-white text-2xl font-heading font-bold uppercase tracking-tight leading-tight">
                  Paula Pequeno
                </p>
              </div>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white uppercase tracking-tight leading-tight mb-6">
              A excelência olímpica<br />
              <span className="text-turquesa">dentro das quadras</span>
            </h2>

            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
              As modalidades de Vôlei e Vôlei de Praia da VIP Esportes têm a metodologia e a assinatura de Paula Pequeno — uma das maiores atletas da história do voleibol brasileiro. Mais do que ensinar vôlei, nossa escola forma pessoas por meio do esporte.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("escolaVoleiPaulaPequeno")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.97] text-sm"
              >
                Quero saber mais
              </a>
              <Link
                href="/escola-de-volei-paula-pequeno"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-turquesa text-white hover:text-turquesa font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                Conheça a escola <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
