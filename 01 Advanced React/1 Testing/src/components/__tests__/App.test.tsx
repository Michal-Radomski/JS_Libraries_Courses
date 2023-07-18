// import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

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

//* Test 2
// it("shows a comment box", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <React.Fragment>
//       <App />
//     </React.Fragment>,
//     div
//   );
//   console.log(div.innerHTML);
//   expect(div.innerHTML).toContain("Comment Box");
//   expect(div.innerHTML).toContain("Comment List");
//   expect(div.innerHTML).toBeTruthy();
//   ReactDOM.unmountComponentAtNode(div);
// });

//* Test 3
it("shows a comment box", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
