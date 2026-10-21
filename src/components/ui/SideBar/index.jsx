import SideItem from "./SideBarItem/index";
import BotaoTema from "../BotaoTema/index"
import { Home, Search, Database, Settings, BarChart3, Users, SettingsIcon } from "lucide-react";
import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <aside className="w-64 bg-menu border-r border-borda min-h-screen p-4 flex flex-col justify-between text-texto">
      <div>
        <div className="text-2xl font-bold text-acao mb-8 tracking-wider">
          BAT
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-acao mb-2 tracking-wider uppercase">Menu Principal</p>
          <nav aria-label="Menu Principal">
            <ul className="space-y-2">
              <li>
                <NavLink to="/home">
                  {({ isActive }) => (
                    <SideItem
                      texto="Início"
                      icone={<Home size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/buscar-ativos">
                  {({ isActive }) => (
                    <SideItem
                      texto="Buscar ativos"
                      icone={<Search size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastrar-ativo">
                  {({ isActive }) => (
                    <SideItem
                      texto="Cadastrar ativo"
                      icone={<Database size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/editar-ativo">
                  {({ isActive }) => (
                    <SideItem
                      texto="Editar Ativo"
                      icone={<Settings size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menu Gestão */}
        <div>
          <p className="text-xs font-bold text-acao mb-2 tracking-wider uppercase">Menu Gestão</p>
          <nav aria-label="Menu Gestão">
            <ul className="space-y-2">
              <li>
                <NavLink to="/relatorios">
                  {({ isActive }) => (
                    <SideItem
                      texto="Relatórios"
                      icone={<BarChart3 size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">
                  {({ isActive }) => (
                    <SideItem
                      texto="Usuários"
                      icone={<Users size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/configuracoes">
                  {({ isActive }) => (
                    <SideItem
                      texto="Configurações"
                      icone={<SettingsIcon size={20} />}
                      ativo={isActive}
                    />
                  )}
                </NavLink>
              </li>
              <li>
                <BotaoTema />
              </li>
            </ul>
          </nav>
        </div>

      </div>

      <div className="border-t border-borda pt-4 text-xs text-suave">

        <p className="font-semibold text-titulo">BAT - Tijuca Alimentos</p>
        <p>Versão 1.0</p>
      </div>
    </aside>
  );
}