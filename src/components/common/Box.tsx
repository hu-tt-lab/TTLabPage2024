import { Box as MBox, BoxProps as MBoxProps } from "@mui/material";

export type BoxProps = MBoxProps;

export function Box(props: MBoxProps) {
  return <MBox {...props} />;
}
