import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-serif-jp";
import { red } from "@mui/material/colors";

const _theme = createTheme({
  palette: {
    primary: red,
  },
  typography: {
    fontFamily: ["Noto Serif JP", "sans-serif"].join(","),
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export const theme = responsiveFontSizes(_theme);
