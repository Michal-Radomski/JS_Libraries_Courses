import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";

import "../App.scss";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends React.Component<{ auth: boolean }, {}> {
  renderButton(): JSX.Element {
    if (this.props.auth) {
      return <button>Sign Out</button>;
    } else {
      return <button>Sign In</button>;
    }
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

const mapStateToProps = (state: RootState) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(App);
