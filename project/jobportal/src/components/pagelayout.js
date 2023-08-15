import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Pagelayout() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Outlet />
      </React.Fragment>
    </div>
  );
}

export default Pagelayout;
