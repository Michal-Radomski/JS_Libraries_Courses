import React from "react";
import { Button, styled, type ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Buttons = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <Button
          onClick={() => alert("Button Clicked")}
          color="success"
          sx={{ margin: 3, borderRadius: 2 }}
          size="large"
          variant="contained"
        >
          First
        </Button>
        <Button onClick={() => alert("Button Clicked")} color="error" sx={{ margin: 3 }} size="medium" variant="outlined">
          Second
        </Button>
        <Button onClick={() => alert("Button Clicked")} color="info" sx={{ margin: 3 }} size="small" variant="text">
          Third
        </Button>

        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>

        <ColorButton variant="contained">Custom CSS</ColorButton>
        <BootstrapButton variant="contained" disableRipple>
          Bootstrap
        </BootstrapButton>
      </div>
    </React.Fragment>
  );
};

export default Buttons;
