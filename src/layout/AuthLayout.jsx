import { Check } from "lucide-react";
import { useTema } from "../hooks/useTema";


export default function AuthLayout({ logo, titulo, texto, itens, children }) {
  useTema();

  return (
    <main className="grid min-h-screen bg-fundo lg:grid-cols-2">
      <section className="hidden flex-col justify-center bg-linear-to-b from-[#081A2E] to-[#14365F] px-16 lg:flex">
        <img src={logo} alt="BAT" className="h-12 w-auto self-start" />
        <p className="mt-8 max-w-sm text-3xl font-bold leading-tight text-white">{titulo}</p>
        <p className="mt-4 max-w-sm text-sm text-[#8FA3BC]">{texto}</p>
        <ul className="mt-6 space-y-2 text-sm text-[#C9D6E6]">
          {itens.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check size={16} className="text-[#2BC4D6]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <img src={logo} alt="BAT" className="mb-6 h-10 w-auto lg:hidden" />
          {children}
        </div>
      </section>
    </main>
  );
}
