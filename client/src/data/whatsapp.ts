// Dados centralizados de WhatsApp - VIP Esportes
// Editável pelo Antigravity

export const WHATSAPP_NUMBER = "5521978726747";

export interface WhatsAppMessage {
  id: string;
  label: string;
  message: string;
  number?: string;
}

export const whatsappMessages: Record<string, WhatsAppMessage> = {
  geral: {
    id: "geral",
    label: "Aula experimental geral",
    message: "Olá, tenho interesse em agendar uma aula experimental na VIP Esportes. Pode me passar mais informações?",
  },
  cdesign: {
    id: "cdesign",
    label: "CDESIGN",
    message: "Olá, tenho interesse em agendar uma aula experimental de Beach Tennis na unidade CDESIGN - Praia do Recreio.",
  },
  tennisRoute: {
    id: "tennisRoute",
    label: "Tennis Route",
    message: "Olá, tenho interesse em agendar uma aula experimental de Beach Tennis na unidade Tennis Route - Condomínio Interlagos de Itaúna.",
  },
  novaIpanema: {
    id: "novaIpanema",
    label: "Nova Ipanema",
    message: "Olá, tenho interesse em agendar uma aula experimental na unidade Nova Ipanema. Gostaria de saber os horários de Beach Tennis e Vôlei de Praia.",
  },
  iconeRecreio: {
    id: "iconeRecreio",
    label: "Colégio Ícone Recreio",
    message: "Olá, tenho interesse nas aulas de Vôlei da VIP Esportes no Colégio Ícone Recreio.",
  },
  iconeFreguesia: {
    id: "iconeFreguesia",
    label: "Colégio Ícone Freguesia",
    message: "Olá, tenho interesse nas aulas de Vôlei da VIP Esportes no Colégio Ícone Freguesia.",
  },
  iconeTaquara: {
    id: "iconeTaquara",
    label: "Colégio Ícone Taquara",
    message: "Olá, tenho interesse nas aulas de Vôlei da VIP Esportes no Colégio Ícone Taquara.",
  },
  stGeorges: {
    id: "stGeorges",
    label: "Colégio ST Georges",
    message: "Olá, tenho interesse nas aulas de Vôlei da VIP Esportes no Colégio ST Georges.",
  },
  start: {
    id: "start",
    label: "Colégio START",
    message: "Olá, tenho interesse nas aulas de Vôlei da VIP Esportes no Colégio START.",
  },
  aquidaba: {
    id: "aquidaba",
    label: "Clube Aquidabã",
    message: "Olá, tenho interesse nas aulas de Vôlei da VIP Esportes no Iate Clube Aquidabã.",
  },
  guaratiba: {
    id: "guaratiba",
    label: "Guaratiba",
    message: "Olá, tenho interesse em agendar uma aula experimental de Vôlei de Praia na VIP Esportes Guaratiba.",
  },
  aeronautica: {
    id: "aeronautica",
    label: "Clube de Aeronáutica",
    message: "Olá, tenho interesse em saber mais sobre a Equipe de Competição da VIP Esportes no Clube de Aeronáutica.",
  },
  beachTennis: {
    id: "beachTennis",
    label: "Beach Tennis",
    message: "Olá, gostaria de agendar uma aula experimental de Beach Tennis na VIP Esportes. Quais são os horários e locais disponíveis?",
  },
  volei: {
    id: "volei",
    label: "Vôlei",
    message: "Olá, tenho interesse em saber mais sobre as aulas de Vôlei da Escola de Vôlei Paula Pequeno / VIP Esportes. Poderia me enviar os locais e horários disponíveis?",
    number: "5521968997981",
  },
  voleiDePraia: {
    id: "voleiDePraia",
    label: "Vôlei de Praia",
    message: "Olá, gostaria de agendar uma aula experimental de Vôlei de Praia na Escola de Vôlei Paula Pequeno / VIP Esportes. Quais são os locais e turmas?",
    number: "5521968997981",
  },
  escolaVoleiPaulaPequeno: {
    id: "escolaVoleiPaulaPequeno",
    label: "Escola de Vôlei Paula Pequeno",
    message: "Olá! Tenho interesse na Escola de Vôlei Paula Pequeno. Poderia me passar mais informações sobre as turmas e horários?",
    number: "5521968997981",
  },
  escolasClubes: {
    id: "escolasClubes",
    label: "Escolas, clubes e condomínios",
    message: "Olá, gostaria de saber como levar a metodologia da VIP Esportes para uma escola, clube ou condomínio.",
  },
};
