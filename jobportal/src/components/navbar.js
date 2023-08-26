import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import './dashboard.css';

const NavBarComponent = () => {
  const [setLoggedOut] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear any user session, update state, etc.
    setLoggedOut(false);
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/Dashboard">
            <span className="brand-name">Gene</span><span className="brand-wave">sis</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-between">
            <Nav>
              <Nav.Link as={Link} to="/Jobs" className='font'>
                Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/Postjob" className='font'>
                Post a Job
              </Nav.Link>
              <Nav.Link as={Link} to="/appliedjob" className='font'>
                Applied Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/postedjob" className='font'>
                Posted Jobs
              </Nav.Link>
            </Nav>
            <Form inline className="my-2 my-lg-0">
              <div className="input-group">
                <FormControl type="search" placeholder="Search" className="mr-sm-2" />
                <div className="input-group-append">
                  <button type="button" className="btn btn-outline-secondary search-button">Search</button>
                </div>
              </div>
            </Form>
            <Nav.Link as={Link} to="/LoginPage" className="user-icon">
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic" className="custom-toggle">
                <ion-icon name="person-circle-outline" style={{ fontSize: '5vh' }}></ion-icon>
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
};

export default NavBarComponent;