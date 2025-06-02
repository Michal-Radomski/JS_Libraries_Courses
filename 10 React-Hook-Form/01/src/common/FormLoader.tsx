import React from "react";
import { useFormState, type Control } from "react-hook-form";

import type { FoodDeliveryFormType } from "../types";

export default function FormLoader(props: {
  control: Control<FoodDeliveryFormType, any, FoodDeliveryFormType>;
}): React.JSX.Element {
  const { control } = props as { control: Control<FoodDeliveryFormType, any, FoodDeliveryFormType> };
  const { isLoading } = useFormState({ control });
  // console.log({ isLoading });

  // return isLoading === false || <div className="loader"></div>;
  return isLoading ? <div className="loader"></div> : (null as any);
}
