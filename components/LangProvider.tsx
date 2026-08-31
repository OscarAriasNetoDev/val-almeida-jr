"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/data";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  // Restaura preferência salva e mantém o <html lang> sincronizado.
  useEffect(() => {
    const saved = window.localStorage.getItem("vda-lang");
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("vda-lang", next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
