import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="w-16 h-1 bg-turquesa mx-auto mb-6" />
        <h1 className="font-heading text-6xl font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Página não encontrada</p>
        <Link href="/" className="inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-8 py-3 rounded-lg transition-all">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
