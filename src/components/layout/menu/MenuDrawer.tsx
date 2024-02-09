import { Drawer } from "../../common";
import { Menu } from "../../../routes";

export type MenuDrawerProps = {
  open?: boolean;
  onClose?: () => void;
};

export function MenuDrawer({ open = false, onClose }: MenuDrawerProps) {
  return (
    <Drawer open={open} anchor="left" onClose={onClose}>
      <Menu />
    </Drawer>
  );
}
