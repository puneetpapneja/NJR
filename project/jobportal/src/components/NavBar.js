import { Container, Nav, Navbar,Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="ms-3">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/AppliedJob" className="me-3">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/Postjob">Post A Job</Nav.Link>
            <Nav.Link href="" className="me-3">Applied job</Nav.Link>
            <Nav.Link as={Link} to="/PostedJob" className="me-3">Posted job</Nav.Link>
            <Nav.Link href="" className="me-3"><Form ><Form.Control type="text" placeholder="🔍search" /></Form></Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
            <Nav>
            <Nav.Link href=""><i class="bi bi-person-circle fs-3"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;