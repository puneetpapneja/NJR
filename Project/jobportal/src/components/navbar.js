import Button from 'react-bootstrap/Button';
import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col,Row } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';
import './Login.js';
function navbar() {
  return (
    <div className="container">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="postjob">Post A Job</Nav.Link>
            <Nav.Link href="#" >
              Applied job
            </Nav.Link>
            <Nav.Link href="#" >
              Posted job
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
        </Navbar.Collapse>
      </Container>
      <img width="50" height="50" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1" />
    </Navbar>

    </div>
  );
}

export default navbar;