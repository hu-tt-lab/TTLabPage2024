import { ReactNode, useState } from "react";
import { NavOpenContext } from "./NavOpenContext";

export type NavOpenContextProviderProps = {
  children: ReactNode;
};
export function NavOpenContextProvider({
  children,
}: NavOpenContextProviderProps) {
  const [navOpen, _setNavOpen] = useState<boolean>(false);

  const setNavOpen = (open: boolean) => {
    _setNavOpen(open);
  };

  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <NavOpenContext.Provider value={{ navOpen, setNavOpen, toggleNavOpen }}>
      {children}
    </NavOpenContext.Provider>
  );
}
