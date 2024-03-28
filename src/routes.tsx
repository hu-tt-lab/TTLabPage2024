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

// ルーティングの定義
const ROUTES = {
  home: {
    path: "/",
    navLabel: "Home",
    element: <Home />,
  },
  about: {
    path: "/about",
    navLabel: "About",
    element: <About />,
  },
  members: {
    path: "/members",
    navLabel: "Members",
    element: <Members />,
  },
  gallery: {
    path: "/gallery",
    navLabel: "Gallery",
    element: <Gallery />,
  },
  projects: {
    path: "/projects",
    navLabel: "Projects",
    element: <Projects />,
  },
  publications: {
    path: "/publications",
    navLabel: "Publications",
    element: <Publications />,
  },
  awards: {
    path: "/awards",
    navLabel: "Awards",
    element: <Awards />,
  },
  theme: {
    path: "/theme",
    navLabel: "Themes",
    element: <Theme />,
  },
  highlights: {
    path: "/highlight",
    navLabel: "Highlights",
    element: <Highlights />,
  },
  studylife: {
    path: "/studylife",
    navLabel: "Life in our lab",
    element: <Studylife />,
  },
  books: {
    path: "/books",
    navLabel: "Books",
    element: <Books />,
  },
  internship: {
    path: "/internship",
    navLabel: "Internship",
    element: <Internship />,
  },
  outreach: {
    path: "/outreach",
    navLabel: "Outreach",
    element: <Outreach />,
  },
};

// ルーティング
export function Routes() {
  return (
    <RRDRoutes>
      {Object.values(ROUTES).map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </RRDRoutes>
  );
}

// メニュー
export type RouteListProps = {
  onClick?: () => void;
};
export function RouteList({ onClick }: RouteListProps) {
  return (
    <List>
      {Object.values(ROUTES).map((route) => (
        <RouteListItem key={route.path} onClick={onClick} to={route.path}>
          {route.navLabel}
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
