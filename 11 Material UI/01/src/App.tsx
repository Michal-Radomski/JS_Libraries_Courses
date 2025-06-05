import React from "react";

import "./App.scss";
import TypographyComp from "./TypographyComp";
import Buttons from "./Buttons";
import TextFields from "./TextFields";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <TypographyComp />
      <hr />
      <Buttons />
      <hr />
      <TextFields />
    </React.Fragment>
  );
};

export default App;
