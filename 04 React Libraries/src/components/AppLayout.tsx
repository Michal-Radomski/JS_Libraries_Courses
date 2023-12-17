import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <header>Header</header>
      <div style={{ display: "flex", gap: 16 }}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/example"}>Example</NavLink>
      </div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default AppLayout;
