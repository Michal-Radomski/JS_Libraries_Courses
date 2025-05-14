import React from "react";

import "./App.scss";
import Posts from "./Posts";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
    </React.Fragment>
  );
};

export default App;
