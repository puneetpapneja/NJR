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
            <Nav.Link as={Link} to="/appliedjob">
              Applied Job
            </Nav.Link>
            <Nav.Link>posted Job</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex  searchbtn">
          <Form.Control type="search" placeholder="Search" className="mb-3" />
          <svg
            className="profile"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </Form>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default Menu;
