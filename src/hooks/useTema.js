import { useEffect, useState } from "react";

export function useTema() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem("bat-tema");
    if (salvo) return salvo;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    localStorage.setItem("bat-tema", tema);
  }, [tema]);

  const alternar = () => setTema((t) => (t === "dark" ? "light" : "dark"));
  return [tema, alternar];
}
