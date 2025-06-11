import React from "react";
import { Alert, Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

import { postDelete } from "../api-helpers/helpers";

interface DiaryItemProps {
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  id: string;
  user: string;
  name: string;
}

const DiaryItem: React.FC<DiaryItemProps> = ({ title, description, image, location, date, id, user, name }): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  const isLoggedInUser = (): boolean => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const handleDelete = (): void => {
    postDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log({ err }));
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Card
        sx={{
          width: "50%",
          height: "auto",
          margin: 1,
          padding: 1,
          display: "flex",
          flexDirection: "column",
          boxShadow: "5px 5px 10px #ccc",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {name.charAt(0)}
            </Avatar>
          }
          action={<IconButton aria-label="settings">{<EditLocationAltIcon />}</IconButton>}
          title={location}
          header={location}
          subheader={date}
        />

        <img height="194" src={image} alt={title} />
        <CardContent>
          <Typography paddingBottom={1} variant="h6" color="text.secondary">
            {title}
          </Typography>

          <hr />

          <Box paddingTop={1} display="flex">
            <Typography width="auto" sx={{ mr: 1 }} fontWeight={"bold"} variant="caption">
              {name}:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>

        {isLoggedInUser() ? (
          <CardActions sx={{ marginLeft: "auto" }}>
            <IconButton LinkComponent={Link} color="warning">
              <Link to={`/post/${id}`}>
                <ModeEditOutlineIcon />
              </Link>
            </IconButton>
            <IconButton onClick={handleDelete} color="error">
              <DeleteForeverIcon />
            </IconButton>
          </CardActions>
        ) : null}

        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </Card>
    </React.Fragment>
  );
};

export default DiaryItem;
