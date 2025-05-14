import React from "react";

// import { fetchComments } from "./api";

const PostDetail = ({ post }: { post: Post }): React.JSX.Element => {
  // replace with useQuery
  const data = [] as Comment[];

  return (
    <React.Fragment>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment: Comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </React.Fragment>
  );
};

export default PostDetail;
