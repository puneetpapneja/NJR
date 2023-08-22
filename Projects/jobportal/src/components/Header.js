import React from "react";
import { Navbar,Nav,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
export default function Navigationbar(){
    return(
        <Container fluid className="px-0">
        <Navbar expand="md" className="bg-body-tertiary px-0">
            <Navbar.Brand as={Link} to="/" className="me-5 ms-3">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/" className="me-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/applyjob" className="me-5">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/postjob" className="me-5">Post A Job</Nav.Link>
            <Nav.Link as={Link} to="/appliedjob" className="me-5">Applied Job</Nav.Link>
            <Nav.Link as={Link} to="/postedjob" className="me-5">Posted Job</Nav.Link>
            <Nav.Link className="me-5"><Form.Control type="text" placeholder="Search" /></Nav.Link>
            </Navbar.Collapse>
            <i class="bi bi-person-circle px-4 fs-1"></i>
        </Navbar>
        </Container>
    );
}