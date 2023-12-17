import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import Example from "./components/Example";
import AppLayout from "components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/example",
        element: <Example />,
      },
    ],
  },
]);

const App: React.FunctionComponent = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <br />
      <br />
      <br />
      Counter: {counter}
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}> + </button>
      <button onClick={() => setCounter((prev) => prev - 1)}> - </button>
    </React.Fragment>
  );
};

export default App;
