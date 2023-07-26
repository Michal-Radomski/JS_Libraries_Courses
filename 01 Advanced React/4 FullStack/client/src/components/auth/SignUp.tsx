import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { History } from "history";

interface Props {
  history: History;
  errorMessage: string;
  handleSubmit: any;
  signup: (arg0: any, arg1: () => void) => void;
}

class SignUp extends React.Component<Props, RootState> {
  onSubmit = (formProps: any) => {
    console.log("formProps:", formProps);
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field name="email" type="text" component="input" autoComplete="none" />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field name="password" type="password" component="input" autoComplete="none" />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button>Sign Up!</button>
        </form>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: RootState) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(connect(mapStateToProps), reduxForm({ form: "signup" }))(SignUp);
