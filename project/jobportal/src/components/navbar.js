import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarbody() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
            <Nav.Link as={Link} to="/postjob">Post a Job</Nav.Link>
            <Nav.Link as={Link} to="/appliedjob">Applied Job</Nav.Link>
            <Nav.Link as={Link} to="/postesjob">Postes Job</Nav.Link>
            
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div className="mb-2">
          <i class="bi bi-person-circle"></i>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarbody;