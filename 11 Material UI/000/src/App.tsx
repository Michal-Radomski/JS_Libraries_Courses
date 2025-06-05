import React from "react";

import "./App.scss";
import MaterialUIComponent from "./MaterialUIComponent";
import JoyUIComponent from "./JoyUIComponent";
import MUIBaseComponent from "./MUIBaseComponent";
import ComponentMDB from "./ComponentMDB";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <MaterialUIComponent />
      <br />
      <JoyUIComponent />
      <br />
      <MUIBaseComponent />
      <br />
      <ComponentMDB />
    </React.Fragment>
  );
};

export default App;
