import { SxProps, useTheme } from "@mui/material";
import { List } from "../common";
import { useLangContext } from "../language";

export type NewsListProps = {
  children: React.ReactNode;
  sx?: SxProps;
};

export function NewsList({ children, sx }: NewsListProps) {
  const [lang] = useLangContext();
  const theme = useTheme();

  return (
    <List
      sx={{
        "& dt": { color: theme.palette.primary.main, fontWeight: "bold" },
        "& dd": {
          borderLeft: "1px solid gray",
          marginLeft: 1,
          paddingLeft: 1,
          marginBottom: 1.5,
        },
        "& dd.ja": { display: lang === "ja" ? "block" : "none" },
        "& dd.en": { display: lang === "en" ? "block" : "none" },
        ...sx,
      }}
    >
      {children}
    </List>
  );
}
