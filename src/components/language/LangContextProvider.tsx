import { ReactNode, useEffect, useState } from "react";
import { LangType } from "./types";
import { LangContext } from "./LangContext";
import { useSearchParams } from "react-router-dom";

// Provider for lang context
export type LangContextProviderProps = {
  children: ReactNode;
};

export const LangContextProvider = ({ children }: LangContextProviderProps) => {
  const [lang, setLang] = useState<LangType>("ja");
  const [searchParams] = useSearchParams();

  const setLangAndLocalStorage = (newLang: LangType) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    // URL から lang の値を取得
    const paramLang = searchParams.get("lang");
    if (paramLang) {
      setLang(paramLang as LangType);
      localStorage.setItem("lang", paramLang);
      return;
    }

    // local storage から lang の値を取得
    const localLang = localStorage.getItem("lang") as LangType;
    if (localLang) {
      setLang(localLang);
    }
  }, [searchParams]);

  useEffect(() => {
    console.log("lang", searchParams.get("lang"));
  }, [searchParams]);

  return (
    <LangContext.Provider value={[lang, setLangAndLocalStorage]}>
      {children}
    </LangContext.Provider>
  );
};
