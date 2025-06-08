import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div style={{ border: "1px solid red" }}>{children}</div>
);

const GridSystem = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ background: "yellow", border: "1px solid blue" }}>
            <Item>1</Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ background: "yellow", border: "1px solid blue" }}>
            <Item>2</Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ background: "yellow", border: "1px solid blue" }}>
            <Item>3</Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ background: "yellow", border: "1px solid blue" }}>
            <Item>4</Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ background: "yellow", border: "1px solid blue" }}>
            <Item>5</Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ background: "yellow", border: "1px solid blue" }}>
            <Item>6</Item>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default GridSystem;
