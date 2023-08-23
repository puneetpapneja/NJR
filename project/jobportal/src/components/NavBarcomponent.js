import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,Outlet } from 'react-router-dom';
import Footer from './Footer';
import Figure from 'react-bootstrap/Figure';
import Dropdown from 'react-bootstrap/Dropdown';


function NavBarcomponent() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link as={Link} to='/appliedjob'>AppliedJob</Nav.Link>
            <Nav.Link as={Link} to='/Dashboard'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to='/PostJob'>
              post a job
            </Nav.Link>
            <Nav.Link as={Link} to='/postedjob'>
              posted Job
            </Nav.Link>
          </Nav>
          <div style={{marginRight: "150px"}}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <div className='dropdown'>
           <i style={{fontSize : "30px"}} class="bi bi-person-circle"></i>
           <div className="dropdown-content">
              <Link as={Link} to="/login">Login</Link>
              <Link  as={Link} to="/Profile">Profile</Link>
              </div>
           </div>
          </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default NavBarcomponent;