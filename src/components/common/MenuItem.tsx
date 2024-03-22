import {
  MenuItem as MMenuItem,
  MenuItemProps as MMenuItemProps,
} from "@mui/material";

export type MenuItemProps = MMenuItemProps;

export function MenuItem(props: MMenuItemProps) {
  return <MMenuItem {...props} />;
}
