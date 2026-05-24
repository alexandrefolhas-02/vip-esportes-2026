import { Link } from "wouter";
import { Instagram, Phone, MapPin } from "lucide-react";
import { modalidades } from "@/data/modalidades";

export default function Footer() {
  return (
    <footer className="bg-[#000040] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/logo-vip-esportes.svg"
              alt="VIP Esportes"
              className="h-12 w-auto"
            />
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Escola de excelência esportiva no Rio de Janeiro. Desenvolvemos alunos dentro e fora das quadras com metodologia própria e professores qualificados.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/vipescoladeesportes/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-turquesa transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:+5521978726747" className="text-white/60 hover:text-turquesa transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Modalidades */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Modalidades</h4>
            <ul className="space-y-2">
              {modalidades.map((mod) => (
                <li key={mod.id}>
                  <Link href={`/modalidades/${mod.slug}`} className="text-sm text-white/60 hover:text-turquesa transition-colors">
                    {mod.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-sm text-white/60 hover:text-turquesa transition-colors">A VIP</Link></li>
              <li><Link href="/metodologia" className="text-sm text-white/60 hover:text-turquesa transition-colors">Metodologia</Link></li>
              <li><Link href="/unidades" className="text-sm text-white/60 hover:text-turquesa transition-colors">Unidades</Link></li>
              <li><Link href="/para-escolas-clubes-condominios" className="text-sm text-white/60 hover:text-turquesa transition-colors">Para Escolas e Clubes</Link></li>
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-turquesa transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-turquesa mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">(21) 97872-6747</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-turquesa mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} VIP Esportes. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/40">
            Desenvolvido com excelência
          </p>
        </div>
      </div>
    </footer>
  );
}
