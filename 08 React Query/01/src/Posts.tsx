import React from "react";

// import { fetchPosts, deletePost, updatePost } from "./api";
import PostDetail from "./PostDetail";
// const maxPostPage = 10;

const Posts = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);

  // replace with useQuery
  const data = [] as Post[];

  return (
    <React.Fragment>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </React.Fragment>
  );
};

export default Posts;
