import React from "react";

import "./App.scss";
import { FoodDeliveryForm } from "./FoodDeliveryForm";
import { TypicalForm } from "./TypicalForm";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="mx-5">
          <TypicalForm />
          <FoodDeliveryForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
