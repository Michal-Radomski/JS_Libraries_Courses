import React from "react";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";

export const todosLoader: LoaderFunction = async () => {
  // console.log("import.meta.env.VITE_API_URL:", import.meta.env.VITE_API_URL);
  return fetch(`${import.meta.env.VITE_API_URL}/todos`);
};

const Todos = (): JSX.Element => {
  const todos = useLoaderData() as Todo[];

  return (
    <React.Fragment>
      <h1>Todos List</h1>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id}>
              <Link to={`/todos/${todo.id}`}>
                {todo.id} {todo.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todos;
