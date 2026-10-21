import { useId } from "react";

export default function Input({ label, dica, erro, direita, className = "", ...props }) {
  const id = useId();
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-texto">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          aria-invalid={!!erro}
          className={`w-full rounded-lg border border-suave/40 bg-campo px-3.5 py-3 text-sm text-texto shadow-sm placeholder:text-suave/70 focus:border-azul focus:outline-none focus:ring-2 focus:ring-azul/30 aria-invalid:border-alerta ${
            direita ? "pr-10" : ""
          }`}
          {...props}
        />
        {direita && <div className="absolute inset-y-0 right-2 flex items-center">{direita}</div>}
      </div>
      {erro ? (
        <p className="mt-1 text-xs text-alerta">{erro}</p>
      ) : (
        dica && <p className="mt-1 text-xs text-suave">{dica}</p>
      )}
    </div>
  );
}