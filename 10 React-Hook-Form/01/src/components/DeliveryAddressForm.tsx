import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

import type { DeliveryAddressFormType } from "../types";
import { TextField } from "../controls/TextField";
import { getRenderCount } from "../utils/getRenderCount";

const RenderCount: () => React.JSX.Element = getRenderCount();

export const DeliveryAddressForm = (): React.JSX.Element => {
  const {
    register,
    // formState: { errors },
  } = useFormContext<{ address: DeliveryAddressFormType }>();

  const { errors } = useFormState<{ address: DeliveryAddressFormType }>({
    name: "address",
  });

  return (
    <React.Fragment>
      <RenderCount />

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
    </React.Fragment>
  );
};
