import { Link, Route, Routes as RRDRoutes } from "react-router-dom";
import { List, ListItem, ListItemButton } from "./components/common";
import { ReactNode } from "react";

// ページ
import Home from "./pages/home.mdx";
import About from "./pages/about.mdx";

// ルーティングの定義
export const ROUTES = {
  home: {
    path: "/",
    navLabel: "Home",
  },
  about: {
    path: "/about",
    navLabel: "About",
  },
};

// ルーティング
export function Routes() {
  return (
    <RRDRoutes>
      <Route path={ROUTES.home.path} element={<Home />} />

      <Route path={ROUTES.about.path} element={<About />} />
    </RRDRoutes>
  );
}

// メニュー
export function Menu() {
  return (
    <List>
      <MenuItem to={ROUTES.home.path}>{ROUTES.home.navLabel}</MenuItem>
      <MenuItem to={ROUTES.about.path}>{ROUTES.about.navLabel}</MenuItem>
    </List>
  );
}

// コンポーネント

type MenuItemProps = {
  to: string;
  children: ReactNode;
};
function MenuItem({ to = "", children }: MenuItemProps) {
  return (
    <ListItem>
      {/* @ts-ignore */}
      <ListItemButton component={Link} to={to}>
        {children}
      </ListItemButton>
    </ListItem>
  );
}
