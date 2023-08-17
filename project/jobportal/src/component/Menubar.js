import "../App.css";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function  Menubar () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid  className="m-0">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Dashboard">Home</Nav.Link>
            <Nav.Link  as={Link} to="/postajob">Post a Job</Nav.Link>
            <Nav.Link  as={Link} to="/appliedjob">Applied Job</Nav.Link>
            <Nav.Link  as={Link} to="/postedjob">Posted Job</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <i class="bi bi-person-circle"></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Menubar;