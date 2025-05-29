import React from "react";
import { useForm, type FieldErrors } from "react-hook-form";

import { getRenderCount } from "./utils/getRenderCount";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

const RenderCount: () => React.JSX.Element = getRenderCount();

export const FoodDeliveryForm = (): React.JSX.Element => {
  //* Register contains: onChange, onBlur, name and ref!
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
  });
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
        <RenderCount />

        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="#Order No." disabled {...register("orderNo")} />
              <label>#Order No.</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                {...register("mobile", {
                  minLength: {
                    value: 10,
                    message: "Must be 10 digits.",
                  },
                  maxLength: {
                    value: 10,
                    message: "Must be 10 digits.",
                  },
                  required: "This field is required.",
                })}
              />
              <label>Mobile</label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Customer Name"
                {...register("customerName", {
                  required: "This field is required.",
                  // value: "initialValue",
                })}
              />
              <label>Customer Name</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Incorrect email format.",
                  },
                })}
              />
              <label>Email</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
