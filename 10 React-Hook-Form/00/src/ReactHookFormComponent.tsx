import React from "react";
import { useForm } from "react-hook-form";

const ReactHookFormComponent = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object): void => {
    console.log("data:", data);
  };

  return (
    <React.Fragment>
      <h2>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register("name", { required: "Name is required" })} type="text" />
          <small>{errors.name ? <p>{errors.name.message as string}</p> : null}</small>
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
            type="email"
          />
          <small>{errors.email ? <p>{errors.email.message as string}</p> : null}</small>
        </div>

        <div>
          <label>Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="password"
          />
          <small>{errors.password ? <p>{errors.password.message as string}</p> : null}</small>
        </div>

        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default ReactHookFormComponent;
