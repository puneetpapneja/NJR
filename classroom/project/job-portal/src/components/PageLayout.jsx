import React from "react";
import { Outlet } from "react-router-dom";
// import Login from "./Login";
// import Everything from "./Everything";

const PageLayout = () => {
  return (
    <React.Fragment>
      {/* <Everything> */}
      <Outlet />
      {/* </Everything> */}
    </React.Fragment>
  );
};

export default PageLayout;
