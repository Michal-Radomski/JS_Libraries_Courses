import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";

import rootReducer from "./reducers";

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App>
        <React.Fragment>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/signup" exact={true} component={SignUp as any} />
        </React.Fragment>
      </App>
    </Router>
  </Provider>
  // </React.StrictMode>
);
