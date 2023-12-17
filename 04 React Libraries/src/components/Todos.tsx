import React from "react";
import { ActionFunction, Form, Link, LoaderFunction, useLoaderData } from "react-router-dom";

export const todosLoader: LoaderFunction = async () => {
  // console.log("import.meta.env.VITE_API_URL:", import.meta.env.VITE_API_URL);
  return await fetch(`${import.meta.env.VITE_API_URL}/todos`);
};

export const todosDeleteAction: ActionFunction = async ({ params }) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`, { method: "DELETE" });
};

export const todosAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return await fetch(`${import.meta.env.VITE_API_URL}/todos/`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-Type": "application/json" },
  });
};

const Todos = (): JSX.Element => {
  const todos = useLoaderData() as Todo[];

  return (
    <React.Fragment>
      <h1>Todos List</h1>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id} style={{ display: "flex" }}>
              {/* //* Link with more features */}
              <Link to={`/todos/${todo.id}`} className="btn btn-link">{`${todo.id} ${todo.title}`}</Link>
              {/* //* Normal link */}
              {/* <NavLink to={`/todos/${todo.id}`}>{`${todo.id} ${todo.title}`}</NavLink> */}
              <Form method={"delete"} action={`/todos/${todo.id}/delete`}>
                <input type={"submit"} value={"x"} className="btn btn-danger" />
              </Form>
            </li>
          );
        })}
      </ul>
      <Form method={"post"} action={`/todos`}>
        <input type={"text"} name={"title"} />
        <input type={"submit"} value={"Submit"} className="btn btn-success" />
      </Form>
    </React.Fragment>
  );
};

export default Todos;
