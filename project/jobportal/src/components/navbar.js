import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


function Navbarbody() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
          >
            <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
            <Nav.Link as={Link} to="/joblist">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/postjob">Post a Job</Nav.Link>
            <Nav.Link as={Link} to="/appliedjob">Applied Job</Nav.Link>
            <Nav.Link as={Link} to="/postedjob">Posted Job</Nav.Link>
            
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
         
          <Dropdown className='float-end'>
      <Dropdown.Toggle variant="white"  size="sm"  >
      <div className="sm-0">
          <i class="bi bi-person-circle"></i>
          
          </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarbody;