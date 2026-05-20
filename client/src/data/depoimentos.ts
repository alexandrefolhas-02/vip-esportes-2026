// Dados centralizados de depoimentos - VIP Esportes
// Editável pelo Antigravity - substitua por depoimentos reais

export interface Depoimento {
  id: string;
  nome: string;
  perfil: string;
  texto: string;
  avatar?: string;
}

export const depoimentos: Depoimento[] = [
  {
    id: "1",
    nome: "Carla M.",
    perfil: "Mãe de aluno",
    texto: "Meu filho começou no vôlei com 8 anos e a evolução foi incrível. Além da técnica, ele desenvolveu disciplina, respeito e amor pelo esporte. Os professores são atenciosos e a metodologia é excelente.",
  },
  {
    id: "2",
    nome: "Ricardo S.",
    perfil: "Aluno adulto",
    texto: "Comecei no Beach Tennis sem nunca ter jogado e em poucos meses já estava participando de torneios amadores. As aulas são dinâmicas, divertidas e o ambiente é muito acolhedor.",
  },
  {
    id: "3",
    nome: "Fernanda L.",
    perfil: "Coordenadora de escola",
    texto: "A parceria com a VIP Esportes trouxe um diferencial enorme para nossa escola. Os alunos adoram as aulas, os pais elogiam e a organização da equipe é impecável.",
  },
  {
    id: "4",
    nome: "Pedro H.",
    perfil: "Aluno adolescente",
    texto: "Treinar na VIP é muito legal. Os professores ensinam de verdade e a gente se diverte enquanto aprende. Fiz muitos amigos e melhorei muito no vôlei.",
  },
];
