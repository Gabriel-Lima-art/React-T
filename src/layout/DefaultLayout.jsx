import { Outlet } from "react-router";
import SideBar from "../components/ui/SideBar/index"; // O código da sua sidebar que você mandou antes

export default function DefaultLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sua sidebar fixada na esquerda */}
      <SideBar />

      {/* Conteúdo da página atual (Home, Buscar Ativos, etc) */}
      <main className="flex-1 bg-background p-6">
        <Outlet />
      </main>
    </div>
  );
}