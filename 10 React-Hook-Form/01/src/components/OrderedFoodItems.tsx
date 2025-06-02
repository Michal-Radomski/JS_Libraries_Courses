import React from "react";
import { useFieldArray, useFormContext, useFormState } from "react-hook-form";

import { TextField } from "../controls/TextField";
import { getRenderCount } from "../utils/getRenderCount";
import type { FoodType, OrderedFoodItemType, SelectOptionType } from "../types";
import { Select } from "../controls/Select";
import { getFoodItems } from "../db";

const RenderCount: () => React.JSX.Element = getRenderCount();

//* V2
export default function OrderedFoodItems(): React.JSX.Element {
  const [, setFoodList] = React.useState<FoodType[]>([]);
  const [foodOptions, setFoodOptions] = React.useState<SelectOptionType[]>([]);

  React.useEffect(() => {
    const tempList: FoodType[] = getFoodItems();
    const tempOptions: SelectOptionType[] = tempList.map((x: FoodType) => ({
      value: x.foodId,
      text: x.name,
    }));
    setFoodList(tempList);
    setFoodOptions([{ value: 0, text: "Select" }, ...tempOptions]);
  }, []);

  const { register } = useFormContext<{
    foodItems: OrderedFoodItemType[];
  }>();

  const { errors } = useFormState<{ foodItems: OrderedFoodItemType[] }>({
    name: "foodItems",
  });

  const { fields, append, remove } = useFieldArray<{
    foodItems: OrderedFoodItemType[];
  }>({
    name: "foodItems",
    rules: {
      required: {
        value: true,
        message: "No food in the order.",
      },
    },
  });

  const onRowAdd = (): void => {
    append({ foodId: 0, price: 0, quantity: 0, totalPrice: 0 });
  };

  const onRowDelete = (index: number): void => {
    remove(index);
  };

  return (
    <React.Fragment>
      <RenderCount />

      <div className="text-start fw-bold mt-4">Ordered Food Items</div>
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>Food</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>
              <button type="button" className="btn btn-sm btn-secondary" onClick={onRowAdd}>
                + Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={field.id}>
              <td>
                <Select
                  options={foodOptions}
                  error={errors.foodItems && errors.foodItems[index]?.foodId}
                  {...register(`foodItems.${index}.foodId` as const, {
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Select food.",
                    },
                  })}
                />
              </td>
              <td>price</td>
              <td>
                <TextField
                  type="number"
                  min={0}
                  error={errors.foodItems && errors.foodItems[index]?.quantity}
                  {...register(`foodItems.${index}.quantity` as const, {
                    valueAsNumber: true,
                    required: "< 1.",
                    min: {
                      value: 1,
                      message: "< 1.",
                    },
                  })}
                />
              </td>
              <td>total price</td>
              <td>
                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onRowDelete(index)}>
                  DEL
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {errors.foodItems?.root ? (
          <tfoot>
            <tr>
              <td colSpan={5}>
                <span className="error-feedback">{errors.foodItems?.root?.message}</span>
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </React.Fragment>
  );
}

//* V1
// export default function OrderedFoodItems(): React.JSX.Element {
//   const {
//     register,
//     // setValue
//   } = useFormContext<{
//     foodItems: OrderedFoodItemType[];
//   }>();

//   const { errors } = useFormState<{ foodItems: OrderedFoodItemType[] }>({
//     name: "foodItems",
//   });

//   const {
//     fields,
//     append,
//     // prepend, insert, swap,
//     move,
//     //  update,
//     replace,
//     remove,
//   } = useFieldArray<{
//     foodItems: OrderedFoodItemType[];
//   }>({
//     name: "foodItems",
//   });

//   const onRowAdd = (): void => {
//     append({ name: "Food", quantity: 1 });
//     // prepend({ name: "Food", quantity: 1 })
//     // insert(2,{ name: "Food", quantity: 1 })
//   };

//   const onSwapAndMove = (): void => {
//     // swap(0, 2)
//     move(0, 2);
//   };

//   const onUpdateAndReplace = (): void => {
//     // update(0,{ name: "Food", quantity: 10 })
//     // setValue("foodItems.0.quantity",10)
//     replace([
//       { name: "Food 1", quantity: 10 },
//       { name: "Food 2", quantity: 11 },
//     ]);
//   };

//   const onRowDelete = (index: number): void => {
//     remove(index);
//   };

//   return (
//     <React.Fragment>
//       <RenderCount />

//       <table className="table table-borderless table-hover">
//         <thead>
//           <tr>
//             <th>Food</th>
//             <th>Quantity</th>
//             <th>
//               <button type="button" className="btn btn-sm btn-secondary" onClick={onRowAdd}>
//                 + Add
//               </button>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {fields.map((field, index) => (
//             <tr key={field.id}>
//               <td>
//                 <TextField
//                   {...register(`foodItems.${index}.name` as const, {
//                     required: "This field is required.",
//                   })}
//                   error={errors.foodItems ? errors.foodItems[index]?.name : undefined}
//                 />
//               </td>
//               <td>
//                 <TextField type="number" min={0} {...register(`foodItems.${index}.quantity` as const)} />
//               </td>
//               <td>
//                 <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onRowDelete(index)}>
//                   DEL
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {fields.length >= 4 && (
//         <button type="button" className="btn btn-sm btn-secondary" onClick={onSwapAndMove}>
//           Swap and Move
//         </button>
//       )}
//       <button type="button" className="btn btn-sm btn-secondary" onClick={onUpdateAndReplace}>
//         Update and Replace
//       </button>
//     </React.Fragment>
//   );
// }
