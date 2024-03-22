import { AppBar as MAppBar, AppBarProps as MAppBarProps } from "@mui/material";

export type AppBarProps = MAppBarProps;

export function AppBar(props: MAppBarProps) {
  return <MAppBar {...props} />;
}
