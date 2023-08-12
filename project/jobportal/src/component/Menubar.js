import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../App.css";
import {Link} from 'react-router-dom';

function Manubar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbarcontent" >
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/post_job">Post a job</Nav.Link>
            <Nav.Link as={Link} to="/applied_job">Applied job</Nav.Link>
            <Nav.Link as={Link} to="/posted_job">Posted job</Nav.Link>
            <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              id="search"
              aria-label="Search"
            />
          </Form>
                    </Nav>
        

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Manubar;