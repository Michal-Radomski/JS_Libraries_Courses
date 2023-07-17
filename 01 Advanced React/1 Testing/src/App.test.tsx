import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    div
  );
  expect(div.innerHTML).toContain("Hi there!");
  ReactDOM.unmountComponentAtNode(div);
});
