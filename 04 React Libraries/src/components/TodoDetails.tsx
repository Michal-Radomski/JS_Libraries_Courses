import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const todosDetailsLoader: LoaderFunction = async ({ params }) => {
  // console.log("params:", params);
  return fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`);
};

const TodoDetails = (): JSX.Element => {
  const todoDetails = useLoaderData() as Todo;
  return (
    <React.Fragment>
      <p>Todos details</p>
      <h2>Todo Id: {todoDetails.id}</h2>
      <h3>Todo Title: {todoDetails.title}</h3>
    </React.Fragment>
  );
};

export default TodoDetails;
