import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
const PageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default PageLayout;
