import { useState } from "react";
import { Link } from "wouter";
import { unidades, type Modalidade } from "@/data/unidades";
import { Search, ArrowRight } from "lucide-react";

const modalidadeOptions: Modalidade[] = ["Beach Tennis", "Vôlei", "Vôlei de Praia", "Equipe de Competição"];

const regiaoOptions = [
  { label: "Recreio", keywords: ["recreio", "cdesign"] },
  { label: "Barra / Itaúna", keywords: ["itaúna", "interlagos"] },
  { label: "Freguesia / Taquara", keywords: ["freguesia", "taquara"] },
  { label: "Guaratiba", keywords: ["guaratiba"] },
  { label: "Outros", keywords: [] },
];

const idadeOptions = [
  { label: "Criança (6-12 anos)", value: "crianca" },
  { label: "Adolescente (13-17 anos)", value: "adolescente" },
  { label: "Adulto (18+)", value: "adulto" },
];

export default function SeletorUnidade() {
  const [modalidade, setModalidade] = useState<string>("");
  const [regiao, setRegiao] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [resultado, setResultado] = useState<typeof unidades>([]);
  const [buscou, setBuscou] = useState(false);

  const buscar = () => {
    let filtered = [...unidades];

    if (modalidade) {
      filtered = filtered.filter((u) => u.modalidades.includes(modalidade as Modalidade));
    }

    if (regiao) {
      const regiaoData = regiaoOptions.find((r) => r.label === regiao);
      if (regiaoData && regiaoData.keywords.length > 0) {
        filtered = filtered.filter((u) =>
          regiaoData.keywords.some(
            (kw) =>
              u.local.toLowerCase().includes(kw) ||
              u.nome.toLowerCase().includes(kw) ||
              u.id.includes(kw)
          )
        );
      }
    }

    if (idade) {
      if (idade === "crianca" || idade === "adolescente") {
        // Prioritize schools and clubs for younger ages
        filtered = filtered.filter(
          (u) => u.tipos.includes("Escola") || u.tipos.includes("Clube") || u.modalidades.includes("Vôlei") || u.modalidades.includes("Vôlei de Praia")
        );
      }
      // Adults can go anywhere, no additional filter needed
    }

    setResultado(filtered);
    setBuscou(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy uppercase tracking-tight">
              Não sabe qual unidade escolher?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Selecione suas preferências e encontre a unidade ideal para você.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Modalidade</label>
                <select
                  value={modalidade}
                  onChange={(e) => setModalidade(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-turquesa/50 focus:border-turquesa"
                >
                  <option value="">Todas</option>
                  {modalidadeOptions.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Região</label>
                <select
                  value={regiao}
                  onChange={(e) => setRegiao(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-turquesa/50 focus:border-turquesa"
                >
                  <option value="">Todas</option>
                  {regiaoOptions.map((r) => (
                    <option key={r.label} value={r.label}>{r.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Idade</label>
                <select
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-turquesa/50 focus:border-turquesa"
                >
                  <option value="">Todas</option>
                  {idadeOptions.map((i) => (
                    <option key={i.value} value={i.value}>{i.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={buscar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.97]"
            >
              <Search className="w-4 h-4" />
              Buscar unidade ideal
            </button>

            {buscou && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                {resultado.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-navy">
                      {resultado.length} unidade{resultado.length > 1 ? "s" : ""} encontrada{resultado.length > 1 ? "s" : ""}:
                    </p>
                    {resultado.map((u) => (
                      <Link
                        key={u.id}
                        href={`/unidades/${u.id}`}
                        className="flex items-center justify-between p-3 bg-gray-50 hover:bg-turquesa/5 rounded-lg border border-gray-100 hover:border-turquesa/30 transition-all"
                      >
                        <div>
                          <p className="font-semibold text-navy">{u.nome}</p>
                          <p className="text-sm text-muted-foreground">{u.local} — {u.modalidades.join(", ")}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-turquesa" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Nenhuma unidade encontrada com os filtros selecionados. Tente ajustar sua busca.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
