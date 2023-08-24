import React from "react";
import { Navbar,Nav,Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { recruiterMenu, seekerMenu } from "../utils/constants";
export default function Navigationbar(){
    const hasRecruiter = useSelector(state=>state?.user?.hasRecruiter);
    const renderNavItems=()=>{
        const navItems =  hasRecruiter?recruiterMenu:seekerMenu;
        return navItems.map((item)=>{
            return(
                <Nav.Link as={Link} to={item.path} className="me-5">{item.name}</Nav.Link>
            );
        })
    }
    return(
        <Container fluid className="px-0">
        <Navbar expand="md" className="bg-body-tertiary px-0">
            <Navbar.Brand as={Link} to="/dashboard" className="me-5 ms-3">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/dashboard" className="me-5">Home</Nav.Link>
            {renderNavItems()}            
            <Nav.Link as={Col} lg="5" className="me-5"><Form.Control type="text" placeholder="Search" /></Nav.Link>
            </Navbar.Collapse>
            <i class="bi bi-person-circle px-4 fs-1"></i>
        </Navbar>
        </Container>
    );
}