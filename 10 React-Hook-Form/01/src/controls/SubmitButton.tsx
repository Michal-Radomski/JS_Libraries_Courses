import React from "react";

import { getRenderCount } from "../utils/getRenderCount";
import { useFormState, type Control } from "react-hook-form";

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  control?: Control<any, any>;
  // isSubmitting?: boolean;
};

const RenderCount: () => React.JSX.Element = getRenderCount();

export default function SubmitButton(props: SubmitButtonProps): React.JSX.Element {
  // console.log("props.control:", props.control);
  const { className = "btn-light", value, control = undefined, ...other } = props;

  return control ? (
    <WithControl {...{ className, value, control, ...other }} />
  ) : (
    <WithoutControl {...{ className, value, ...other }} />
  );
}

function WithControl({ className, value, control, ...other }: SubmitButtonProps): React.JSX.Element {
  // console.log({ value });
  const { isSubmitting } = useFormState({ control });
  return (
    <React.Fragment>
      <RenderCount />

      <button type="submit" className={`btn ${className} w-100`} disabled={isSubmitting} {...other}>
        {isSubmitting === false ? (
          <React.Fragment>{value}</React.Fragment>
        ) : (
          <React.Fragment>
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status" className="ms-1">
              {value}
            </span>
          </React.Fragment>
        )}
      </button>
    </React.Fragment>
  );
}

function WithoutControl({ className, value, ...other }: React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  // console.log({ value });
  return (
    <React.Fragment>
      <RenderCount />

      <button type="submit" className={`btn ${className} w-100`} {...other}>
        {value}
      </button>
    </React.Fragment>
  );
}
