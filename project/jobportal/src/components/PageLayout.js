import React from "react";
import { Outlet } from "react-router-dom";
// import Login from "./Login";
// import Everything from "./Everything";

const PageLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PageLayout;
