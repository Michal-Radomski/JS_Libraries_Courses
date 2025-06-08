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
import ReactHookFormValidation from "./ReactHookFormValidation";
import DataGridComponent from "./DataGridComponent";
import ThemeComponent from "./ThemeComponent";
import Styled from "./Styled";
import DarkLightMode from "./DarkLightMode";
import MaterialIcons from "./MaterialIcons";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppBarComponent />
      <br />

      <MaterialIcons />
      <br />
      <DarkLightMode />
      <br />
      <Styled />
      <br />
      <ThemeComponent />
      <br />
      <DataGridComponent />
      <br />
      <ReactHookFormValidation />
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
