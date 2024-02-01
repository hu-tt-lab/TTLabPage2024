import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Footer, Nav } from "./components/layout";

function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
