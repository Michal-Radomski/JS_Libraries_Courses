import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

import { TextField } from "../controls/TextField";
import { getRenderCount } from "../utils/getRenderCount";
import type { FoodItemType } from "../types";

const RenderCount: () => React.JSX.Element = getRenderCount();

export default function FoodItems(): React.JSX.Element {
  const { register } = useFormContext<{ foodItems: FoodItemType[] }>();

  const { errors } = useFormState<{ foodItems: FoodItemType[] }>({
    name: "foodItems",
  });

  return (
    <React.Fragment>
      <RenderCount />

      <table className="table table-borderless table-hover">
        <tbody>
          <tr>
            <td>
              <TextField
                label="Food 1"
                {...register("foodItems.0.name", {
                  required: "This field is required.",
                })}
                error={errors.foodItems ? errors.foodItems[0]?.name : undefined}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="Food 2"
                {...register("foodItems.1.name")}
                error={errors.foodItems ? errors.foodItems[1]?.name : undefined}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
