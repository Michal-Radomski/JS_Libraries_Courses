import React from "react";
import { Box, Typography, useTheme, type Theme } from "@mui/material";

const ThemeComponent = (): JSX.Element => {
  const theme: Theme = useTheme();
  console.log("theme:", theme);

  return (
    <React.Fragment>
      <Box>
        <Typography variant="h1" color="primary">
          Hello World
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default ThemeComponent;
