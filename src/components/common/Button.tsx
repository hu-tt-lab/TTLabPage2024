import { Button as MButton, ButtonProps as MButtonProps } from "@mui/material";

export type ButtonProps = MButtonProps;

export function Button(props: MButtonProps) {
  return <MButton {...props} />;
}
