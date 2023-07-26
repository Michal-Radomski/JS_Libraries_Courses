import axios from "axios";

import { AUTH_USER } from "./types";

export const signup = (formProps: { email: string; password: string }) => async (dispatch: Dispatch) => {
  console.log("dispatch:", dispatch);

  const res = await axios.post("http://localhost:5000/api/signup", formProps);
  console.log(res);
};
