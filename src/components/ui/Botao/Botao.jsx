const variantes = {
  primario: "bg-acao text-white hover:brightness-110",
  azul: "bg-azul text-white hover:brightness-110",
  contorno: "border border-borda bg-transparent text-titulo hover:bg-campo",
};

export default function Botao({ text, variante = "primario", type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul disabled:opacity-60 border border-black ${variantes[variante]} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
