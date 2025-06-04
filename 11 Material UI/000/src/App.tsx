import React from "react";

import "./App.scss";
import MaterialUIComponent from "./MaterialUIComponent";
import JoyUIComponent from "./JoyUIComponent";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <MaterialUIComponent />
      <br />
      <JoyUIComponent />
    </React.Fragment>
  );
};

export default App;
