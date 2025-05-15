import React from "react";
import { useQuery, useQueryClient, useMutation, QueryClient, type UseMutationResult } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import PostDetail from "./PostDetail";
const maxPostPage = 10;

const Posts = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);

  const queryClient: QueryClient = useQueryClient();

  const deleteMutation: UseMutationResult<ObjectI, Error, string, unknown> = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
  });

  const updateMutation: UseMutationResult<ObjectI, Error, string, unknown> = useMutation({
    mutationFn: (postId: string) => updatePost(postId),
  });

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
    staleTime: 2000, // 2 seconds
  });

  React.useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["posts", nextPage],
        queryFn: () => fetchPosts(nextPage),
      });
    }
  }, [currentPage, queryClient]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return (
      <React.Fragment>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ul>
        {data?.map((post: Post) => (
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
