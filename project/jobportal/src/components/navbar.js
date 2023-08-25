<<<<<<< HEAD
// import Button from 'react-bootstrap/Button';
import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" className="me-5 ms-3">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/dashboard" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
                        <Link to="/Jobs" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Jobs</Link>
                        <Link to="/postjob" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Post a Job</Link>
                        <Link to="/appliedjob" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Applied Job</Link>
                        <Link to="/postedjob" className="me-4" style={{ color: 'black', textDecoration: 'none' }}> Posted Job</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className=" me-3 "
                            aria-label="Search"
                        />
                    </Form>
                    <Link to='/profile'>
                        <i className='bi bi-person-circle' style={{ fontSize: '27px', marginTop: 'auto', marginBottom: 'auto' , color:'black'}}></i>
                    </Link>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigation;
=======
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
>>>>>>> d8595ad42d20a4349d702758e3b0ae85f4b55dab
