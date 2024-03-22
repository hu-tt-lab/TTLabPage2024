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
    <Stack direction="column" sx={{ overflowY: "auto", ...sx }}>
      <RouteList onClick={onClick} />
      <Box p={0.5} />
      <LangSelection />
    </Stack>
  );
}
