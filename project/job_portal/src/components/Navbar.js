import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarbody() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/DashboardPage" style={{ color: 'black' }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/postjob" style={{ color: 'black' }}>
            Post a Job
          </Nav.Link>
          <Nav.Link as={Link} to="/appliedjob" style={{ color: 'black' }}>
            Applied Job
          </Nav.Link>
          <Nav.Link as={Link} to="/postedjob" style={{ color: 'black' }}>
            Posted Job
          </Nav.Link>
        </Nav>
        <Form className="d-flex ms-auto">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-lg-4"
            aria-label="Search"
          />
        </Form>
        <div className="ml-3" style={{ fontSize: '1.5rem' }}>
          <i className="bi bi-person-circle"></i>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbarbody;
