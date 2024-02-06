import { Link as MLink, LinkProps as MLinkProps } from "@mui/material";

export type LinkProps = MLinkProps;

export function Link(props: MLinkProps) {
  return <MLink {...props} />;
}
