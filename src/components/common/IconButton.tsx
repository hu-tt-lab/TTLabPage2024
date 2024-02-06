import {
  IconButton as MIconButton,
  IconButtonProps as MIconButtonProps,
} from "@mui/material";

export type IconButtonProps = MIconButtonProps;

export function IconButton(props: MIconButtonProps) {
  return <MIconButton {...props} />;
}
