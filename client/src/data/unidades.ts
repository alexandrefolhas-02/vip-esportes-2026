// Dados centralizados de unidades - VIP Esportes
// Editável pelo Antigravity

export type Modalidade = "Beach Tennis" | "Vôlei" | "Vôlei de Praia" | "Equipe de Competição";
export type TipoLocal = "Praia" | "Condomínio" | "Escola" | "Clube" | "Unidade esportiva";

export interface Unidade {
  id: string;
  nome: string;
  local: string;
  modalidades: Modalidade[];
  tipos: TipoLocal[];
  whatsappKey: string;
  botaoTexto: string;
  descricao: string;
  publicoIndicado: string;
  horarios: string[];
  imagens: string[];
}

export const unidades: Unidade[] = [
  {
    id: "cdesign",
    nome: "CDESIGN",
    local: "Praia do Recreio",
    modalidades: ["Beach Tennis"],
    tipos: ["Praia"],
    whatsappKey: "cdesign",
    botaoTexto: "Agendar aula no CDESIGN",
    descricao: "Aulas de Beach Tennis na Praia do Recreio dos Bandeirantes, com estrutura completa e ambiente ideal para a prática do esporte na areia.",
    publicoIndicado: "Adultos e adolescentes de todos os níveis",
    horarios: ["Seg a Sex: 6h às 10h / 16h às 20h", "Sáb: 7h às 12h"],
    imagens: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "tennis-route",
    nome: "Tennis Route",
    local: "Condomínio Interlagos de Itaúna",
    modalidades: ["Beach Tennis"],
    tipos: ["Condomínio"],
    whatsappKey: "tennisRoute",
    botaoTexto: "Agendar aula na Tennis Route",
    descricao: "Aulas de Beach Tennis dentro do Condomínio Interlagos de Itaúna, com quadras exclusivas e ambiente privativo.",
    publicoIndicado: "Moradores e convidados, adultos e adolescentes",
    horarios: ["Seg a Sex: 7h às 10h / 17h às 20h", "Sáb: 8h às 12h"],
    imagens: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "nova-ipanema",
    nome: "Nova Ipanema",
    local: "Condomínio Nova Ipanema",
    modalidades: ["Beach Tennis", "Vôlei de Praia"],
    tipos: ["Condomínio"],
    whatsappKey: "novaIpanema",
    botaoTexto: "Agendar aula na Nova Ipanema",
    descricao: "Aulas de Beach Tennis e Vôlei de Praia no Condomínio Nova Ipanema, com quadras de areia e estrutura completa.",
    publicoIndicado: "Moradores e convidados, todas as idades",
    horarios: ["Seg a Sex: 6h às 10h / 16h às 20h", "Sáb: 7h às 11h"],
    imagens: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "icone-recreio",
    nome: "Colégio Ícone Recreio",
    local: "Colégio Ícone Recreio",
    modalidades: ["Vôlei"],
    tipos: ["Escola"],
    whatsappKey: "iconeRecreio",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei para alunos do Colégio Ícone Recreio, com foco em formação esportiva e desenvolvimento socioeducativo.",
    publicoIndicado: "Crianças e adolescentes (alunos do colégio)",
    horarios: ["Conforme grade escolar"],
    imagens: [
      "https://images.unsplash.com/photo-1592656089638-02994ad24e31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "icone-freguesia",
    nome: "Colégio Ícone Freguesia",
    local: "Colégio Ícone Freguesia",
    modalidades: ["Vôlei"],
    tipos: ["Escola"],
    whatsappKey: "iconeFreguesia",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei para alunos do Colégio Ícone Freguesia, com metodologia voltada para formação esportiva completa.",
    publicoIndicado: "Crianças e adolescentes (alunos do colégio)",
    horarios: ["Conforme grade escolar"],
    imagens: [
      "https://images.unsplash.com/photo-1592656089638-02994ad24e31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "icone-taquara",
    nome: "Colégio Ícone Taquara",
    local: "Colégio Ícone Taquara",
    modalidades: ["Vôlei"],
    tipos: ["Escola"],
    whatsappKey: "iconeTaquara",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei para alunos do Colégio Ícone Taquara, com desenvolvimento técnico e social através do esporte.",
    publicoIndicado: "Crianças e adolescentes (alunos do colégio)",
    horarios: ["Conforme grade escolar"],
    imagens: [
      "https://images.unsplash.com/photo-1592656089638-02994ad24e31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "st-georges",
    nome: "Colégio ST Georges",
    local: "Colégio ST Georges",
    modalidades: ["Vôlei"],
    tipos: ["Escola"],
    whatsappKey: "stGeorges",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei no Colégio ST Georges, com metodologia VIP focada em técnica, disciplina e evolução.",
    publicoIndicado: "Crianças e adolescentes (alunos do colégio)",
    horarios: ["Conforme grade escolar"],
    imagens: [
      "https://images.unsplash.com/photo-1592656089638-02994ad24e31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "start",
    nome: "Colégio START",
    local: "Colégio START",
    modalidades: ["Vôlei"],
    tipos: ["Escola"],
    whatsappKey: "start",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei no Colégio START, com formação esportiva e desenvolvimento integral do aluno.",
    publicoIndicado: "Crianças e adolescentes (alunos do colégio)",
    horarios: ["Conforme grade escolar"],
    imagens: [
      "https://images.unsplash.com/photo-1592656089638-02994ad24e31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "aquidaba",
    nome: "Clube Aquidabã",
    local: "Iate Clube Aquidabã",
    modalidades: ["Vôlei"],
    tipos: ["Clube"],
    whatsappKey: "aquidaba",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei no Iate Clube Aquidabã, com infraestrutura de clube e ambiente ideal para a prática esportiva.",
    publicoIndicado: "Crianças, adolescentes e adultos (sócios e convidados)",
    horarios: ["Seg a Sex: 14h às 18h", "Sáb: 9h às 12h"],
    imagens: [
      "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "guaratiba",
    nome: "Guaratiba",
    local: "VIP Esportes Guaratiba",
    modalidades: ["Vôlei de Praia"],
    tipos: ["Praia", "Unidade esportiva"],
    whatsappKey: "guaratiba",
    botaoTexto: "Agendar aula em Guaratiba",
    descricao: "Aulas de Vôlei de Praia na unidade VIP Esportes Guaratiba, com quadras de areia e foco em condicionamento e técnica.",
    publicoIndicado: "Adolescentes e adultos de todos os níveis",
    horarios: ["Seg a Sex: 6h às 9h / 16h às 19h", "Sáb: 7h às 11h"],
    imagens: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "aeronautica",
    nome: "Clube de Aeronáutica",
    local: "Clube de Aeronáutica",
    modalidades: ["Equipe de Competição"],
    tipos: ["Clube"],
    whatsappKey: "aeronautica",
    botaoTexto: "Falar sobre equipe de competição",
    descricao: "Treinamentos da Equipe de Competição da VIP Esportes no Clube de Aeronáutica, com foco em performance e evolução técnica para atletas.",
    publicoIndicado: "Atletas em desenvolvimento competitivo",
    horarios: ["Seg a Sex: 14h às 17h", "Sáb: 9h às 12h"],
    imagens: [
      "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80"
    ],
  },
];

export const getUnidadeById = (id: string): Unidade | undefined => {
  return unidades.find((u) => u.id === id);
};

export const getUnidadesByModalidade = (modalidade: Modalidade): Unidade[] => {
  return unidades.filter((u) => u.modalidades.includes(modalidade));
};

export const getUnidadesByTipo = (tipo: TipoLocal): Unidade[] => {
  return unidades.filter((u) => u.tipos.includes(tipo));
};
