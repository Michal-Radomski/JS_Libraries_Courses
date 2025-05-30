import React from "react";
import { useForm, type FieldErrors } from "react-hook-form";

import { getRenderCount } from "./utils/getRenderCount";
import type { FoodDeliveryFormType, SelectOptionType } from "./types";
import { TextField } from "./controls/TextField";
import { Select } from "./controls/Select";

const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid Online" },
  { value: "COD", text: "Cash On Delivery" },
];

const deliveryInOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];

const RenderCount: () => React.JSX.Element = getRenderCount();

export const FoodDeliveryForm = (): React.JSX.Element => {
  //* Register contains: onChange, onBlur, name and ref!
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
      paymentMethod: "",
      deliveryIn: 0,
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
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)} noValidate={true}>
        <RenderCount />

        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="#Order No." disabled {...register("orderNo")} />
              <label>#Order No.</label>
            </div>
          </div>
          <div className="col">
            {/* <div className="form-floating">
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
              {errors.mobile ? <div className="error-feedback">{errors.mobile?.message}</div> : null}
            </div> */}
            <TextField
              label="Mobile"
              {...register("mobile", {
                required: "This field is required.",
              })}
              error={errors.mobile}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            {/* <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Customer Name"
                {...register("customerName", {
                  required: "This field is required.",
                  // required: true,
                  // value: "initialValue",
                })}
              />
              <label>Customer Name</label>
              {errors.customerName ? <div className="error-feedback">{errors.customerName?.message}</div> : null}
            </div> */}
            <TextField
              label="Customer Name"
              {...register("customerName", {
                required: "This field is required.",
              })}
              error={errors.customerName}
            />
          </div>
          <div className="col">
            {/* <div className="form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Incorrect email format.",
                  },
                  validate: {
                    notFake: (value: string) => {
                      return value !== "email@gmail.com" || "Particular email is blocked.";
                    },
                    notFromBlackListedDomain: (value: string, _values: FoodDeliveryFormType) => {
                      // console.log("_values:", _values);
                      return (
                        (!value.endsWith("@xyz.com") && !value.endsWith("@example.com")) || "This domain is not supported."
                      );
                    },
                  },
                })}
              />
              <label>Email</label>
              {errors.email ? <div className="error-feedback">{errors.email?.message}</div> : null}
            </div> */}
            <TextField
              type="email"
              label="Email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorrect email format.",
                },
              })}
              error={errors.email}
            />
          </div>
        </div>

        <div>list of ordered food items</div>
        <div className="row mb-2">
          <div className="col">
            <Select
              label="Payment Method"
              options={paymentOptions}
              {...register("paymentMethod", {
                required: "This field is required.",
              })}
              error={errors.paymentMethod}
            />
          </div>
          <div className="col">
            <Select
              label="Delivery Within"
              options={deliveryInOptions}
              {...register("deliveryIn")}
              error={errors.deliveryIn}
            />
          </div>
        </div>
        <div>delivery address</div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
