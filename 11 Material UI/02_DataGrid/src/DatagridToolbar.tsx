/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DatagridToolbar = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box display="flex" gap={4} m={1}>
        <GridToolbarExport />
        {/* @ts-expect-error */}
        <GridToolbarFilterButton onResize={undefined} placeholder={undefined} onResizeCapture={undefined} />
        <GridToolbarQuickFilter />
      </Box>
    </React.Fragment>
  );
};

export default DatagridToolbar;
