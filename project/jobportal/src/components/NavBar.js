import { useState } from "react";
import { Container, Nav, Navbar,Form, Dropdown, NavDropdown } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RECRUITER_MENU, SEEKER_MENU } from "../utils/constants";
import { reset } from "../store/reducer/userSlice";
import { setSession } from "../Utils";
const NavBar = () =>{
  const navigate=useNavigate();
  const hasRecruiter = useSelector(state => state?.user?.hasRecruiter);
  const dispatch=useDispatch();
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
            <Nav.Link>
            <NavDropdown title=<i class="bi bi-person-circle fs-3" ></i>>
                <NavDropdown.Item  onClick={()=>navigate("/Profile")} className="w-50"><i class="bi bi-person-add me-2"></i>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                  dispatch(reset());
                  setSession("");
                  navigate("/Login");
                }}><i class="bi bi-box-arrow-in-right me-2"></i>LogOut</NavDropdown.Item>
            </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;