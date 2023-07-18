import React from "react";

import "../App.scss";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

function App(): JSX.Element {
  return (
    <React.Fragment>
      {/* <div>Hi there!</div> */}
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </React.Fragment>
  );
}

export default App;
