import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import "../index.css";
function Navbar1() {
  return (
    <div>
      <Navbar expand="lg" className="bg">
        <Container fluid className='navitems'>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            <Nav.Link as={Link} to ={"/dashboard"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/postjob"}>Postjob</Nav.Link>
              <Nav.Link as={Link} to={"/appliedjob"}>Applied Jobs</Nav.Link>
              <Nav.Link href="#posted-jobs">Posted Jobs</Nav.Link>
              
             
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for Jobs"
                className="me-2"
                aria-label="Search"
              />
             
             
            </Form>
            <i class="bi bi-person-circle"></i>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;