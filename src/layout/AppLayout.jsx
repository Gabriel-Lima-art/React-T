import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "./Sidebar";

// Moldura das telas internas. Cada página renderiza o próprio <Topbar /> e <main>.
// O Topbar pega `abrirMenu` pelo contexto do Outlet (botão de menu no celular).
export default function AppLayout() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation();

  // Fecha o menu ao trocar de tela
  useEffect(() => {
    setMenuAberto(false);
  }, [pathname]);

  // Fecha com a tecla Esc
  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (e) => e.key === "Escape" && setMenuAberto(false);
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [menuAberto]);

  return (
    <div className="flex min-h-screen bg-fundo text-texto">
      <Sidebar aberto={menuAberto} onFechar={() => setMenuAberto(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Outlet context={{ abrirMenu: () => setMenuAberto(true) }} />
      </div>
    </div>
  );
}
