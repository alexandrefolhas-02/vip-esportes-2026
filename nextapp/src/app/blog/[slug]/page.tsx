import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, allSlugsQuery } from "@/sanity/lib/queries";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PortableText } from "@portabletext/react";

interface Post {
  _id: string;
  titulo: string;
  subtitulo?: string;
  slug: { current: string };
  categoria: string;
  publicadoEm: string;
  imagemPrincipal?: { asset?: { url: string }; alt?: string };
  videoUrl?: string;
  corpo?: unknown[];
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post: Post | null = await client.fetch(postBySlugQuery, { slug });
    if (!post) return {};
    return {
      title: post.titulo,
      description: post.subtitulo,
      openGraph: {
        images: post.imagemPrincipal?.asset?.url ? [{ url: post.imagemPrincipal.asset.url }] : [],
      },
    };
  } catch {
    return {};
  }
}

function YouTubeEmbed({ url }: { url: string }) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (!match) return null;
  return (
    <div className="aspect-video my-8 rounded-xl overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${match[1]}`}
        className="w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post: Post | null = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch {
    notFound();
  }
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
            {new Date(post.publicadoEm).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      </section>

      {post.imagemPrincipal?.asset?.url && (
        <div className="w-full max-h-[480px] overflow-hidden">
          <img
            src={post.imagemPrincipal.asset.url}
            alt={post.imagemPrincipal.alt || post.titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          {post.videoUrl && <YouTubeEmbed url={post.videoUrl} />}

          {post.corpo && (
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:text-navy prose-a:text-turquesa">
              <PortableText value={post.corpo as Parameters<typeof PortableText>[0]["value"]} />
            </div>
          )}

          <div className="mt-12 p-6 bg-turquesa/5 border border-turquesa/20 rounded-xl">
            <p className="font-semibold text-navy mb-2">Gostou do conteúdo?</p>
            <p className="text-muted-foreground text-sm mb-4">Agende sua aula experimental na VIP Esportes e comece hoje mesmo.</p>
            <a
              href={getWhatsAppUrl("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm active:scale-[0.97]"
            >
              Agendar aula experimental
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
