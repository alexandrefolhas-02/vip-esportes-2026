import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
    alt: "Treino esportivo da VIP Esportes",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    alt: "Equipe VIP Esportes em ação",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1508606572321-901ea4437077?auto=format&fit=crop&w=800&q=80",
    alt: "Momentos de treino na quadra",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    alt: "Atletas VIP Esportes celebrando",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    alt: "Aula de esporte VIP Esportes",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1508606572321-901ea4437077?auto=format&fit=crop&w=800&q=80",
    alt: "Alunos VIP Esportes em atividade",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
];

export default function InstagramSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-tight">
            Acompanhe a VIP em movimento
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post, index) => (
            <a
              key={`${post.href}-${index}`}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-lg group relative bg-gray-200 shadow-sm"
              aria-label={`Abrir post do Instagram: ${post.alt}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/vipescoladeesportes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.97]"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
