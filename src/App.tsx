import { Footer, Header } from "./components/layout";
import { Box, Stack } from "./components/common";
import { Routes } from "./routes";
import { ReactNode } from "react";
import { Nav } from "./components/layout/Nav";

function App() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, margin: 0, padding: 0, alignitems: "center" }}>
        <Routes />
      </Box>
      <Footer />
    </Container>
  );
}

type ContainerProps = {
  children: ReactNode;
};
function Container({ children }: ContainerProps) {
  return (
    <Stack sx={{ height: "100vh", background: "none" }}>
      <Header />
      <Stack sx={{ flexDirection: "row", flexGrow: 1, overflowY: "auto" }}>
        <Nav />
        <Stack sx={{ flexGrow: 1, overflowY: "auto" }}>{children}</Stack>
      </Stack>
    </Stack>
  );
}

export default App;

// TODO: Gallery, News, 先生のページ, Highlights
