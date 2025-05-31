import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

import { Select } from "../controls/Select";
import type { CheckoutFormType, SelectOptionType } from "../types";
import { getRenderCount } from "../utils/getRenderCount";

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

export const CheckoutForm = (): React.JSX.Element => {
  const {
    register,
    // formState: { errors },
  } = useFormContext<CheckoutFormType>();

  const { errors } = useFormState<CheckoutFormType>({
    name: ["paymentMethod", "deliveryIn"],
    exact: true,
  });

  // const paymentMethod = useWatch({ name: "paymentMethod" });
  // React.useEffect(() => {
  //   if (paymentMethod == "online") {
  //     alert("please verify the transaction.");
  //   }
  // }, [paymentMethod]);

  return (
    <React.Fragment>
      <RenderCount />

      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
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
    </React.Fragment>
  );
};
