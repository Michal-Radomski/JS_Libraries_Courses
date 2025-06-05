import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

const ComponentMDB = (): JSX.Element => {
  return (
    <React.Fragment>
      <MDBContainer className="p-5">
        <h1>Welcome to Material Design Bootstrap React</h1>
        <MDBBtn color="primary">Click Me</MDBBtn>
      </MDBContainer>
    </React.Fragment>
  );
};

export default ComponentMDB;
