import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <h2>Formik Example</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {} as { [key: string]: string };

          if (!values.name) {
            errors.name = "Name is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }): void => {
          console.log("values:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="small" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="small" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="small" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default FormikComponent;
