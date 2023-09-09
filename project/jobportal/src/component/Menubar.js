import "../App.css";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import  Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RECRUITER_MENU, SEEKER_MENU } from '../utils/constants';
import { Dropdown } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';


function  Menubar () {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const Navigate=useNavigate();

  
  const hasRecruiter=useSelector((state)=>state?.user?.hasRecruiter);
     console.log(hasRecruiter);
 const randernav=()=>{
  const navItems=hasRecruiter? RECRUITER_MENU:SEEKER_MENU;
  return navItems?.map(item=> <Nav.Link as={Link} to={item.path}>{item.name}</Nav.Link>)
 }
 
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid  className="mx-3">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
           { randernav()}
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
       

          <Dropdown >
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              <i style={{ fontSize: "20px" }} className="bi bi-person-circle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu   className="Dropdowm_menu">
              <Dropdown.Item   as={Link} to="/profile" >
                Profile 
              </Dropdown.Item>
              <Dropdown.Item  as={Link} to="/">
                 Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        
        
        


  

    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Menubar;