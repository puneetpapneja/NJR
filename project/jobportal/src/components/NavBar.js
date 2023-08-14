import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/callback">
                useCallback component
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ref">
                useRef component
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
//(
//   <Navbar expand="lg" className="bg-body-tertiary">
//     <Container fluid>
//       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           style={{ maxHeight: "100px" }}
//           navbarScroll
//         >
//           {/* <Nav.Link as={Link} to="/">
//             Home
//           </Nav.Link> */}
//           <Nav.Link href="#action1">Login</Nav.Link>
//           <Nav.Link href="#action2">Link</Nav.Link>
//           <NavDropdown title="Link" id="navbarScrollingDropdown">
//             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action4">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action5">
//               Something else here
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#" disabled>
//             Link
//           </Nav.Link>
//         </Nav>
//         <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-success">Search</Button>
//         </Form>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// );
