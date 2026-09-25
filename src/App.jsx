import './App.css'

import { createBrowserRouter } from "react-router";

import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Index";
import Login from "./pages/Login/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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