import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import "./App.scss";
import Home from "./components/Home";
import Example from "./components/Example";
import AppLayout from "components/AppLayout";
// import Todos, { todosAction, todosDeleteAction, todosLoader } from "components/Todos";
// import TodoDetails, { todosDetailsLoader } from "components/TodoDetails";
import Todos from "components/Todos";
import TodoDetails from "components/TodoDetails";
import TodosPaginated from "components/TodosPaginated";
import TodosInfinite from "components/TodosInfinite";
import Counter from "components/Counter";

// import Todos from "components/Todos";
// import TodoDetails from "components/TodoDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: true },
  },
});
// console.log("queryClient:", queryClient);

//* V1
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/example",
//         element: <Example />,
//       },
//       {
//         path: "/todos",
//         element: <Todos />,
//         loader: todosLoader,
//         action: todosAction,
//         children: [
//           {
//             path: ":id/delete",
//             element: null,
//             action: todosDeleteAction,
//           },
//         ],
//       },
//       {
//         path: "/todos/:id",
//         element: <TodoDetails />,
//         loader: todosDetailsLoader,
//       },
//     ],
//   },
// ]);

//* V2
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
      },
      {
        path: "/todos-paginated",
        element: <TodosPaginated />,
      },
      {
        path: "/todos-infinite",
        element: <TodosInfinite />,
      },
      {
        path: "/todos/:id",
        element: <TodoDetails />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);

const App: React.FunctionComponent = (): JSX.Element => {
  // const [counter, setCounter] = React.useState<number>(0);
  // const [prevCounter, setPrevCounter] = React.useState<number>();

  return (
    <React.Fragment>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {/* <Router> */}

          {/* <br />
        <br />
        Counter: {counter}
        <br />
        PrevState: {prevCounter}
        <br />
        <div className="btn-group" role="group">
          <button
            className="btn btn-success"
            onClick={() =>
              setCounter((prev) => {
                setPrevCounter(prev);
                return prev + 1;
              })
            }
          >
            {" + "}
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              setCounter((prev) => {
                setPrevCounter(prev);
                return prev - 1;
              })
            }
          >
            {" - "}
          </button>
        </div> */}

          {/* <Routes>
          <Route element={<AppLayout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/example"} element={<Example />} />
            <Route path={"/todos"} element={<Todos />} />
            <Route path={"/todos/:id"} element={<TodoDetails />} />
          </Route>
        </Routes>
      </Router> */}
        </QueryClientProvider>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default App;
