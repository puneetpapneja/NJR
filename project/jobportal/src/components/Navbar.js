import { useState } from "react";
import { Container, Nav, Navbar,Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Menu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { RECRUITER_MENU, SEEKER_MENU } from "../utils/constants";

const NavBar = () =>{
  const [profile,setProfile]= useState(false);
  const hasRecruiter = useSelector(state => state?.user?.hasRecruiter);
  const renderNavItems = ()=>{
    const navItems = hasRecruiter ? RECRUITER_MENU : SEEKER_MENU;
    return navItems?.map(item =>  <Nav.Link as={Link} to={item.path}>{item.name}</Nav.Link>)
  }
    return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="ms-3">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
          <Nav className="ms-3">
           {renderNavItems()}
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
            <Nav>
            <Nav.Link onClick={(event)=>setProfile(!profile)}  ><i class="bi bi-person-circle fs-3"></i>{profile && <Menu/>}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;