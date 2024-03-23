import { Drawer } from "../../common";
import { Menu } from ".";
import { SxProps } from "@mui/material";

export type MenuDrawerProps = {
  open?: boolean;
  anchor?: "left" | "right";
  variant?: "temporary" | "persistent" | "permanent";
  onClose?: () => void;
  onClick?: () => void;
  sx?: SxProps;
};

export function MenuDrawer({
  open,
  variant,
  anchor,
  onClose,
  onClick,
  sx,
}: MenuDrawerProps) {
  return (
    <Drawer
      open={open}
      anchor={anchor ?? "right"}
      variant={variant ?? "temporary"}
      onClose={onClose}
      sx={sx}
    >
      <Menu onClick={onClick} sx={{ p: 1 }} />
    </Drawer>
  );
}
