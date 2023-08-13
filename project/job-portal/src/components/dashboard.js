import React from "react";
import "./dashboard.css";
import Navigation from "./navbar";
import Footer from "./footer";
import Content from "./content";
// import DashboardBody from "./DashboardBody";
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Dashboard() {
  return (
    <>
      <Navigation />
      <Content />
      <Footer />
    </>
  );
}