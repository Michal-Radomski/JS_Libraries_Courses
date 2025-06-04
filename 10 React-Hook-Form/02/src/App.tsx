import React from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { Button } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./App.scss";
import MuiTextField from "./MuiTextField";

const schema = z.object({
  fullName: z.string().min(1, "This field is required."),
  email: z.string().email("Incorrect email format."),
  password: z.string().min(6, "Minimum 6 characters required.").max(12, "Can't exceed 12 characters."),
});

// type FormData = {
//   email: string;
//   fullName: string;
//   password: string;
// };

type FormData = z.infer<typeof schema>;

const App = (): React.JSX.Element => {
  // const {
  //   // register,
  //   handleSubmit,
  //   control,
  // } = useForm<FormData>({
  //   mode: "onChange",
  //   defaultValues: {
  //     fullName: "",
  //     email: "",
  //     password: "",
  //   },
  //   resolver: zodResolver(schema),
  // });
  const { handleSubmit, control } = useForm<FormData, { blockedEmailDomains: string[] }>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: async (data, context, options) => {
      // you can debug your validation schema here
      console.log("formData", data);
      console.log("validation result", await zodResolver(schema)(data, context, options));
      return zodResolver(schema)(data, context, options);
    },
    context: { blockedEmailDomains: ["example.com", "xyz.com"] },
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
        {/* <MuiTextField name="fullName" label="Full Name" control={control} rules={{ required: "This field is required." }} /> */}
        {/* <br />
        <input type="text" placeholder="Email" {...register("email")} />
        <br />
        <input type="password" placeholder="Password" {...register("password")} />
        <br /> */}

        {/* <br />
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
        <br /> */}

        <MuiTextField name="fullName" label="Full Name" control={control} />
        <br />
        <MuiTextField name="email" label="Email" control={control} />
        <br />
        <MuiTextField type="password" name="password" label="Password" control={control} />
        <br />

        <Button type="submit" variant="contained" color="warning">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default App;
