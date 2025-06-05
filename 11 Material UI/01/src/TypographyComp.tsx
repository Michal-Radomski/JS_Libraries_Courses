import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./App.scss";

//* Typography
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  padding: theme.spacing(1),
}));

const TypographyComp = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <Box sx={{ typography: "body2", textAlign: "left", fontWeight: "bold" }}>Box</Box>
        <Typography variant="h5" sx={{ color: "red" }}>
          Hello World
        </Typography>
        <Div>{"This div's text looks like that of a button."}</Div>;
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default TypographyComp;
