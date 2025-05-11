import React from "react";
import { Link, generatePath } from "react-router-dom";

import useTodosApi from "hooks/useTodosApi";

const TodosInfinite = (): JSX.Element => {
  const {
    data: todos,
    isLoading: isTodoLoading,
    fetchNextPage: fetchNextTodosPage,
    hasNextPage: hasNextTodosPage,
    isFetchingNextPage: isFetchingNextTodosPage,
  } = useTodosApi.getAllInfinite();

  // @ts-ignore
  const todosArray = (todos?.pages && ([] as Todo[]).concat(...todos.pages)) || [];
  // console.log("todosArray:", todosArray);

  return (
    <React.Fragment>
      <h1>Todos list</h1>
      {isTodoLoading ? (
        <h2 style={{ color: "orange" }}>Loading...</h2>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          {todosArray?.map((todo: Todo) => (
            <li key={todo.id}>
              <Link to={generatePath("/todos/:id", { id: todo.id.toString() })}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {hasNextTodosPage && (
        <button disabled={isTodoLoading || isFetchingNextTodosPage} onClick={() => fetchNextTodosPage()}>
          Load more
        </button>
      )}
    </React.Fragment>
  );
};

export default TodosInfinite;
