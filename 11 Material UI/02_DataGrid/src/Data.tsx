import React from "react";
import { Button, Card, CardHeader, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AssignmentLateRoundedIcon from "@mui/icons-material/AssignmentLateRounded";

import DatagridToolbar from "./DatagridToolbar";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    renderCell: (params: { value: number }): JSX.Element => {
      return (
        <Link style={{ color: "black", textUnderlineOffset: 5 }} to={`/${params.value}`}>
          <Typography>{params.value}</Typography>
        </Link>
      );
    },
  },
  {
    field: "userId",
    headerName: "User ID",
    width: 70,
  },
  {
    field: "todo",
    headerName: "Todo",
    width: 400,
  },
  {
    field: "completed",
    headerName: "Completed",
    width: 90,
    renderCell: (params: { value: boolean }): JSX.Element => {
      return params.value ? (
        <AssignmentTurnedInRoundedIcon sx={{ color: "green" }} />
      ) : (
        <AssignmentLateRoundedIcon sx={{ color: "orangered" }} />
      );
    },
  },
];

const Data = (): JSX.Element => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  console.log("todos:", todos);

  React.useEffect(() => {
    async function fetchTodos(): Promise<void> {
      setLoading(true);
      await fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data.todos))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    fetchTodos();
  }, []);

  return (
    <Card sx={{ padding: 5 }}>
      <CardHeader title="Todo List 🌟📝"></CardHeader>
      <DataGrid
        checkboxSelection
        rowsPerPageOptions={[10, 20, 30]}
        pageSize={10}
        onPageChange={() => console.log("pageChange")}
        components={{
          Toolbar: DatagridToolbar,
          BaseButton: Button,
        }}
        loading={loading}
        sx={{ height: 500 }}
        columns={columns as GridColDef<Todo>[]}
        rows={todos}
        componentsProps={{
          baseButton: {
            // variant: "outlined",
            variant: "contained",
            color: "secondary",
          },
        }}
      />
    </Card>
  );
};

export default Data;
