import { Footer, Header } from "./components/layout";
import { Box, Stack } from "./components/common";
import { Routes } from "./routes";
import { Menu } from "./components/layout/menu/MenuDrawer";
import { useMediaQuery } from "@mui/material";
import theme from "./styles/theme";
import { ReactNode } from "react";

function App() {
  return (
    <Container>
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, margin: 0, padding: 0 }}>
          <Routes />
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
}

type ContainerProps = {
  children: ReactNode;
};
function Container({ children }: ContainerProps) {
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      {isLg ? (
        <Stack sx={{ flexDirection: "row", flexGrow: 1 }}>
          <Menu />
          {children}
        </Stack>
      ) : (
        <> {children}</>
      )}
    </Stack>
  );
}

export default App;
