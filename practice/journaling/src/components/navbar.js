import React from "react";
import { Container, Nav, Navbar, Form, NavDropdown,Button,Ro } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';


function Dashbord () {
    return(
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home" className="me-4 ms-5">Logo</Navbar.Brand>
                <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 pe-5">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Post A Job</Nav.Link>
                  <Nav.Link href="#action2">Applied A Job</Nav.Link>
                  <Nav.Link href="#action2">Posted A Job</Nav.Link>
                  
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Nav>
              </Offcanvas.Body>
            </Container>
        </Navbar>
        </header>
        
        
        
    )
}
export default Dashbord;