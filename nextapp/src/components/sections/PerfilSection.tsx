import { Baby, GraduationCap, Heart, Star, Trophy, Users, Building } from "lucide-react";

const perfis = [
  { icon: Baby, titulo: "Crianças iniciando no esporte", descricao: "Primeiros passos com diversão e segurança" },
  { icon: GraduationCap, titulo: "Adolescentes em desenvolvimento", descricao: "Formação técnica e social" },
  { icon: Heart, titulo: "Adultos buscando qualidade de vida", descricao: "Saúde, bem-estar e socialização" },
  { icon: Star, titulo: "Iniciantes sem experiência", descricao: "Turmas especiais para quem está começando" },
  { icon: Trophy, titulo: "Intermediários e avançados", descricao: "Evolução técnica constante" },
  { icon: Users, titulo: "Atletas em formação competitiva", descricao: "Treinamento de alta performance" },
  { icon: Building, titulo: "Escolas, clubes e condomínios", descricao: "Projetos esportivos personalizados" },
];

export default function PerfilSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-tight">
            A VIP tem uma turma para cada perfil
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {perfis.map((perfil) => (
            <div key={perfil.titulo} className="group bg-gray-50 hover:bg-turquesa/5 border border-gray-100 hover:border-turquesa/30 rounded-xl p-5 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-turquesa/10 group-hover:bg-turquesa/20 flex items-center justify-center mb-3 transition-colors">
                <perfil.icon className="w-5 h-5 text-turquesa" />
              </div>
              <h3 className="font-heading text-base font-semibold text-navy">{perfil.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{perfil.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
