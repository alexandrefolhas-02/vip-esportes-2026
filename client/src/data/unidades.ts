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
  endereco?: string;
  observacao?: string;
  observacaoDestaque?: boolean;
  destaque?: string;
  categorias?: string;
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
    horarios: [
      "06:30 — 09:30 (Seg a Sex)",
      "17:00 — 20:00 (Seg e Qua)",
    ],
    endereco: "Av. Lúcio Costa, 17360 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-009",
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
    horarios: [
      "07:00 — 09:00 (Seg a Sex)",
      "17:00 — 20:00 (Seg a Qui)",
    ],
    endereco: "Av. Di Cavalcanti, 540 - Barra da Tijuca, Rio de Janeiro - RJ, 22793-320",
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
    horarios: [
      "17:00 — 21:00 (Seg e Qua)",
    ],
    endereco: "R. Alm. Heráclito da Graça Aranha, 279 - Barra da Tijuca, Rio de Janeiro - RJ, 22631-400",
    observacao: "SOMENTE PARA MORADORES DO CONDOMÍNIO",
    observacaoDestaque: false,
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
    publicoIndicado: "Crianças e adolescentes",
    horarios: [
      "14:00 — 15:00 (Ter e Qui)",
      "15:00 — 16:00 (Ter e Qui)",
    ],
    categorias: "Sub 12 e Sub 14",
    endereco: "Praça Miguel Osório, 22 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-190",
    observacao: "ABERTO PARA NÃO-ALUNOS DO COLÉGIO",
    observacaoDestaque: true,
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
    publicoIndicado: "Crianças e adolescentes",
    horarios: [
      "14:00 — 15:00 (Seg e Qua)",
      "15:00 — 16:00 (Seg e Qua)",
    ],
    categorias: "Sub 14 e Sub 16",
    endereco: "Estr. dos Três Rios, 1801 - Freguesia (Jacarepaguá), Rio de Janeiro - RJ, 22745-004",
    observacao: "ABERTO PARA NÃO-ALUNOS DO COLÉGIO",
    observacaoDestaque: true,
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
    publicoIndicado: "Crianças e adolescentes",
    horarios: [
      "15:30 — 16:30 (Ter e Qui)",
      "16:30 — 17:30 (Ter e Qui)",
    ],
    categorias: "Sub 14 e Sub 16",
    endereco: "Av. dos Mananciais, 436 - Taquara, Rio de Janeiro - RJ, 22720-410",
    observacao: "ABERTO PARA NÃO-ALUNOS DO COLÉGIO",
    observacaoDestaque: true,
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
    horarios: [
      "14:00 — 15:00 (Ter e Qui)",
      "15:00 — 16:00 (Ter e Qui)",
    ],
    categorias: "Sub 12 e Sub 14",
    endereco: "Av. Genaro de Carvalho, 2638 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-350",
    observacao: "SOMENTE PARA ALUNOS DO COLÉGIO",
    observacaoDestaque: false,
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
    horarios: [
      "16:00 — 16:50 (Seg e Qua)",
      "16:50 — 17:40 (Seg e Qua)",
    ],
    categorias: "Sub 12 e Sub 14",
    endereco: "R. Odilon Martins de Andrade, 300 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-230",
    observacao: "SOMENTE PARA ALUNOS DO COLÉGIO",
    observacaoDestaque: false,
    imagens: [
      "https://images.unsplash.com/photo-1592656089638-02994ad24e31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
    ],
  },
  {
    id: "aquidaba",
    nome: "Iate Clube Aquidabã",
    local: "Iate Clube Aquidabã",
    modalidades: ["Vôlei"],
    tipos: ["Clube"],
    whatsappKey: "aquidaba",
    botaoTexto: "Tenho interesse nessa unidade",
    descricao: "Aulas de Vôlei no Iate Clube Aquidabã, com infraestrutura de clube e ambiente ideal para a prática esportiva.",
    publicoIndicado: "Crianças e adolescentes",
    horarios: [
      "18:00 — 19:00 (Seg/Ter/Qui)",
      "19:00 — 20:00 (Seg/Qui)",
    ],
    categorias: "Sub 12 / Sub 14 / Sub 17",
    endereco: "Praia do Anil, 213 - Centro, Angra dos Reis - RJ, 23904-010",
    observacao: "ABERTO PARA NÃO-SÓCIO DO CLUBE",
    observacaoDestaque: true,
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
    tipos: ["Unidade esportiva"],
    whatsappKey: "guaratiba",
    botaoTexto: "Agendar aula em Guaratiba",
    descricao: "Aulas de Vôlei de Praia na unidade VIP Esportes Guaratiba, com quadra coberta e foco em condicionamento e técnica.",
    publicoIndicado: "Sub 18 e Adulto",
    horarios: [
      "17:30 — 18:30 (Seg e Qua)",
      "18:30 — 19:30 (Seg e Qua)",
    ],
    endereco: "Av. das Américas, 28499 - Guaratiba, Rio de Janeiro - RJ, 23020-470",
    observacao: "Quadra Coberta",
    observacaoDestaque: false,
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
    horarios: [
      "14:00 — 16:00 (Ter/Qua/Sex)",
    ],
    categorias: "Mirim e Infantil",
    destaque: "Equipe de Competição",
    endereco: "Av. Rachel de Queiroz - Barra da Tijuca, Rio de Janeiro - RJ, 22793-100",
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
