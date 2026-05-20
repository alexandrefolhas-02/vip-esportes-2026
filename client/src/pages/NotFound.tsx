import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <span className="font-heading text-8xl font-bold text-turquesa/20">404</span>
        <h1 className="font-heading text-3xl font-bold text-navy mt-4">Página não encontrada</h1>
        <p className="mt-2 text-muted-foreground">A página que você está procurando não existe ou foi movida.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-6 py-3 rounded-lg transition-all mt-6">
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Link>
      </div>
    </div>
  );
}
