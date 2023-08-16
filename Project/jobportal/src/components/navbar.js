import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="#home">
          <img
            src="" 
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="#post-job">Post a Job</Nav.Link>
            <Nav.Link as={Link} to="#applied-job">Applied Jobs</Nav.Link>
            <Nav.Link as={Link} to="#posted-jobs">Posted Jobs</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="#profile">
              <i className="bi bi-person-circle" style={{ fontSize: '24px' }}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
