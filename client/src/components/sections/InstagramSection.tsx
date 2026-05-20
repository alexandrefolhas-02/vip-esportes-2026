import { Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy uppercase tracking-tight">
            Acompanhe a VIP em movimento
          </h2>
        </div>

        {/* Placeholder grid for Instagram photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-turquesa/0 group-hover:bg-turquesa/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-gray-400" />
              </div>
            </div>
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
