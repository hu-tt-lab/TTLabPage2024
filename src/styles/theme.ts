import { createTheme, responsiveFontSizes } from "@mui/material";
import { teal, grey, indigo } from "@mui/material/colors";

const bodyFontFamily = ["Inter", "Noto Sans JP", "sans-serif"].join(", ");
const headingFontFamily = ["Inter", "Noto Sans JP", "sans-serif"].join(", ");

const primary = teal;
const secondary = indigo;

const _theme = createTheme({
  palette: {
    primary,
    secondary,
    text: {
      primary: grey[900],
    },
  },
  typography: {
    fontFamily: bodyFontFamily,
    fontSize: 16,
    h1: {
      fontFamily: headingFontFamily,
      fontSize: 32,
      fontWeight: "bold",
      color: primary[600],
    },
    h2: {
      fontFamily: headingFontFamily,
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 16,
      marginTop: 20,
    },
    h3: {
      fontFamily: headingFontFamily,
      fontSize: 32,
      marginBottom: 12,
      marginTop: 18,
      color: primary[800],
      fontWeight: "bold",
    },
    h4: {
      fontFamily: headingFontFamily,
      fontSize: 24,
      marginBottom: 8,
      marginTop: 12,
    },
    h5: {
      fontFamily: headingFontFamily,
      fontSize: 22,
    },
    h6: {
      fontFamily: headingFontFamily,
      fontSize: 20,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f8f8f8",
        },
      },
    },
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
