import React from "react";
import { Navbar,Nav,Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { recruiterMenu, seekerMenu } from "../utils/constants";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
export default function Navigationbar(){
    const hasRecruiter = useSelector(state=>state?.user?.hasRecruiter);
    const [showOptions, setShowOptions] = useState(false);

  const handleProfileLogoClick = () => {
    setShowOptions(!showOptions);
  };
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
            <Nav.Link as={Col} lg="5" style={{marginLeft:"270px"}}><Form.Control type="text" placeholder="Search" /></Nav.Link>
    
            </Navbar.Collapse>
         <Dropdown show={showOptions} onMouseEnter={handleProfileLogoClick} onMouseLeave={() => setShowOptions(false)} style={{marginRight:"100px"}}>
            <Dropdown.Toggle variant="light">
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
              <Dropdown.Item >Logout&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
        </Container>
    );
}