// Dados centralizados de modalidades - VIP Esportes
// Editável pelo Antigravity

export interface ModalidadeData {
  id: string;
  nome: string;
  slug: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  paraQuem: string;
  beneficios: string[];
  imagem: string;
  botaoTexto: string;
  whatsappKey: string;
  unidadesIds: string[];
}

export const modalidades: ModalidadeData[] = [
  {
    id: "beach-tennis",
    nome: "Beach Tennis",
    slug: "beach-tennis",
    descricaoCurta: "Aulas para iniciantes, intermediários e avançados, com foco em técnica, diversão, evolução e socialização.",
    descricaoCompleta: "O Beach Tennis é um dos esportes que mais cresce no Brasil. Praticado na areia, combina elementos do tênis, vôlei de praia e badminton, proporcionando um treino completo e divertido. Na VIP Esportes, oferecemos aulas para todos os níveis, com professores especializados e metodologia própria que garante evolução constante.",
    paraQuem: "Adultos e adolescentes de todos os níveis, desde iniciantes até jogadores avançados que buscam evolução técnica e competitiva.",
    beneficios: [
      "Melhora do condicionamento físico",
      "Desenvolvimento da coordenação motora",
      "Socialização e networking",
      "Queima calórica elevada",
      "Baixo impacto nas articulações",
      "Diversão garantida",
    ],
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/beach-tennis-action-SAbWihzpEeKFKKgBkfG8xG.webp",
    botaoTexto: "Agendar Beach Tennis",
    whatsappKey: "beachTennis",
    unidadesIds: ["cdesign", "tennis-route", "nova-ipanema"],
  },
  {
    id: "volei",
    nome: "Vôlei",
    slug: "volei",
    descricaoCurta: "Aulas de vôlei para crianças e adolescentes em escolas, clubes e unidades parceiras, com metodologia voltada para formação esportiva.",
    descricaoCompleta: "As aulas de Vôlei da VIP Esportes são voltadas para a formação esportiva de crianças e adolescentes. Com metodologia própria, desenvolvemos não apenas a técnica do esporte, mas também valores como disciplina, trabalho em equipe, respeito e superação. Nossas aulas acontecem em escolas, clubes e unidades parceiras.",
    paraQuem: "Crianças e adolescentes em fase de formação esportiva, desde iniciantes até alunos com experiência prévia.",
    beneficios: [
      "Desenvolvimento técnico e tático",
      "Formação socioeducativa",
      "Trabalho em equipe",
      "Disciplina e foco",
      "Coordenação motora",
      "Condicionamento físico",
    ],
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-indoor-aWVCWSzP5C8vcFoWP2AYvj.webp",
    botaoTexto: "Agendar Vôlei",
    whatsappKey: "volei",
    unidadesIds: ["icone-recreio", "icone-freguesia", "icone-taquara", "st-georges", "start", "aquidaba"],
  },
  {
    id: "volei-de-praia",
    nome: "Vôlei de Praia",
    slug: "volei-de-praia",
    descricaoCurta: "Treinos na areia para desenvolvimento técnico, condicionamento, coordenação, trabalho em equipe e qualidade de vida.",
    descricaoCompleta: "O Vôlei de Praia na VIP Esportes oferece treinos completos na areia, combinando desenvolvimento técnico com condicionamento físico. A prática na areia potencializa os benefícios do esporte, trabalhando força, resistência e agilidade de forma natural e prazerosa.",
    paraQuem: "Adolescentes e adultos que buscam condicionamento físico, técnica e qualidade de vida através do esporte na areia.",
    beneficios: [
      "Condicionamento físico superior",
      "Fortalecimento muscular na areia",
      "Melhora da coordenação",
      "Trabalho em dupla",
      "Qualidade de vida",
      "Contato com a natureza",
    ],
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/volei-praia-4ncAvwedaXsKxWhHRbRgxr.webp",
    botaoTexto: "Agendar Vôlei de Praia",
    whatsappKey: "voleiDePraia",
    unidadesIds: ["nova-ipanema", "guaratiba"],
  },
  {
    id: "equipe-de-competicao",
    nome: "Equipe de Competição",
    slug: "equipe-de-competicao",
    descricaoCurta: "Treinamentos direcionados para atletas em desenvolvimento competitivo, com foco em evolução técnica, disciplina e performance.",
    descricaoCompleta: "A Equipe de Competição da VIP Esportes é voltada para atletas que desejam evoluir no cenário competitivo. Com treinamentos intensivos, acompanhamento técnico especializado e participação em torneios, desenvolvemos atletas completos com foco em performance, disciplina e superação.",
    paraQuem: "Atletas em desenvolvimento que buscam evolução competitiva, com experiência prévia em vôlei e comprometimento com treinos regulares.",
    beneficios: [
      "Evolução técnica avançada",
      "Preparação para competições",
      "Disciplina e foco competitivo",
      "Acompanhamento individualizado",
      "Participação em torneios",
      "Desenvolvimento de liderança",
    ],
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/equipe-competicao-n26yrzQgbzWktBFXaPUXV7.webp",
    botaoTexto: "Falar sobre competição",
    whatsappKey: "aeronautica",
    unidadesIds: ["aeronautica"],
  },
];

export const getModalidadeBySlug = (slug: string): ModalidadeData | undefined => {
  return modalidades.find((m) => m.slug === slug);
};
