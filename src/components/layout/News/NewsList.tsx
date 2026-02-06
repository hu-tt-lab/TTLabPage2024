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
        paddingRight: 1,
        paddingLeft: 2,
        // border: `1px solid ${theme.palette.primary.main}`,
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        overflowY: "auto",
        maxHeight: 500,
        "& dt": { color: theme.palette.primary.main, fontWeight: "bold" },
        "& dd": {
          borderBottom: `1px solid ${theme.palette.primary.main}99`,
          marginLeft: 0,
          paddingLeft: 0,
          paddingTop: 0.5,
          paddingBottom: 1.5,
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
