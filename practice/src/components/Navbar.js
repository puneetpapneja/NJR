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
            <Nav.Link as={Link} to="/">Item</Nav.Link>
            <Nav.Link as={Link} to="/Cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/todolist">Todolist</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/usememo">
                useMemo Example
              </NavDropdown.Item>    
              <NavDropdown.Item as={Link} to="/item">
                memo component
              </NavDropdown.Item>             
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;