import React from "react";

import "./App.scss";
import MaterialUIComponent from "./MaterialUIComponent";
import JoyUIComponent from "./JoyUIComponent";
import MUIBaseComponent from "./MUIBaseComponent";
import ComponentMDB from "./ComponentMDB";
import ReactStrapComponent from "./ReactStrapComponent";

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
      <br />
      <ReactStrapComponent />
    </React.Fragment>
  );
};

export default App;
