import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-serif-jp";
import { red, grey } from "@mui/material/colors";

const bodyFontFamily = ["Noto Serif JP", "sans-serif"].join(",");
const headingFontFamily = ["Noto Serif JP", "serif"].join(",");

const _theme = createTheme({
  palette: {
    primary: red,
  },
  typography: {
    fontFamily: bodyFontFamily,
    h1: {
      fontFamily: headingFontFamily,
    },
    h2: {
      fontFamily: headingFontFamily,
    },
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
