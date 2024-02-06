import {
  ListItemButton as MListItemButton,
  ListItemButtonProps as MListItemButtonProps,
} from "@mui/material";

export type ListItemButtonProps = MListItemButtonProps;

export function ListItemButton(props: MListItemButtonProps) {
  return <MListItemButton {...props} />;
}
