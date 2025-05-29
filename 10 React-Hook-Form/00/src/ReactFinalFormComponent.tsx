import React from "react";
import { Form, Field } from "react-final-form";

const ReactFinalFormComponent = (): React.JSX.Element => {
  const onSubmit = (values: { [key: string]: string }): void => {
    console.log("values:", values);
  };

  return (
    <React.Fragment>
      <div>
        <h2>React Final Form Example</h2>
        <Form
          onSubmit={onSubmit}
          initialValues={{ firstName: "" }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field name="firstName" component="input" type="text" placeholder="First Name" />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    </React.Fragment>
  );
};

export default ReactFinalFormComponent;
