import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Auth = (): JSX.Element => {
  const [isSignup, setIsSignup] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <form>
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
          {isSignup ? <TextField type="text" variant="outlined" placeholder="Name" margin="normal" /> : null}
          <TextField type="email" variant="outlined" placeholder="Email" margin="normal" />
          <TextField type="password" variant="outlined" placeholder="Password" margin="normal" />
          <Button variant="contained" color="warning" sx={{ marginTop: 3, borderRadius: 3 }}>
            {!isSignup ? "Login" : "Signup"}
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 3 }} onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Change To Login" : "Change To Signup"}
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default Auth;
