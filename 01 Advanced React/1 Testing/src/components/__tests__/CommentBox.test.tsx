import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

//* Test 4
it("has a text area and a button", () => {
  const wrapped = mount(<CommentBox />);
  // console.log(wrapped.find("textarea").length);
  // console.log(wrapped.find("button").length);
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
