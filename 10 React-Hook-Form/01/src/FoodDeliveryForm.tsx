import React from "react";
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form";

import { getRenderCount } from "./utils/getRenderCount";
import type { FoodDeliveryFormType } from "./types";
import { TextField } from "./controls/TextField";
import { CheckoutForm } from "./CheckOutForm";

const RenderCount: () => React.JSX.Element = getRenderCount();

export const FoodDeliveryForm = (): React.JSX.Element => {
  //* Register contains: onChange, onBlur, name and ref!
  const methods: UseFormReturn<FoodDeliveryFormType> = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    delayError: 500,
    criteriaMode: "all",
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
      paymentMethod: "",
      deliveryIn: 0,
      address: {
        streetAddress: "",
        landmark: "",
        city: "",
        state: "",
      },
    },
  });
  // console.log("useForm():", useForm());
  // console.log("(register('customerName'):", register("customerName"));
  // console.log("handleSubmit:", handleSubmit);

  // const customerName = register("customerName");
  // console.log("customerName:", customerName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

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
            {/* <div className="form-floating">
              <input type="text" className="form-control" placeholder="#Order No." disabled {...register("orderNo")} />
              <label>#Order No.</label>
            </div> */}
            <TextField label="#Order No." disabled {...register("orderNo")} />
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
              className="border-success"
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
        <FormProvider {...methods}>
          <CheckoutForm />
        </FormProvider>

        <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
        <div className="row mb-3">
          <div className="col">
            <TextField
              label="Street Address"
              error={errors.address?.streetAddress}
              {...register("address.streetAddress", {
                required: "This field is required.",
              })}
            />
          </div>
          <div className="col">
            <TextField
              label="City"
              error={errors.address?.city}
              {...register("address.city", {
                required: "This field is required.",
              })}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <TextField label="Landmark" {...register("address.landmark")} />
          </div>
          <div className="col">
            <TextField label="State" {...register("address.state")} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
