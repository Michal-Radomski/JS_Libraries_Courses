import React from "react";

import { useAddPostMutation, useGetPostsQuery, type Post } from "./apiSlice";

const RTK_QueryComponent: React.FC = (): React.JSX.Element => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();

  const [title, setTitle] = React.useState<string>("");

  const handleAddPost = async (): Promise<void> => {
    if (title) {
      await addPost({ title, body: "Sample body", userId: 1 });
      setTitle("");
    }
  };

  return (
    <React.Fragment>
      <div>
        <h1>Posts</h1>
        {isLoading ? <p>Loading...</p> : null}
        {error ? <p>Error loading posts</p> : null}

        <ul>
          {posts?.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>

        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          placeholder="New post title"
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
    </React.Fragment>
  );
};

export default RTK_QueryComponent;
