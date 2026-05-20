import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import { updateMetaTags } from "@/lib/seo";
import { seoPages } from "@/data/seo";

// Placeholder blog posts - editável pelo Antigravity
const posts = [
  {
    id: "1",
    titulo: "5 benefícios do Beach Tennis para a saúde",
    resumo: "Descubra como o Beach Tennis pode transformar sua saúde física e mental com diversão na areia.",
    data: "2025-01-15",
    categoria: "Beach Tennis",
  },
  {
    id: "2",
    titulo: "Como escolher a modalidade esportiva ideal para seu filho",
    resumo: "Guia completo para pais que querem iniciar seus filhos no esporte de forma saudável e divertida.",
    data: "2025-01-10",
    categoria: "Dicas",
  },
  {
    id: "3",
    titulo: "Vôlei de Praia: por que treinar na areia é mais eficiente",
    resumo: "Entenda os benefícios do treinamento na areia para condicionamento físico e desenvolvimento técnico.",
    data: "2025-01-05",
    categoria: "Vôlei de Praia",
  },
  {
    id: "4",
    titulo: "A importância do esporte na formação de crianças e adolescentes",
    resumo: "Como a prática esportiva contribui para o desenvolvimento integral de jovens atletas.",
    data: "2024-12-20",
    categoria: "Educação",
  },
];

export default function Blog() {
  useEffect(() => {
    updateMetaTags(seoPages.blog);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Dicas, novidades e conteúdos sobre esporte, saúde e qualidade de vida.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-turquesa/30 transition-all duration-300"
              >
                <span className="text-xs bg-turquesa/10 text-turquesa px-2 py-0.5 rounded-full font-medium">
                  {post.categoria}
                </span>
                <h2 className="font-heading text-xl font-bold text-navy mt-3">{post.titulo}</h2>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{post.resumo}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.data).toLocaleDateString("pt-BR")}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-muted-foreground text-sm">
            Mais conteúdos em breve. Acompanhe nossas redes sociais!
          </p>
        </div>
      </section>
    </div>
  );
}
