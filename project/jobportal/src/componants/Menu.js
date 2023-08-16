import React from "react";
import { Navbar, NavDropdown, Container, Nav, Form } from "react-bootstrap";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" id="nav">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/postajob">
              Post a Job
            </Nav.Link>
            <Nav.Link>Applied Job</Nav.Link>
            <Nav.Link>posted Job</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex  searchbtn">
          <Form.Control type="search" placeholder="Search" className="mb-3" />
        </Form>
        <i class="bi bi-person-circle"></i>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default Menu;
