import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "../ui/Input/Input";


export default function CampoSenha({ visivel, onAlternar, ...props }) {
  const [interno, setInterno] = useState(false);
  const controlado = visivel !== undefined;
  const mostrar = controlado ? visivel : interno;
  const alternar = controlado ? onAlternar : () => setInterno((v) => !v);

  return (
    <Input
      {...props}
      type={mostrar ? "text" : "password"}
      direita={
        <button
          type="button"
          onClick={alternar}
          aria-label={mostrar ? "Ocultar senha" : "Mostrar senha"}
          className="rounded p-1.5 text-suave hover:text-titulo"
        >
          {mostrar ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
    />
  );
}
