import React from "react";

import "./App.scss";
import TypographyComp from "./TypographyComp";
import Buttons from "./Buttons";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <TypographyComp />
      <hr />
      <Buttons />
    </React.Fragment>
  );
};

export default App;
