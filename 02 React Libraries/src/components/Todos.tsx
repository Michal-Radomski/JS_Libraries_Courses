//* V2 React Query
import React from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import useTodosApi, { TODOS_KEY } from "hooks/useTodosApi";
import client from "utils/client";

const Todos = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { data: todos, isLoading: isTodoLoading } = useTodosApi.getAll();
  // console.log("todos:", todos);

  const [newTodoTitle, setNewTodoTitle] = React.useState<string>("");
  const { mutate: postTodo } = useTodosApi.post();
  const { mutate: deleteTodo } = useTodosApi.delete();

  return (
    <React.Fragment>
      <h1>Todos List</h1>
      {isTodoLoading ? (
        <h2 style={{ color: "darkred" }}>Loading...</h2>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          {todos?.map((todo: Todo) => {
            return (
              <li key={todo.id} style={{ display: "flex" }}>
                <Link
                  to={`/todos/${todo.id}`}
                  className="btn btn-link"
                  onMouseOver={() => {
                    // console.log("prefetching todo.id:", todo.id);
                    queryClient.prefetchQuery({
                      queryKey: [TODOS_KEY, todo.id],
                      queryFn: () => client.get({ path: `/todos/${todo.id}` }),
                    });
                  }}
                >{`${todo.id} ${todo.title}`}</Link>
                <button onClick={() => deleteTodo({ id: todo.id })} className="btn btn-danger">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <input value={newTodoTitle} onChange={(event) => setNewTodoTitle(event.target.value)} />
      <button onClick={() => postTodo({ title: newTodoTitle })} className="btn btn-success">
        Create new
      </button>
    </React.Fragment>
  );
};

export default Todos;

//* V1 - React Router
// import React from "react";
// import { ActionFunction, Form, Link, LoaderFunction, useLoaderData } from "react-router-dom";

// export const todosLoader: LoaderFunction = async () => {
//   // console.log("import.meta.env.VITE_API_URL:", import.meta.env.VITE_API_URL);
//   return await fetch(`${import.meta.env.VITE_API_URL}/todos`);
// };

// export const todosDeleteAction: ActionFunction = async ({ params }) => {
//   return await fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`, { method: "DELETE" });
// };

// export const todosAction: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   return await fetch(`${import.meta.env.VITE_API_URL}/todos/`, {
//     method: "POST",
//     body: JSON.stringify(Object.fromEntries(formData)),
//     headers: { "Content-Type": "application/json" },
//   });
// };

// const Todos = (): JSX.Element => {
//   const todos = useLoaderData() as Todo[];

//   return (
//     <React.Fragment>
//       <h1>Todos List</h1>
//       <ul style={{ listStyleType: "none" }}>
//         {todos.map((todo: Todo) => {
//           return (
//             <li key={todo.id} style={{ display: "flex" }}>
//               {/* //* Link: normal link */}
//               <Link to={`/todos/${todo.id}`} className="btn btn-link">{`${todo.id} ${todo.title}`}</Link>
//               {/* //* NavLink: link with more features */}
//               {/* <NavLink to={`/todos/${todo.id}`}>{`${todo.id} ${todo.title}`}</NavLink> */}
//               <Form method={"delete"} action={`/todos/${todo.id}/delete`}>
//                 <input type={"submit"} value={"x"} className="btn btn-danger" />
//               </Form>
//             </li>
//           );
//         })}
//       </ul>
//       <Form method={"post"} action={`/todos`}>
//         <input type={"text"} name={"title"} />
//         <input type={"submit"} value={"Submit"} className="btn btn-success" />
//       </Form>
//     </React.Fragment>
//   );
// };

// export default Todos;
