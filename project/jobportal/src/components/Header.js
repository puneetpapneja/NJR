import React from "react";
import NavScrollExample from "./NavBar";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavScrollExample />
      <Outlet />
    </div>
  );
}

export default Header;
