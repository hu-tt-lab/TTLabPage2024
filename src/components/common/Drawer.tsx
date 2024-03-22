import { Drawer as MDrawer, DrawerProps as MDrawerProps } from "@mui/material";

export type DrawerProps = MDrawerProps;

export function Drawer(props: MDrawerProps) {
  return <MDrawer {...props} />;
}
