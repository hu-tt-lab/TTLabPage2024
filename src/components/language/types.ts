// Language type
export const LANGS = ["ja", "en"] as const;
export type LangType = (typeof LANGS)[number];
