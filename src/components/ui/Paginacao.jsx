import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Paginacao({ pagina, total, onMudar }) {
  const itens = total <= 5 ? Array.from({ length: total }, (_, i) => i + 1) : [1, 2, 3, "…", total];
  const base = "grid size-8 place-items-center rounded-lg border border-borda text-xs font-bold text-suave hover:bg-campo";

  return (
    <nav aria-label="Paginação" className="flex items-center gap-1.5">
      <button type="button" aria-label="Página anterior" disabled={pagina === 1} onClick={() => onMudar(pagina - 1)} className={base}>
        <ChevronLeft size={14} />
      </button>
      {itens.map((p, i) =>
        p === "…" ? (
          <span key={`r${i}`} className="text-suave">…</span>
        ) : (
          <button
            key={p}
            type="button"
            aria-current={p === pagina ? "page" : undefined}
            onClick={() => onMudar(p)}
            className={p === pagina ? "grid size-8 place-items-center rounded-lg bg-acao text-xs font-bold text-white" : base}
          >
            {p}
          </button>
        )
      )}
      <button type="button" aria-label="Próxima página" disabled={pagina === total} onClick={() => onMudar(pagina + 1)} className={base}>
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}
