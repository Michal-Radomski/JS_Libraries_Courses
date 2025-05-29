import React from "react";

// import { getRenderCount } from "./utils/getRenderCount";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

type FoodDeliveryFormErrorType = {
  customerName: string;
  mobile: string;
};

// const RenderCount: () => React.JSX.Element = getRenderCount();

export const TypicalForm = (): React.JSX.Element => {
  const [values, setValues] = React.useState<FoodDeliveryFormType>({
    customerName: "",
    mobile: "",
  });
  // console.log("values:", values);
  const [errors, setErrors] = React.useState<FoodDeliveryFormErrorType>({
    customerName: "",
    mobile: "",
  });
  console.log("errors:", errors);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateFormData = (): boolean => {
    const tempErrors: FoodDeliveryFormErrorType = {
      customerName: "",
      mobile: "",
    };

    if (values.customerName === "") {
      tempErrors.customerName = "Customer name is required.";
    }
    if (values.mobile === "") {
      tempErrors.mobile = "Mobile number is required.";
    }
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x: string) => x == "");
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateFormData()) {
      console.log("form data", values);
    } else {
      console.log("form is invalid");
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={onSubmit}>
        {/* <RenderCount /> */}
        <div className="form-floating mb-3">
          <input
            type="text"
            name="customerName"
            className="form-control"
            placeholder="Customer Name"
            value={values.customerName}
            onChange={handleInputChange}
          />
          <label>Customer Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="mobile"
            className="form-control"
            placeholder="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <label>Mobile</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
