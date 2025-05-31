import React from "react";

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isSubmitting?: boolean;
};

export default function SubmitButton(props: SubmitButtonProps): React.JSX.Element {
  const { isSubmitting = undefined, className = "btn-light", value, ...other } = props;

  return (
    <button
      type="submit"
      className={`btn ${className} w-100`}
      disabled={isSubmitting == undefined ? false : isSubmitting}
      {...other}
    >
      {isSubmitting === undefined || isSubmitting === false ? (
        value
      ) : (
        <React.Fragment>
          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status" className="ms-1">
            {value}
          </span>
        </React.Fragment>
      )}
    </button>
  );
}
