import * as React from "react";
import { Button } from "@mui/base/Button";
import { styled, ThemeProvider } from "@mui/system";

const theme = {
  palette: {
    primary: "green",
    text: "#fff",
  },
};

// Create a styled version of the MUI Base Button
const CustomButton = styled(Button)(
  ({ theme }) => `
  background-color: ${theme.palette.primary};
  color: ${theme.palette.text};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: darkgreen;
  }
`
);

export default function MUIBaseComponent(): React.JSX.Element {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <h2>MUI Base Example</h2>
        <CustomButton>Styled Button</CustomButton>
      </ThemeProvider>
      <Button>Base Button</Button>
    </React.Fragment>
  );
}
