import { BookOpen, Users, Layers, Baby, MapPin, MessageCircle } from "lucide-react";

const cards = [
  { icon: BookOpen, titulo: "Metodologia própria", descricao: "Ensino estruturado para evolução constante" },
  { icon: Users, titulo: "Professores qualificados", descricao: "Equipe técnica especializada e dedicada" },
  { icon: Layers, titulo: "Turmas por idade e nível", descricao: "Grupos adequados para cada perfil" },
  { icon: Baby, titulo: "Todas as idades", descricao: "Crianças, adolescentes e adultos" },
  { icon: MapPin, titulo: "Várias regiões", descricao: "Unidades em praias, escolas e clubes" },
  { icon: MessageCircle, titulo: "Aula experimental", descricao: "Agende pelo WhatsApp de forma rápida" },
];

export default function AutoridadeSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-tight">
            Muito mais que uma escola de esportes
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A VIP Esportes usa o esporte como ferramenta de desenvolvimento técnico, físico, social e emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={card.titulo} className="group relative bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-turquesa/20 group-hover:bg-turquesa rounded-full transition-colors duration-300" />
              <div className="pl-4">
                <div className="w-12 h-12 rounded-lg bg-turquesa/10 flex items-center justify-center mb-4 group-hover:bg-turquesa/20 transition-colors">
                  <card.icon className="w-6 h-6 text-turquesa" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">{card.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{card.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
