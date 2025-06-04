import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./App.scss";

//* Typography
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  padding: theme.spacing(1),
}));

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <Typography variant="h5" sx={{ color: "red" }}>
          Hello World
        </Typography>
        <Div>{"This div's text looks like that of a button."}</Div>;
      </div>

      <div>
        <Button onClick={() => alert("Button Clicked")} color="success" sx={{ margin: 3 }} size="large" variant="contained">
          First
        </Button>
        <Button onClick={() => alert("Button Clicked")} color="error" sx={{ margin: 3 }} size="medium" variant="outlined">
          Second
        </Button>
        <Button onClick={() => alert("Button Clicked")} color="info" sx={{ margin: 3 }} size="small" variant="text">
          Third
        </Button>
      </div>
    </React.Fragment>
  );
};

export default App;
