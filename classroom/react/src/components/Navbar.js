import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              about us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact us
            </Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/usememo">
                useMemo Example
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/item">
                memo component
<<<<<<< HEAD
              </NavDropdown.Item>
            </NavDropdown>
=======
              </NavDropdown.Item>    
              <NavDropdown.Item as={Link} to="/callback">
                Callback component
              </NavDropdown.Item>           
            </NavDropdown>            
>>>>>>> 7254a5ee01e58dedd2fc824f51aa4f89b5e7c060
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
