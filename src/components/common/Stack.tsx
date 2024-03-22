import { Stack as MStack, StackProps as MStackProps } from "@mui/material";

export type StackProps = MStackProps;

export function Stack(props: MStackProps) {
  return <MStack {...props} />;
}
