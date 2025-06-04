import React from "react";
import { useForm, type FieldErrors } from "react-hook-form";

import "./App.scss";

type FormData = {
  email: string;
  fullName: string;
  password: string;
};

const App = (): React.JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData): void => {
    console.log("form data", data);
  };

  const onError = (err: FieldErrors): void => {
    console.log("error", err);
  };

  return (
    <React.Fragment>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <br />
        <input type="text" placeholder="Email" {...register("email")} />
        <br />
        <input type="password" placeholder="Password" {...register("password")} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default App;
