import React from "react";

import "./App.scss";

const App = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);
  return (
    <React.Fragment>
      Counter: {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}> + </button>
      <button onClick={() => setCounter((prev) => prev - 1)}> - </button>
    </React.Fragment>
  );
};

export default App;
