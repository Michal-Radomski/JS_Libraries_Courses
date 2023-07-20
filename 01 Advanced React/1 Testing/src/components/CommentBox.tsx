import React from "react";

//* V1
// const CommentBox = (): JSX.Element => {
//   const [state, setState] = React.useState<{ comment: string }>({ comment: "" });

//   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setState({ comment: event.target.value });
//   };

//   return (
//     <React.Fragment>
//       <form>
//         <h4>Add a Comment</h4>
//         <textarea value={state.comment} onChange={handleChange} />
//         <div>
//           <button>Submit Comment</button>
//         </div>
//       </form>
//     </React.Fragment>
//   );
// };

//* V2
class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CommentBox;
