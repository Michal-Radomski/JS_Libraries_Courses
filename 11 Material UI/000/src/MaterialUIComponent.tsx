import React from "react";
import { Box, Button } from "@mui/material";
import { css } from "@emotion/css";
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";

const MaterialUIComponent = (): React.JSX.Element => {
  const color = "white";

  return (
    <React.Fragment>
      <h2>Material Icons</h2>
      <Icon>add_circle</Icon>
      <Icon color="primary">add_circle</Icon>
      <Icon sx={{ color: green[500] }}>add_circle</Icon>
      <Icon fontSize="small">add_circle</Icon>
      <Icon sx={{ fontSize: 30 }}>add_circle</Icon>

      <br />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
        <h2>Material UI</h2>
        <Button variant="contained" color="primary">
          <Icon>star</Icon> Click Me
        </Button>
      </Box>

      <br />

      <h2>Emotion</h2>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
    </React.Fragment>
  );
};

export default MaterialUIComponent;
