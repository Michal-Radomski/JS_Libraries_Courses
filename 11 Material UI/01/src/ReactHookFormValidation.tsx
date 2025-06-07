import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const ReactHookFormValidation = (): JSX.Element => {
  // Set up react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data: { [key: string]: string }): void => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Name Field */}
      <div>
        <TextField
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
          })}
          label="Name"
          variant="outlined"
          fullWidth
          error={!!errors.name}
          helperText={(errors.name ? errors.name.message : "") as React.ReactNode}
          margin="normal"
        />
      </div>

      {/* Email Field */}
      <div>
        <TextField
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          label="Email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={(errors.email ? errors.email.message : "") as React.ReactNode}
          margin="normal"
        />
      </div>

      {/* Password Field */}
      <div>
        <TextField
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={(errors.password ? errors.password.message : "") as React.ReactNode}
          margin="normal"
        />
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: "16px" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={Boolean(errors.email) || Boolean(errors.password) || Boolean(errors.name)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReactHookFormValidation;
