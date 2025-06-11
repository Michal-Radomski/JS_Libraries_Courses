import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserDetails } from "../api-helpers/helpers";
import { authActions } from "../store";
import DiaryItem from "../diaries/DiaryItem";

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = React.useState<UserI | null>(null);

  React.useEffect(() => {
    getUserDetails()
      .then((data) => setUser(data.user))
      .catch((err) => console.log({ err }));
  }, []);

  const handleClick = (): void => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <React.Fragment>
      <Box display="flex" flexDirection={"column"}>
        {user && (
          <React.Fragment>
            <Typography textAlign={"center"} variant="h3" fontFamily={"quicksand"} padding={2}>
              User Profile
            </Typography>
            <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
              Name: {user.name}
            </Typography>
            <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
              Email: {user.email}
            </Typography>
            <Button onClick={handleClick} sx={{ mr: "auto", width: "15%" }} color="warning" variant="contained">
              Logout
            </Button>
            <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems={"center"}>
              {user.posts?.map((post, index) => (
                <DiaryItem
                  key={index}
                  title={post.title}
                  date={post.date as string}
                  description={post.description}
                  id={post.id as string}
                  image={post.image as string}
                  location={post.location}
                  user={user._id as string}
                  name={user.name}
                />
              ))}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Profile;
