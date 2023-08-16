// import Button from 'react-bootstrap/Button';
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap-icons/font/bootstrap-icons.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="me-5 ms-3">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/dashboard"
              className="me-4"
              style={{ color: "black", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              to="/postjob"
              className="me-4"
              style={{ color: "black", textDecoration: "none" }}
            >
              Post a Job
            </Link>
            <Link
              to="/appliedjob"
              className="me-4"
              style={{ color: "black", textDecoration: "none" }}
            >
              Applied Job
            </Link>
            <Link
              to="/"
              className="me-4"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              Posted Job
            </Link>
          </Nav>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="🔍 Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">🔍</Button>
              <button className="btn btn-primary">
                <i className="fas fa-user"></i>
              </button>
            </Form>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
