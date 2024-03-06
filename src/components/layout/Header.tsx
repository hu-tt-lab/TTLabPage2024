import { AppBar, Box, Link, Stack, Toolbar } from "../common";
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
  const handleMenuChange = () => {
    closeMenu();
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
            <img src="/logo-light.svg" height="40px" />
          </Stack>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <MenuDrawer
          open={menuIsOpen}
          onClick={handleMenuChange}
          onClose={closeMenu}
        />
      </Toolbar>
    </AppBar>
  );
}
