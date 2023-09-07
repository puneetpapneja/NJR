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
        <Navbar.Brand href="#home" className="ms-3">Job Waala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
          <Nav className="ms-3">
           {renderNavItems()}
          </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
               <Form.Control
                 type="search"
                 placeholder="Search"
                 className="me-2"
                 aria-label="Search"
               />
             </Form>
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

// import React from "react";
// import { Navbar,Nav,Form, Col, Dropdown, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { RECRUITER_MENU, SEEKER_MENU } from "../utils/constants";
// import { setSession} from "../Utils"
// import { reset } from "../store/reducer/userSlice";
// export default function Navigationbar(){
//     const hasRecruiter = useSelector(state=>state?.user?.hasRecruiter);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const handleclick  =() =>{
//         setSession("");
//         dispatch(reset())
//         navigate("/Login");
//     }
//     const renderNavItems=()=>{
//         const navItems =  hasRecruiter?RECRUITER_MENU:SEEKER_MENU;
//         return navItems.map((item)=>{
//             return(
//                 <Nav.Link as={Link} to={item.path} className="me-5">{item.name}</Nav.Link>
//             );
//         })
//     }
//     return(
//         <Container fluid className="px-0">
//         <Navbar expand="md" className="bg-body-tertiary px-0">
//             <Navbar.Brand as={Link} to="/" className="me-5 ms-3">LOGO</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//             {/* <Nav.Link as={Link} to="/" className="me-5">Home</Nav.Link> */}
//             {renderNavItems()}            
//             <Nav.Link as={Col} lg="5" className="me-5"><Form.Control disabled type="text" placeholder="Search" /></Nav.Link>
//             </Navbar.Collapse>
//             <Dropdown>
//                 <Dropdown.Toggle id="dropdown-basic" className="rounded-circle bg-body-tertiary border-0">
//                         <i class="bi bi-person-circle px-4 fs-1 text-dark"></i>
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <Dropdown.Item as={Link} to="/Profile"><i class="bi bi-person-fill-add fs-5"></i> Profile</Dropdown.Item>
//                     <Dropdown.Item as={Button} onClick={handleclick}><i class="bi bi-box-arrow-right"></i> Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
            
//         </Navbar>
//         </Container>
//     );
// }