import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
  return (
   <container>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Post A Job</Nav.Link>
            <Nav.Link href="#action1">Applied job</Nav.Link>
            <Nav.Link href="#action2">Posted job</Nav.Link>

            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="ms-25rem"
              aria-label="Search"
            />
           
          </Form>
         

         
       </Nav>
      </Container>
    </Navbar>
   </container>
  

  );
}

export default Dashboard