import { Link, useOutletContext } from "react-router";
import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useTema } from "../../hooks/useTema";
import { usuarioLogado } from "../../dados/mock";

// trilha: [{ rotulo: "Início", to: "/" }, { rotulo: "Buscar ativos" }]  (o último é a página atual)
export default function Topbar({ trilha }) {
  const [tema, alternarTema] = useTema();
  const { abrirMenu } = useOutletContext() ?? {};
  const iniciais = usuarioLogado.nome.split(" ").map((p) => p[0]).slice(0, 2).join("");

  return (
    <header className="flex h-16 items-center justify-between border-b border-borda bg-menu px-4 md:px-6">
      <div className="flex min-w-0 items-center gap-2">
      <button
        type="button"
        onClick={abrirMenu}
        aria-label="Abrir menu"
        className="rounded-lg p-2 text-suave hover:bg-campo hover:text-titulo md:hidden"
      >
        <Menu size={20} />
      </button>

      <nav aria-label="Trilha de navegação">
        <ol className="flex items-center gap-2 text-sm">
          {trilha.map((item, i) => {
            const atual = i === trilha.length - 1;
            return (
              <li key={item.rotulo} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-suave">›</span>}
                {atual ? (
                  <span aria-current="page" className="font-bold text-titulo">{item.rotulo}</span>
                ) : (
                  <Link to={item.to} className="text-suave hover:text-titulo">{item.rotulo}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={alternarTema}
          aria-label={tema === "dark" ? "Usar modo claro" : "Usar modo escuro"}
          className="rounded-lg p-2 text-suave hover:bg-campo hover:text-titulo"
        >
          {tema === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button type="button" aria-label="Notificações" className="relative rounded-lg p-2 text-suave hover:bg-campo hover:text-titulo">
          <Bell size={18} />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-acao" />
        </button>

        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-azul text-xs font-bold text-white">{iniciais}</span>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-bold text-titulo">{usuarioLogado.nome}</p>
            <p className="text-xs text-suave">{usuarioLogado.setor}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
