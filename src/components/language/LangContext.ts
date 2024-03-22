import { createContext, useContext } from "react";
import { LangType } from "./types";

// language context
export type LangSetterFunc = (lang: LangType) => void;
export type LangContextType = [LangType, LangSetterFunc];
export const LangContext = createContext<
  LangContextType | [LangType, undefined]
>(["en", undefined]);

// Hooks for lang context
export const useLangContext = () => useContext(LangContext);
