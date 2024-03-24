import { AppBar, Box, Toolbar } from "../../common";
import { MenuButton } from "../Nav/MenuButton";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../../styles";
import { Logo } from "./Logo";
import { useNavOpenContext } from "..";

export function Header() {
  const { setNavOpen } = useNavOpenContext();

  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const openMenu = () => {
    setNavOpen(true);
  };

  const handleMenuButtonClick = () => {
    openMenu();
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      // sx={{ bgcolor: "#00695B60", backdropFilter: "blur(8px)" }}
    >
      <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
        {!isLg && (
          <>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />
            <MenuButton onClick={handleMenuButtonClick} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
