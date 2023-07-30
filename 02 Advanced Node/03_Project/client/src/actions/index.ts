import axios from "axios";

import { FETCH_USER, FETCH_BLOGS, FETCH_BLOG } from "./types";

export const fetchUser = () => async (dispatch: Dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token: string) => async (dispatch: Dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBlog = (values: { label: string; name: string }, history: string[]) => async (dispatch: Dispatch) => {
  const res = await axios.post("/api/blogs", values);

  history.push("/blogs");
  dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const fetchBlogs = () => async (dispatch: Dispatch) => {
  const res = await axios.get("/api/blogs");

  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const fetchBlog = (id: string) => async (dispatch: Dispatch) => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};
