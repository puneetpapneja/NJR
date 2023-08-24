import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { RECRUITER_MENU, SEEKER_MENU } from '../utils/constants';
import { useSelector } from 'react-redux';

const CustomNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const hasRecuriter = useSelector(state => state?.user?.hasRecuriter);

  const renderNavItems = () => {
    const navItems = hasRecuriter ? RECRUITER_MENU : SEEKER_MENU;
    return navItems?.map(item => (
      <Nav.Link as={Link} to={item.path} key={item.path}> {item.name} </Nav.Link>
    ));
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
          <Nav className="mr-auto" >
            {renderNavItems()} 
          </Nav>

          <Nav className="ml-auto d-flex align-items-center" >
            <Form inline className=" d-flex">
              <FormControl type="search" placeholder="Search" className="mr-sm-1"/>
              <Nav.Link onClick={handleProfileClick} className="nav-link">
                <FaUserCircle style={{ fontSize: '24px' }} />
              </Nav.Link>
            </Form>
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
