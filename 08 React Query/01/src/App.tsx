import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.scss";
import Posts from "./Posts";

const queryClient: QueryClient = new QueryClient();

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Blog Posts</h1>
          <Posts />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
