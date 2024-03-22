import { Drawer } from "../../common";
import { Menu } from ".";

export type MenuDrawerProps = {
  open?: boolean;
  onClose?: () => void;
  onClick?: () => void;
};

export function MenuDrawer({ open, onClose, onClick }: MenuDrawerProps) {
  return (
    <Drawer open={open} anchor="right" onClose={onClose}>
      <Menu onClick={onClick} sx={{ p: 1 }} />
    </Drawer>
  );
}
