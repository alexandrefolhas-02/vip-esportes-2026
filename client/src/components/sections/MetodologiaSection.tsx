import { Crosshair, Shield, Smile, TrendingUp, Users, Heart } from "lucide-react";

const pilares = [
  { icon: Crosshair, titulo: "Técnica", descricao: "Ensino técnico estruturado para cada nível" },
  { icon: Shield, titulo: "Disciplina", descricao: "Valores e comprometimento com a evolução" },
  { icon: Smile, titulo: "Diversão", descricao: "Aprender com prazer e motivação" },
  { icon: TrendingUp, titulo: "Evolução", descricao: "Progresso constante e mensurável" },
  { icon: Users, titulo: "Socialização", descricao: "Amizades e trabalho em equipe" },
  { icon: Heart, titulo: "Qualidade de vida", descricao: "Saúde física e mental pelo esporte" },
];

export default function MetodologiaSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-1 bg-turquesa mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-tight">
              Nossa metodologia
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A metodologia VIP une ensino técnico, diversão, disciplina, socialização e desenvolvimento humano. Cada aula é pensada para respeitar o nível do aluno, incentivar a evolução constante e criar uma relação positiva com o esporte.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pilares.map((pilar) => (
              <div
                key={pilar.titulo}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-turquesa/30 transition-all duration-300"
              >
                <pilar.icon className="w-8 h-8 text-turquesa mb-3" />
                <h3 className="font-heading text-lg font-semibold text-navy">{pilar.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pilar.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
