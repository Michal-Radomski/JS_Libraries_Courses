import React from "react";

const RequireAuth = (ChildComponent: any) => {
  console.log("ChildComponent:", ChildComponent, typeof ChildComponent);

  class ComposedComponent extends React.Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposedComponent;
};

export default RequireAuth;
