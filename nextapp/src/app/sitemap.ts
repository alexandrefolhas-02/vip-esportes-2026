import type { MetadataRoute } from "next";
import { modalidades } from "@/data/modalidades";
import { unidades } from "@/data/unidades";

const BASE_URL = "https://vipesportes.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/metodologia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/unidades`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/escola-de-volei-paula-pequeno`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/para-escolas-clubes-condominios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ];

  const modalidadeRoutes: MetadataRoute.Sitemap = modalidades.map((mod) => ({
    url: `${BASE_URL}/modalidades/${mod.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const unidadeRoutes: MetadataRoute.Sitemap = unidades.map((u) => ({
    url: `${BASE_URL}/unidades/${u.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...modalidadeRoutes, ...unidadeRoutes];
}
