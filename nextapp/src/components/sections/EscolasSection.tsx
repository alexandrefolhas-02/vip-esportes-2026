import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EscolasSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#000040] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-turquesa/5 skew-x-[-12deg] translate-x-1/4" />
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
            Quer levar a VIP Esportes para sua escola, clube ou condomínio?
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            A VIP Esportes desenvolve projetos esportivos personalizados para instituições que desejam oferecer aulas de qualidade, com metodologia, equipe técnica e gestão profissional.
          </p>
          <a href={getWhatsAppUrl("escolasClubes")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] text-lg mt-8">
            Quero levar a VIP para minha estrutura
          </a>
        </div>
      </div>
    </section>
  );
}
