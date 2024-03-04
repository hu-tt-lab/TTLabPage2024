import { Drawer, MenuItem, Select } from "../../common";
import { Menu } from "../../../routes";
import { LangType, useLangContext } from "../../language";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export type MenuDrawerProps = {
  open?: boolean;
  onClose?: () => void;
};

export function MenuDrawer({ open = false, onClose }: MenuDrawerProps) {
  const langContext = useLangContext();
  const [lang, setLang] = langContext ?? useState<LangType>("ja");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const val = event.target.value as LangType;
    setLang(val);
  };

  return (
    <Drawer open={open} anchor="left" onClose={onClose}>
      <Menu />
      <Select
        variant="standard"
        value={lang}
        onChange={handleChange}
        sx={{ mx: 2 }}
      >
        <MenuItem value="ja">Ja</MenuItem>
        <MenuItem value="en">En</MenuItem>
      </Select>
    </Drawer>
  );
}
