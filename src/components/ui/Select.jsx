import { useId } from "react";

export default function Select({ label, placeholder, opcoes, className = "", ...props }) {
  const id = useId();
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-xs font-bold text-suave">
          {label}
        </label>
      )}
      <select
        id={id}
        className="w-full rounded-lg border border-borda bg-campo px-3 py-2.5 text-sm text-texto focus:border-azul focus:outline-none focus:ring-2 focus:ring-azul/30"
        {...props}
      >
        <option value="">{placeholder}</option>
        {opcoes.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
