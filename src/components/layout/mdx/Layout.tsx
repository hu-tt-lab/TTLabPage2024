import { Box, BoxProps } from "../../common";

export type LayoutProps = BoxProps;
export function Layout({ height, px, py, ...props }: LayoutProps) {
  return <Box px={px ?? 4} py={py ?? 1} height={height ?? "100%"} {...props} />;
}
