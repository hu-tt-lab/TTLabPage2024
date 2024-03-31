import { SxProps, useTheme } from "@mui/material";
import { List } from "../../common";
import { useLangContext } from "../../language";

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
        mx: 1,
        "& dt": { color: theme.palette.primary.main, fontWeight: "bold" },
        "& dd": {
          borderLeft: `1px solid ${theme.palette.primary.main}99`,
          marginLeft: 1,
          paddingLeft: 2,
          py: 0.5,
          marginBottom: 1.5,
        },
        "& p": { margin: 0, display: "inline" },
        "& dd.ja": { display: lang === "ja" ? "block" : "none" },
        "& dd.en": { display: lang === "en" ? "block" : "none" },
        ...sx,
      }}
    >
      {children}
    </List>
  );
}
