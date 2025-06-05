import React from "react";

import "./App.scss";
import TypographyComponent from "./TypographyComponent";
import Buttons from "./Buttons";
import TextFields from "./TextFields";
import FormComponent from "./FormComponent";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <FormComponent />
      <hr />
      <TextFields />
      <hr />
      <Buttons />
      <hr />
      <TypographyComponent />
    </React.Fragment>
  );
};

export default App;
