import { ReactWrapper, mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

//* Test 10

let wrapped: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {});
