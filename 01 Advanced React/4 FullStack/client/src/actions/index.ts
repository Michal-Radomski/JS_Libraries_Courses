import axios from "axios";

import { AUTH_USER } from "./types";

export const signup = (formProps: { email: string; password: string }) => async (dispatch: Dispatch) => {
  // console.log("dispatch:", dispatch);
  try {
    const response = await axios.post("http://localhost:5000/api/signup", formProps);
    // console.log({response});
    await dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.log({ error });
    // dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};
