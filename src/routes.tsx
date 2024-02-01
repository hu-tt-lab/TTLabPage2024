import { createBrowserRouter } from "react-router-dom";
import { Root, About } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
