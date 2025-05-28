import React from "react";

import "./App.scss";
import { FoodDeliveryForm } from "./FoodDeliveryForm";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="mx-5">
          <FoodDeliveryForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
