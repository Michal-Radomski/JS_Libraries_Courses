import React from "react";
import { useForm, type FieldErrors } from "react-hook-form";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export const FoodDeliveryForm = (): React.JSX.Element => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();
  // console.log("useForm():", useForm());
  // console.log("(register('customerName'):", register("customerName"));
  // console.log("handleSubmit:", handleSubmit);

  // const customerName = register("customerName");
  // console.log("customerName:", customerName);

  //* event.preventDefault() not needed!
  const onSubmit = (formData: FoodDeliveryFormType): void => {
    console.log("form data", formData);
  };

  const onError = (errors: FieldErrors): void => {
    console.log("validation errors", errors);
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Customer Name"
            {...register("customerName", {
              required: "Customer name is required.",
              value: "initialValue",
            })} //* Contains: onChange, onBlur, name and ref!
          />
          <label>Customer Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            {...register("mobile", {
              required: "Mobile number is required.",
            })}
          />
          <label>Mobile</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
