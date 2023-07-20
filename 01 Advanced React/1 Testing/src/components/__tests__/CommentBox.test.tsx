import { ReactWrapper, mount } from "enzyme";

import CommentBox from "components/CommentBox";

//* Test 4
let wrapped: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
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
