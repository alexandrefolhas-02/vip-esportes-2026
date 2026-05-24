import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AutoridadeSection from "@/components/sections/AutoridadeSection";
import PaulaPequenoSection from "@/components/sections/PaulaPequenoSection";
import ModalidadesSection from "@/components/sections/ModalidadesSection";
import UnidadesSection from "@/components/sections/UnidadesSection";
import ComoFuncionaSection from "@/components/sections/ComoFuncionaSection";
import SeletorUnidade from "@/components/sections/SeletorUnidade";
import PerfilSection from "@/components/sections/PerfilSection";
import MetodologiaSection from "@/components/sections/MetodologiaSection";
import EscolasSection from "@/components/sections/EscolasSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import InstagramSection from "@/components/sections/InstagramSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "VIP Esportes | Beach Tennis, Vôlei e Vôlei de Praia no Rio de Janeiro",
  description: "Escola de esportes no Rio de Janeiro. Aulas de Beach Tennis, Vôlei e Vôlei de Praia para crianças, adolescentes e adultos. Agende sua aula experimental!",
  keywords: ["beach tennis rio de janeiro", "vôlei recreio", "escola de esportes", "aula experimental beach tennis", "vôlei de praia recreio", "escola de vôlei paula pequeno"],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AutoridadeSection />
      <PaulaPequenoSection />
      <ModalidadesSection />
      <UnidadesSection />
      <ComoFuncionaSection />
      <SeletorUnidade />
      <PerfilSection />
      <MetodologiaSection />
      <EscolasSection />
      <DepoimentosSection />
      <InstagramSection />
      <CTASection />
    </>
  );
}
