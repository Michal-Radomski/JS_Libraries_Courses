import { Box, type BoxProps } from "@mui/material";
import React from "react";

interface Props extends React.PropsWithChildren {
  containerStyles: BoxProps;
}

const styles: { [key: string]: BoxProps } = {
  container: {
    border: "1px solid #ccc",
    color: "red",
  },
  container2: {
    color: "blue",
  },
};

const Wrapper = (props: Props) => {
  return <Box {...props.containerStyles}>{props.children}</Box>;
};

const MyComp = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box sx={styles.container}>MyComp</Box>
      <Box {...styles.container2}>MyComp</Box>

      <Wrapper containerStyles={{ border: "1px solid red", color: "blueviolet" }}>
        <Box>Wrapper</Box>
      </Wrapper>
    </React.Fragment>
  );
};

export default MyComp;
