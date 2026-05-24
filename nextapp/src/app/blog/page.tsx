import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog | Dicas de Beach Tennis, Vôlei e Esportes na Praia",
  description:
    "Conteúdos sobre Beach Tennis, Vôlei e Vôlei de Praia. Dicas de treino, benefícios, novidades e muito mais da VIP Esportes no Rio de Janeiro.",
  keywords: ["blog beach tennis", "dicas vôlei", "saúde esporte rio de janeiro", "vôlei praia dicas"],
};

interface Post {
  _id: string;
  titulo: string;
  subtitulo?: string;
  slug: { current: string };
  categoria: string;
  publicadoEm: string;
  destaque: boolean;
  imagemPrincipal?: { asset?: { url: string }; alt?: string };
}

async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(allPostsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24 bg-[#000040]">
        <div className="container">
          <div className="w-16 h-1 bg-turquesa mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">Blog</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Dicas, novidades e conteúdos sobre esporte, saúde e qualidade de vida.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg font-medium">Em breve, novos conteúdos por aqui.</p>
              <p className="text-sm mt-2">Volte em breve!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post._id} className="group bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-turquesa/30 transition-all duration-300 flex flex-col">
                  {post.imagemPrincipal?.asset?.url ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.imagemPrincipal.asset.url}
                        alt={post.imagemPrincipal.alt || post.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-[#000040]/10" />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs bg-turquesa/10 text-turquesa px-2 py-0.5 rounded-full font-medium self-start">{post.categoria}</span>
                    <h2 className="font-heading text-xl font-bold text-navy mt-3 group-hover:text-turquesa transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug.current}`}>{post.titulo}</Link>
                    </h2>
                    {post.subtitulo && (
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-2">{post.subtitulo}</p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publicadoEm).toLocaleDateString("pt-BR")}
                      </div>
                      <Link href={`/blog/${post.slug.current}`} className="inline-flex items-center gap-1 text-sm text-turquesa font-semibold hover:gap-2 transition-all">
                        Ler mais <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
