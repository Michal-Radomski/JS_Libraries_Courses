import React from "react";
import { Box, Typography, useMediaQuery, useTheme, type Theme } from "@mui/material";

function SimpleMediaQuery(): JSX.Element {
  const matches: boolean = useMediaQuery("(min-width:600px)");

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

function MyComponent(): JSX.Element {
  const theme: Theme = useTheme();
  const matches: boolean = useMediaQuery(theme.breakpoints.up("sm"));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}

const Responsiveness = (): JSX.Element => {
  return (
    <React.Fragment>
      <SimpleMediaQuery />
      <br />
      <MyComponent />

      <div>
        <Typography fontSize={{ sm: 10, md: 14, lg: 20 }} variant="h1">
          Responsive Style
        </Typography>

        <Box
          // width="100px"
          // height="100px"
          height={{ xs: "500px", md: "600px" }}
          width={{ xs: "300px", md: "600px" }}
          bgcolor="red"
        >
          Text
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Responsiveness;
