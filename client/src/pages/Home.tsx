import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import AutoridadeSection from "@/components/sections/AutoridadeSection";
import ModalidadesSection from "@/components/sections/ModalidadesSection";
import UnidadesSection from "@/components/sections/UnidadesSection";
import ComoFuncionaSection from "@/components/sections/ComoFuncionaSection";
import PerfilSection from "@/components/sections/PerfilSection";
import MetodologiaSection from "@/components/sections/MetodologiaSection";
import EscolasSection from "@/components/sections/EscolasSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import InstagramSection from "@/components/sections/InstagramSection";
import CTASection from "@/components/sections/CTASection";
import SeletorUnidade from "@/components/sections/SeletorUnidade";

export default function Home() {
  useEffect(() => {
    document.title = "VIP Esportes | Aulas de Beach Tennis, Vôlei e Vôlei de Praia no Rio de Janeiro";
  }, []);

  return (
    <>
      <Hero />
      <AutoridadeSection />
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
