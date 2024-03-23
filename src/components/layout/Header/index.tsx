import { AppBar, Box, Toolbar } from "../../common";
import { MenuDrawer } from "../Menu/MenuDrawer";
import { useState } from "react";
import { MenuButton } from "../Menu/MenuButton";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../../styles";
import { Logo } from "./Logo";

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
    <>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{ bgcolor: "#fff6", backdropFilter: "blur(8px)" }}
      >
        <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          {!isLg && <MenuButton onClick={handleMenuButtonClick} />}
        </Toolbar>
      </AppBar>
      <MenuDrawer
        open={menuIsOpen}
        onClick={handleMenuChange}
        onClose={closeMenu}
      />
    </>
  );
}
