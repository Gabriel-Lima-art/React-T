import { NavLink } from "react-router";
import Card from "../../components/ui/Card";
import Botao from "../../components/ui/Botao/Botao";

export default function LandingPage() {
  return (
    <div className="p-8">
      {/* Exemplo de link de texto simples */}
      <nav className="mb-4">
        <NavLink
          to="/login"
          className="text-acao font-semibold hover:underline"
        >
          <Card acao={<Botao 
          text={'Entrar no sistema'}/>} 
          titulo={'Conheça o Sistema de Busca de Ativos'}/>

        </NavLink>
      </nav>

    </div>
  );
}