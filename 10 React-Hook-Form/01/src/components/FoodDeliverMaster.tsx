import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

import { TextField } from "../controls/TextField";
import type { FoodDeliverMasterFormType } from "../types";
import { getRenderCount } from "../utils/getRenderCount";

const RenderCount: () => React.JSX.Element = getRenderCount();

export const FoodDeliverMaster = (): React.JSX.Element => {
  const {
    register,
    // formState: { errors },
  } = useFormContext<FoodDeliverMasterFormType>();

  const { errors } = useFormState<FoodDeliverMasterFormType>({
    name: ["orderNo", "customerName", "mobile", "email"],
    exact: true,
  });

  return (
    <React.Fragment>
      <RenderCount />

      <div className="row mb-2">
        <div className="col">
          <TextField label="#Order No." disabled {...register("orderNo")} />
        </div>
        <div className="col">
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
          <TextField
            label="Customer Name"
            {...register("customerName", {
              required: "This field is required.",
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
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
    </React.Fragment>
  );
};
