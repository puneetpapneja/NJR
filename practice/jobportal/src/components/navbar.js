import React from 'react';
import { Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import { NavLink,Link} from 'react-router-dom';

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div style={{ width: '10px' }}></div>
      <Navbar.Brand href="/Dashboard" className="col-lg-4">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Dashboard">Home</Nav.Link>
          <Nav.Link as={Link} to="/Jobs">Jobs</Nav.Link>
          <Nav.Link as={Link} to="/Postjob">Post a Job</Nav.Link>
          <Nav.Link as={Link} to="#">Applied Jobs</Nav.Link>
          <Nav.Link as={Link} to="#">Posted Jobs</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="search" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link href="#" className="col-xl-5 d-flex justify-content-end">
          <i style={{ fontSize: "40px" }} className="bi bi-person-circle"></i>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
