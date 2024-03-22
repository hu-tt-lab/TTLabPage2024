import { SvgIconProps as MIconProps } from "@mui/material";
import { Language, Menu, Psychology } from "@mui/icons-material";

export type IconProps = MIconProps;

export function MenuIcon(props: IconProps) {
  return <Menu {...props} />;
}

export function PsychologyIcon(props: IconProps) {
  return <Psychology {...props} />;
}

export function LanguageIcon(props: IconProps) {
  return <Language {...props} />;
}
