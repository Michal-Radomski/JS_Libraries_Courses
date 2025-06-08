import React from "react";
import { Button, CssBaseline, Switch, ThemeProvider, Typography, createTheme, type Theme } from "@mui/material";

import { darkPalette, lightPalette } from "./lib/palette";

const DarkLightMode = (): JSX.Element => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const theme: Theme = createTheme(darkMode ? darkPalette : lightPalette);
  // console.log("theme:", theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
        <Typography>Hello With {darkMode ? "Dark Mode" : "Light Mode"}</Typography>
        <Button variant="contained">Hello</Button>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default DarkLightMode;
