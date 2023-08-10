import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">React Practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">about us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;