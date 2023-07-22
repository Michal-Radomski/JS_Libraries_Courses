import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import App from "components/App";

//* Tests 11
it("can fetch a list of comments and display them", () => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <React.Fragment>
      <Root>
        <App />
      </Root>
    </React.Fragment>
  );
  // Find the "fetchComments" button and click it
  // Expect to find a list of comments!
});
