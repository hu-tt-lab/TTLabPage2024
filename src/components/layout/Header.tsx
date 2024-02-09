import { Psychology } from "@mui/icons-material";
import { AppBar, Box, Link, Stack, Toolbar, Typography } from "../common";
import { MenuDrawer } from "./menu/MenuDrawer";
import { useState } from "react";
import { MenuButton } from "./menu/MenuButton";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../styles";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const openMenu = () => {
    setMenuIsOpen(true);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };
  const handleMenuButtonClick = () => {
    openMenu();
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{ bgcolor: "#fff6", backdropFilter: "blur(8px)" }}
    >
      <Toolbar variant="regular">
        {!isLg && <MenuButton onClick={handleMenuButtonClick} />}

        <Link href="/" color="inherit" underline="none">
          <Stack flexDirection="row" flexWrap="nowrap">
            <Psychology />
            <Typography variant="h6">TT Lab</Typography>
          </Stack>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <MenuDrawer open={menuIsOpen} onClose={closeMenu} />
      </Toolbar>
    </AppBar>
  );
}
