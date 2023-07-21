import { ReactWrapper, mount } from "enzyme";

import CommentBox from "components/CommentBox";

//* Test 4
let wrapped: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
  // console.log("wrapped:", wrapped);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  // const wrapped = mount(<CommentBox />);
  // console.log(wrapped.find("textarea").length);
  // console.log(wrapped.find("button").length);
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

//* Test 5
it("has a text area than users can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

//* Test 6
it("after submit - input is empty", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  wrapped.update();
  //* unnecessary -> above the same
  // expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
