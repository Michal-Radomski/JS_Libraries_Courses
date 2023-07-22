import React from "react";
import { Route } from "react-router-dom";

import "../App.scss";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact={true} component={CommentList} />
      </div>
    </React.Fragment>
  );
}

export default App;
