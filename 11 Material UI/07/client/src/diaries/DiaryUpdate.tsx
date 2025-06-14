import React from "react";
import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import { getPostDetails, postUpdate } from "../api-helpers/helpers";

const DiaryUpdate = (): JSX.Element => {
  const [post, setPost] = React.useState<PostI | null>(null);
  const [inputs, setInputs] = React.useState<PostI>({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
  });

  const { id } = useParams() as { id: string };
  console.log({ id });

  React.useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setPost(data.post);

        setInputs({
          title: data.post.title,
          description: data.post.description,
          imageUrl: data.post.image as string,
          location: data.post.location,
        });
      })
      .catch((err) => console.log({ err }));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prevState: PostI) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ inputs });
    postUpdate(inputs, id)
      .then((data) => console.log({ data }))
      .catch((err) => console.log({ err }));
  };

  return (
    <React.Fragment>
      <Box display="flex" flexDirection={"column"} width="100%" height="100%">
        <Box display="flex" margin="auto" padding={2}>
          <Typography fontWeight={"bold"} variant="h4" fontFamily={"dancing script"}>
            Add Your Travel Diary
          </Typography>
          <TravelExploreIcon sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }} />
        </Box>

        {post ? (
          <form onSubmit={handleSubmit}>
            <Box padding={3} display="flex" width="80%" margin="auto" flexDirection={"column"}>
              <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
              <TextField onChange={handleChange} name="title" value={inputs.title} variant="standard" margin="normal" />
              <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
              <TextField
                onChange={handleChange}
                name="description"
                value={inputs.description}
                variant="standard"
                margin="normal"
              />
              <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
              <TextField
                onChange={handleChange}
                name="imageUrl"
                value={inputs.imageUrl}
                variant="standard"
                margin="normal"
              />

              <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
              <TextField
                onChange={handleChange}
                name="location"
                value={inputs.location}
                variant="standard"
                margin="normal"
              />

              <Button
                type="submit"
                color="warning"
                sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
                variant="contained"
              >
                Post
              </Button>
            </Box>
          </form>
        ) : null}
      </Box>
    </React.Fragment>
  );
};

export default DiaryUpdate;
