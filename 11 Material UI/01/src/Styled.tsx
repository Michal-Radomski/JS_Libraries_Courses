import React from "react";
import { AppBar, Box, styled, Typography } from "@mui/material";
import styledEmotion from "@emotion/styled";

const CustomizedTypography = styled(Typography)`
  color: #000055;
  :hover {
    color: #75125c;
    background: #afafaf;
  }
`;

const SomeComp = styledEmotion.div({
  color: "hotpink",
});

const AnotherComp = styledEmotion.div`
  color: ${(props) => props.color};
`;

const NavBar = styled(AppBar)(({ theme }) => ({
  marginTop: "50px",
  background: "green",
  padding: 1, // 1px
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    background: "red", //* Doesn't work?
    flexDirection: "column",
  },
}));

const Styled = (): JSX.Element => {
  return (
    <React.Fragment>
      <NavBar sx={{ padding: 1 }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </NavBar>

      <Box>
        <CustomizedTypography variant="h5">Hello World</CustomizedTypography>
      </Box>

      <SomeComp>
        Some Component
        <AnotherComp color="orangered">Another Component</AnotherComp>
      </SomeComp>
    </React.Fragment>
  );
};

export default Styled;
