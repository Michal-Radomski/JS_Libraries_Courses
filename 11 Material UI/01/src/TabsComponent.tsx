import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

const TabsComponent = (): JSX.Element => {
  const [value, setValue] = React.useState<string>("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    console.log("event:", event);
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
    </React.Fragment>
  );
};

export default TabsComponent;
