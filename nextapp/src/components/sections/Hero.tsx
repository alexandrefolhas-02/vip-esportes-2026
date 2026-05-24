import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/hero-vip-esportes-UzqCEuHU9cAi6xaQyYPHkq.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Beach Tennis na praia do Rio de Janeiro" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000040]/90 via-[#000040]/75 to-[#000040]/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000040] to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          <div className="w-16 h-1 bg-turquesa mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }} />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-[1.05] tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            VIP Esportes: aulas de{" "}
            <span className="text-turquesa">Beach Tennis</span>, Vôlei e Vôlei de Praia no Rio de Janeiro
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Aulas para crianças, adolescentes e adultos, com metodologia própria, professores qualificados e unidades em praias, escolas, clubes e condomínios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a href={getWhatsAppUrl("geral")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg">
              Agendar aula experimental
            </a>
            <Link href="/unidades" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-turquesa text-white hover:text-turquesa font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Conhecer unidades
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 0V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
