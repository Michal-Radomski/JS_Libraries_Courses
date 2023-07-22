import React from "react";
import { connect } from "react-redux";

import * as actions from "actions/index";

class CommentBox extends React.Component<
  { auth: boolean; saveComment: (arg0: string) => void; fetchComments: () => { type: string; payload: Promise<any> } },
  {}
> {
  state = { comment: "" };

  //* Component just got rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  //* Component just got updated (got new props)
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      console.log("I need to leave");
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <h4>Add a Comment</h4>
            <textarea value={this.state.comment} onChange={this.handleChange} />
            <div>
              <button>Submit Comment</button>
            </div>
          </form>
          <button onClick={this.props.fetchComments} className="fetch-comments">
            Fetch Comments
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(CommentBox);
