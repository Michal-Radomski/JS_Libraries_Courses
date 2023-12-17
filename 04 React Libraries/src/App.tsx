import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import Example from "./components/Example";
import AppLayout from "components/AppLayout";
import Todos, { todosAction, todosDeleteAction, todosLoader } from "components/Todos";
import TodoDetails, { todosDetailsLoader } from "components/TodoDetails";

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
      {
        path: "/todos",
        element: <Todos />,
        loader: todosLoader,
        action: todosAction,
        children: [
          {
            path: ":id/delete",
            element: null,
            action: todosDeleteAction,
          },
        ],
      },
      {
        path: "/todos/:id",
        element: <TodoDetails />,
        loader: todosDetailsLoader,
      },
    ],
  },
]);

const App: React.FunctionComponent = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);
  const [prevCounter, setPrevCounter] = React.useState<number>();

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <br />
      <br />
      Counter: {counter}
      <br />
      PrevState: {prevCounter}
      <br />
      <button
        onClick={() =>
          setCounter((prev) => {
            setPrevCounter(prev);
            return prev + 1;
          })
        }
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() =>
          setCounter((prev) => {
            setPrevCounter(prev);
            return prev - 1;
          })
        }
      >
        {" "}
        -{" "}
      </button>
    </React.Fragment>
  );
};

export default App;
