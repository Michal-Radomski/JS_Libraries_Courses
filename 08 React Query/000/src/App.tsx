import React from "react";

import "./App.scss";
import TaskList from "./TaskList";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h1>React Query Example</h1>
        <TaskList />
      </div>
    </React.Fragment>
  );
};

export default App;
