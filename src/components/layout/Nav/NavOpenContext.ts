import { createContext, useContext } from "react";

// language context
export type NavOpenContextType = {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  toggleNavOpen: () => void;
};

export const NavOpenContext = createContext<NavOpenContextType>({
  navOpen: false,
  setNavOpen: () => {},
  toggleNavOpen: () => {},
});

// Hooks for lang context
export const useNavOpenContext = () => useContext(NavOpenContext);
