// import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap-icons/font/bootstrap-icons.css";

function Navigation() {
  const [setLoggedOut] = useState(false); // State to track login status
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear any user session, update state, etc.
    // setLoggedOut(false);
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="me-5 ms-3">
            JobPortal
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
                to="/jobs"
                className="me-4"
                style={{ color: "black", textDecoration: "none" }}
              >
                Jobs
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
                to="/postedjob"
                className="me-4"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                Posted Job
              </Link>
              {/* <Link
                to="/developers"
                className="me-4"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                Developers
              </Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="🔍 Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">🔍</Button> */}
              {/* <Link to='/profile'>
              <button className="btn btn-primary">
                <i className="fas fa-user"></i>
              </button>
              </Link> */}
            </Form>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <i className="fas fa-user"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="/profile">
                  <i class="bi bi-person-add"></i> Profile
                </Dropdown.Item>

                <Dropdown.Item onClick={handleLogout}>
                  <i class="bi bi-box-arrow-right"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
