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
                        <Link to="/home" className="me-4">Home</Link>
                        <Link to="/" className="me-4">Post a Job</Link>
                        <Link to="/" className="me-4">Applied Job</Link>
                        <Link to="/" className="me-4">Posted Job</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className=" me-3 "
                            aria-label="Search"
                        />
                    </Form>
                    <i class="bi bi-person-circle" style={{ fontSize: '27px', marginTop: 'auto', marginBottom: 'auto' }}></i>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigation;