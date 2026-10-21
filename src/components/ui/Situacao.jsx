const estilos = {
  Verificado: "bg-ok/15 text-ok",
  Aguardando: "bg-laranja/15 text-laranja",
  "Divergência": "bg-alerta/15 text-alerta",
};

export default function Situacao({ valor }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${estilos[valor]}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {valor}
    </span>
  );
}
