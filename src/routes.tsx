import { Route, Routes as RRDRoutes } from "react-router-dom";
import { Root, About } from "./pages";

export const ROUTES = {
  root: {
    path: "/",
    navLabel: "Home",
  },
  about: {
    path: "/about",
    navLabel: "About",
  },
} as const;

export function Routes() {
  return (
    <RRDRoutes>
      <Route path={ROUTES.root.path} element={<Root />} />
      <Route path={ROUTES.root.path} element={<About />} />
    </RRDRoutes>
  );
}
