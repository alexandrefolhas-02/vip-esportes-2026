// Dados centralizados de SEO - VIP Esportes
// Editável pelo Antigravity

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export const seoPages: Record<string, SEOData> = {
  home: {
    title: "VIP Esportes | Aulas de Beach Tennis, Vôlei e Vôlei de Praia no Rio de Janeiro",
    description: "Escola de esportes no Rio de Janeiro. Aulas de Beach Tennis, Vôlei e Vôlei de Praia para crianças, adolescentes e adultos. Agende sua aula experimental!",
    keywords: "beach tennis rio de janeiro, vôlei recreio, vôlei de praia, escola de esportes, aula experimental",
  },
  beachTennis: {
    title: "Beach Tennis | VIP Esportes - Aulas no Rio de Janeiro",
    description: "Aulas de Beach Tennis para todos os níveis no Rio de Janeiro. Quadras na praia e em condomínios. Professores qualificados e metodologia própria.",
    keywords: "beach tennis, aulas beach tennis, beach tennis recreio, beach tennis rio",
  },
  volei: {
    title: "Vôlei | VIP Esportes - Formação Esportiva para Crianças e Adolescentes",
    description: "Aulas de Vôlei para crianças e adolescentes em escolas e clubes do Rio de Janeiro. Metodologia de formação esportiva completa.",
    keywords: "vôlei crianças, vôlei adolescentes, escola de vôlei, formação esportiva",
  },
  voleiDePraia: {
    title: "Vôlei de Praia | VIP Esportes - Treinos na Areia",
    description: "Aulas de Vôlei de Praia no Rio de Janeiro. Treinos na areia com foco em técnica, condicionamento e qualidade de vida.",
    keywords: "vôlei de praia, treino areia, vôlei praia rio, condicionamento",
  },
  equipeCompeticao: {
    title: "Equipe de Competição | VIP Esportes - Formação de Atletas",
    description: "Equipe de Competição da VIP Esportes. Treinamentos para atletas em desenvolvimento competitivo com foco em performance.",
    keywords: "equipe competição vôlei, atletas, treinamento competitivo, formação atletas",
  },
  unidades: {
    title: "Unidades | VIP Esportes - Encontre a Unidade Mais Próxima",
    description: "Conheça todas as unidades da VIP Esportes no Rio de Janeiro. Praias, escolas, clubes e condomínios.",
    keywords: "unidades vip esportes, locais aulas, quadras rio de janeiro",
  },
  metodologia: {
    title: "Metodologia | VIP Esportes - Nossa Forma de Ensinar",
    description: "Conheça a metodologia VIP Esportes: técnica, disciplina, diversão, evolução, socialização e qualidade de vida.",
    keywords: "metodologia esportiva, ensino esporte, formação esportiva",
  },
  paraEscolas: {
    title: "Para Escolas, Clubes e Condomínios | VIP Esportes",
    description: "Leve a metodologia VIP Esportes para sua escola, clube ou condomínio. Projetos esportivos personalizados.",
    keywords: "esporte escola, projeto esportivo, vôlei escola, beach tennis condomínio",
  },
};
