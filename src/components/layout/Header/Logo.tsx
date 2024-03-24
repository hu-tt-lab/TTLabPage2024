import { useMediaQuery } from "@mui/material";
import { theme } from "../../../styles";
import { Box, BoxProps, Link, Stack, Typography } from "../../common";
import { En, Ja } from "../../language";

export type LogoProps = BoxProps;
export function Logo({ ...props }: LogoProps) {
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box {...props}>
      <Link href="/" color="inherit" underline="none">
        <Stack
          direction="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="flex-start"
        >
          <img src="/logo-light.svg" height="40px" />
          {!isSm && (
            <Box>
              <En>
                <Typography variant="h1" ml={2} noWrap>
                  Neural Control Engineering Lab
                </Typography>
              </En>
              <Ja>
                <Typography variant="h1" ml={2} noWrap>
                  神経制御工学研究室
                </Typography>
              </Ja>
            </Box>
          )}
        </Stack>
      </Link>
    </Box>
  );
}
