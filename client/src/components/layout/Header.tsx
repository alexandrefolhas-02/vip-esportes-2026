import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { modalidades } from "@/data/modalidades";
import { unidades } from "@/data/unidades";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalidadesOpen, setModalidadesOpen] = useState(false);
  const [unidadesOpen, setUnidadesOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;
  const isModalidadesActive = () => location.startsWith("/modalidades/");
  const isUnidadesActive = () => location === "/unidades" || location.startsWith("/unidades/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000040]/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo-vip-esportes.svg"
            alt="VIP Esportes"
            className="h-10 lg:h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/") ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
            Início
          </Link>

          {/* Modalidades Dropdown */}
          <div className="relative group">
            <button className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${isModalidadesActive() ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
              Modalidades <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#000040] border border-white/10 rounded-lg shadow-xl py-2 min-w-[200px]">
                {modalidades.map((mod) => (
                  <Link key={mod.id} href={`/modalidades/${mod.slug}`} className="block px-4 py-2 text-sm text-white/80 hover:text-turquesa hover:bg-white/5 transition-colors">
                    {mod.nome}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Unidades Dropdown */}
          <div className="relative group">
            <button className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${isUnidadesActive() ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
              Unidades <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#000040] border border-white/10 rounded-lg shadow-xl py-2 min-w-[240px] max-h-[400px] overflow-y-auto">
                <Link href="/unidades" className="block px-4 py-2 text-sm text-turquesa font-medium hover:bg-white/5 transition-colors">
                  Ver todas as unidades
                </Link>
                <div className="border-t border-white/10 my-1"></div>
                {unidades.map((uni) => (
                  <Link key={uni.id} href={`/unidades/${uni.id}`} className="block px-4 py-2 text-sm text-white/80 hover:text-turquesa hover:bg-white/5 transition-colors">
                    {uni.nome}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/metodologia" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/metodologia") ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
            Metodologia
          </Link>
          <Link href="/para-escolas-clubes-condominios" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/para-escolas-clubes-condominios") ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
            Para Escolas
          </Link>
          <Link href="/sobre" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/sobre") ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
            A VIP
          </Link>
          <Link href="/escola-de-volei-paula-pequeno" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/escola-de-volei-paula-pequeno") ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
            Escola Paula Pequeno
          </Link>
          <Link href="/blog" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive("/blog") ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
            Blog
          </Link>
        </nav>

        {/* CTA Desktop */}
        <a
          href={getWhatsAppUrl("geral")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.97] text-sm"
        >
          Agendar Aula Experimental
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#000040] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-white/90 hover:text-turquesa font-medium">
              Início
            </Link>

            {/* Modalidades Mobile */}
            <button onClick={() => setModalidadesOpen(!modalidadesOpen)} className={`px-3 py-3 font-medium flex items-center justify-between ${isModalidadesActive() ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
              Modalidades <ChevronDown className={`w-4 h-4 transition-transform ${modalidadesOpen ? "rotate-180" : ""}`} />
            </button>
            {modalidadesOpen && (
              <div className="pl-6 flex flex-col gap-1">
                {modalidades.map((mod) => (
                  <Link key={mod.id} href={`/modalidades/${mod.slug}`} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-white/70 hover:text-turquesa">
                    {mod.nome}
                  </Link>
                ))}
              </div>
            )}

            {/* Unidades Mobile */}
            <button onClick={() => setUnidadesOpen(!unidadesOpen)} className={`px-3 py-3 font-medium flex items-center justify-between ${isUnidadesActive() ? "text-turquesa" : "text-white/90 hover:text-turquesa"}`}>
              Unidades <ChevronDown className={`w-4 h-4 transition-transform ${unidadesOpen ? "rotate-180" : ""}`} />
            </button>
            {unidadesOpen && (
              <div className="pl-6 flex flex-col gap-1">
                <Link href="/unidades" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-turquesa font-medium">
                  Ver todas
                </Link>
                {unidades.map((uni) => (
                  <Link key={uni.id} href={`/unidades/${uni.id}`} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-white/70 hover:text-turquesa">
                    {uni.nome}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/metodologia" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-white/90 hover:text-turquesa font-medium">
              Metodologia
            </Link>
            <Link href="/para-escolas-clubes-condominios" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-white/90 hover:text-turquesa font-medium">
              Para Escolas, Clubes e Condomínios
            </Link>
            <Link href="/sobre" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-white/90 hover:text-turquesa font-medium">
              A VIP
            </Link>
            <Link href="/escola-de-volei-paula-pequeno" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-turquesa font-semibold">
              Escola de Vôlei Paula Pequeno
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="px-3 py-3 text-white/90 hover:text-turquesa font-medium">
              Blog
            </Link>

            <a
              href={getWhatsAppUrl("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 mt-3 text-center bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-5 py-3 rounded-lg transition-all"
            >
              Agendar Aula Experimental
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
