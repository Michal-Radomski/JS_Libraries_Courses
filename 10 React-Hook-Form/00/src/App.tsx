import React from "react";

import "./App.scss";
import ReactHookFormComponent from "./ReactHookFormComponent";
import FormikComponent from "./FormikComponent";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <ReactHookFormComponent />
      <br />
      <FormikComponent />
    </React.Fragment>
  );
};

export default App;
