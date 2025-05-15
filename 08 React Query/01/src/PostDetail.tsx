import React from "react";
import { useQuery, type UseMutationResult } from "@tanstack/react-query";

import { fetchComments } from "./api";

const PostDetail = ({
  post,
  deleteMutation,
  updateMutation,
}: {
  post: Post;
  deleteMutation: UseMutationResult<ObjectI, Error, number, unknown>;
  updateMutation: UseMutationResult<ObjectI, Error, number, unknown>;
}): React.JSX.Element => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", post.id], //* Dependency Array
    queryFn: () => fetchComments(post.id),
  });

  if (isLoading) {
    return <h3>Loading!</h3>;
  }

  if (isError) {
    return (
      <React.Fragment>
        <h3>Error</h3>
        <p>{error.toString()}</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <div>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending ? <p className="loading">Deleting the post</p> : null}
        {deleteMutation.isError ? <p className="error">Error deleting the post: {deleteMutation.error.toString()}</p> : null}
        {deleteMutation.isSuccess ? <p className="success">Post was (not) deleted</p> : null}
      </div>
      <div>
        <button onClick={() => updateMutation.mutate(post.id)}>Update Title</button>
        {updateMutation.isPending ? <p className="loading">Updating the post</p> : null}
        {updateMutation.isError ? <p className="error">Error updating the post: {updateMutation.error.toString()}</p> : null}
        {updateMutation.isSuccess ? <p className="success">Title was (not) updated</p> : null}
      </div>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data?.map((comment: Comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </React.Fragment>
  );
};

export default PostDetail;
