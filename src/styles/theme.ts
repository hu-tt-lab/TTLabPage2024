import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-serif-jp";
import { red } from "@mui/material/colors";

const bodyFontFamily = ["Times New Roman", "Noto Serif JP", "serif"].join(",");
const headingFontFamily = ["Times New Roman", "Noto Serif JP", "serif"].join(
  ","
);

const _theme = createTheme({
  palette: {
    primary: red,
  },
  typography: {
    fontFamily: bodyFontFamily,
    fontSize: 16,
    h1: {
      fontFamily: headingFontFamily,
      fontSize: 32,
    },
    h2: {
      fontFamily: headingFontFamily,
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 16,
    },
    h3: {
      fontFamily: headingFontFamily,
      fontSize: 32,
      marginBottom: 12,
      marginTop: 16,
    },
    h4: {
      fontFamily: headingFontFamily,
      fontSize: 28,
      marginBottom: 8,
      marginTop: 12,
    },
    h5: {
      fontFamily: headingFontFamily,
      fontSize: 24,
    },
    h6: {
      fontFamily: headingFontFamily,
      fontSize: 20,
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
