import { Select as MSelect, SelectProps as MSelectProps } from "@mui/material";

export type SelectProps = MSelectProps;

export function Select(props: MSelectProps) {
  return <MSelect {...props} />;
}
