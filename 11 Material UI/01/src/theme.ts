import { createTheme, type Theme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    h1: {
      fontSize: "20px",
    },
  },
  breakpoints: {
    values: {
      xs: 200,
      sm: 0,
      md: 0,
      lg: 0,
      xl: 0,
    },
  },
});
