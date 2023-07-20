import React from "react";

//* V1
// const CommentBox = (): JSX.Element => {
//   return (
//     <React.Fragment>
//       <div>Comment Box</div>
//     </React.Fragment>
//   );
// };

//* V2
class CommentBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <h4>Add a Comment</h4>
          <textarea />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CommentBox;
