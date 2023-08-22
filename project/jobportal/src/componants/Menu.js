import React from "react";
import { Navbar, NavDropdown, Container, Nav, Form } from "react-bootstrap";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const Navigate = useNavigate();
  function handleclick() {
    Navigate("/profile");
  }
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
          <i
            class="bi bi-person-circle"
            ref={target}
            onClick={() => setShow(!show)}
          ></i>

          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                <Nav.Link as={Link} to="/profile">
                  profile
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  logout
                </Nav.Link>
              </Tooltip>
            )}
          </Overlay>
        </Form>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default Menu;
