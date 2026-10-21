import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/index.jsx";
import Cadastro from "./pages/Cadastro/Index";
import Login from "./pages/Login/Index";
import LandingPage from "./pages/LandingPage/index.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import RotaPrivada from "./components/RotaPrivada/RotaPrivada.jsx"; 


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },

  // Rotas Protegidas (Envolvidas pelo Layout e pela RotaPrivada)
  {
    element: (
      <RotaPrivada>
        <MainLayout />
      </RotaPrivada>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/buscar-ativos",
        element: <Home />, // Troque para <BuscarAtivos /> quando criar o componente
      },
      {
        path: "/cadastrar-ativo",
        element: <Home />, // Troque para <CadastrarAtivo />
      },
      {
        path: "/editar-ativo",
        element: <Home />, // Troque para <EditarAtivo />
      },
      {
        path: "/relatorios",
        element: <Home />, // Troque para <Relatorios />
      },
      {
        path: "/usuarios",
        element: <Home />, // Troque para <Usuarios />
      },
      {
        path: "/configuracoes",
        element: <Home />, // Troque para <Configuracoes />
      }
    ]
  }
]);

export default router;