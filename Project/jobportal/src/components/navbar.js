import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };



  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/Dashboard" className="navbar-brand">

          <img
            src="app-logo.png"
            alt="Profile"
            style={{ borderRadius: '50%', width: '40px', height: '40px', margin: '10px', cursor: 'pointer' }}
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Dashboard" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/Jobs" className="nav-link">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/PostJob" className="nav-link">Post a Job</Nav.Link>
            <Nav.Link as={Link} to="/JobsApplied" className="nav-link">Applied Jobs</Nav.Link>
            <Nav.Link as={Link} to="/PostedJobs" className="nav-link">Posted Jobs</Nav.Link>
          </Nav>

          <Nav className="ml-auto d-flex align-items-center">
            <Form inline className="d-flex ml-3">
              <FormControl type="search" placeholder="Search" className="mr-sm-1" />
            </Form>
            <Nav.Link onClick={handleProfileClick} className="nav-link">
              <FaUserCircle style={{ fontSize: '24px' }} />
            </Nav.Link>
            <Dropdown show={dropdownVisible} alignRight>
              <Dropdown.Toggle as={Nav.Link} id="profile-dropdown" />
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Profile">
                  <FaUserCircle style={{ marginRight: '8px' }} />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login" >
                  <FaSignOutAlt style={{ marginRight: '8px' }} />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  );
};

export default CustomNavbar;
