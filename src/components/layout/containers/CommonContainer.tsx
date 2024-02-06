import { Stack, StackProps } from "../../common";

export type CommoncontainerProps = StackProps;
export function CommonContainer({ height, ...props }: CommoncontainerProps) {
  return <Stack height={height || "100%"} {...props} />;
}
