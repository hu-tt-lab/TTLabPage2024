import {
  Typography as MTypography,
  TypographyProps as MTypographyProps,
} from "@mui/material";

export type TypographyProps = MTypographyProps;

export function Typography(props: MTypographyProps) {
  return <MTypography {...props} />;
}
