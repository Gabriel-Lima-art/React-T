export default function SideBarItem({ texto, icone, ativo, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition ${
                ativo
                    ? "bg-acao text-white"
                    : "text-suave hover:bg-campo hover:text-titulo"
            }`}
        >
            {icone}
            <span>{texto}</span>
        </button>
    );
}