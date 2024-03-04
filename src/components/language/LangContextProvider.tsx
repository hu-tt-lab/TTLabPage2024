import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { LangType } from "./types";

// language context
export type LangContextType = [LangType, Dispatch<SetStateAction<LangType>>];
export const LangContext = createContext<
  LangContextType | [LangType, undefined]
>(["en", undefined]);

// Hooks for lang context
export const useLangContext = () => useContext(LangContext);

// Provider for lang context
export type LangContextProviderProps = {
  children: ReactNode;
};

export const LangContextProvider = ({ children }: LangContextProviderProps) => {
  const [lang, setLang] = useState<LangType>("ja");

  return (
    <LangContext.Provider value={[lang, setLang]}>
      {children}
    </LangContext.Provider>
  );
};
