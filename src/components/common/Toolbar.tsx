import {
  Toolbar as MToolbar,
  ToolbarProps as MToolbarProps,
} from "@mui/material";

export type ToolbarProps = MToolbarProps;

export function Toolbar(props: MToolbarProps) {
  return <MToolbar {...props} />;
}
