export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "VIP Esportes",
    url: "https://vipesportes.com.br",
    logo: "https://vipesportes.com.br/logo-vip-esportes.svg",
    description:
      "Escola de esportes no Rio de Janeiro. Aulas de Beach Tennis, Vôlei e Vôlei de Praia para crianças, adolescentes e adultos.",
    telephone: "+55-21-99809-5927",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "Rio de Janeiro" },
    sameAs: ["https://www.instagram.com/vipesportes"],
    sport: ["Beach Tennis", "Vôlei", "Vôlei de Praia"],
  };
}

export function localBusinessJsonLd(unidade: {
  nome: string;
  local: string;
  endereco?: string;
  descricao: string;
  modalidades: string[];
  imagens: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://vipesportes.com.br/unidades/${unidade.nome.toLowerCase().replace(/\s+/g, "-")}`,
    name: `VIP Esportes — ${unidade.nome}`,
    description: unidade.descricao,
    url: "https://vipesportes.com.br",
    telephone: "+55-21-99809-5927",
    image: unidade.imagens?.[0] || "https://vipesportes.com.br/logo-vip-esportes.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: unidade.endereco || unidade.local,
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    parentOrganization: { "@type": "Organization", name: "VIP Esportes" },
  };
}
