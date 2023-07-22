import React from "react";

import "../App.scss";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </React.Fragment>
  );
}

export default App;
