import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="#" className="navbar-brand">
          <img
            src="./src/app-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="#" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/PostJob" className="nav-link">Post a Job</Nav.Link>
            <Nav.Link as={Link} to="/AppliedJobs" className="nav-link">Applied Jobs</Nav.Link>
            <Nav.Link as={Link} to="#posted-jobs" className="nav-link">Posted Jobs</Nav.Link>
          </Nav>
          <Form inline>
            <div className="d-flex">
              <Nav>
                <Nav.Link as={Link} to="#profile" className="nav-link">
                  <i className="bi bi-person-circle" style={{ fontSize: '24px' }}></i>
                </Nav.Link>
              </Nav>
              <FormControl type="text" placeholder="Search" className="ml-2 form-control" />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
