import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Image, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RECURITER_MENU, SEEKER_MENU } from '../utils/constants';
// import { BsPerson, BsBoxArrowRight } from 'react-icons/bs';

const NavBarComponent = () => {
  const hasRecuriter = useSelector(state => state?.user?.hasRecuriter);
  const renderNavItems = ()=>{
    const navItems = hasRecuriter ? RECURITER_MENU : SEEKER_MENU;
    return navItems?.map(item =>  <Nav.Link as={Link} to={item.path}>{item.name}</Nav.Link>)
  }
  return (
    <Navbar bg="light" expand="lg">
      <div style={{ width: '10px' }}></div> 
      <Navbar.Brand as={Link} to="/Dashboard" className="col-lg-4">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          {renderNavItems()}
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
                {/* <BsPerson className="mr-2" /> Profile */}
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/LoginPage">
                {/* <BsBoxArrowRight className="mr-2" /> Logout */}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
