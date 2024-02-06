import { IconButton, MenuIcon } from "../../common";

export type MenuButtonProps = {
  onClick?: () => void;
};
export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <IconButton onClick={onClick} color="inherit">
      <MenuIcon />
    </IconButton>
  );
}
