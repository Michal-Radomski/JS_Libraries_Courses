import React from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { Button } from "@mui/material";

import "./App.scss";
import MuiTextField from "./MuiTextField";

type FormData = {
  email: string;
  fullName: string;
  password: string;
};

const App = (): React.JSX.Element => {
  const {
    // register,
    handleSubmit,
    control,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData): void => {
    console.log("form data", data);
  };

  const onError = (err: FieldErrors): void => {
    console.log("error", err);
  };

  // const { ref, ...fullNameRR } = register("fullName");

  return (
    <React.Fragment>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        {/* <input type="text" placeholder="Full Name" {...register("fullName")} /> */}
        {/* <TextField variant="outlined" label="Full Name" {...fullNameRR} inputRef={ref} defaultValue="abc" /> */}
        {/* <Controller
          name="fullName"
          control={control}
          rules={{ required: "This field is required." }}
          render={({ field }) => <TextField variant="outlined" label="Full Name" {...field} inputRef={field.ref} />}
        /> */}
        <MuiTextField name="fullName" label="Full Name" control={control} rules={{ required: "This field is required." }} />
        {/* <br />
        <input type="text" placeholder="Email" {...register("email")} />
        <br />
        <input type="password" placeholder="Password" {...register("password")} />
        <br /> */}

        <br />
        <MuiTextField
          name="email"
          label="Email"
          control={control}
          rules={{
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Incorrect email formate.",
            },
          }}
        />
        <br />
        <MuiTextField
          type="password"
          name="password"
          label="Password"
          control={control}
          rules={{ required: "This field is required." }}
        />
        <br />

        <Button type="submit" variant="contained" color="warning">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default App;
