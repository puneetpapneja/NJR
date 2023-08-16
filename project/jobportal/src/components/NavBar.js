import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Login from "./Login";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link as={Link} to="/">
                Home
              </Nav.Link> */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/log">
              Post A Job
            </Nav.Link>
            <Nav.Link as={Link} to="/dash">
              dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/action2">
              Applied Job
            </Nav.Link>
            <Nav.Link as={Link} to="/action2">
              Posted Job
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    //   <Navbar expand="lg" className="bg-body-tertiary">
    //     <Container fluid>
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link as={Link} to="/">
    //             Home
    //           </Nav.Link>
    //           <Nav.Link as={Link} to="/log">
    //             Login
    //           </Nav.Link>
    //           <Nav.Link as={Link} to="/reg">
    //             Register
    //           </Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
  );
}

export default NavScrollExample;
