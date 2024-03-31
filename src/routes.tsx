import {
  Link,
  Route,
  Routes as RRDRoutes,
  useLocation,
} from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "./components/common";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

// ページ
import Home from "./pages/home.mdx";
import About from "./pages/about.mdx";
import Members from "./pages/members.mdx";
import Gallery from "./pages/gallery.mdx";
import Projects from "./pages/projects.mdx";
import Publications from "./pages/publications.mdx";
import Awards from "./pages/awards.mdx";
import Theme from "./pages/theme.mdx";
import Highlights from "./pages/highlights.mdx";
import Studylife from "./pages/studylife.mdx";
import Books from "./pages/books.mdx";
import Internship from "./pages/internship.mdx";
import Outreach from "./pages/outreach.mdx";
import { MDXProps } from "mdx/types";
import { LangType, useLangContext } from "./components/language";

type _Route = {
  path: string;
  navLabel: { [L in LangType]: string };
  element: (props: MDXProps) => JSX.Element;
  children?: _Route[];
};

// ルーティングの定義
const ROUTES: { [key: string]: _Route } = {
  home: {
    path: "/",
    navLabel: { en: "Home", ja: "ホーム" },
    element: Home,
  },
  about: {
    path: "/about",
    navLabel: { en: "About", ja: "研究室について" },
    element: About,
  },
  members: {
    path: "/members",
    navLabel: { en: "Members", ja: "構成員" },
    element: Members,
  },
  gallery: {
    path: "/gallery",
    navLabel: { en: "Gallery", ja: "ギャラリー" },
    element: Gallery,
  },
  projects: {
    path: "/projects",
    navLabel: { en: "Projects", ja: "研究プロジェクト" },
    element: Projects,
  },
  publications: {
    path: "/publications",
    navLabel: { en: "Publications", ja: "研究業績" },
    element: Publications,
  },
  awards: {
    path: "/awards",
    navLabel: { en: "Awards", ja: "受賞" },
    element: Awards,
  },
  theme: {
    path: "/theme",
    navLabel: { en: "Themes", ja: "研究テーマ" },
    element: Theme,
  },
  highlights: {
    path: "/highlight",
    navLabel: { en: "Highlights", ja: "研究ハイライト" },
    element: Highlights,
  },
  studylife: {
    path: "/studylife",
    navLabel: { en: "Life in our lab", ja: "研究室での生活" },
    element: Studylife,
  },
  books: {
    path: "/books",
    navLabel: { en: "Books", ja: "参考図書" },
    element: Books,
  },
  internship: {
    path: "/internship",
    navLabel: { en: "Internship", ja: "インターンシップ" },
    element: Internship,
  },
  outreach: {
    path: "/outreach",
    navLabel: { en: "Outreach", ja: "アウトリーチ活動" },
    element: Outreach,
  },
};

// ルーティング
export function Routes() {
  const lang = useLangContext()[0];

  return (
    <RRDRoutes>
      {Object.values(ROUTES).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <>
              <Helmet>
                <title>
                  {lang == "ja"
                    ? `${route.navLabel.ja} | 神経制御工学研究室`
                    : `${route.navLabel.en} | Neural Control Engineering Lab`}
                </title>
              </Helmet>
              <route.element />
            </>
          }
        />
      ))}
    </RRDRoutes>
  );
}

// メニュー
export type RouteListProps = {
  onClick?: () => void;
};
export function RouteList({ onClick }: RouteListProps) {
  const lang = useLangContext()[0];
  return (
    <List>
      {Object.values(ROUTES).map((route) => (
        <RouteListItem key={route.path} onClick={onClick} to={route.path}>
          {route.navLabel[lang]}
        </RouteListItem>
      ))}
    </List>
  );
}

// コンポーネント

type RouteListItemProps = {
  to: string;
  children: ReactNode;
  onClick?: () => void;
};
function RouteListItem({ to = "", children, onClick }: RouteListItemProps) {
  const location = useLocation();

  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton
        onClick={onClick}
        component={Link}
        disabled={location.pathname == to}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        to={to}
      >
        <Typography variant="button" textTransform="uppercase">
          {children}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}
