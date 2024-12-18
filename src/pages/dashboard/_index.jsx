import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function Dashboard() {

  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to="/hello">hello</NavLink>
        <NavLink to="/world">world</NavLink>
      </nav>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}
