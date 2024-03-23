import { Footer, Header, Menu } from "./components/layout";
import { Box, Stack } from "./components/common";
import { Routes } from "./routes";
import { useMediaQuery } from "@mui/material";
import { theme } from "./styles";
import { ReactNode } from "react";

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
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack sx={{ height: "100vh", background: "none" }}>
      <Header />
      {isLg ? (
        <Stack sx={{ flexDirection: "row", flexGrow: 1, overflowY: "auto" }}>
          <Menu sx={{ mx: 1, minWidth: 160 }} />
          <Stack sx={{ flexGrow: 1, overflowY: "auto" }}>{children}</Stack>
        </Stack>
      ) : (
        <>{children}</>
      )}
    </Stack>
  );
}

export default App;
