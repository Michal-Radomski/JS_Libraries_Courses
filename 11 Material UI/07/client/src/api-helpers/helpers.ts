/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getAllPosts = async (): Promise<{ posts: PostI[] }> => {
  try {
    const res = await axios.get("/posts");

    if (res.status !== 200) {
      console.log("Some Error Occurred");
      return null as any;
    }

    const data = res.data as { posts: PostI[] };
    return data;
  } catch (error) {
    console.log("error:", error);
    return null as any;
  }
};

export const sendAuthRequest = async (signup: boolean, data: UserI): Promise<any> => {
  try {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}/`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    });

    if (res.status !== 200 && res.status !== 201) {
      return console.log("Unable to Authenticate");
    }
    const resData = await res.data;
    return resData;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

export const addPost = async (data: PostI): Promise<any> => {
  try {
    const res = await axios.post("/posts/", {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
      date: data.date,
      user: localStorage.getItem("userId"),
    });

    if (res.status !== 201) {
      return console.log("Error Occurred");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

export const getPostDetails = async (id: string): Promise<{ post: PostI }> => {
  try {
    const res = await axios.get(`/posts/${id}`);
    if (res.status !== 200) {
      console.log("Unable to fetch diary");
      return null as any;
    }

    const resData = (await res.data) as { post: PostI };
    return resData;
  } catch (error) {
    console.log("error:", error);
    return null as any;
  }
};

export const postUpdate = async (data: PostI, id: string): Promise<any> => {
  try {
    const res = await axios.put(`/posts/${id}`, {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
    });

    if (res.status !== 200) {
      return console.log("Unable to update");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

export const postDelete = async (id: string): Promise<any> => {
  try {
    const res = await axios.delete(`/posts/${id}`);

    if (res.status !== 200) {
      return console.log("Unable to delete");
    }

    const resData = await res.data;
    return resData;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

export const getUserDetails = async (): Promise<any> => {
  try {
    const id = localStorage.getItem("userId") as string;
    const res = await axios.get(`/user/${id}`);

    if (res.status !== 200) {
      return console.log("No user found");
    }

    const resData = (await res.data) as UserI;
    return resData;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};
