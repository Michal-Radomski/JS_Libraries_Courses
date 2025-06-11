import React from "react";
import { Box } from "@mui/system";

import { getAllPosts } from "../api-helpers/helpers";
import DiaryItem from "./DiaryItem";

const Diaries = (): JSX.Element => {
  const [posts, setPosts] = React.useState<PostI[] | null>(null);

  React.useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.posts as PostI[]))
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <Box display="flex" flexDirection={"column"} padding={3} justifyContent="center" alignItems={"center"}>
      {posts &&
        posts.map((item: PostI, index: number) => (
          <DiaryItem
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image as string}
            id={item._id as string}
            location={item.location}
            title={item.title}
            key={index}
            user={item.user?._id as string}
            name={item.user?.name as string}
          />
        ))}
    </Box>
  );
};

export default Diaries;
