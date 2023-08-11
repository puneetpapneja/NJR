import React from "react";
import "./dashboard.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import DashboardBody from "./DashboardBody";
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Dashboard() {
  return (
    <>
      <Navigation />
      <DashboardBody />
      <Footer />
    </>
  );
}
