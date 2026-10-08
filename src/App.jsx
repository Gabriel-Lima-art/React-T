import { createBrowserRouter } from "react-router"; 
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Index";
import Login from "./pages/Login/Index";
import RotaPrivada from './components/RotaPrivada/RotaPrivada';
import Ativos from './pages/Ativos';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RotaPrivada>
        <Home />
      </RotaPrivada>
    ),
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/teste",
    element: <Ativos />
  }
]);

export default router;