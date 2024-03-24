import { Box, Drawer, Stack, Toolbar } from "../../common";
import { Menu, useNavOpenContext } from ".";
import { SxProps, useMediaQuery } from "@mui/material";
import { theme } from "../../../styles";
import { Logo } from "../Header/Logo";

const NAV_WIDTH = 200;

export type NavProps = {
  sx?: SxProps;
};

export function Nav({ sx }: NavProps) {
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const { navOpen, setNavOpen } = useNavOpenContext();

  const handleClose = () => {
    setNavOpen(false);
  };

  const handleClick = () => {
    handleClose();
  };

  return (
    <>
      {isLg ? (
        <Box component="nav" width={NAV_WIDTH} sx={{ flexShrink: 0 }}>
          <Drawer
            open
            anchor="left"
            variant="permanent"
            sx={{
              // display: { xs: "block", sm: "none" },
              "& > .MuiDrawer-paper": {
                backgroundColor: "transparent",
                border: "none",
                width: NAV_WIDTH,
                overflow: "visible",
              },
            }}
          >
            <Stack
              direction="column"
              flex={1}
              height="100vh"
              overflow="visible"
            >
              <Toolbar sx={{ position: "relative" }}>
                <Logo width="100%" />
              </Toolbar>
              <Menu
                sx={{ px: 1, flex: 1, overflowY: "auto" }}
                onClick={handleClick}
              />
            </Stack>
          </Drawer>
        </Box>
      ) : (
        <Drawer
          open={navOpen}
          anchor={"right"}
          variant={"temporary"}
          onClose={handleClose}
          sx={sx}
        >
          <Menu sx={{ px: 1 }} onClick={handleClick} />
        </Drawer>
      )}
    </>
  );
}
