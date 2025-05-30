import React, { type ForwardedRef } from "react";
import type { FieldError } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError | undefined;
};

export const TextField = React.forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>): React.JSX.Element => {
    const { type = "text", className = "", label, error, ...other } = props;

    return (
      <React.Fragment>
        <div className="form-floating">
          <input type={type} className={`form-control ${className}`} placeholder={label} ref={ref} {...other} />
          <label>{label}</label>
          {error ? <div className="error-feedback">{error.message}</div> : null}
        </div>
      </React.Fragment>
    );
  }
);
