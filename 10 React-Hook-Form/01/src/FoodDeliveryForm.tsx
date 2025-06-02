import React from "react";
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form";

import { getRenderCount } from "./utils/getRenderCount";
import type { FoodDeliveryFormType } from "./types";
import { CheckoutForm } from "./components/CheckOutForm";
import { MasterFoodDeliveryForm } from "./components/MasterFoodDeliveryForm";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import SubmitButton from "./controls/SubmitButton";
import OrderedFoodItems from "./components/OrderedFoodItems";

const RenderCount: () => React.JSX.Element = getRenderCount();

export const FoodDeliveryForm = (): React.JSX.Element => {
  //* Register contains: onChange, onBlur, name and ref!
  const methods: UseFormReturn<FoodDeliveryFormType> = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
      gTotal: 0,
      paymentMethod: "",
      deliveryIn: 0,
      foodItems: [{ foodId: 0, price: 0, quantity: 0, totalPrice: 0 }],
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

  // const {
  //   handleSubmit,
  //   formState: { isValid, isValidating, isDirty, isReady, errors },
  //   formState,
  // } = methods;
  // console.log({ isValid, isValidating, isDirty, isReady, errors });
  // console.log("formState:", formState);
  const {
    handleSubmit,
    control,
    // watch,
    // formState: { isSubmitting },
    // getFieldState,
    // getValues,
    // setValue,
    // setFocus
  } = methods;

  // const paymentMethod = watch("paymentMethod");
  // React.useEffect(() => {
  //   if (paymentMethod === "online") {
  //     alert("please verify the transaction.");
  //   }
  // }, [paymentMethod]);

  // React.useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log({ value, name, type }));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  // const onDemo = () => {
  // console.log(getValues())
  // setValue("email", "email123", {
  //   shouldValidate: true,
  //   shouldDirty: true,
  //   shouldTouch: true,
  // });
  // setFocus("customerName", { shouldSelect: true })
  // };

  //* event.preventDefault() not needed!
  const onSubmit = async (formData: FoodDeliveryFormType): Promise<void> => {
    // Add a delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("form data", formData);
  };

  const onError = (errors: FieldErrors): void => {
    console.log("validation errors", errors);
    // console.log(getFieldState("address.city"));
    // console.log(getValues(["customerName", "email"]));
  };

  //* V2
  return (
    <React.Fragment>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <RenderCount />
        {/* <span>submitCount: {submitCount}</span> */}
        <FormProvider {...methods}>
          <MasterFoodDeliveryForm />
          <OrderedFoodItems />
          <CheckoutForm />
          <DeliveryAddressForm />
        </FormProvider>
        <SubmitButton
          value="Submit"
          // isSubmitting={isSubmitting}
          control={control}
          className="btn-primary"
        />
        {/* <button className="btn btn-secondary ms-2" onClick={onDemo} type="button">
          Demo
        </button> */}
      </form>
    </React.Fragment>
  );

  //* V1
  // return (
  //   <React.Fragment>
  //     <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)} noValidate={true}>
  //       <RenderCount />

  //       <div className="row mb-2">
  //         <div className="col">
  //           {/* <div className="form-floating">
  //             <input type="text" className="form-control" placeholder="#Order No." disabled {...register("orderNo")} />
  //             <label>#Order No.</label>
  //           </div> */}
  //           <TextField label="#Order No." disabled {...register("orderNo")} />
  //         </div>
  //         <div className="col">
  //           {/* <div className="form-floating">
  //             <input
  //               type="text"
  //               className="form-control"
  //               placeholder="Mobile"
  //               {...register("mobile", {
  //                 minLength: {
  //                   value: 10,
  //                   message: "Must be 10 digits.",
  //                 },
  //                 maxLength: {
  //                   value: 10,
  //                   message: "Must be 10 digits.",
  //                 },
  //                 required: "This field is required.",
  //               })}
  //             />
  //             <label>Mobile</label>
  //             {errors.mobile ? <div className="error-feedback">{errors.mobile?.message}</div> : null}
  //           </div> */}
  //           <TextField
  //             label="Mobile"
  //             className="border-success"
  //             {...register("mobile", {
  //               required: "This field is required.",
  //             })}
  //             error={errors.mobile}
  //           />
  //         </div>
  //       </div>
  //       <div className="row mb-2">
  //         <div className="col">
  //           {/* <div className="form-floating">
  //             <input
  //               type="text"
  //               className="form-control"
  //               placeholder="Customer Name"
  //               {...register("customerName", {
  //                 required: "This field is required.",
  //                 // required: true,
  //                 // value: "initialValue",
  //               })}
  //             />
  //             <label>Customer Name</label>
  //             {errors.customerName ? <div className="error-feedback">{errors.customerName?.message}</div> : null}
  //           </div> */}
  //           <TextField
  //             label="Customer Name"
  //             {...register("customerName", {
  //               required: "This field is required.",
  //             })}
  //             error={errors.customerName}
  //           />
  //         </div>
  //         <div className="col">
  //           {/* <div className="form-floating">
  //             <input
  //               type="email"
  //               className="form-control"
  //               placeholder="Email"
  //               {...register("email", {
  //                 pattern: {
  //                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  //                   message: "Incorrect email format.",
  //                 },
  //                 validate: {
  //                   notFake: (value: string) => {
  //                     return value !== "email@gmail.com" || "Particular email is blocked.";
  //                   },
  //                   notFromBlackListedDomain: (value: string, _values: FoodDeliveryFormType) => {
  //                     // console.log("_values:", _values);
  //                     return (
  //                       (!value.endsWith("@xyz.com") && !value.endsWith("@example.com")) || "This domain is not supported."
  //                     );
  //                   },
  //                 },
  //               })}
  //             />
  //             <label>Email</label>
  //             {errors.email ? <div className="error-feedback">{errors.email?.message}</div> : null}
  //           </div> */}
  //           <TextField
  //             type="email"
  //             label="Email"
  //             {...register("email", {
  //               pattern: {
  //                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  //                 message: "Incorrect email format.",
  //               },
  //             })}
  //             error={errors.email}
  //           />
  //         </div>
  //       </div>

  //       <div>list of ordered food items</div>
  //       <FormProvider {...methods}>
  //         <CheckoutForm />
  //       </FormProvider>

  //       <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
  //       <div className="row mb-3">
  //         <div className="col">
  //           <TextField
  //             label="Street Address"
  //             error={errors.address?.streetAddress}
  //             {...register("address.streetAddress", {
  //               required: "This field is required.",
  //             })}
  //           />
  //         </div>
  //         <div className="col">
  //           <TextField
  //             label="City"
  //             error={errors.address?.city}
  //             {...register("address.city", {
  //               required: "This field is required.",
  //             })}
  //           />
  //         </div>
  //       </div>
  //       <div className="row mb-3">
  //         <div className="col">
  //           <TextField label="Landmark" {...register("address.landmark")} />
  //         </div>
  //         <div className="col">
  //           <TextField label="State" {...register("address.state")} />
  //         </div>
  //       </div>

  //       <button type="submit" className="btn btn-primary w-100">
  //         Submit
  //       </button>
  //     </form>
  //   </React.Fragment>
  // );
};
