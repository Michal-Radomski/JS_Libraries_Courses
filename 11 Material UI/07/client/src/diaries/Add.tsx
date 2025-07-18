import React from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useNavigate } from "react-router-dom";

import { addPost } from "../api-helpers/helpers";

const Add = (): JSX.Element => {
  const navigate = useNavigate();

  const [inputs, setInputs] = React.useState<PostI>({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prevState: PostI) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onResReceived = (data: ObjectI): void => {
    console.log({ data });
    navigate("/diaries");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ inputs });
    addPost(inputs)
      .then(onResReceived)
      .catch((err) => console.log({ err }));
  };

  return (
    <React.Fragment>
      <Box display="flex" flexDirection={"column"} width="100%" height="100%">
        <Box display="flex" margin="auto" padding={2}>
          <Typography fontWeight={"bold"} variant="h4" fontFamily={"dancing script"}>
            Add Your Travel Diary
          </Typography>
          <TravelExploreIcon sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral" }} />
        </Box>
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
            <TextField onChange={handleChange} name="imageUrl" value={inputs.imageUrl} variant="standard" margin="normal" />

            <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
            <TextField onChange={handleChange} name="location" value={inputs.location} variant="standard" margin="normal" />
            <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
            <TextField
              type="date"
              onChange={handleChange}
              name="date"
              value={inputs.date}
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
      </Box>
    </React.Fragment>
  );
};

export default Add;
