import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <React.Fragment>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/signup" exact={true} component={SignUp} />
        </React.Fragment>
      </App>
    </Router>
  </React.StrictMode>
);
