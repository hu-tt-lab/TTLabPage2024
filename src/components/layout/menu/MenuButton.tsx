import { IconButton, IconButtonProps, MenuIcon } from "../../common";

export type MenuButtonProps = IconButtonProps;
export function MenuButton({ color, ...props }: MenuButtonProps) {
  return (
    <IconButton {...props} color={color ?? "inherit"}>
      <MenuIcon fontSize="large" />
    </IconButton>
  );
}
