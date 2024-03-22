import { ReactNode, useEffect, useState } from "react";
import { LangType } from "./types";
import { LangContext } from "./LangContext";

// Provider for lang context
export type LangContextProviderProps = {
  children: ReactNode;
};

export const LangContextProvider = ({ children }: LangContextProviderProps) => {
  const [lang, setLang] = useState<LangType>("ja");

  const setLangAndLocalStorage = (lang: LangType) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    // local storage から lang の値を取得
    const localLang = localStorage.getItem("lang") as LangType;
    if (localLang) {
      setLang(localLang);
    }
  }, []);

  return (
    <LangContext.Provider value={[lang, setLangAndLocalStorage]}>
      {children}
    </LangContext.Provider>
  );
};
