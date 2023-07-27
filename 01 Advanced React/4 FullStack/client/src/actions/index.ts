import axios from "axios";

import { AUTH_ERROR, AUTH_USER } from "./types";

export const signup = (formProps: { email: string; password: string }) => async (dispatch: Dispatch) => {
  // console.log("dispatch:", dispatch);
  try {
    const response = await axios.post("http://localhost:5000/api/signup", formProps);
    // console.log({response});
    const token = response?.data?.token;
    // console.log({ token });
    await dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem("token", token);
  } catch (error) {
    console.log({ error });
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  } finally {
    console.log("Job done!");
  }
};
