import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('bat-tema') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Altera o atributo data-theme no <html> para corresponder ao seu CSS
    root.setAttribute('data-theme', tema);
    localStorage.setItem('bat-tema', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = tema === 'dark';

  return (
    <button
      onClick={alternarTema}
      className="w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition hover:bg-campo hover:text-titulo"
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
      <span className="text-xs font-semibold">
        {isDark ? "Modo Escuro" : "Modo Claro"}
      </span>
    </button>
  );
}