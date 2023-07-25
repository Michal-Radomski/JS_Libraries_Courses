import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <fieldset>
            <label>Email</label>
          </fieldset>
          <fieldset>
            <label>Password</label>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
