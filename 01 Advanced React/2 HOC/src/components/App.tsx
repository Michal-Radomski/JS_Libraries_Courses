import React from "react";
import { Link, Route } from "react-router-dom";

import "../App.scss";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends React.Component {
  renderButton(): JSX.Element {
    return <button></button>;
  }

  renderHeader(): JSX.Element {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.renderHeader()}
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact={true} component={CommentList} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
