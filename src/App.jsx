import './App.css'

import { createBrowserRouter } from "react-router"; // ou "react-router-dom"

import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Index";
import Login from "./pages/Login/Index";
import RotaPrivada from './components/ui/RotaPrivada';

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
]);

export default router;