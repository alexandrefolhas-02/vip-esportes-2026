import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    alt: "Raquete de Beach Tennis na areia",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
    alt: "Partida de Vôlei de Praia",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    alt: "Treino de Beach Tennis na VIP",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    alt: "Atletas VIP Esportes em movimento",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1531415080290-b9b8ea7d29bc?auto=format&fit=crop&w=800&q=80",
    alt: "Saque no Vôlei de Praia",
    href: "https://www.instagram.com/vipescoladeesportes/",
  },
  {
    src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80",
    alt: "Grupo de treino VIP Esportes",
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
              key={index}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden rounded-lg group relative bg-gray-200 shadow-sm"
              aria-label={`Abrir post do Instagram: ${post.alt}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
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
