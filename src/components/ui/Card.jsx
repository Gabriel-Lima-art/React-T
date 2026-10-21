export default function Card({ titulo, acao, className = "", children }) {
  return (
    <section className={`rounded-2xl border border-borda bg-card p-5 ${className}`}>
      {(titulo || acao) && (
        <header className="mb-3 flex items-center justify-between gap-3">
          {titulo && <h2 className="text-sm font-bold text-titulo">{titulo}</h2>}
          {acao}
        </header>
      )}
      {children}
    </section>
  );
}
