import React from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendAuthRequest } from "../api-helpers/helpers";
import { authActions } from "../store";
// console.log("authActions:", authActions);

const Auth = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isSignup, setIsSignup] = React.useState<boolean>(true);
  const [inputs, setInputs] = React.useState<UserI>({ name: "", email: "", password: "" });

  const onResReceived = (data: { user: { _id: string }; id: string }) => {
    if (isSignup) {
      localStorage.setItem("userId", data.user._id);
    } else {
      localStorage.setItem("userId", data.id);
    }
    dispatch(authActions.login());
    navigate("/diaries");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("inputs:", inputs);

    if (isSignup) {
      sendAuthRequest(true, inputs)
        .then(onResReceived)
        .catch((err) => console.log({ err }));
    } else {
      sendAuthRequest(false, inputs)
        .then(onResReceived)
        .catch((err) => console.log({ err }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prevState: UserI) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <React.Fragment>
      <Box width="40%" borderRadius={10} boxShadow={"5px 5px 10px #ccc"} margin="auto" marginTop={10}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection={"column"} width="60%" padding={5} margin="auto">
            <Typography padding={1} variant="h4" textAlign="center">
              {isSignup ? "Signup" : "Login"}
            </Typography>
            {isSignup && (
              <React.Fragment>
                <FormLabel>Name</FormLabel>
                <TextField onChange={handleChange} value={inputs.name} name="name" required margin="normal" />
              </React.Fragment>
            )}
            <FormLabel>Email</FormLabel>
            <TextField onChange={handleChange} value={inputs.email} name="email" type="email" required margin="normal" />
            <FormLabel>Password</FormLabel>
            <TextField
              onChange={handleChange}
              value={inputs.password}
              name="password"
              type="password"
              required
              margin="normal"
            />
            <Button sx={{ mt: 2, borderRadius: 10 }} type="submit" variant="contained">
              {isSignup ? "Signup" : "Login"}
            </Button>
            <Button onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} variant="outlined">
              Change to {isSignup ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default Auth;
