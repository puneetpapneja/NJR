// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link,Outlet,} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Image, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import React, { useState } from 'react';

function NavBar() {
  
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  const popover = (
    <Popover id="profile-dropdown">
      <ListGroup variant="flush">
        <ListGroup.Item as={Link} to="/Profile">Profile</ListGroup.Item>
        <ListGroup.Item href="#logout">Logout</ListGroup.Item>
      </ListGroup>
    </Popover>
  );
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/Dashboard">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Jobs">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/Postajob">Post A Job</Nav.Link>
            <Nav.Link as={Link} to="/AppliedJob">Applied Job</Nav.Link>
            <Nav.Link as={Link} to="/PostedJob">Posted Job</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <i style={{ fontSize: "25px" }} class="bi bi-search"></i>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
           <OverlayTrigger
            trigger="click"
            placement="bottom"
            show={showDropdown}
            onToggle={toggleDropdown}
            overlay={popover}
            >
        <i style={{fontSize:'25px'}} class="bi bi-person-circle"></i>
    </OverlayTrigger>
            
          
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavBar;
