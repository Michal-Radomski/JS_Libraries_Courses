import React from "react";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const DataItem = (): JSX.Element => {
  const [todo, setTodo] = React.useState<Todo | null>(null);
  const { id } = useParams() as { id: string };

  React.useEffect(() => {
    async function fetchTodos(): Promise<void> {
      await fetch(`https://dummyjson.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTodo(data))
        .catch((err) => console.log("err:", err))
        .finally(() => console.log("fetched!"));
    }
    fetchTodos();
  }, [id]);

  return (
    <React.Fragment>
      {todo ? (
        <Box padding={10} width={"100%"} display={"flex"} flexDirection="column" margin={"auto"}>
          <Typography variant="h4" padding={1}>
            Todo Details
          </Typography>
          <Typography>ID: {todo.id}</Typography>
          <Box display="flex" alignItems={"center"} gap={5}>
            <Typography>Task 📝: {todo.todo}</Typography>
            <IconButton color={todo.completed ? "success" : "error"}>
              {todo.completed ? <DoneAllIcon /> : <HourglassTopIcon />}
            </IconButton>
          </Box>
        </Box>
      ) : null}
    </React.Fragment>
  );
};

export default DataItem;
