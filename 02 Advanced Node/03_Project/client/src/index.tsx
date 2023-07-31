import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducers/index";
import App from "./components/App";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
