import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";

function Footer(){
    return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
    <Container fluid>
      <p className="m-0">
      TM © 2023 Techno India NJR Institute Of Technology-All Rights Reserved 
      </p>
    </Container>
    <Outlet />
  </footer>
    );
}
export default Footer;