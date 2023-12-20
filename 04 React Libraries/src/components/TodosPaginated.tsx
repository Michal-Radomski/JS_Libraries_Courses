import React from "react";
import { Link, generatePath, useSearchParams } from "react-router-dom";

import useTodosApi from "hooks/useTodosApi";

const TodosPaginated = (): JSX.Element => {
  const [queryParams, setQueryParams] = useSearchParams();
  const page = Number(queryParams.get("page")) || 1;
  const { data: todos, isLoading: isTodoLoading } = useTodosApi.getAllPaginated(page);

  const pagesArray = todos?.pagination.last?._page
    ? Array.from({ length: todos.pagination.last._page }, (_, i) => i + 1)
    : undefined;

  return (
    <React.Fragment>
      <h1>Todos list (page {page})</h1>
      {isTodoLoading ? (
        <h2 style={{ color: "deeppink" }}>Loading...</h2>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          {todos?.data.map((todo) => (
            <li key={todo.id}>
              <Link to={generatePath("/todos/:id", { id: todo.id.toString() })}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        {pagesArray?.map((page, index: number) => (
          <button onClick={() => setQueryParams([["page", page.toString()]])} key={index}>
            {page}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TodosPaginated;
