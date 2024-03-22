import { MenuItem, Select } from "../common";
import { LangType, useLangContext } from ".";
import { SelectChangeEvent } from "@mui/material";

export const LangSelection = () => {
  const [lang, setLang] = useLangContext();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const val = event.target.value as LangType;
    if (setLang) setLang(val);
  };
  return (
    <Select
      variant="standard"
      value={lang}
      onChange={handleChange}
      sx={{ mx: 2 }}
    >
      <MenuItem value="ja">Ja</MenuItem>
      <MenuItem value="en">En</MenuItem>
    </Select>
  );
};
