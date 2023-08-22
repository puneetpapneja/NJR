import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Image, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPerson, BsBoxArrowRight } from 'react-icons/bs';

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div style={{ width: '10px' }}></div> 
      <Navbar.Brand as={Link} to="/Dashboard" className="col-lg-4">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Dashboard">Home</Nav.Link>
          <Nav.Link as={Link} to="/Jobs">Jobs</Nav.Link>
          <Nav.Link as={Link} to="/Postjob">Post a Job</Nav.Link>
          <Nav.Link as={Link} to="/AppliedJobsPage">Applied Jobs</Nav.Link>
          <Nav.Link as={Link} to="/PostedJobsPage">Posted Jobs</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="search" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link className="col-xl-5 d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <i style={{ fontSize: "40px" }} className="bi bi-person-circle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/ProfilePage">
                <BsPerson className="mr-2" /> Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/LoginPage">
                <BsBoxArrowRight className="mr-2" /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
