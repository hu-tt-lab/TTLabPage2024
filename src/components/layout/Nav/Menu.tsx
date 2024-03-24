import { SxProps } from "@mui/material";
import { RouteList } from "../../../routes";
import { Box, Stack } from "../../common";
import { LangSelection } from "../../language";

export type MenuProps = {
  onClick?: () => void;
  sx?: SxProps;
};
export function Menu({ onClick, sx }: MenuProps) {
  return (
    <Stack sx={sx}>
      <RouteList onClick={onClick} />
      <LangSelection />
      <Box p={2} />
    </Stack>
  );
}
