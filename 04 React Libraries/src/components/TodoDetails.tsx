import React from "react";
import { LoaderFunction, useLoaderData, useMatch, useParams } from "react-router-dom";

export const todosDetailsLoader: LoaderFunction = async ({ params }) => {
  // console.log("params:", params);
  return fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`);
};

const TodoDetails = (): JSX.Element => {
  // const params = useParams();
  // console.log("params:", params);
  const { id } = useParams<{ id: string }>() as { id: string };
  console.log({ id });

  const isExample = useMatch("/todos/:id");
  // console.log("isExample:", isExample);
  if (isExample) {
    console.log("Math");
  } else {
    console.log("Not Match");
  }

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
