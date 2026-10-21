import { NavLink } from "react-router";
import { BarChart3, Home, PlusCircle, Search, Settings, Users, X } from "lucide-react";
import Logo from "../Logo";

const grupos = [
  {
    titulo: "Principal",
    itens: [
      { to: "/", rotulo: "Início", icone: Home, end: true },
      { to: "/ativos", rotulo: "Buscar ativos", icone: Search },
      { to: "/cadastrar-ativo", rotulo: "Cadastrar ativo", icone: PlusCircle },
    ],
  },
  {
    titulo: "Gestão",
    itens: [
      { to: "/relatorios", rotulo: "Relatórios", icone: BarChart3 },
      { to: "/usuarios", rotulo: "Usuários", icone: Users },
      { to: "/configuracoes", rotulo: "Configurações", icone: Settings },
    ],
  },
];

// No celular (< md) o menu é uma gaveta que abre por cima; no desktop fica fixo ao lado.
export default function Sidebar({ aberto = false, onFechar }) {
  return (
    <>
      {aberto && (
        <div aria-hidden="true" onClick={onFechar} className="fixed inset-0 z-30 bg-black/50 md:hidden" />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-borda bg-menu transition-transform duration-200 md:sticky md:top-0 md:h-screen md:shrink-0 md:translate-x-0 md:visible ${
          aberto ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-borda px-5 py-5">
          <Logo />
          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar menu"
            className="rounded-lg p-1.5 text-suave hover:bg-campo hover:text-titulo md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav aria-label="Menu principal" className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
          {grupos.map((grupo) => (
            <div key={grupo.titulo}>
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-suave">{grupo.titulo}</p>
              <ul className="space-y-1">
                {grupo.itens.map(({ to, rotulo, icone: Icone, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition ${
                          isActive ? "bg-acao text-white" : "text-suave hover:bg-campo hover:text-titulo"
                        }`
                      }
                    >
                      <Icone size={18} aria-hidden="true" />
                      {rotulo}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <footer className="border-t border-borda px-5 py-4 text-xs text-suave">
          <strong className="text-titulo">BAT</strong> · Tijuca Alimentos
          <p>Versão 1.0</p>
        </footer>
      </aside>
    </>
  );
}
