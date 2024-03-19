import { Link, Route, Routes as RRDRoutes } from "react-router-dom";
import { List, ListItem, ListItemButton } from "./components/common";
import { ReactNode } from "react";

// ページ
import Home from "./pages/home.mdx";
import About from "./pages/about.mdx";
import Members from "./pages/members.mdx";
import Projects from "./pages/projects.mdx";
import Publications from "./pages/publications.mdx";
import Awards from "./pages/awards.mdx";
import Theme from "./pages/theme.mdx";
import Studylife from "./pages/studylife.mdx";

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
  members: {
    path: "/members",
    navLabel: "Members",
  },
  projects: {
    path: "/projects",
    navLabel: "Projects",
  },
  publications: {
    path: "/publications",
    navLabel: "Publications",
  },
  awards: {
    path: "/awards",
    navLabel: "Awards",
  },
  theme: {
    path: "/theme",
    navLabel: "Theme",
  },
  studylife: {
    path: "/studylife",
    navLabel: "Studylife",
  },
};

// ルーティング
export function Routes() {
  return (
    <RRDRoutes>
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path={ROUTES.about.path} element={<About />} />
      <Route path={ROUTES.members.path} element={<Members />} />
      <Route path={ROUTES.projects.path} element={<Projects />} />
      <Route path={ROUTES.publications.path} element={<Publications />} />
      <Route path={ROUTES.awards.path} element={<Awards />} />
      <Route path={ROUTES.theme.path} element={<Theme />} />
      <Route path={ROUTES.studylife.path} element={<Studylife />} />
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
      <MenuItem onClick={onClick} to={ROUTES.members.path}>
        {ROUTES.members.navLabel}
      </MenuItem>
      <MenuItem onClick={onClick} to={ROUTES.projects.path}>
        {ROUTES.projects.navLabel}
      </MenuItem>
      <MenuItem onClick={onClick} to={ROUTES.publications.path}>
        {ROUTES.publications.navLabel}
      </MenuItem>
      <MenuItem onClick={onClick} to={ROUTES.awards.path}>
        {ROUTES.awards.navLabel}
      </MenuItem>
      <MenuItem onClick={onClick} to={ROUTES.theme.path}>
        {ROUTES.theme.navLabel}
      </MenuItem>
      <MenuItem onClick={onClick} to={ROUTES.studylife.path}>
        {ROUTES.studylife.navLabel}
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
