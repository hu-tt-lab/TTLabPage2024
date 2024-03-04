import { Drawer } from "../../common";
import { Menu } from "../../../routes";
import { LangSelection } from "../../language";

export type MenuDrawerProps = {
  open?: boolean;
  onClose?: () => void;
  onClick?: () => void;
};

export function MenuDrawer({ open, onClose, onClick }: MenuDrawerProps) {
  return (
    <Drawer open={open} anchor="left" onClose={onClose}>
      <Menu onClick={onClick} />
      <LangSelection />
    </Drawer>
  );
}
