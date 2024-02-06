import { ReactNode } from "react";
import { Drawer, List, ListItem, ListItemButton } from "../../common";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";

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

export function Menu() {
  return (
    <List>
      <MenuItem to={ROUTES.root.path}>{ROUTES.root.navLabel}</MenuItem>
      <MenuItem to={ROUTES.about.path}>{ROUTES.about.navLabel}</MenuItem>
    </List>
  );
}

type MenuItemProps = {
  to: string;
  children: ReactNode;
};
function MenuItem({ to = "", children }: MenuItemProps) {
  return (
    <ListItem>
      <ListItemButton component={Link} to={to}>
        {children}
      </ListItemButton>
    </ListItem>
  );
}
