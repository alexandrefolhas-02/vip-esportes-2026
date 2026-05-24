import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Placeholder — will be replaced with Sanity CMS fetch
const posts: Record<string, { titulo: string; subtitulo?: string; data: string; categoria: string; corpo: string[] }> = {
  "beneficios-beach-tennis-saude": {
    titulo: "5 benefícios do Beach Tennis para a saúde",
    subtitulo: "Descubra por que o Beach Tennis é um dos esportes que mais cresce no Brasil",
    data: "2025-01-15",
    categoria: "Beach Tennis",
    corpo: [
      "O Beach Tennis é um esporte que combina elementos do tênis, vôlei de praia e badminton, praticado na areia. Além de ser extremamente divertido, ele oferece uma série de benefícios para a saúde física e mental.",
      "1. Condicionamento físico completo: a prática na areia exige mais esforço muscular do que em quadras duras, trabalhando pernas, core e membros superiores simultaneamente.",
      "2. Baixo impacto nas articulações: a areia absorve o impacto dos movimentos, protegendo joelhos e tornozelos.",
      "3. Socialização: o Beach Tennis é um esporte muito social, praticado em duplas, o que favorece amizades e integração.",
      "4. Queima calórica: uma hora de Beach Tennis pode queimar entre 400 e 700 calorias, dependendo da intensidade.",
      "5. Saúde mental: a prática ao ar livre, no contato com a natureza e com o sol, contribui para a redução do estresse e melhora o humor.",
      "Na VIP Esportes, oferecemos aulas de Beach Tennis para todos os níveis no Recreio dos Bandeirantes e em condomínios. Agende sua aula experimental!",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.subtitulo || post.corpo[0].slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 bg-[#000040]">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-turquesa text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao blog
          </Link>
          <span className="text-xs bg-turquesa/20 text-turquesa px-3 py-1 rounded-full font-medium">{post.categoria}</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mt-4">
            {post.titulo}
          </h1>
          {post.subtitulo && <p className="mt-3 text-white/70 text-lg">{post.subtitulo}</p>}
          <div className="flex items-center gap-2 mt-4 text-sm text-white/50">
            <Calendar className="w-4 h-4" />
            {new Date(post.data).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.corpo.map((paragrafo, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-4">{paragrafo}</p>
            ))}
          </div>

          <div className="mt-12 p-6 bg-turquesa/5 border border-turquesa/20 rounded-xl">
            <p className="font-semibold text-navy mb-2">Gostou do conteúdo?</p>
            <p className="text-muted-foreground text-sm mb-4">Agende sua aula experimental na VIP Esportes e comece hoje mesmo.</p>
            <a href={getWhatsAppUrl("geral")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm active:scale-[0.97]">
              Agendar aula experimental
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
