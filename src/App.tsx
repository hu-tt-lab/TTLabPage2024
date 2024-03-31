import { Footer, Header } from "./components/layout";
import { Box, Stack } from "./components/common";
import { Routes } from "./routes";
import { ReactNode } from "react";
import { Nav } from "./components/layout/Nav";
import { useMediaQuery, useTheme } from "@mui/material";

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
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Stack sx={{ height: "100vh", background: "none" }}>
      <Header />
      <Stack
        sx={{
          flexDirection: "row",
          flexGrow: 1,
        }}
      >
        <Nav />
        <Stack sx={{ flexGrow: 1, overflowY: "auto", mt: isLg ? "64px" : 0 }}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;

// TODO: Add subtitle and parallax to hero
// TODO: ハイライトに Chipを入れてタグづけ
// TODO: メンバーもギャラリーっぽく
// TODO: 構成員の顔写真の代わりに好きなことの円グラフをつける
// TODO: 先生の個人ページ
// TODO: 更新マニュアル作る
