import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <header>Header</header>
      <div style={{ display: "flex", gap: 16 }}>
        <NavLink to={"/"} className={({ isActive }) => `${isActive ? "active" : ""} link`}>
          Home
        </NavLink>
        <NavLink to={"/example"} className={({ isActive }) => `${isActive ? "active" : ""} link`}>
          Example
        </NavLink>
        <NavLink
          to={"/todos"}
          className={({ isActive }) => `${isActive ? "active" : ""} link`}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "green",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Todos
        </NavLink>
        <NavLink
          to={"/todos-paginated"}
          className={({ isActive }) => `${isActive ? "active" : ""} link`}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "green",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Todos-Paginated
        </NavLink>
        <NavLink
          to={"/todos-infinite"}
          className={({ isActive }) => `${isActive ? "active" : ""} link`}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "green",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Todos-Infinite
        </NavLink>
      </div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default AppLayout;
