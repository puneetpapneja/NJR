import React from 'react';
import { Nav, Navbar, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBarComponent.css'; // Import your custom CSS for additional styling

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/Dashboard">
          <span className="brand-name">IDEE</span><span className="brand-wave">BOX</span>
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
            <Nav.Link as={Link} to="# " className='font'>
              Applied Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="#" className='font'>
              Posted Jobs
            </Nav.Link>
          </Nav>
          <Form inline className="my-2 my-lg-0">
            <div className="input-group">
              <FormControl type="search" placeholder="Search" className="mr-sm-2" />
              <div className="input-group-append">
                <button type="button" className="btn btn-outline-secondary search-button">Secondary</button>
              </div>
            </div>
          </Form>
          <Nav.Link as={Link} to="/LoginPage" className="user-icon">
            <i className="bi bi-person-circle" style={{ fontSize: '30px' }}></i>
            {/* <ion-icon name="person-circle-outline" style={{ fontSize: '30px' }}></ion-icon> */}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
