import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

//* First test
// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <React.Fragment>
//       <App />
//     </React.Fragment>,
//     div
//   );
//   expect(div.innerHTML).toContain("Hi there!");
//   ReactDOM.unmountComponentAtNode(div);
// });

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    div
  );
  console.log(div.innerHTML);

  ReactDOM.unmountComponentAtNode(div);
});
