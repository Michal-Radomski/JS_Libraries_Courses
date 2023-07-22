import { ReactWrapper, mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

//* Test 10
let wrapped: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
  // console.log(wrapped.find("li").length);
  expect(wrapped.find("li").length).toEqual(2);
});
