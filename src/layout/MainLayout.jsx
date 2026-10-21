import { Outlet } from "react-router";
import SideBar from "../components/ui/SideBar/index"; // Ajuste o caminho da sua sidebar

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar fixada na lateral */}
      <SideBar />

      {/* Conteúdo dinâmico da página atual */}
      <main className="flex-1 bg-background p-6">
        <Outlet />
      </main>
    </div>
  );
}