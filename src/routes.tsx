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
export type MenuProps = {
  onClick?: () => void;
};
export function Menu({ onClick }: MenuProps) {
  return (
    <List>
      <MenuItem onClick={onClick} to={ROUTES.home.path}>
        {ROUTES.home.navLabel}
      </MenuItem>
      <MenuItem onClick={onClick} to={ROUTES.about.path}>
        {ROUTES.about.navLabel}
      </MenuItem>
    </List>
  );
}

// コンポーネント

type MenuItemProps = {
  to: string;
  children: ReactNode;
  onClick?: () => void;
};
function MenuItem({ to = "", children, onClick }: MenuItemProps) {
  return (
    <ListItem>
      {/* @ts-ignore */}
      <ListItemButton onClick={onClick} component={Link} to={to}>
        {children}
      </ListItemButton>
    </ListItem>
  );
}
