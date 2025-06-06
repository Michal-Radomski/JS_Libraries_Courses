import React from "react";

import "./App.scss";
import TypographyComponent from "./TypographyComponent";
import Buttons from "./Buttons";
import TextFields from "./TextFields";
import FormComponent from "./FormComponent";
import AppBarComponent from "./AppBarComponent";
import TabsComponent from "./TabsComponent";
import MenuComponent from "./MenuComponent";
import AdvancedComponents from "./AdvancedComponents";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppBarComponent />
      <br />

      <AdvancedComponents />
      <br />
      <MenuComponent />
      <br />
      <TabsComponent />
      <br />
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
