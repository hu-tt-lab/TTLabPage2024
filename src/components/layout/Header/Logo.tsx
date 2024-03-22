import { useMediaQuery } from "@mui/material";
import { theme } from "../../../styles";
import { Link, Stack, Typography } from "../../common";
import { En, Ja } from "../../language";

export function Logo() {
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Link href="/" color="inherit" underline="none">
      <Stack
        direction="row"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="flex-start"
      >
        <img src="/logo-light.svg" height="40px" />
        {!isSm && (
          <Typography variant="h1" ml={2}>
            <En>Neural Control Engineering Lab</En>
            <Ja>神経制御工学研究室</Ja>
          </Typography>
        )}
      </Stack>
    </Link>
  );
}
