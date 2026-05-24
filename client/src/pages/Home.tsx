import { useEffect } from "react";
import { updateMetaTags } from "@/lib/seo";
import { seoPages } from "@/data/seo";
import Hero from "@/components/sections/Hero";
import AutoridadeSection from "@/components/sections/AutoridadeSection";
import PaulaPequenoSection from "@/components/sections/PaulaPequenoSection";
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
    updateMetaTags(seoPages.home);
  }, []);

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
