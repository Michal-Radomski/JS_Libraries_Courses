import React, { type ForwardedRef } from "react";
import { type FieldError } from "react-hook-form";

import type { SelectOptionType } from "../types";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: FieldError | undefined;
  options: SelectOptionType[];
};

export const Select = React.forwardRef(
  (props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>): React.JSX.Element => {
    const { className = "", label, options, error, ...other } = props;

    return (
      <React.Fragment>
        <div className={label ? "form-floating" : ""}>
          <select className={`form-select ${className}`} ref={ref} {...other}>
            {options.map((elem: SelectOptionType, index: number) => (
              <option key={index} value={typeof elem === "string" ? elem : elem.value}>
                {typeof elem === "string" ? elem : elem.text}
              </option>
            ))}
          </select>
          <label>{label}</label>
          {error ? <div className="error-feedback">{error.message}</div> : null}
        </div>
      </React.Fragment>
    );
  }
);
