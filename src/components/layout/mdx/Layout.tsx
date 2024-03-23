import { Box, BoxProps } from "../../common";

export type LayoutProps = BoxProps;
export function Layout({ height, ...props }: LayoutProps) {
  return <Box height={height ?? "100%"} {...props} />;
}
