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
import GridSystem from "./GridSystem";
import Responsiveness from "./Responsiveness";
import OtherComponents from "./OtherComponents";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppBarComponent />
      <br />
      <OtherComponents />
      <br />
      <Responsiveness />
      <br />
      <GridSystem />
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
      <br />
      <TextFields />
      <br />
      <Buttons />
      <br />
      <TypographyComponent />
    </React.Fragment>
  );
};

export default App;
