import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { LoginOutlined, HowToRegOutlined } from "@mui/icons-material";

const Auth = (): JSX.Element => {
  const initialState = { name: "", email: "", password: "" };

  const [isSignup, setIsSignup] = React.useState<boolean>(false);
  const [inputs, setInputs] = React.useState<{ [key: string]: string }>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("inputs:", inputs);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          alignContent={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={"2rem"}
          padding="2rem"
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h3" padding={3} textAlign={"center"}>
            {!isSignup ? "Login" : "Signup"}
          </Typography>
          {isSignup ? (
            <TextField
              type="text"
              variant="outlined"
              placeholder="Name"
              margin="normal"
              name="name"
              value={inputs?.name}
              onChange={handleChange}
            />
          ) : null}
          <TextField
            type="email"
            variant="outlined"
            placeholder="Email"
            margin="normal"
            name="email"
            value={inputs?.email}
            onChange={handleChange}
          />
          <TextField
            type="password"
            variant="outlined"
            placeholder="Password"
            margin="normal"
            name="password"
            value={inputs?.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3 }}
            type="submit"
            endIcon={isSignup ? <HowToRegOutlined /> : <LoginOutlined />}
          >
            {!isSignup ? "Login" : "Signup"}
          </Button>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            onClick={() => {
              setIsSignup(!isSignup);
              setInputs(initialState);
            }}
            endIcon={!isSignup ? <HowToRegOutlined /> : <LoginOutlined />}
          >
            {isSignup ? "Change To Login" : "Change To Signup"}
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default Auth;
