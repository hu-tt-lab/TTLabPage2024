import { Box, BoxProps } from "../../common";

export type MdxPageContainerProps = BoxProps;
export function MdxPageContainer({ height, ...props }: MdxPageContainerProps) {
  return <Box height={height || "100%"} {...props} />;
}
