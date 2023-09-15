// import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useSelector } from "react-redux";
import { recruiterMenu, seekerMenu } from "../utils/constants";

function Navigation() {
    const navigate = useNavigate();

    const hasRecruiter = useSelector(state => state?.user?.hasRecruiter)
    const renderNavItems = () => {
        const navItems = hasRecruiter ? recruiterMenu : seekerMenu;
        return navItems?.map(item => <Nav.Link as={Link} to={item.path}>{item.name}</Nav.Link>)
    }

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };
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
                        {/* <Link to="/dashboard" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Home</Link> */}
                        <Nav.Link as={Link} to="/dashboard" className="me-3">Home</Nav.Link>
                        {renderNavItems()}
                        {/* <Link to="/jobs" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Jobs</Link>
                        <Link to="/postjob" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Post a Job</Link>
                        <Link to="/appliedjob" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Applied Job</Link>
                        <Link to="/postedjob" className="me-4" style={{ color: 'black', textDecoration: 'none' }}>Posted Job</Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className=" me-3 "
                            aria-label="Search"

                        />

                    </Form>
                    <Dropdown>
                        <Dropdown.Toggle variant='primary' id='dropdown-icon' style={{ border: 'none', backgroundColor: 'transparent', color: 'black' }}>
                            <i className='bi bi-person-circle' style={{ fontSize: '27px', color: 'black' }}></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align='end'>
                            <Dropdown.Item>
                                <Link to='/profile' style={{ color: 'black', textDecoration: 'none' }}>
                                    <i className='bi bi-person-plus'></i> Profile
                                </Link>
                            </Dropdown.Item>
                            {/* <Dropdown.Divider /> */}
                            <Dropdown.Item onClick={handleLogout}>
                                <i className='bi bi-box-arrow-right'></i> Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigation;