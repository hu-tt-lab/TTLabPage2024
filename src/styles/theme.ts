import { createTheme, responsiveFontSizes } from "@mui/material";
import { red } from "@mui/material/colors";

const _theme = createTheme({
  palette: {
    primary: red,
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
