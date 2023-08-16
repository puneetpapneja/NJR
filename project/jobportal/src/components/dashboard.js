import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function Dashboard() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Jobs" id="basic-nav-dropdown">
            <NavDropdown.Item href="#posted-job">Posted a Job</NavDropdown.Item>
            <NavDropdown.Item href="#applied-job">Applied Job</NavDropdown.Item>
            <NavDropdown.Item href="#posted-job">Posted Job</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="ml-sm-10" />
         
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Dashboard;
