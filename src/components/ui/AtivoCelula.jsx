import { Package } from "lucide-react";

export default function AtivoCelula({ nome, codigo }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-borda bg-campo text-suave">
        <Package size={16} />
      </span>
      <div>
        <p className="text-sm font-bold text-titulo">{nome}</p>
        <p className="text-xs text-suave">{codigo}</p>
      </div>
    </div>
  );
}
