import useQueryParams from "hooks/useQueryParams";
import React from "react";
import { LoaderFunction, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";

export const todosDetailsLoader: LoaderFunction = async ({ params }) => {
  // console.log("params:", params);
  return fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`);
};

const TodoDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams.get('text'):", searchParams.get("text"));
  console.log("searchParams", searchParams);

  // const params = useParams();
  // console.log("params:", params);
  // const { id } = useParams<{ id: string }>() as { id: string };
  // console.log({ id });

  // const isExample = useMatch("/todos/:id");
  // // console.log("isExample:", isExample);
  // if (isExample) {
  //   console.log("Math");
  // } else {
  //   console.log("Not Match");
  // }

  const query = useQueryParams();
  console.log("query:", query);

  const todoDetails = useLoaderData() as Todo;
  return (
    <React.Fragment>
      <p>Todos details</p>
      <h2>Todo Id: {todoDetails.id}</h2>
      <h3>Todo Title: {todoDetails.title}</h3>

      <div className="btn-group" role="group">
        {" "}
        <button
          className="btn btn-warning"
          onClick={() =>
            setSearchParams([
              ["param1", "param1"],
              ["param2", "param2"],
              ["param3", "param3"],
            ])
          }
        >
          Set Search Params
        </button>
        <button onClick={() => navigate("/todos")} className="btn btn-secondary">
          Go to Todos
        </button>
        <button
          onClick={() =>
            navigate("/", {
              // state: "hello",
              replace: true,
            })
          }
          className="btn btn-info"
        >
          Go Home
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoDetails;
