import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Pagelayout() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default Pagelayout;
