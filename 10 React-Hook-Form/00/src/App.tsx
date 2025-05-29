import React from "react";

import "./App.scss";
import ReactHookFormComponent from "./ReactHookFormComponent";
import FormikComponent from "./FormikComponent";
import ReactFinalFormComponent from "./ReactFinalFormComponent";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <ReactFinalFormComponent />
      <br />
      <ReactHookFormComponent />
      <br />
      <FormikComponent />
    </React.Fragment>
  );
};

export default App;
