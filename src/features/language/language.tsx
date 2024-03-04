import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Language type
export const LANGS = ["ja", "en"] as const;
export type LangType = (typeof LANGS)[number];

// language context
export type LangContextType = [LangType, Dispatch<SetStateAction<LangType>>];
export const LangContext = createContext<LangContextType | undefined>(
  undefined
);

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
