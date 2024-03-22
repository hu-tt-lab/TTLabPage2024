import { LanguageIcon, MenuItem, Select } from "../common";
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
      color="primary"
      value={lang}
      onChange={handleChange}
      sx={{ mx: 2 }}
      startAdornment={
        <LanguageIcon fontSize="small" sx={{ mr: 1, color: "#888" }} />
      }
    >
      <MenuItem value="ja">日本語</MenuItem>
      <MenuItem value="en">English</MenuItem>
    </Select>
  );
};
