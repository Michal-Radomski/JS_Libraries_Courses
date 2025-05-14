import { useQuery } from "@tanstack/react-query";
import React from "react";

import { fetchTasks } from "./mockApi";

const TaskList = (): React.JSX.Element => {
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching tasks</div>;
  }

  return (
    <React.Fragment>
      <div>
        <ul>
          {(data as { [key: string]: number | string }[]).map((task: { [key: string]: number | string }) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
        <button onClick={() => refetch()}>Refetch Tasks</button>
      </div>
    </React.Fragment>
  );
};

export default TaskList;
