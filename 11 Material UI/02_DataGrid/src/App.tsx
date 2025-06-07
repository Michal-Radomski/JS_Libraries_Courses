import React from "react";
import { Route, Routes } from "react-router-dom";

import Data from "./Data";
import DataItem from "./DataItem";

import "./App.scss";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/:id" element={<DataItem />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
