import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

function Menu() 
{
  return (
    <div className='Menu'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft : "300px"}}>login</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><div style={{marginLeft : "100px",display:"flex"}}>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Post A Job</Nav.Link>
           
            <Nav.Link href="#">
              Applied Job
            </Nav.Link>
            <Nav.Link href="#">
              Posted Job
            </Nav.Link>
            </div>
          </Nav>
          <Form className="d-flex"  style={{marginRight:"50px",width:"300px"}}>
            <Form.Control
            style={{border:"solid 1px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <svg style={{marginRight:"100px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Menu;