import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';

function Dashboard() {
  return (
<>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/postss"> Post a Job</Nav.Link>
            <Nav.Link as={Link} to="/AppliedJob">Applied Job</Nav.Link>
            <Nav.Link as={Link} to="/PostJob">Posted Job</Nav.Link>
            <Link to="/PostJob">hello</Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='me-4'>Search</Button>
            <i class="bi bi-person-circle"></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container1'>
      <h2>Dashboard</h2>
    </div>
      <div className='container'>
      <Card style={{ width: '18rem' ,margin:'45px', height:'197px',backgroundColor:'red'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>7</Card.Title>
        <Card.Text>
          Applied Jobs
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' ,margin:'45px', height:'197px', backgroundColor:'green'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>40</Card.Title>
        <Card.Text>
          Total Post
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' ,margin:'45px', height:'197px',backgroundColor:'purple'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>2</Card.Title>
        <Card.Text>
        Today's Post
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <Card style={{backgroundColor:'black', color:'white', margin:'40px', marginTop: '125px', textAlign:'center'}}>
      <Card.Body>TM @ 2023: Techno India NJR Institute Of Technology- All rights reserved</Card.Body>
    </Card>
      </>
  );
}

export default Dashboard;