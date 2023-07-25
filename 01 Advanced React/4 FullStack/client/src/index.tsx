import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import Welcome from "./components/Welcome";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Route path="/" exact={true} component={Welcome} />
      </App>
    </Router>
  </React.StrictMode>
);
