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
      xs: 100, //* default: 0
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
