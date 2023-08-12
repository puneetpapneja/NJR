import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Todolist">Todolist</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Registration">Register</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Memo1">
                Memo
              </NavDropdown.Item>    
              <NavDropdown.Item as={Link} to="/Dashboard">
                Dashboard
              </NavDropdown.Item>             
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;