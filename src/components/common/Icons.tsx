import { SvgIconProps as MIconProps } from "@mui/material";
import { ExpandMore, Language, Menu, Psychology } from "@mui/icons-material";

export type IconProps = MIconProps;

export function ExpandMoreIcon(props: IconProps) {
  return <ExpandMore {...props} />;
}

export function LanguageIcon(props: IconProps) {
  return <Language {...props} />;
}

export function MenuIcon(props: IconProps) {
  return <Menu {...props} />;
}

export function PsychologyIcon(props: IconProps) {
  return <Psychology {...props} />;
}
