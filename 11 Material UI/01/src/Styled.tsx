import React from "react";
import { Box, styled, Typography } from "@mui/material";

const CustomizedTypography = styled(Typography)`
  color: #000055;
  :hover {
    color: #75125c;
    background: #afafaf;
  }
`;

const Styled = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box>
        <CustomizedTypography variant="h5">Hello World</CustomizedTypography>
      </Box>
    </React.Fragment>
  );
};

export default Styled;
